# CritMatch Research Website

Marketing website for CritMatch Research, designed as a fast static site.

## Local preview

Because this is a static site, you can preview it with any web server.

```bash
cd /workspaces/CritMatch-Research-Website
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Files

- `index.html`: Main page structure and content.
- `styles.css`: Visual system, layout, responsiveness, and animations.
- `script.js`: Mobile menu, scroll-reveal effects, and footer year.
- `CNAME`: Custom domain for GitHub Pages.

## Publish on GitHub Pages with `critmatchresearch.com`

1. Push this repository to GitHub.
2. In GitHub, open repository Settings -> Pages.
3. Under Build and deployment, choose:
	- Source: Deploy from a branch
	- Branch: `main`
	- Folder: `/ (root)`
4. Confirm the custom domain is `critmatchresearch.com` (the `CNAME` file is included).
5. In your DNS provider for `critmatchresearch.com`, add these records:

For apex/root domain (`critmatchresearch.com`):

- `A` -> `185.199.108.153`
- `A` -> `185.199.109.153`
- `A` -> `185.199.110.153`
- `A` -> `185.199.111.153`

For `www.critmatchresearch.com`:

- `CNAME` -> `bevroy.github.io`

6. Wait for DNS propagation (often a few minutes, can take up to 24-48 hours).
7. In GitHub Pages settings, enable Enforce HTTPS after the certificate is issued.

## Optional next improvements

- Replace placeholder copy with your exact positioning and offers.
- Wire the contact form to Formspree/Netlify Forms or your backend endpoint.
- Add analytics (Plausible, GA4, or PostHog).
