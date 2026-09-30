# HEADER V2 image upload checklist

The standalone implementation at /beta/header-v2/ references the following exact paths.
These three **binary** files are available inside the user handoff ZIP: ICA_Header_V2_Preview_Package.zip.
The GitHub text-file connector cannot push the local binary assets directly; upload the files to this directory before considering the PR complete.

| Name | WebP size | SHA-256 |
|---|---:|---|
| banner-base.webp | 163,460 bytes | 1805ca98a419e54cc916a69c1f235c01a7b8f9df1c29a5512e0b36b815106778 |
| banner-youtube-hover.webp | 154,304 bytes | 1edf4e126bf557113b6665e63866c4463b6bc9b5804b8a7b424c25a2b5196a9f |
| banner-instagram-hover.webp | 163,460 bytes | 1805ca98a419e54cc916a69c1f235c01a7b8f9df1c29a5512e0b36b815106778 |

**Important:** the third image supplied as Instagram hover is byte-identical to the base image. The source needs replacing to make the intended Instagram glow visibly distinct; the hover CSS and event handling are already prepared.

Do not claim the experimental route is deployed or promote the V2 component to shared shell without its assets, destinations and visual approval.
