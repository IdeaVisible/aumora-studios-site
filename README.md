# Aumora Studios website prototype

A clean, responsive, multi-page static website built with plain HTML, CSS and a small amount of JavaScript. No framework, package manager or build step is required.

## Open it

Open `index.html` directly in a browser, or serve the folder with any basic static web server.

Example with Python:

```bash
python -m http.server 4173 --bind 127.0.0.1
```

Then visit `http://127.0.0.1:4173` from inside this folder.

## Public page structure

- `index.html` — Home
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
- `privacy-policy-pew-pew-vroom-vroom.html` — product supplement for Android version 1.08 (code 109)

## Internal planning page

- `summary.html` — condensed site map, positioning logic and starter copy for every public page

The internal planning page is marked `noindex, nofollow` and excluded from public navigation.

## Important prototype notes

- The contact form prepares an email draft to `info@aumorastudios.com`, with a copy fallback. The visitor sends it through their email app. No backend delivery or storage is configured.
- Project descriptions and status labels should be reviewed before public launch.
- Add approved project imagery, a real domain, a studio email address and social links.
- Keep the studio-wide privacy policy and product supplements aligned with the actual hosting, integrations, data practices and audiences. Add any necessary cookie and terms notices when those details are known.
- The visible budget bands on the contact form are editable starter values, not pricing commitments.
- Public pages use no external fonts or libraries. The homepage displays the existing 101 KB WebP scene immediately; the WebGL engine, model and textures only load in the preserved interactive `backup.html`.

## Privacy notices

Use `privacy-policy.html` as the shared privacy URL for Aumora games, apps, websites, software and related services. It covers Aumora's own processing; client-operated products also need the responsible client's notice.

The policy describes feature-dependent categories without asserting that every product has accounts, advertising, analytics, purchases or cloud storage. Product notices must identify the actual data, purposes and lawful bases, providers, retention arrangements, international transfers, audience protections and user controls for each relevant release. Match these disclosures to the implementation and store declarations before publishing. Confirm the responsible legal entity and contact details, including any address or representative details required for the relevant jurisdiction; the policy retains the existing `games@aumorastudios.com` contact.

The Pew Pew Vroom Vroom supplement was updated on 27 October 2026 for Android version 1.08 (code 109), using the prepared release disclosure at `C:/Gamedev/vroompew/release/privacypolicy.html` and the verified release build report. It describes live AdMob ad units, UMP consent and privacy options, optional Google Play purchases, and local purchase receipts and delivery records. Keep it aligned with the applicable game release and store declarations; these details should not be assumed to apply to other versions. The shared studio policy and other games' supplements remain in place.

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

## Homepage performance and original backup

The live multi-page layout, full Aumora logo, font sizes and 0.55-second scroll reveal transitions are retained. All public headers use Home, Services, Portfolio, Engagement, About and a Reach Out button pointing to `contact.html#project-form`. Services opens an accessible dropdown with direct links to the five service pages; there is no separate overview page.

`index.html` keeps the original giant-sculpture scene as `assets/3d/poster.webp`, with high fetch priority. It does not load `hero-loader.js`, `hero3d.bundle.js`, the GLB model or the interactive scene controls. Its sections use the same dark studio styling as the other pages. Above-the-fold text is immediately visible; off-screen sections retain their reveal transitions.

`backup.html` preserves the original interactive homepage and references the original 3D assets. It is marked `noindex, nofollow` and is not linked from public navigation. Open it locally when comparing the old interactive version. Do not delete `assets/3d/`, `hero3d.bundle.js`, `hero-loader.js`, `hero3d.css` or `hero.js` while retaining this backup.

Preview all changes locally before pushing to the existing Git remote. No deployment configuration has changed.

## Portfolio images and Roblox links

The featured order is PiCO Defenders: Toy Tower Defense, PiCO Paradise, PiCO Card Game, then Tillerion. The homepage highlights the three Roblox games; Aurena is omitted.

The PiCO screenshots and artwork in `assets/projects/` come from the games' public Roblox listings, opened through the PiCO Community Creator Dashboard on 31 October 2026. Defenders uses a gameplay screenshot; Paradise and Card Game use their existing promotional thumbnails. All three images are local WebP files with explicit dimensions and lazy loading (about 312 KB combined).

- PiCO Defenders: `https://www.roblox.com/games/93953719707297/PiCO-Defenders-Toy-Tower-Defense`
- PiCO Paradise: `https://www.roblox.com/games/110658971379587/Pico-Paradise`
- PiCO Card Game: `https://www.roblox.com/games/87038677431716/Pico-Card-Game`

These public game links appear on both the homepage cards and the full portfolio entries. No Roblox dashboard metrics or account details are included in the website.
