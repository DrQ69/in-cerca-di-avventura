#!/usr/bin/env python3
"""Static dependency and immutable-position checks for the isolated beta-v2 preview.
Browser visual QA and missing binary assets are separate promotion gates.
"""
from pathlib import Path
import hashlib
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
expected_assets={
    "banner-base-alpha.webp":("eb14ab715e4733ff3d8b4cebdff3c1ff1f3102916ae82aa3bb49add6be84a205",244908),
    "banner-base.webp":("1805ca98a419e54cc916a69c1f235c01a7b8f9df1c29a5512e0b36b815106778",163460),
    "banner-instagram-hover.webp":("bdd95cd548893303f88be77ad19fc18cfbc939de7cdd0bda3d04c0dc2edbf1ba",245686),
    "banner-youtube-hover-alpha.webp":("9de069ff1b5b59650335fd6fbd1e47168ab17489bebb80ccff66b194d90d17c9",234214),
    "banner-youtube-hover.webp":("1edf4e126bf557113b6665e63866c4463b6bc9b5804b8a7b424c25a2b5196a9f",154304),
}
for filename,(digest,size) in expected_assets.items():
    asset=root/"assets/header-v2"/filename
    if not asset.is_file():
        errors.append("missing asset: "+str(asset));continue
    data=asset.read_bytes()
    if len(data)!=size or hashlib.sha256(data).hexdigest()!=digest:
        errors.append("asset integrity mismatch: "+filename)
    if not (data[:4]==b"RIFF" and data[8:12]==b"WEBP"):
        errors.append("asset not WebP: "+filename)
if errors:
    print("Beta V2 static QA FAIL");print("\n".join(errors));raise SystemExit(1)
print("Beta V2 static QA PASS: 6 mirrored routes; no legacy header; approved labels; all 5 WebP assets SHA-256 verified.")
