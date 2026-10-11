export function validateSorcerySnapshot(snapshot, expectedEventId = null) {
  const errors = [];
  const warnings = [];
  if (!snapshot?.event?.id) errors.push('event.id is required');
  if (expectedEventId && snapshot?.event?.id !== expectedEventId) errors.push(`event.id mismatch: expected ${expectedEventId}, got ${snapshot?.event?.id}`);
  if (!Array.isArray(snapshot?.registrations)) errors.push('registrations must be an array');
  if (!Array.isArray(snapshot?.standings)) errors.push('standings must be an array');

  const registrationIds = new Set();
  for (const registration of snapshot?.registrations ?? []) {
    if (!registration.registration_id) errors.push('registration missing registration_id');
    if (registrationIds.has(registration.registration_id)) errors.push(`duplicate registration_id: ${registration.registration_id}`);
    registrationIds.add(registration.registration_id);
    if (!['available', 'missing', 'error'].includes(registration?.deck?.deck_status)) errors.push(`invalid deck_status for ${registration.registration_id}`);
  }

  const ranks = new Set();
  for (const standing of snapshot?.standings ?? []) {
    if (!Number.isInteger(standing.rank) || standing.rank < 1) errors.push(`invalid standing rank for ${standing.display_name ?? 'unknown'}`);
    if (ranks.has(standing.rank)) errors.push(`duplicate standing rank: ${standing.rank}`);
    ranks.add(standing.rank);
    if (!registrationIds.has(standing.registration_id)) warnings.push(`standing ${standing.display_name ?? standing.rank} has no matching registration`);
  }

  if (snapshot?.event?.status !== 'Complete') warnings.push(`event status is ${snapshot?.event?.status ?? 'unknown'}, not Complete; results may be provisional`);
  if ((snapshot?.registrations?.length ?? 0) !== (snapshot?.standings?.length ?? 0)) {
    warnings.push(`registrations (${snapshot.registrations.length}) differ from ranked participants (${snapshot.standings.length}); this is allowed and must not be auto-reconciled`);
  }

  return { ok: errors.length === 0, errors, warnings };
}
