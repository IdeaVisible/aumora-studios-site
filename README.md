# Aumora Studios website prototype

A clean, responsive, multi-page static website built with plain HTML, CSS and a small amount of JavaScript. No framework, package manager or build step is required.

## Open it

Open `index.html` directly in a browser, or serve the folder with any basic static web server.

Example with Python:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000` from inside this folder.

## Public page structure

- `index.html` — Home
- `services.html` — Services overview
- `application-development.html`
- `web3-development.html`
- `game-development.html`
- `interactive-experiences.html`
- `projects.html` — Current studio work
- `engagement-models.html`
- `support-maintenance.html`
- `about.html`
- `contact.html`

## Internal planning page

- `summary.html` — condensed site map, positioning logic and starter copy for every public page

Remove the blueprint link from the footer before publishing the production site.

## Important prototype notes

1. The contact form is intentionally not connected to email or a CRM. Its submit handler only displays a local prototype message.
2. Project descriptions and status labels should be reviewed before public launch.
3. Add approved project imagery, a real domain, a studio email address and social links.
4. Add jurisdiction-appropriate privacy, cookie and terms pages once the hosting, analytics and form setup are known.
5. The visible budget bands on the contact form are editable starter values, not pricing commitments.
6. The site uses no external fonts or libraries, so it works offline and has a small delivery footprint.

## Styling

Global styles are in `assets/styles.css`. The core brand variables sit at the top of that file:

- `--night` and `--ink` control the dark corporate base
- `--gold` and `--gold-dark` provide the restrained AU/gold accent
- `--soft` controls alternate section backgrounds
- `--max` controls content width

## Deployment

This folder can be deployed directly to Netlify, Cloudflare Pages, GitHub Pages, an S3-compatible static host, or a conventional web server. A dynamic form endpoint can be connected later without rewriting the rest of the site.
