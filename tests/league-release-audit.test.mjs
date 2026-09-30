import {test} from 'node:test';
import assert from 'node:assert/strict';
import {validateAuditEntry,appendAuditEntry,emptyAuditLog} from '../scripts/league-release-audit.mjs';
const publish=()=>({
 action:'publish',release_id:'bog-2026-10-01-001',published_at:'2026-10-01T10:00:00+02:00',
 commit_sha:'0123456789abcdef0123456789abcdef01234567',previous_release_id:'bog-2026-09-30-001',
 qa_desktop:'PASS',qa_mobile:'PASS',functional_qa:'PASS',post_publish_smoke:'PASS',
 authorization_ref:'CHAT-DEC09-PUBLISH-001'
});
test('public audit entry accepts only technical metadata',()=>{
 const e=publish();assert.equal(validateAuditEntry(e).ok,true);
 const log=appendAuditEntry(emptyAuditLog(),e);assert.equal(log.entries.length,1);
});
test('private/admin fields and raw source references are rejected',()=>{
 for(const key of ['real_name','excel_id','workbook_path','admin_note']){
   const e=publish();e[key]='secret';assert.ok(validateAuditEntry(e).errors.includes('FORBIDDEN_FIELD:'+key));
 }
});
test('rollback requires explicit source and target version',()=>{
 const e=publish();e.action='rollback';e.release_id='bog-rollback-001';e.rollback_from_release_id='bog-2026-10-01-001';
 assert.equal(validateAuditEntry(e).ok,false);
 e.rollback_to_release_id='bog-2026-09-30-001';assert.equal(validateAuditEntry(e).ok,true);
});
test('duplicate technical audit rows are rejected',()=>{
 const e=publish(),log=appendAuditEntry(emptyAuditLog(),e);
 assert.throws(()=>appendAuditEntry(log,e),/DUPLICATE_AUDIT_ENTRY/);
});
