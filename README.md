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
- `privacy-policy.html` — studio-wide privacy policy for Aumora products and services
- `privacy-policy-gardenhold.html` — Gardenhold Android 1.0.1 (code 3) closed-test supplement
- `privacy-policy-temple-topple.html` — Temple Topple Android 1.03 (code 103) closed-test supplement
- `privacy-policy-pew-pew-vroom-vroom.html` — product supplement for version 1.03's closed test

## Internal planning page

- `summary.html` — condensed site map, positioning logic and starter copy for every public page

Remove the blueprint link from the footer before publishing the production site.

## Important prototype notes

1. The contact form is intentionally not connected to email or a CRM. Its submit handler only displays a local prototype message.
2. Project descriptions and status labels should be reviewed before public launch.
3. Add approved project imagery, a real domain, a studio email address and social links.
4. Keep the studio-wide privacy policy and product supplements aligned with the actual hosting, integrations, data practices and audiences. Add any necessary cookie and terms notices when those details are known.
5. The visible budget bands on the contact form are editable starter values, not pricing commitments.
6. The site uses no external fonts or libraries, so it works offline and has a small delivery footprint.

## Privacy notices

Use `privacy-policy.html` as the shared privacy URL for Aumora games, apps, websites, software and related services. It covers Aumora's own processing; client-operated products also need the responsible client's notice.

The policy describes feature-dependent categories without asserting that every product has accounts, advertising, analytics, purchases or cloud storage. Product notices must identify the actual data, purposes and lawful bases, providers, retention arrangements, international transfers, audience protections and user controls for each relevant release. Match these disclosures to the implementation and store declarations before publishing. Confirm the responsible legal entity and contact details, including any address or representative details required for the relevant jurisdiction; the policy retains the existing `games@aumorastudios.com` contact.

The Pew Pew Vroom Vroom supplement preserves the existing version 1.03 closed-test disclosures dated 18 September 2026. Those settings have not been revalidated against game source code in this repository and should not be treated as statements about later releases. Link future supplements from the main policy and make each available from the relevant product.

The Gardenhold and Temple Topple supplements were checked on 23 October 2026 against the local projects at `C:/Gamedev/gardenhold` and `C:/Gamedev/temple-topple`: runtime save/settings code, in-game privacy notices, `release/android.json`, export scripts and generated release Android manifests. The applicable Android versions are Gardenhold 1.0.1 (code 3) and Temple Topple 1.03 (code 103); older engine-project version labels do not identify those Android releases. Both releases use local saves, request no Android permissions, disable standard Android cloud backup and have no ads, billing, accounts or analytics. Device-to-device migration can still depend on the Android device manufacturer.

Both games already point to the shared `https://www.aumorastudios.com/privacy-policy.html` URL. The main page now links to both supplements, so those existing in-game links remain valid. Ads and purchases are deferred in their release metadata; update these notices and store declarations before enabling them. No game rebuilds or Play Console declaration changes are included in this website update.

## Styling

Global styles are in `assets/styles.css`. The core brand variables sit at the top of that file:

- `--night` and `--ink` control the dark corporate base
- `--gold` and `--gold-dark` provide the restrained AU/gold accent
- `--soft` controls alternate section backgrounds
- `--max` controls content width

## Deployment

This folder can be deployed directly to Netlify, Cloudflare Pages, GitHub Pages, an S3-compatible static host, or a conventional web server. A dynamic form endpoint can be connected later without rewriting the rest of the site.
