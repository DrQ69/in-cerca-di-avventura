export const CHEST_BANDS = Object.freeze([
  { min: 10, max: 19, file: 'scrigno-10-19-giocatori.webp', label: '10–19 giocatori' },
  { min: 20, max: 39, file: 'scrigno-20-39-giocatori.webp', label: '20–39 giocatori' },
  { min: 40, max: 59, file: 'scrigno-40-59-giocatori.webp', label: '40–59 giocatori' },
  { min: 60, max: 79, file: 'scrigno-60-79-giocatori.webp', label: '60–79 giocatori' },
  { min: 80, max: 100, file: 'scrigno-80-100-giocatori.webp', label: '80–100 giocatori' },
]);

export function participantCount(event) {
  const candidates = [event?.player_count, event?.played_participant_count, event?.registration_count];
  for (const value of candidates) {
    if (value === null || value === undefined || value === '') continue;
    const count = Number(value);
    if (Number.isFinite(count) && count >= 0) return count;
  }
  return null;
}

export function chestForPlayers(value) {
  const count = Number(value);
  if (!Number.isFinite(count)) return null;
  return CHEST_BANDS.find(band => count >= band.min && count <= band.max) ?? null;
}

export function chestForEvent(event) {
  const count = participantCount(event);
  return { count, band: count === null ? null : chestForPlayers(count) };
}
