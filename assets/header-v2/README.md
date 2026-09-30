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


## Instagram glow asset replacement (2026-09-30)

The previous banner-instagram-hover.webp had SHA-256 identical to the base and did not illuminate. It is **superseded** by a distinct 1536×512 RGBA WebP feathered overlay made from the newly approved original PNG master (2048×682):

- Path to upload: `assets/header-v2/banner-instagram-hover.webp`
- Size: **245686 bytes**
- SHA-256: `bdd95cd548893303f88be77ad19fc18cfbc939de7cdd0bda3d04c0dc2edbf1ba`
- Source: Library /In Cerca di Avventura/Header V2/Source Assets/ICA_HEADER_V2_INSTAGRAM_GLOW_APPROVED.png
- This transparent WebP changes only the orb region; original base and YouTube asset remain unchanged.
- The CSS clip is now `ellipse(8.5% 27% at 69.0% 55%)` to avoid cutting off the glow.

A fully functional and browser-tested self-contained preview is available as `ICA_Header_V2_Instagram_Glow_Funzionante.html` in the conversation, and the ready-to-upload binaries as `ICA_Header_V2_Instagram_Glow_Fix.zip`. The binary file has not yet been committed by the GitHub text connector. Keep this PR Draft until it is present along with the other required assets and official external URLs.
