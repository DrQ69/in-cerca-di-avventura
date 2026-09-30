// Sprint 1 XLSX intake gate.
// This module NEVER reads/uploads an XLSX. It validates only NON-SENSITIVE
// inspection metadata produced during the private ChatGPT review session.
const statusSet=new Set(['READABLE','MISSING','INCONSISTENT','NOT_VERIFIED']);
const officialitySet=new Set(['PENDING','CONFIRMED','NOT_APPLICABLE']);
const provenanceSet=new Set(['WORKBOOK_METADATA','EXPORT_METADATA','OWNER_ATTESTED','UNAVAILABLE']);
const iso=x=>typeof x==='string'&&Number.isFinite(Date.parse(x));
const release=/^[a-z0-9][a-z0-9._-]{2,79}$/;

export function assessWorkbookIntake(meta){
 const errors=[],warnings=[],requiredGates=[];
 const err=(code,where)=>errors.push({code,where});
 const warn=(code,where)=>warnings.push({code,where});
 if(!meta||typeof meta!=='object'||Array.isArray(meta))
   return {ok:false,blocked:true,errors:[{code:'INTAKE_NOT_OBJECT',where:'$'}],warnings,requiredGates};
 const allowed=new Set([
   'source_version_label','source_exported_at','source_timestamp_provenance',
   'last_public_release_id','last_public_published_at',
   'formula_cache','officiality','fair_play_affected'
 ]);
 for(const k of Object.keys(meta))if(!allowed.has(k))err('FORBIDDEN_INTAKE_FIELD',k);
 if(meta.source_version_label!=null &&
    (typeof meta.source_version_label!=='string'||meta.source_version_label.length>120))
   err('INVALID_SOURCE_VERSION_LABEL','source_version_label');
 if(!provenanceSet.has(meta.source_timestamp_provenance))
   err('INVALID_TIMESTAMP_PROVENANCE','source_timestamp_provenance');
 if(meta.source_exported_at!=null&&!iso(meta.source_exported_at))
   err('INVALID_SOURCE_TIMESTAMP','source_exported_at');
 if(meta.last_public_release_id!=null&&!release.test(meta.last_public_release_id))
   err('INVALID_LAST_RELEASE_ID','last_public_release_id');
 if(meta.last_public_published_at!=null&&!iso(meta.last_public_published_at))
   err('INVALID_LAST_PUBLISHED_AT','last_public_published_at');

 const cache=meta.formula_cache;
 if(!cache||typeof cache!=='object'||Array.isArray(cache)){
   err('FORMULA_CACHE_STATUS_MISSING','formula_cache');
 }else{
   for(const key of ['general','draft','constructed']){
     if(!statusSet.has(cache[key]))err('INVALID_FORMULA_CACHE_STATUS','formula_cache.'+key);
     else if(cache[key]==='MISSING'||cache[key]==='INCONSISTENT')
       err('FORMULA_CACHE_CRITICAL','formula_cache.'+key);
     else if(cache[key]==='NOT_VERIFIED')
       err('FORMULA_CACHE_NOT_VERIFIED','formula_cache.'+key);
   }
 }
 if(!officialitySet.has(meta.officiality))
   err('INVALID_OFFICIALITY_STATUS','officiality');
 else if(meta.officiality==='PENDING')requiredGates.push('owner_confirms_officiality');

 if(typeof meta.fair_play_affected!=='boolean')
   err('INVALID_FAIR_PLAY_AFFECTED','fair_play_affected');
 else if(meta.fair_play_affected)
   requiredGates.push('resolve_DEC_09_7_before_publication');

 let freshness='UNVERIFIABLE';
 const trustworthyTimestamp=
   meta.source_timestamp_provenance!=='UNAVAILABLE' && iso(meta.source_exported_at);
 if(trustworthyTimestamp&&iso(meta.last_public_published_at)){
   const a=Date.parse(meta.source_exported_at),b=Date.parse(meta.last_public_published_at);
   freshness=a>b?'NEWER':a===b?'EQUIVALENT':'OLDER';
 }else if(meta.last_public_release_id==null&&trustworthyTimestamp){
   freshness='NO_PREVIOUS_RELEASE_TIMESTAMP';
 }
 if(['OLDER','EQUIVALENT','UNVERIFIABLE'].includes(freshness)){
   warn('SOURCE_FRESHNESS_REQUIRES_OWNER_CONFIRMATION','source_exported_at');
   requiredGates.push('owner_confirms_source_freshness');
 }
 if(meta.source_timestamp_provenance==='OWNER_ATTESTED')
   warn('SOURCE_TIMESTAMP_OWNER_ATTESTED','source_timestamp_provenance');
 if(meta.source_timestamp_provenance==='UNAVAILABLE')
   warn('SOURCE_TIMESTAMP_UNAVAILABLE','source_timestamp_provenance');

 const blocked=errors.length>0;
 return {ok:!blocked,blocked,errors,warnings,
   requiredGates:[...new Set(requiredGates)],freshness};
}

export function publicSafeIntakeSummary(result){
 if(!result||typeof result!=='object')throw new Error('INVALID_RESULT');
 return {
   schema_version:'1.0',
   blocked:!!result.blocked,
   freshness:result.freshness||'UNVERIFIABLE',
   error_codes:(result.errors||[]).map(x=>x.code),
   warning_codes:(result.warnings||[]).map(x=>x.code),
   required_gates:[...(result.requiredGates||[])]
 };
}
