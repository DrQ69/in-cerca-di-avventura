import { validateSorcerySnapshot } from './sorcery-event-validate.mjs';
import { compareWithIca, findIcaEvent } from './sorcery-event-compare.mjs';

export function prepareSorceryPublication({
  eventId,
  snapshot,
  eventsDocument,
  indexDocument,
  publishedAt,
  allowProvisional=false,
}){
  const validation=validateSorcerySnapshot(snapshot,eventId);
  if(!validation.ok){
    throw new Error('Snapshot validation failed: '+validation.errors.join('; '));
  }
  if(!allowProvisional&&snapshot.event?.status!=='Complete'){
    throw new Error('Refusing publication for non-complete Sorcery event status: '+String(snapshot.event?.status??'unknown'));
  }
  const icaEvent=findIcaEvent(eventsDocument,eventId);
  if(!icaEvent){
    throw new Error('No ICA event matches Sorcery event id '+eventId);
  }
  const comparison=compareWithIca(snapshot,eventsDocument);
  const existing=Array.isArray(indexDocument?.events)?indexDocument.events:[];
  const updatedIndex={
    ...(indexDocument||{}),
    updated_at:publishedAt,
    events:[...new Set([...existing,eventId])].sort(),
  };
  return {
    ica_event_id:icaEvent.event_id??null,
    sorcery_event_id:eventId,
    validation,
    comparison,
    updated_index:updatedIndex,
  };
}
