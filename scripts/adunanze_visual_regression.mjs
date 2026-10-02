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
      const details=cards.map(card=>({
        status:card.dataset.status||'',
        checkIn:[...card.querySelectorAll('.fact span')].some(el=>el.textContent.trim()==='Check-in'),
        start:[...card.querySelectorAll('.fact span')].some(el=>el.textContent.trim()==='Inizio'),
        rules:[...card.querySelectorAll('.info-trigger')].some(el=>el.textContent.trim()==='Regolamento'),
        prizes:[...card.querySelectorAll('.info-trigger')].some(el=>el.textContent.trim()==='Premi'),
        signup:[...card.querySelectorAll('.signup-action')].some(el=>el.textContent.trim()==='Iscriviti'),
        chronicles:[...card.querySelectorAll('.signup-action')].some(el=>el.textContent.trim()==='Cronache'),
        organizer:[...card.querySelectorAll('.fact span')].some(el=>el.textContent.trim()==='Organizzatore'),
        cost:[...card.querySelectorAll('.fact span')].some(el=>el.textContent.trim()==='Costo'),
        availability:[...card.querySelectorAll('.fact span')].some(el=>el.textContent.trim()==='Disponibilità')
      }));
      const completedInUpcoming=[...document.querySelectorAll('#upcoming-root .adunanza-card')].some(card=>card.dataset.status==='conclusa');
      const completedCount=document.querySelectorAll('#completed-root .adunanza-card[data-status="conclusa"]').length;
      const league=document.querySelector('#lega-blaze-of-glory-2026-2027');
      const leagueToggle=league?.querySelector('.league-toggle');
      const leagueStageRows=[...(league?.querySelectorAll('.league-stage-row')||[])];
      const leagueTop=[...(league?.querySelectorAll('.league-podium-card')||[])];
      return {
        count: cards.length,
        statuses,
        upcomingDates,
        chronological: JSON.stringify(upcomingDates) === JSON.stringify(sorted),
        hasCompleted: statuses.includes('conclusa'),
        completedInUpcoming,
        completedCount,
        league:{present:Boolean(league),expanded:leagueToggle?.getAttribute('aria-expanded')||'',stageCount:leagueStageRows.length,topCount:leagueTop.length,stageText:leagueStageRows.map(x=>x.textContent||'')},
        mapLinkCount:mapLinks.length,
        mapsValid:mapLinks.every(link=>link.href.startsWith('https://www.google.com/maps/search/?api=1&query=')&&link.target==='_blank'),
        details,
        overflow: {
          horizontal: scrollWidth > window.innerWidth + 2,
          scrollWidth,
          viewportWidth: window.innerWidth,
        },
      };
    });

    if (!national.count) throw new Error(`${viewport.name}: no national events rendered`);
    if (!national.hasCompleted || national.completedCount<1) throw new Error(`${viewport.name}: completed Adunanze are missing from unified calendar`);
    if (national.completedInUpcoming) throw new Error(`${viewport.name}: completed event leaked into upcoming group`);
    if (!national.league.present) throw new Error(`${viewport.name}: Blaze of Glory league card missing`);
    if (national.league.expanded!=='false') throw new Error(`${viewport.name}: league must be closed on normal entry`);
    if (national.league.stageCount!==8) throw new Error(`${viewport.name}: expected 8 numbered Blaze stages, got ${national.league.stageCount}`);
    if (national.league.topCount!==3) throw new Error(`${viewport.name}: Blaze Top 3 must render inside league`);
    if (!national.league.stageText.some(x=>x.includes('Tappa II')&&x.includes('Peasant'))) throw new Error(`${viewport.name}: E02 Peasant / Tappa II missing`);
    if (!national.league.stageText.some(x=>x.includes('Tappa IV')&&x.includes('Constructed Full'))) throw new Error(`${viewport.name}: E04 Constructed Full / Tappa IV missing`);
    if (!national.chronological) throw new Error(`${viewport.name}: upcoming events are not chronological`);
    if (national.mapLinkCount!==national.count||!national.mapsValid) throw new Error(`${viewport.name}: not every national event location links to Google Maps`);
    const upcomingDetails=national.details.filter(item=>item.status!=='conclusa');
    if (upcomingDetails.some(item=>!item.checkIn||!item.start||!item.rules||!item.prizes||!item.signup||!item.organizer||!item.cost||!item.availability)) {
      throw new Error(`${viewport.name}: an upcoming event is missing Nick v2 event metadata or controls`);
    }
    const concludedDetails=national.details.filter(item=>item.status==='conclusa');
    if(concludedDetails.some(item=>!item.chronicles))throw new Error(`${viewport.name}: concluded event lacks Cronache action`);
    if (national.overflow.horizontal) throw new Error(`${viewport.name}: national page horizontal overflow`);

    const assertPopoverFits=async(locator,label)=>{
      await locator.scrollIntoViewIfNeeded();
      const trigger=locator.locator('.info-trigger');
      await trigger.focus();
      await trigger.press('Enter');
      const pop=locator.locator('.event-popover');
      if(!await pop.isVisible()) throw new Error(`${viewport.name}: ${label} popover does not open on hover`);
      const bounds=await pop.evaluate(el=>{
        const r=el.getBoundingClientRect();
        return {
          left:r.left,right:r.right,top:r.top,bottom:r.bottom,
          viewportWidth:window.innerWidth,viewportHeight:window.innerHeight,
          scrollHeight:el.scrollHeight,clientHeight:el.clientHeight,
          overflowY:getComputedStyle(el).overflowY
        };
      });
      if(bounds.left<-1||bounds.right>bounds.viewportWidth+1||bounds.top<-1||bounds.bottom>bounds.viewportHeight+1){
        throw new Error(`${viewport.name}: ${label} popover is clipped/outside viewport ${JSON.stringify(bounds)}`);
      }
      if(bounds.scrollHeight>bounds.clientHeight && !['auto','scroll'].includes(bounds.overflowY)){
        throw new Error(`${viewport.name}: ${label} long content cannot be scrolled`);
      }
      await trigger.press('Escape');
      return bounds;
    };

    const peasant=page.locator('[data-event-id="bog-2026-duello-02"]');
    if(await peasant.count()!==1)throw new Error(`${viewport.name}: Stage II Peasant card missing`);
    const peasantSnapshot=await peasant.evaluate(card=>({
      title:card.querySelector('h3')?.textContent?.trim()||'',
      text:card.textContent||'',
      rules:card.querySelector('.rules-control .event-popover')?.textContent||'',
      prizes:card.querySelector('.prizes-control .event-popover')?.textContent||'',
      signup:card.querySelector('.signup-action')?.getAttribute('href')||''
    }));
    if(peasantSnapshot.title!=='Peasant')throw new Error(`${viewport.name}: Stage II title mismatch`);
    for(const expected of ['20:30–21:00','21:15','Joker - comics&games','Il Regno di Cremos','10 €']){
      if(!peasantSnapshot.text.includes(expected))throw new Error(`${viewport.name}: Stage II missing ${expected}`);
    }
    for(const expected of ['Ordinary: massimo 4 copie per carta.','Exceptional: massimo 3 copie per carta.','Elite e Unique: bandite.','DECKLIST OBBLIGATORIA']){
      if(!peasantSnapshot.rules.includes(expected))throw new Error(`${viewport.name}: Stage II rules missing ${expected}`);
    }
    for(const expected of ['Flaming Skull','Askelon Phoenix','Sir Tom Thumb','Highland Clansmen']){
      if(!peasantSnapshot.prizes.includes(expected))throw new Error(`${viewport.name}: Stage II prizes missing ${expected}`);
    }
    if(!peasantSnapshot.signup.includes('sorcerytcg.com/events/cmua2gkxc00090agm7qvfrh45')){
      throw new Error(`${viewport.name}: Stage II signup link mismatch`);
    }

    const leagueToggle=page.locator('#lega-blaze-of-glory-2026-2027 .league-toggle');
    await leagueToggle.focus();
    await page.keyboard.press('Enter');
    if(await leagueToggle.getAttribute('aria-expanded')!=='true')throw new Error(`${viewport.name}: league accordion does not open from keyboard`);
    if(!await page.locator('#lega-blaze-of-glory-2026-2027 .league-panel').isVisible())throw new Error(`${viewport.name}: league panel not visible after keyboard open`);
    await page.keyboard.press('Enter');
    if(await leagueToggle.getAttribute('aria-expanded')!=='false')throw new Error(`${viewport.name}: league accordion does not close from keyboard`);

    const firstRules=page.locator('#upcoming-root .adunanza-card .rules-control').first();
    const rulesBounds=await assertPopoverFits(firstRules,'Regolamento');

    const firstPrizes=page.locator('#upcoming-root .adunanza-card .prizes-control').first();
    const prizesBounds=await assertPopoverFits(firstPrizes,'Premi');

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
      JSON.stringify({ viewport, portal, skipFocus, focus, national, rulesBounds, prizesBounds, consoleErrors }, null, 2),
      'utf8'
    );

    await page.close();
  }

  const deepLinkPage=await browser.newPage({viewport:{width:390,height:844},reducedMotion:'reduce'});
  const deepErrors=[];
  deepLinkPage.on('console',msg=>{if(msg.type()==='error')deepErrors.push(msg.text());});
  deepLinkPage.on('pageerror',error=>deepErrors.push(String(error)));
  await deepLinkPage.goto(baseURL+'/beta/adunanze/nazionale/#lega-blaze-of-glory-2026-2027',{waitUntil:'networkidle',timeout:30000});
  await deepLinkPage.waitForSelector('#lega-blaze-of-glory-2026-2027 .league-toggle[aria-expanded="true"]',{timeout:10000});
  const deep=await deepLinkPage.evaluate(()=>({
    hash:location.hash,
    expanded:document.querySelector('#lega-blaze-of-glory-2026-2027 .league-toggle')?.getAttribute('aria-expanded'),
    panelHidden:document.querySelector('#lega-blaze-of-glory-2026-2027 .league-panel')?.hidden,
    activeCount:document.querySelectorAll('.league-toggle[aria-expanded="true"]').length
  }));
  if(deep.hash!=='#lega-blaze-of-glory-2026-2027'||deep.expanded!=='true'||deep.panelHidden||deep.activeCount!==1)
    throw new Error('Blaze deep-link does not auto-open exactly one league: '+JSON.stringify(deep));
  if(deepErrors.length)throw new Error('Deep-link browser errors: '+deepErrors.join(' | '));
  await deepLinkPage.close();

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
      hasHomepagePodium:Boolean(document.querySelector('#league-standings')),
      leagueHref:document.querySelector('[data-ica-id="HOME-LEG-02"]')?.getAttribute('href')||'',
    };
  });

  if (homeResult.staleFuture.length) {
    throw new Error(`Shared event data contains past dates still marked futura: ${JSON.stringify(homeResult.staleFuture)}`);
  }
  if (homeResult.rendered !== homeResult.expected) {
    throw new Error(`Homepage next event mismatch: rendered=${homeResult.rendered} expected=${homeResult.expected}`);
  }
  if(homeResult.hasHomepagePodium)throw new Error('Blaze Top 3 must not remain on homepage');
  if(homeResult.leagueHref!=='./adunanze/nazionale/#lega-blaze-of-glory-2026-2027')
    throw new Error('Homepage Blaze CTA deep-link mismatch: '+homeResult.leagueHref);
  if (homeErrors.length) throw new Error(`Homepage console errors: ${homeErrors.join(' | ')}`);
  await fs.writeFile(`${outDir}/homepage-next-event.json`, JSON.stringify(homeResult, null, 2), 'utf8');
  await home.close();
} finally {
  await browser.close();
}

// VR-0010 final verification trigger.
