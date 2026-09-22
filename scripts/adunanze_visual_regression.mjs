import { chromium } from 'playwright';
import fs from 'node:fs/promises';

const baseURL = process.env.ICA_BASE_URL || 'http://127.0.0.1:8000';
const outDir = process.env.ADUNANZE_SCREENSHOT_DIR || 'artifacts/adunanze-visual';

const viewports = [
  { name: 'mobile-360', width: 360, height: 800 },
  { name: 'mobile-390', width: 390, height: 844 },
  { name: 'tablet-768', width: 768, height: 1024 },
  { name: 'compact-1024', width: 1024, height: 768 },
  { name: 'desktop-1280', width: 1280, height: 800 },
  { name: 'desktop-1440', width: 1440, height: 900 },
  { name: 'large-1920', width: 1920, height: 1080 },
];

await fs.mkdir(outDir, { recursive: true });
const browser = await chromium.launch({ headless: true });

try {
  for (const viewport of viewports) {
    const page = await browser.newPage({
      viewport: { width: viewport.width, height: viewport.height },
      deviceScaleFactor: 1,
      reducedMotion: 'reduce',
    });

    const consoleErrors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') consoleErrors.push(msg.text());
    });
    page.on('pageerror', error => consoleErrors.push(String(error)));

    await page.goto(`${baseURL}/beta/adunanze/`, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForSelector('.battlefield-panel img');
    await page.waitForSelector('.gate-international img');
    await page.waitForSelector('a.gate-national');

    const portal = await page.evaluate(() => {
      const imgs = [...document.querySelectorAll('.battlefield-panel img,.gate-panel img')];
      const national = document.querySelector('a.gate-national');
      const international = document.querySelector('.gate-international');
      const skip = document.querySelector('.skip-link');
      const html = document.documentElement;
      const body = document.body;
      const scrollWidth = Math.max(html.scrollWidth, body.scrollWidth);
      const nr = national?.getBoundingClientRect();
      const ir = international?.getBoundingClientRect();
      const sr = skip?.getBoundingClientRect();
      return {
        imageCount: imgs.length,
        imagesLoaded: imgs.every(img => img instanceof HTMLImageElement && img.complete && img.naturalWidth > 0),
        nationalHref: national?.getAttribute('href') || '',
        internationalIsLink: Boolean(international?.closest('a') || international?.querySelector('a')),
        nationalRect: nr ? { top:nr.top, left:nr.left, width:nr.width, height:nr.height } : null,
        internationalRect: ir ? { top:ir.top, left:ir.left, width:ir.width, height:ir.height } : null,
        skipConcealed: skip ? (getComputedStyle(skip).clipPath !== 'none' || getComputedStyle(skip).clip !== 'auto') : false,
        overflow: {
          horizontal: scrollWidth > window.innerWidth + 2,
          scrollWidth,
          viewportWidth: window.innerWidth,
        },
      };
    });

    const skipFocus = await page.locator('.skip-link').evaluate(el => {
      el.focus();
      const style = getComputedStyle(el);
      const rect = el.getBoundingClientRect();
      return {
        active: document.activeElement === el,
        clipPath: style.clipPath,
        width: rect.width,
        height: rect.height,
      };
    });

    await page.locator('a.gate-national').focus();
    const focus = await page.locator('a.gate-national').evaluate(el => {
      const style = getComputedStyle(el);
      return {
        active: document.activeElement === el,
        outlineWidth: style.outlineWidth,
        outlineStyle: style.outlineStyle,
      };
    });

    if (portal.imageCount !== 3 || !portal.imagesLoaded) throw new Error(`${viewport.name}: portal images missing/not loaded`);
    if (!portal.nationalHref.endsWith('/nazionale/')) throw new Error(`${viewport.name}: national gate href is incorrect: ${portal.nationalHref}`);
    if (portal.internationalIsLink) throw new Error(`${viewport.name}: International gate must not be active`);
    if (!portal.skipConcealed) throw new Error(`${viewport.name}: skip link is not concealed outside focus`);
    if (!skipFocus.active || skipFocus.clipPath !== 'none' || skipFocus.width < 44 || skipFocus.height < 30) {
      throw new Error(`${viewport.name}: skip link does not become visibly focusable`);
    }
    if (!portal.nationalRect || !portal.internationalRect) throw new Error(`${viewport.name}: gate geometry unavailable`);
    if (viewport.width < 768 && portal.nationalRect.top >= portal.internationalRect.top) {
      throw new Error(`${viewport.name}: National gate must precede International on mobile`);
    }
    if (viewport.width >= 768 && portal.internationalRect.left >= portal.nationalRect.left) {
      throw new Error(`${viewport.name}: International must remain left of National on tablet/desktop`);
    }
    if (!focus.active || focus.outlineStyle === 'none' || focus.outlineWidth === '0px') throw new Error(`${viewport.name}: national gate focus is not visibly testable`);
    if (portal.overflow.horizontal) throw new Error(`${viewport.name}: portal horizontal overflow`);

    await page.screenshot({
      path: `${outDir}/portal-${viewport.name}.png`,
      fullPage: true,
      animations: 'disabled',
    });

    await page.goto(`${baseURL}/beta/adunanze/nazionale/`, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForSelector('#upcoming-root .adunanza-card', { timeout: 15000 });

    const national = await page.evaluate(() => {
      const cards = [...document.querySelectorAll('.adunanza-card')];
      const statuses = cards.map(card => card.dataset.status || '');
      const upcomingDates = [...document.querySelectorAll('#upcoming-root .adunanza-card')].map(card => card.dataset.date || '');
      const sorted = [...upcomingDates].sort((a,b) => a.localeCompare(b));
      const html = document.documentElement;
      const body = document.body;
      const scrollWidth = Math.max(html.scrollWidth, body.scrollWidth);
      const mapLinks=[...document.querySelectorAll('.adunanza-card .map-link')];
      return {
        count: cards.length,
        statuses,
        upcomingDates,
        chronological: JSON.stringify(upcomingDates) === JSON.stringify(sorted),
        hasCompleted: statuses.includes('conclusa'),
        mapLinkCount:mapLinks.length,
        mapsValid:mapLinks.every(link=>link.href.startsWith('https://www.google.com/maps/search/?api=1&query=')&&link.target==='_blank'),
        overflow: {
          horizontal: scrollWidth > window.innerWidth + 2,
          scrollWidth,
          viewportWidth: window.innerWidth,
        },
      };
    });

    if (!national.count) throw new Error(`${viewport.name}: no national events rendered`);
    if (national.hasCompleted) throw new Error(`${viewport.name}: completed event leaked into Adunanze Nazionale`);
    if (!national.chronological) throw new Error(`${viewport.name}: upcoming events are not chronological`);
    if (national.mapLinkCount!==national.count||!national.mapsValid) throw new Error(`${viewport.name}: not every national event location links to Google Maps`);
    if (national.overflow.horizontal) throw new Error(`${viewport.name}: national page horizontal overflow`);

    await page.screenshot({
      path: `${outDir}/national-${viewport.name}.png`,
      fullPage: true,
      animations: 'disabled',
    });

    if (consoleErrors.length) {
      throw new Error(`${viewport.name}: browser console errors: ${consoleErrors.join(' | ')}`);
    }

    await fs.writeFile(
      `${outDir}/${viewport.name}.json`,
      JSON.stringify({ viewport, portal, skipFocus, focus, national, consoleErrors }, null, 2),
      'utf8'
    );

    await page.close();
  }

  const emptyPage = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await emptyPage.route('**/data/events.json', async route => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ schema_version: 'qa', events: [] }),
    });
  });
  await emptyPage.goto(`${baseURL}/beta/adunanze/nazionale/`, { waitUntil: 'networkidle', timeout: 30000 });
  await emptyPage.waitForSelector('#empty:not([hidden])', { timeout: 10000 });
  await emptyPage.screenshot({ path: `${outDir}/national-empty-mobile-390.png`, fullPage: true });
  await emptyPage.close();

  const home = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  const homeErrors = [];
  home.on('console', msg => { if (msg.type() === 'error') homeErrors.push(msg.text()); });
  home.on('pageerror', error => homeErrors.push(String(error)));
  await home.goto(`${baseURL}/beta/`, { waitUntil: 'networkidle', timeout: 30000 });
  await home.waitForFunction(() => {
    const title = document.querySelector('#next-title');
    return title && !title.textContent.includes('Consultazione');
  }, null, { timeout: 10000 });

  const homeResult = await home.evaluate(async () => {
    const response = await fetch('../data/events.json', { cache: 'no-store' });
    const data = await response.json();
    const now = new Date();
    const key = [now.getFullYear(), String(now.getMonth()+1).padStart(2,'0'), String(now.getDate()).padStart(2,'0')].join('-');
    const events = data.events || [];
    const staleFuture = events.filter(event => event.status === 'futura' && event.date && event.date <= key);
    const expected = events
      .filter(event => event.status === 'futura' && event.date && event.date > key)
      .sort((a,b) => a.date.localeCompare(b.date))[0] || null;
    return {
      rendered: document.querySelector('#next-event-card')?.getAttribute('data-event-id') || null,
      expected: expected?.event_id || null,
      staleFuture: staleFuture.map(event => ({ event_id:event.event_id, date:event.date })),
    };
  });

  if (homeResult.staleFuture.length) {
    throw new Error(`Shared event data contains past dates still marked futura: ${JSON.stringify(homeResult.staleFuture)}`);
  }
  if (homeResult.rendered !== homeResult.expected) {
    throw new Error(`Homepage next event mismatch: rendered=${homeResult.rendered} expected=${homeResult.expected}`);
  }
  if (homeErrors.length) throw new Error(`Homepage console errors: ${homeErrors.join(' | ')}`);
  await fs.writeFile(`${outDir}/homepage-next-event.json`, JSON.stringify(homeResult, null, 2), 'utf8');
  await home.close();
} finally {
  await browser.close();
}

// VR-0010 final verification trigger.
