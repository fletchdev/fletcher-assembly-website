# Fletcher Assembly website: project rules

Permanent instructions. Temporary progress notes belong in `PROJECT_STATUS.md`, not here.

## Identity
- Studio: **Fletcher Assembly**, an independent game studio. Site: https://fletcherassembly.com
- Featured game: **RUSTGRAVE** (post-apocalyptic stealth-action with horror and exploration elements)
- Purpose: a professional site showcasing the studio and its games. It is about the games, not a developer biography.

## Design language (preserve unless explicitly asked to change)
- Minimalist, industrial, atmospheric. Strong hierarchy, deliberate spacing, minimal ornament.
- Bold condensed typography: Barlow Condensed (headings), Barlow (body), IBM Plex Mono (small technical labels). Fonts are self-hosted.
- Dark charcoal backgrounds, off-white text, restrained lavender-purple accent (`--accent`). The RUSTGRAVE showcase is near-black.
- The wordmark is plain styled text (FLETCHER with letter-spaced ASSEMBLY beneath), monochrome, no symbol. Do not recreate it as an elaborate logo.
- The RUSTGRAVE logo is the supplied PNG. Never distort, recolour or recreate it.
- Angular buttons and thin borders. Avoid generic startup aesthetics, rounded or pill cards, decorative shapes, excess animation, and **numbered section headings**.
- Studio branding stays clean; only RUSTGRAVE carries the distressed identity.

## Structure
No build step. Static files only.
- `index.html`: single page. Sections: hero, `#games` (RUSTGRAVE), `#development`, `#contact`. Nav: Games / Development / Contact.
- `css/style.css`: the whole design system. Colours, fonts and widths are variables in `:root`.
- `js/main.js`: mobile menu, footer year, and rendering of development posts.
- `data/news.json`: **development updates**. Add a post by pasting a block at the top of `posts` (`date` as YYYY-MM-DD, `title`, `tag`, `body`). Keep valid JSON.
- `assets/images/rustgrave-logo.png`: the game logo. `assets/images/fletcher-logo-reference.png` is a low-res reference only, not used on the site.
- `assets/fonts/`: self-hosted woff2 files. `assets/favicon.svg`: favicon.
- `404.html`, `robots.txt`, `sitemap.xml`: SEO and error page. Update `sitemap.xml` if pages are added.
- `CNAME` and `.nojekyll` are leftovers from an earlier GitHub Pages setup; Cloudflare ignores them.

## Preview and test
- Preview: `python -m http.server 8000`, then open http://localhost:8000 (needed because the news loads via `fetch`).
- Check desktop and mobile widths, no horizontal overflow, no missing assets, `node --check js/main.js` after JS edits.

## Hosting and deployment
- Source is in the GitHub repo `fletchdev/fletcher-assembly-website` (public), branch `main`.
- **Cloudflare Pages** hosts production. Pushing to `main` deploys automatically.
- Porkbun is the registrar; Cloudflare manages DNS.
- **Do not modify domain, DNS, email routing or hosting configuration unless explicitly asked.**

## Workflow
- Prefer focused changes over redesigns. Remove CSS/HTML that becomes unused.
- Keep it responsive and accessible (contrast, focus states, semantic headings, alt text).
- Test before committing. Commit and push only when asked.
- Avoid new dependencies and external requests; no tracking or cookies.
- Never add fake screenshots, release dates, platforms, press claims or unconfirmed game features. Use only content the owner has supplied.
- Keep secrets and personal details out of the repo and its documentation.
- After substantial changes, update `PROJECT_STATUS.md`.
