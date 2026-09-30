#!/usr/bin/env python3
"""Static dependency and immutable-position checks for the isolated beta-v2 preview.
Browser visual QA and missing binary assets are separate promotion gates.
"""
from pathlib import Path
root=Path(__file__).resolve().parents[1]
routes=("index.html","cronache/index.html","adunanze/index.html","adunanze/nazionale/index.html","avventurieri/index.html","alleanze/index.html")
shared=(root/"beta-v2/shared/header-v2.js").read_text(encoding="utf-8")
style=(root/"beta-v2/shared/header-v2.css").read_text(encoding="utf-8")
errors=[]
for page in routes:
    path=root/"beta-v2"/page
    if not path.is_file():
        errors.append("MISSING PAGE "+page);continue
    html=path.read_text(encoding="utf-8")
    for token in ('id="ica-v2-header"','beta-v2/shared/header-v2.css','beta-v2/shared/header-v2.js','content="noindex,nofollow"'):
        if token not in html:errors.append(page+": missing "+token)
    if 'class="site-nav"' in html:errors.append(page+": legacy header unexpectedly present")
    if 'content="index,follow"' in html:errors.append(page+": duplicate robots metadata")
    if "assets/logo-emblem.webp" in html:errors.append(page+": duplicate emblem in legacy header")
for token in (
    "--label-x:1.6045cqw;--label-y:.3705cqw", # LOCKED Adunanza
    "klass:'avventurieri',x:'3.4%',y:'69.423%'", # LOCKED Avventurieri
    "--label-x:-.738cqw", # LOCKED Alleanze
    "klass:'alleanze',x:'78.4%',y:'22.277%'",
    "banner-base-alpha.webp","banner-youtube-hover-alpha.webp","banner-instagram-hover.webp",
):
    if token not in (shared+"\n"+style):errors.append("shared: missing "+token)
if "new URL('../',import.meta.url)" not in shared:errors.append("Page-root URL resolution not found")
if "new URL('../../assets/header-v2/',import.meta.url)" not in shared:errors.append("Shared asset-root resolution not found")
if errors:
    print("Beta V2 static QA FAIL");print("\n".join(errors));raise SystemExit(1)
print("Beta V2 static QA PASS: 6 mirrored routes; no legacy header; approved labels and shared assets referenced.")
