function row(scope, field, source, ica) {
  const status = source == null || ica == null ? 'MISSING' : Object.is(source, ica) ? 'MATCH' : 'DIFFERENCE';
  return { scope, field, source, ica, status };
}

export function findIcaEvent(eventsDocument, sorceryEventId) {
  const events = Array.isArray(eventsDocument) ? eventsDocument : eventsDocument?.events ?? [];
  return events.find((event) => [event.official_event_url, event.official_results_url, event.registration_url]
    .filter(Boolean).some((url) => String(url).includes(sorceryEventId))) ?? null;
}

export function compareWithIca(snapshot, eventsDocument) {
  const icaEvent = findIcaEvent(eventsDocument, snapshot.event.id);
  if (!icaEvent) return { event_found: false, rows: [], summary: { differences: 0, missing: 1, matches: 0 } };

  const rows = [
    row('event', 'player_count', snapshot.event.played_participant_count, icaEvent.player_count),
    row('event', 'winner', snapshot.standings[0]?.display_name ?? null, icaEvent.winner_display_name ?? null),
  ];
  const icaByRank = new Map((icaEvent.standings ?? []).map((standing) => [standing.rank, standing]));
  for (const standing of snapshot.standings) {
    const current = icaByRank.get(standing.rank);
    rows.push(row(`rank:${standing.rank}`, 'display_name', standing.display_name, current?.display_name ?? null));
    rows.push(row(`rank:${standing.rank}`, 'points', standing.points, current?.points ?? null));
    for (const field of ['wins', 'draws', 'losses']) {
      if (current && Object.hasOwn(current, field)) rows.push(row(`rank:${standing.rank}`, field, standing[field], current[field]));
    }
  }
  const summary = rows.reduce((acc, item) => {
    if (item.status === 'MATCH') acc.matches += 1;
    if (item.status === 'DIFFERENCE') acc.differences += 1;
    if (item.status === 'MISSING') acc.missing += 1;
    return acc;
  }, { matches: 0, differences: 0, missing: 0 });
  return { event_found: true, ica_event_id: icaEvent.event_id ?? null, rows, summary };
}

export function formatComparison(report) {
  if (!report.event_found) return 'MISSING ICA event matching Sorcery event id.\n';
  const lines = report.rows.map((item) => `${item.status.padEnd(10)} ${item.scope} ${item.field}: Sorcery=${JSON.stringify(item.source)} ICA=${JSON.stringify(item.ica)}`);
  lines.push(`Summary: ${report.summary.matches} MATCH, ${report.summary.differences} DIFFERENCE, ${report.summary.missing} MISSING`);
  return `${lines.join('\n')}\n`;
}
