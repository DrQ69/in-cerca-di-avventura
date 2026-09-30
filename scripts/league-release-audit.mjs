// Public technical release log helpers.
// Accept only non-sensitive metadata. No workbook paths, private IDs, names, notes or raw diffs.
const sha=/^[a-f0-9]{40}$/;
const release=/^[a-z0-9][a-z0-9._-]{2,79}$/;
const verdict=new Set(['PASS','FAIL','NOT_VERIFIED']);
const action=new Set(['publish','rollback']);
const isIso=x=>typeof x==='string'&&Number.isFinite(Date.parse(x));
const allowed=new Set([
  'action','release_id','published_at','commit_sha','previous_release_id',
  'qa_desktop','qa_mobile','functional_qa','post_publish_smoke',
  'rollback_from_release_id','rollback_to_release_id','authorization_ref'
]);
export function validateAuditEntry(entry){
 const errors=[];
 if(!entry||typeof entry!=='object'||Array.isArray(entry))return {ok:false,errors:['ENTRY_NOT_OBJECT']};
 for(const k of Object.keys(entry))if(!allowed.has(k))errors.push('FORBIDDEN_FIELD:'+k);
 if(!action.has(entry.action))errors.push('INVALID_ACTION');
 if(!release.test(entry.release_id||''))errors.push('INVALID_RELEASE_ID');
 if(!isIso(entry.published_at))errors.push('INVALID_TIMESTAMP');
 if(!sha.test(entry.commit_sha||''))errors.push('INVALID_COMMIT_SHA');
 for(const k of ['qa_desktop','qa_mobile','functional_qa','post_publish_smoke'])
   if(!verdict.has(entry[k]))errors.push('INVALID_QA:'+k);
 if(entry.previous_release_id!=null&&!release.test(entry.previous_release_id))errors.push('INVALID_PREVIOUS_RELEASE_ID');
 if(typeof entry.authorization_ref!=='string'||!/^[A-Z0-9._-]{3,80}$/i.test(entry.authorization_ref))
   errors.push('INVALID_AUTHORIZATION_REF');
 if(entry.action==='rollback'){
   if(!release.test(entry.rollback_from_release_id||''))errors.push('INVALID_ROLLBACK_FROM');
   if(!release.test(entry.rollback_to_release_id||''))errors.push('INVALID_ROLLBACK_TO');
 } else if(entry.rollback_from_release_id!=null||entry.rollback_to_release_id!=null) {
   errors.push('ROLLBACK_FIELDS_ON_PUBLISH');
 }
 return {ok:errors.length===0,errors};
}
export function appendAuditEntry(log,entry){
 if(!log||typeof log!=='object'||!Array.isArray(log.entries))throw new Error('INVALID_LOG');
 const v=validateAuditEntry(entry);if(!v.ok)throw new Error('INVALID_ENTRY:'+v.errors.join(','));
 if(log.entries.some(x=>x.action===entry.action&&x.release_id===entry.release_id&&x.commit_sha===entry.commit_sha))
   throw new Error('DUPLICATE_AUDIT_ENTRY');
 return {schema_version:'1.0',entries:[...log.entries,structuredClone(entry)]};
}
export const emptyAuditLog=()=>({schema_version:'1.0',entries:[]});
