const HOST = 'https://sorcerytcg.com';
const EVENT_ID_RE = /^cm[a-z0-9]{20,40}$/i;
const DEFAULT_HEADERS = Object.freeze({
  Accept: '*/*',
  'Content-Type': 'application/json',
  'trpc-accept': 'application/jsonl',
  'x-trpc-source': 'nextjs-react',
});

export const SORCERY_ENDPOINTS = Object.freeze({
  event: `${HOST}/api/trpc/event.get`,
  playerSnapshot: `${HOST}/api/trpc/event.playerSnapshot`,
});

export function assertEventId(eventId) {
  if (!EVENT_ID_RE.test(String(eventId ?? ''))) {
    throw new Error(`Invalid Sorcery event id: ${eventId}`);
  }
  return eventId;
}

function findDeep(value, predicate) {
  if (predicate(value)) return value;
  if (Array.isArray(value)) {
    for (const item of value) {
      const found = findDeep(item, predicate);
      if (found !== undefined) return found;
    }
  } else if (value && typeof value === 'object') {
    for (const item of Object.values(value)) {
      const found = findDeep(item, predicate);
      if (found !== undefined) return found;
    }
  }
  return undefined;
}

export function parseTrpcJsonl(text, predicate) {
  const lines = String(text).split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  for (let index = lines.length - 1; index >= 0; index -= 1) {
    let parsed;
    try {
      parsed = JSON.parse(lines[index]);
    } catch {
      continue;
    }
    const found = findDeep(parsed, predicate);
    if (found !== undefined) return found;
  }
  throw new Error('Sorcery tRPC JSONL response did not contain the expected payload. Schema may have changed.');
}

function buildUrl(endpoint, input) {
  const url = new URL(endpoint);
  url.searchParams.set('batch', '1');
  url.searchParams.set('input', JSON.stringify({ 0: { json: input } }));
  return url;
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function requestText(url, { fetchImpl = globalThis.fetch, attempts = 3, baseDelayMs = 500 } = {}) {
  if (typeof fetchImpl !== 'function') throw new Error('No fetch implementation available. Node.js 18+ is required.');
  let lastError;
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      const response = await fetchImpl(url, { method: 'GET', headers: DEFAULT_HEADERS, redirect: 'follow' });
      if (response.ok) return await response.text();
      const retryable = response.status === 429 || response.status >= 500;
      if (!retryable || attempt === attempts) {
        throw new Error(`Sorcery request failed: HTTP ${response.status} ${response.statusText}`);
      }
      const retryAfter = Number(response.headers.get('retry-after'));
      const delay = Number.isFinite(retryAfter) ? retryAfter * 1000 : baseDelayMs * (2 ** (attempt - 1));
      await sleep(delay);
    } catch (error) {
      lastError = error;
      if (attempt === attempts) break;
      await sleep(baseDelayMs * (2 ** (attempt - 1)));
    }
  }
  throw new Error(`Sorcery request failed after retries: ${lastError?.message ?? 'unknown error'}`);
}

export async function fetchEvent(eventId, options = {}) {
  assertEventId(eventId);
  const text = await requestText(buildUrl(SORCERY_ENDPOINTS.event, { id: eventId }), options);
  return parseTrpcJsonl(text, (value) => Boolean(value?.event?.id === eventId));
}

export async function fetchPlayerSnapshot(eventId, playerId, options = {}) {
  assertEventId(eventId);
  if (!/^cm[a-z0-9]{20,40}$/i.test(String(playerId ?? ''))) throw new Error(`Invalid Sorcery player registration id: ${playerId}`);
  const text = await requestText(buildUrl(SORCERY_ENDPOINTS.playerSnapshot, { eventId, playerId }), options);
  return parseTrpcJsonl(text, (value) => Boolean(value && typeof value === 'object' && Array.isArray(value.snapshotlist)));
}

export async function fetchDecksForRegistrations(eventId, registrations, {
  concurrency = 2,
  requestOptions = {},
  delayMs = 150,
} = {}) {
  const queue = registrations.map((registration) => registration.registration_id);
  const results = new Map();

  async function worker() {
    while (queue.length) {
      const registrationId = queue.shift();
      try {
        const snapshot = await fetchPlayerSnapshot(eventId, registrationId, requestOptions);
        results.set(registrationId, { status: 'available', snapshot });
      } catch (error) {
        const message = String(error?.message ?? error);
        const missing = /HTTP 404|did not contain the expected payload/i.test(message);
        results.set(registrationId, { status: missing ? 'missing' : 'error', error: message });
      }
      if (delayMs) await sleep(delayMs);
    }
  }

  await Promise.all(Array.from({ length: Math.max(1, Math.min(4, concurrency)) }, () => worker()));
  return results;
}
