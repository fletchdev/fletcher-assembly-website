# Fletcher Assembly website

Static site for fletcherassembly.com, hosted on GitHub Pages. No build step.

## Updating
- **Add a news post:** edit `data/news.json`, paste a new block at the top of `posts`.
- **Change text:** edit `index.html`. Placeholders are labelled "Placeholder".
- **Colours:** the variables at the top of `css/style.css`.
- **Logo:** `assets/logo.svg`.
- Commit and push to `main`; GitHub Pages redeploys in about a minute.

## Local preview
`python -m http.server 8000` then open http://localhost:8000
