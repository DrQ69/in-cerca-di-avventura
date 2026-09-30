// Browser-side, read-only, single-manifest loader for a future versioned release.
// NOT yet wired to /beta/ pages. Do not activate until all consumers migrate together.
const releaseId=/^[a-z0-9][a-z0-9._-]{2,79}$/;
const releasePath=/^data\/releases\/[a-z0-9][a-z0-9._-]*\/(players|events|league-standings)\.json$/;
export function validatePublicManifest(m){
  if(!m||typeof m!=='object'||!releaseId.test(m.release_id||''))return false;
  if(!m.paths||!m.sha256||typeof m.paths!=='object'||typeof m.sha256!=='object')return false;
  const names=['players','events','standings'];
  const ps=names.map(k=>m.paths[k]);
  if(new Set(ps).size!==3)return false;
  return names.every(k=>{
    const p=m.paths[k];
    const suffix=k==='standings'?'league-standings.json':k+'.json';
    return typeof p==='string'&&releasePath.test(p)&&p==='data/releases/'+m.release_id+'/'+suffix
       &&/^[a-f0-9]{64}$/.test(m.sha256[p]||'');
  });
}
export async function readPublicRelease(manifestUrl,{fetcher=fetch,hasher}={}){
  if(typeof manifestUrl!=='string'||!manifestUrl.trim())throw new Error('MANIFEST_URL_REQUIRED');
  const read=async(url,opts)=>{
    const response=await fetcher(url,opts);
    if(!response?.ok)throw new Error(response?.status===404?'RELEASE_POINTER_NOT_FOUND':'RELEASE_FETCH_FAILED');
    return response.text();
  };
  // One pointer read per operation, never one manifest read per dataset.
  const mUrl=new URL(manifestUrl,import.meta.url);
  const manifest=JSON.parse(await read(mUrl.toString(),{cache:'no-store'}));
  if(!validatePublicManifest(manifest))throw new Error('INVALID_RELEASE_MANIFEST');
  const hashText=hasher||(async text=>{
    if(!globalThis.crypto?.subtle)throw new Error('CRYPTO_SUBTLE_REQUIRED');
    const digest=await globalThis.crypto.subtle.digest('SHA-256',new TextEncoder().encode(text));
    return [...new Uint8Array(digest)].map(x=>x.toString(16).padStart(2,'0')).join('');
  });
  const paths=['players','events','standings'].map(k=>manifest.paths[k]);
  const texts=await Promise.all(paths.map(p=>read(new URL('../'+p,mUrl).toString(),{cache:'no-store'})));
  for(let i=0;i<paths.length;i++){
    if(await hashText(texts[i])!==manifest.sha256[paths[i]])throw new Error('RELEASE_HASH_MISMATCH');
  }
  const [players,events,standings]=texts.map(x=>JSON.parse(x));
  if(!Array.isArray(players?.players)||!Array.isArray(events?.events)||!Array.isArray(standings?.entries))
    throw new Error('RELEASE_SCHEMA_MISMATCH');
  return {releaseId:manifest.release_id,publishedAt:manifest.published_at,
    players,events,standings};
}


// Transitional adapter: fallback is permitted ONLY when the pointer is genuinely
// absent (HTTP 404). Bad manifest/hash/schema/network errors NEVER fall back to
// legacy JSON, because that would silently mask a failed active publication.
// All versioned consumers must use one shared promise, not separate pointer reads.
const inFlight=new Map();
export function readSiteBundle(manifestUrl,legacyUrls,{fetcher=fetch,hasher}={}){
  const key=new URL(manifestUrl,import.meta.url).toString();
  if(inFlight.has(key))return inFlight.get(key);
  const task=readPublicRelease(key,{fetcher,hasher}).catch(async error=>{
    if(error.message!=='RELEASE_POINTER_NOT_FOUND')throw error;
    const urls=['players','events','standings'].map(k=>legacyUrls?.[k]);
    if(urls.some(x=>typeof x!=='string'||!x))throw new Error('LEGACY_URL_MISSING');
    const response=await Promise.all(urls.map(u=>fetcher(u,{cache:'no-store'})));
    if(response.some(x=>!x?.ok))throw new Error('LEGACY_FETCH_FAILED');
    const [players,events,standings]=await Promise.all(response.map(x=>x.json()));
    if(!Array.isArray(players?.players)||!Array.isArray(events?.events)||!Array.isArray(standings?.entries))
      throw new Error('LEGACY_SCHEMA_MISMATCH');
    return {releaseId:null,publishedAt:null,source:'legacy-no-manifest',players,events,standings};
  });
  inFlight.set(key,task);
  task.catch(()=>{if(inFlight.get(key)===task)inFlight.delete(key);});
  return task;
}
