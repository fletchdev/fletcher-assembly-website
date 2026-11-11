# Project status

Last updated: 2026-11-11 (end of first build session)

## Deployment state
- Live at https://fletcherassembly.com on Cloudflare Pages (HTTPS working; `www` redirects to the root domain; custom 404 page works).
- Deploys automatically from `main` on GitHub (`fletchdev/fletcher-assembly-website`). Commit `c9acdec` was the latest at the end-of-session check. Local `main` and `origin/main` were identical, the working tree was clean, and the live CSS, JS and news data matched the repo byte for byte.
- Current cache-bust version: `?v=20261111d` (CSS and JS links in `index.html` and `404.html`).

## Current website state
Single static page, no build step.
- **Header:** centered container, text wordmark (FLETCHER / letter-spaced ASSEMBLY), nav Games / Development / Contact, mobile menu button.
- **Hero:** two-line headline "ATMOSPHERIC WORLDS. / ASSEMBLED BY HAND." (lavender on "BY HAND."), paragraph "Creating atmospheric, art-led games shaped by tension, exploration and discovery.", buttons Explore RUSTGRAVE and Development log. No label above, no info strip below.
- **Games / RUSTGRAVE:** centered stack of the official logo, description, genres (Stealth, Action, Horror, Exploration) and "In development". Background `#08080a`, with a 9rem ease from the hero charcoal at the very top only. No screenshots (none supplied).
- **Development:** posts rendered from `data/news.json` (one launch post).
- **Contact:** "For collaborations and general enquiries:" plus `contact@fletcherassembly.com` (the owner confirmed the mailbox works).
- Self-hosted fonts (Barlow Condensed, Barlow, IBM Plex Mono), SEO basics (title, description, canonical, Open Graph, sitemap, robots), custom 404.

## Work completed this session
1. Built the site from scratch, created the public GitHub repo, first deployment.
2. Full visual redesign: industrial identity, new typography, typographic wordmark, RUSTGRAVE logo showcase.
3. Simplification: two-line hero, removed hero label, info strip and the About section; nav reduced to three items.
4. Removed section numbering; section labels are lavender uppercase mono text with a thin line.
5. Contact and hero copy refined; temporary "being set up" note removed.
6. RUSTGRAVE background tuned several times (see decisions), landing on `#08080a` with a soft top transition.
7. Added `CLAUDE.md` and this file.

## Outstanding issues
- **Cloudflare email obfuscation:** Cloudflare rewrites the live contact link into a JavaScript-decoded `[email protected]` link (it injects `/cdn-cgi/scripts/.../email-decode.min.js`). It works for normal visitors, but shows "[email protected]" with JS off and is not a plain `mailto:` for crawlers. Fix options: turn off "Email Address Obfuscation" in the Cloudflare dashboard (a hosting setting, so the owner's decision), or wrap the address in `<!--email_off-->...<!--/email_off-->` in `index.html`. Not done yet.
- **Leftover GitHub Pages:** still enabled on the repo (latest build status `built`) with `CNAME` and `.nojekyll` in the repo. Unused in production. The owner may disable it under repo Settings, after which both files can be removed.
- **Open Graph image:** currently the white RUSTGRAVE logo (transparent PNG), which may look poor in link previews. A dark share image is needed.
- **Meta description** starts "Creating atmospheric..." and no longer names the studio. Optional SEO tweak.
- **Mobile testing** was done only with a headless browser down to about 500px wide, not on a real phone.
- `assets/images/fletcher-logo-reference.png` is unused (kept as a reference).

## Planned improvements
- Real RUSTGRAVE screenshots or trailer once supplied.
- Social links once accounts exist.
- Regular development posts in `data/news.json`.
- Dark Open Graph share image.

## Key decisions
- Pure static site; no framework, build, tracking or external requests.
- About section removed deliberately (the site showcases games, not the developer). Do not re-add a biography.
- Section numbering removed deliberately; do not reintroduce it.
- Typographic wordmark replaced the earlier angular F monogram; the favicon is a plain F.
- Copy must feel like one independent developer: no implication of a large team or publisher; never state unconfirmed dates, platforms, features or press.
- RUSTGRAVE background history: grey gradient, then `#030304`, then `#000`, then `#08080a` with a top ease. An earlier "no visible change" was most likely a stale 4-hour browser cache of the CSS, since the server and computed styles were correct. Hence the `?v=` cache-busting: **bump it on every CSS/JS change**.
- Verify visual changes by sampling rendered pixels or computed styles, not by assuming.
