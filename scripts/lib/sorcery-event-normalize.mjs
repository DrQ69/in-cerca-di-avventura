import crypto from 'node:crypto';
import { SORCERY_ENDPOINTS } from './sorcery-event-adapter.mjs';

export const ADAPTER_VERSION = 1;

function imageFrom(card) {
  return card?.printings?.[0]?.meta?.image ?? null;
}

function normalizeRound(seatEntry, ownRegistrationId) {
  const pairing = seatEntry?.pairing;
  const opponent = pairing?.seats?.find((seat) => seat?.registrationId !== ownRegistrationId)?.registration?.user?.displayname ?? null;
  return {
    round: seatEntry?.round?.number ?? null,
    structure: seatEntry?.round?.phase?.structure ?? null,
    opponent,
    result: seatEntry?.result?.result ?? null,
    score: seatEntry?.result?.score ?? null,
    is_bye: Boolean(seatEntry?.result?.isBye),
  };
}

function normalizeDeck(snapshotResult) {
  if (!snapshotResult || snapshotResult.status !== 'available') {
    return { deck_status: snapshotResult?.status ?? 'missing', error: snapshotResult?.status === 'error' ? snapshotResult.error : undefined };
  }
  const snapshot = snapshotResult.snapshot;
  return {
    deck_status: 'available',
    deck_name: snapshot?.name ?? null,
    format: snapshot?.format ?? null,
    source_status: snapshot?.status ?? null,
    source_visibility: snapshot?.sourceDeck?.visibility ?? null,
    cards: (snapshot?.snapshotlist ?? []).map((entry) => ({
      board_source: entry?.board ?? null,
      quantity: entry?.quantity ?? null,
      name: entry?.card?.name ?? null,
      slug: entry?.card?.slug ?? null,
      category: entry?.card?.engine?.category ?? null,
      card_id: entry?.card?.id ?? null,
      printing_id: entry?.printingId ?? null,
      image_source_url: imageFrom(entry?.card),
    })),
  };
}

function stableStringify(value) {
  if (Array.isArray(value)) return `[${value.map(stableStringify).join(',')}]`;
  if (value && typeof value === 'object') {
    return `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${stableStringify(value[key])}`).join(',')}}`;
  }
  return JSON.stringify(value);
}

export function normalizeSorceryEvent(raw, deckResults = new Map(), retrievedAt = new Date().toISOString()) {
  const event = raw?.event;
  if (!event?.id) throw new Error('Cannot normalize Sorcery event: event payload missing id.');

  const registrations = (event.players ?? []).map((player) => ({
    registration_id: player.id,
    display_name: player?.user?.displayname ?? null,
    status: player?.status ?? null,
    rounds: (player?.seats ?? []).map((seat) => normalizeRound(seat, player.id)),
    deck: normalizeDeck(deckResults.get(player.id)),
  }));

  const standings = (raw?.standings ?? []).map((entry) => ({
    registration_id: entry?.id ?? null,
    rank: entry?.position ?? null,
    display_name: entry?.user?.displayname ?? null,
    points: entry?.score ?? null,
    wins: entry?.wins ?? null,
    draws: entry?.draws ?? null,
    losses: entry?.losses ?? null,
    omw: entry?.omwp ?? null,
    cmp: entry?.cmp ?? null,
    tiebreak: entry?.tiebreak ?? null,
    avatar: entry?.avatar ? {
      name: entry.avatar.name ?? null,
      slug: entry.avatar.slug ?? null,
      image_source_url: imageFrom(entry.avatar),
    } : null,
  }));

  const playedParticipantCount = registrations.filter((registration) => registration.rounds.length > 0).length;

  const core = {
    event: {
      id: event.id,
      title: event.title ?? null,
      status: event.status ?? null,
      starts_at: event.startsAt ?? null,
      ends_at: event.endsAt ?? null,
      completed_at: event.completedAt ?? null,
      capacity: event.capacity ?? null,
      address: event.address ?? null,
      country: event.country ?? null,
      track_decks: Boolean(event.trackDecks),
      registration_count: registrations.length,
      standings_count: standings.length,
      played_participant_count: playedParticipantCount,
    },
    registrations,
    standings,
  };

  const contentHash = crypto.createHash('sha256').update(stableStringify(core)).digest('hex');
  return {
    provenance: {
      provider: 'sorcerytcg.com',
      sorcery_event_id: event.id,
      retrieved_at: retrievedAt,
      adapter_version: ADAPTER_VERSION,
      source_endpoints: [SORCERY_ENDPOINTS.event, SORCERY_ENDPOINTS.playerSnapshot],
      content_sha256: contentHash,
      source_class: 'public-undocumented-internal-api',
    },
    ...core,
  };
}
