import fs from 'node:fs/promises';
import path from 'node:path';

const dir = process.argv[2] || 'artifacts/adunanze-lighthouse';
const files = (await fs.readdir(dir)).filter(name => name.endsWith('.json')).sort();
if (!files.length) throw new Error(`No Lighthouse JSON reports found in ${dir}`);

const thresholds = {
  performance: 0.90,
  lcpMs: 2500,
  cls: 0.10,
};

const summary = [];
let failed = false;

for (const file of files) {
  const report = JSON.parse(await fs.readFile(path.join(dir, file), 'utf8'));
  const perf = report.categories?.performance?.score ?? null;
  const a11y = report.categories?.accessibility?.score ?? null;
  const seo = report.categories?.seo?.score ?? null;
  const lcp = report.audits?.['largest-contentful-paint']?.numericValue ?? null;
  const cls = report.audits?.['cumulative-layout-shift']?.numericValue ?? null;

  const row = {
    file,
    url: report.finalDisplayedUrl || report.finalUrl || null,
    performance: perf,
    accessibility: a11y,
    seo,
    lcp_ms: lcp,
    cls,
    pass: Boolean(
      perf !== null && perf >= thresholds.performance &&
      lcp !== null && lcp <= thresholds.lcpMs &&
      cls !== null && cls <= thresholds.cls
    ),
  };
  summary.push(row);
  if (!row.pass) failed = true;
}

await fs.writeFile(
  path.join(dir, 'summary.json'),
  JSON.stringify({ thresholds, reports: summary }, null, 2),
  'utf8'
);

for (const row of summary) {
  console.log(
    `${row.pass ? 'PASS' : 'FAIL'} ${row.file} | perf=${row.performance} | a11y=${row.accessibility} | seo=${row.seo} | LCP=${Math.round(row.lcp_ms ?? -1)}ms | CLS=${row.cls}`
  );
}

if (failed) {
  console.error('Adunanze Lighthouse gate failed one or more M12 performance thresholds.');
  process.exit(1);
}

// VR-0010 final verification trigger.
// Re-run after gate-frame removal.
