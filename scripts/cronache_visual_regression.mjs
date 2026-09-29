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
    await page.waitForSelector('#chronicles-root .chronicle-record', { timeout: 15000 });

    const completedCards = await page.locator('#chronicles-root .chronicle-record').count();
    if (!completedCards) {
      throw new Error(`${viewport.name}: no concluded-event records rendered`);
    }

    const maps = await page.evaluate(() => {
      const links=[...document.querySelectorAll('#chronicles-root .chronicle-record .map-link')];
      return {
        count:links.length,
        valid:links.every(link=>link.href.startsWith('https://www.google.com/maps/search/?api=1&query=')&&link.target==='_blank')
      };
    });
    if(maps.count!==completedCards||!maps.valid){
      throw new Error(`${viewport.name}: not every Chronicle event location links to Google Maps`);
    }

    const winners=await page.evaluate(async()=>{
      const response=await fetch('../../data/events.json',{cache:'no-store'});
      const data=await response.json();
      const completed=(data.events||[]).filter(event=>event.status==='conclusa');
      return completed.map(event=>{
        const row=Array.isArray(event.standings)?event.standings.find(item=>item.rank===1):null;
        const fact=document.querySelector('[data-ica-id="CRO-REC-WINNER-'+event.event_id+'"]');
        const link=fact?.querySelector('.winner-player-link');
        return {
          eventId:event.event_id,
          expectedNickname:row?.nickname||null,
          expectedPlayerId:row?.player_id||null,
          renderedText:fact?.querySelector('strong')?.textContent?.trim()||'',
          href:link?.getAttribute('href')||''
        };
      });
    });

    for(const winner of winners){
      if(winner.expectedNickname&&winner.expectedPlayerId){
        if(winner.renderedText!==winner.expectedNickname) throw new Error(`${viewport.name}: winner nickname mismatch for ${winner.eventId}`);
        if(!winner.href.includes('../avventurieri/?player='+encodeURIComponent(winner.expectedPlayerId))){
          throw new Error(`${viewport.name}: winner profile link missing/incorrect for ${winner.eventId}: ${winner.href}`);
        }
      }
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
        logo: rect('.logo-host'),
        title: rect('#page-title'),
        firstRecord: rect('.chronicle-record'),
        firstDeckSlot: rect('.winner-deck-pending,.winner-deck-link'),
      };
    });

    await page.screenshot({
      path: `${outDir}/${viewport.name}.png`,
      fullPage: true,
      animations: 'disabled',
    });

    await fs.writeFile(
      `${outDir}/${viewport.name}.json`,
      JSON.stringify({ viewport, completedCards, maps, winners, overflow, collisionChecks, consoleErrors }, null, 2),
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
