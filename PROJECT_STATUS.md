# Project status

Last updated: 2026-11-11

## Deployment state
- Live at https://fletcherassembly.com, served by Cloudflare over HTTPS. `www` redirects to the root domain.
- Production host is Cloudflare Pages, deploying from `main` on GitHub. Latest design confirmed live.

## Completed
- Header: centered container, text wordmark, nav (Games / Development / Contact), mobile menu.
- Hero: two-line headline "ATMOSPHERIC WORLDS. / ASSEMBLED BY HAND." (lavender on "BY HAND."), description ("Creating atmospheric, art-led games shaped by tension, exploration and discovery."), buttons Explore RUSTGRAVE and Development log.
- RUSTGRAVE showcase: centered stack of the official logo, description, genres (Stealth, Action, Horror, Exploration), "In development". Uniform near-black `#08080a` background, with a 9rem vertical ease from the hero charcoal at the very top only (verified by computed style and rendered pixels). No glow or overlays.
- Development updates driven by `data/news.json` (one launch post so far).
- Contact: "For collaborations and general enquiries:" plus `contact@fletcherassembly.com` as a `mailto:` link. The owner confirmed this mailbox is active.
- Self-hosted fonts, SEO basics (title, description, canonical, Open Graph, sitemap, robots), custom 404.

## Outstanding issues
- Leftover GitHub Pages is still enabled on the repo (reports an errored build, with `CNAME` and `.nojekyll` in the repo). It is not used in production. The owner may disable it in repo Settings, then those two files can be removed.
- Open Graph image is the white RUSTGRAVE logo (transparent PNG), which may look poor in link previews. A proper dark share image would be better.
- No real screenshots, trailer, platforms, release date or social links exist yet; none are shown.
- Mobile checked only down to about 500px wide in a headless browser, not on a real phone.

## Planned improvements
- Add real RUSTGRAVE screenshots or trailer when the owner supplies them.
- Add social links when accounts exist.
- Regular development posts in `data/news.json`.
- Create a dark Open Graph share image.

## Key decisions
- Pure static site, no framework, no build, no tracking, no external requests (fonts self-hosted).
- The About section was removed deliberately: the site showcases games, not the developer. Do not re-add a biography.
- Section numbering was removed deliberately; do not reintroduce it.
- The previous angular "F" monogram was dropped in favour of the typographic wordmark. The favicon is a plain F.
- Fletcher Assembly is an independent identity around one developer: copy must stay understated, never imply a large team or publisher (hero text deliberately omits the studio name).
- CSS/JS URLs carry a `?v=` version because Cloudflare gives them a 4-hour browser cache; stale CSS was the likely reason an earlier background change looked unchanged. Bump `v=` on every CSS/JS change (see CLAUDE.md).
- Never present unconfirmed information (dates, features, press) as fact.
