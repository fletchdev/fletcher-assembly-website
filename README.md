# Fletcher Assembly website

Static site for fletcherassembly.com, hosted on Cloudflare Pages. No build step.

## Updating
- **Add a news post:** edit `data/news.json`, paste a new block at the top of `posts`.
- **Change text:** edit `index.html`. Placeholders are labelled "Placeholder".
- **Colours:** the variables (colours, fonts) at the top of `css/style.css`.
- **Logo:** the FLETCHER ASSEMBLY wordmark is plain text styled in `css/style.css` (`.wordmark`). Game logo: `assets/images/rustgrave-logo.png`.
- Commit and push to `main`; Cloudflare Pages redeploys automatically.

## Local preview
`python -m http.server 8000` then open http://localhost:8000
