import { chromium } from 'playwright';
import fs from 'node:fs/promises';

const baseURL = process.env.CRONACHE_URL || 'http://127.0.0.1:8000/beta/cronache/';
const outDir = process.env.CRONACHE_SCREENSHOT_DIR || 'artifacts/cronache-visual';

const viewports = [
  { name: 'desktop-1440', width: 1440, height: 1200 },
  { name: 'desktop-1024', width: 1024, height: 1200 },
  { name: 'tablet-768', width: 768, height: 1200 },
  { name: 'mobile-390', width: 390, height: 844 },
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

    await page.goto(baseURL, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForSelector('#seasons-root .event-record', { timeout: 15000 });

    const resultCount = (await page.locator('#result-count').textContent())?.trim() || '';
    if (!resultCount || resultCount === '—') {
      throw new Error(`${viewport.name}: result count did not resolve`);
    }

    const overflow = await page.evaluate(() => {
      const html = document.documentElement;
      const body = document.body;
      return {
        horizontal: Math.max(html.scrollWidth, body.scrollWidth) > window.innerWidth + 2,
        scrollWidth: Math.max(html.scrollWidth, body.scrollWidth),
        viewportWidth: window.innerWidth,
      };
    });

    const collisionChecks = await page.evaluate(() => {
      const rect = selector => {
        const el = document.querySelector(selector);
        if (!el) return null;
        const r = el.getBoundingClientRect();
        return { left:r.left, right:r.right, top:r.top, bottom:r.bottom, width:r.width, height:r.height };
      };
      return {
        eyebrow: rect('.eyebrow'),
        logo: rect('.logo-host'),
        resultCount: rect('#result-count'),
        reset: rect('#reset-filters'),
        firstPending: rect('.detail-pending'),
      };
    });

    await page.screenshot({
      path: `${outDir}/${viewport.name}.png`,
      fullPage: true,
      animations: 'disabled',
    });

    await fs.writeFile(
      `${outDir}/${viewport.name}.json`,
      JSON.stringify({ viewport, resultCount, overflow, collisionChecks, consoleErrors }, null, 2),
      'utf8'
    );

    if (overflow.horizontal) {
      throw new Error(`${viewport.name}: horizontal overflow (${overflow.scrollWidth}px > ${overflow.viewportWidth}px)`);
    }
    if (consoleErrors.length) {
      throw new Error(`${viewport.name}: browser console errors: ${consoleErrors.join(' | ')}`);
    }

    await page.close();
  }
} finally {
  await browser.close();
}
