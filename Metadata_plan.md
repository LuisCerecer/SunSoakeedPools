# Metadata_plan.md

## 1. Executive summary — checklist

- [ ] Confirm there is **no `Bolt` / `Bolt.new` / `meta name="generator"`** in the live production HTML (even though the repo and `dist/index.html` are clean).
- [ ] Document that the only current metadata in `index.html` / `dist/index.html` is `<title>Welcome</title>` plus basic charset/viewport tags.
- [ ] Acknowledge that any “Bolt.new” still visible in search/social is likely from an **external layer** (hosting, proxy, legacy generator, or cached HTML).
- [ ] Confirm that all logical routes (Home, About, Process, Contact, RequestQuote) are rendered from a **single HTML shell** (`index.html` → `dist/index.html`) via the SPA.
- [ ] Record that crawlers without JS currently see the **same weak metadata for every URL** (title only, no description/canonical/OG/Twitter/robots/structured data).

## 2. Current-state metadata inventory — checklist

- [ ] Verify current `<title>` in `index.html` / `dist/index.html` is `Welcome` and log it as **generic / non-brand / non-keyword**.
- [ ] Confirm **no `<meta name="description">`** exists in `index.html` or `dist/index.html`.
- [ ] Confirm **no `<link rel="canonical">`** exists anywhere in the repo.
- [ ] Confirm **no `<meta name="robots">`** directives exist for any page.
- [ ] Confirm there is **no `/robots.txt`** file in the repo.
- [ ] Confirm there is **no `sitemap.xml`** file in the repo.
- [ ] Confirm there is **no explicit site name signal** (no brand in `<title>` pattern, no `WebSite.name` in structured data).
- [ ] Confirm there are **no favicon tags or favicon files** referenced in the repo.
- [ ] Confirm there are **no Open Graph tags** (`og:title`, `og:description`, `og:site_name`, `og:image`, etc.) in `index.html` / `dist/index.html`.
- [ ] Confirm there are **no X/Twitter Card tags** (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`, etc.).
- [ ] Confirm there are **no JSON-LD blocks** for `WebSite`, `Organization`, or `LocalBusiness`.
- [ ] Confirm there is **no `application-name` or `apple-mobile-web-app-title`** meta tag.
- [ ] Confirm there is **no `<meta name="generator">`** present after build.
- [ ] Confirm routing is **state-based SPA only**, so crawlers see identical metadata for all URLs.

## 3. Target metadata spec (brand-correct) — checklist

### 3.1 Site name

- [ ] Approve **primary site name**: `SunSoakedPools` (from `COPY_IMPROVEMENTS.md`).
- [ ] Approve **display / marketing name**: e.g., **“OC Sun Soaked Pools”** (**needs owner input**).
- [ ] Decide any **alternate names** (e.g., `Sun Soaked Pools`, `OC Sun Soaked Pools LLC`).
- [ ] Confirm the **exact string** to use for `og:site_name` and JSON-LD `WebSite.name`.

### 3.2 Title strategy

- [ ] Approve a **global title template** (best-practice, no case study cited): `Primary keyword + service + location | OC Sun Soaked Pools`.
- [ ] Approve homepage title candidate: `Professional Pool Service in Orange County | OC Sun Soaked Pools` (**needs owner input**).
- [ ] Approve About page title candidate: `About OC Sun Soaked Pools | Certified Pool Service in Orange County` (**needs owner input**).
- [ ] Approve Process page title candidate: `How Our Pool Service Works | OC Sun Soaked Pools` (**needs owner input**).
- [ ] Approve Contact page title candidate: `Contact OC Sun Soaked Pools | Free Pool Service Quote` (**needs owner input**).
- [ ] Approve Request Quote page title candidate: `Get a Free Pool Service Quote | OC Sun Soaked Pools` (**needs owner input**).
- [ ] Ensure each logical route will have a **unique, descriptive `<title>`** in line with Google’s recommendations \([g-title-links]\).

### 3.3 Meta description strategy

- [ ] Approve a **global description pattern** (best-practice, no case study cited): 1–2 sentences, ~120–160 chars, including service, location, differentiators, and CTA.
- [ ] Approve homepage meta description candidate (based on existing copy):  
  - [ ] `Certified pool maintenance, cleaning & repair in Orange County. Weekly service with chemical reports. Licensed & insured. Get a free quote — (949) 736-2671.` (**needs owner input / legal review**).
- [ ] Draft and approve **About** page description aligned with About content (**needs owner input**).
- [ ] Draft and approve **Process** page description aligned with how-it-works content (**needs owner input**).
- [ ] Draft and approve **Contact** page description focused on getting in touch / quote (**needs owner input**).
- [ ] Draft and approve **Request Quote** page description focused on quote flow (**needs owner input**).

### 3.4 Canonical URL rules

- [ ] Decide the **canonical domain** (e.g., `https://ocsunsoakedpools.com`) (**needs owner input**).
- [ ] Document whether the **canonical host** should include `www` or not (`https://www.example.com` vs `https://example.com`).
- [ ] Define a rule that each primary page has a **self-referencing canonical** URL.
- [ ] Decide how to handle any **duplicate URLs or query-parameter variants** in future (best-practice, no case study cited, based on \([g-canon]\)).

### 3.5 Open Graph fields

- [ ] Decide base OG values for all pages, in line with the Open Graph spec \([og-spec]\):
  - [ ] `og:type` = `website`.
  - [ ] `og:site_name` = approved brand string.
  - [ ] `og:locale` = `en_US` (or alternative if needed).
- [ ] Confirm each page will specify:
  - [ ] `og:title` matching or closely mirroring `<title>`.
  - [ ] `og:description` matching meta description.
  - [ ] `og:url` matching the canonical URL for that page.
- [ ] Choose or design a **homepage OG image** (ideally 1200×630, best-practice, no case study cited) and its public URL (**needs owner input**).
- [ ] Decide whether inner pages will **reuse** the homepage OG image or have **page-specific images**.

### 3.6 X/Twitter card fields

- [ ] Confirm use of `summary_large_image` card type per X docs \([x-cards]\).
- [ ] Decide `twitter:site` handle (e.g., `@ocsunsoakedpools`) (**needs owner input**).
- [ ] Decide whether to set a `twitter:creator` handle (**needs owner input**).
- [ ] Confirm mapping:
  - [ ] `twitter:title` ⇔ `og:title`.
  - [ ] `twitter:description` ⇔ `og:description`.
  - [ ] `twitter:image` ⇔ `og:image`.

### 3.7 Favicon set

- [ ] Approve a **favicon design** derived from `/image.png` (**needs owner input**).
- [ ] Generate favicon assets (best-practice, no case study cited):
  - [ ] `favicon.ico` or square PNG 48–192px at root.
  - [ ] `favicon-32x32.png`.
  - [ ] `favicon-16x16.png`.
  - [ ] `apple-touch-icon.png` (180×180).
- [ ] Confirm the final file names and paths for all favicon assets.
- [ ] Confirm that head markup will reference these exact paths per Google’s favicon guidelines \([g-favicons]\).

### 3.8 Structured data

- [ ] Approve `WebSite` JSON-LD fields (best-practice, no case study cited, per \([g-site-names]\)):
  - [ ] `name` (primary site name).
  - [ ] `alternateName` (if any).
  - [ ] `url` (canonical homepage URL).
- [ ] Decide whether to include an optional `SearchAction` (only if site search will exist later).
- [ ] Approve `LocalBusiness` (or more specific subtype) JSON-LD fields (best-practice, no case study cited):
  - [ ] `name`.
  - [ ] `image` (logo or hero image URL).
  - [ ] `address` (full postal address).
  - [ ] `telephone` (e.g., `(949) 736-2671`).
  - [ ] `url` (homepage URL).
  - [ ] `areaServed` (list of Orange County cities).
  - [ ] Any additional fields like `openingHours` and `geo` if desired.

## 4. Implementation options — checklist

### Option A: Minimal shell-level metadata (single HTML shell)

- [ ] Decide if **Option A** will be used as the **initial, fastest rollout**.
- [ ] If yes, commit that `index.html` will be the **single source of truth** for:
  - [ ] `<title>` and `<meta name="description">`.
  - [ ] `<link rel="canonical">`.
  - [ ] Favicon `<link>` tags.
  - [ ] OG tags.
  - [ ] X/Twitter Card tags.
  - [ ] `WebSite` and `LocalBusiness` JSON-LD.
- [ ] Accept that all routes will share **one set of shell-level metadata** until routing is upgraded (best-practice note only; see \([g-title-links]\), \([g-snippets]\)).

### Option B: Scalable per-route metadata with real URLs

- [ ] Decide if **Option B** (router + per-route metadata) is a **Phase 2+** goal.
- [ ] Choose a routing library (e.g., React Router) for this SPA (**needs owner input on tech preference**).
- [ ] Plan a new `seoConfig` module with per-route metadata (titles, descriptions, OG/Twitter, paths).
- [ ] Decide whether to use `react-helmet-async` or similar for client-side `<head>` management.
- [ ] Confirm that each page component (`Home.jsx`, `About.jsx`, `Process.jsx`, `Contact.jsx`, `RequestQuote.jsx`) will eventually:
  - [ ] Have its own route path.
  - [ ] Read from `seoConfig` to set `<title>`/meta/OG/Twitter tags.
- [ ] Accept tradeoffs of client-side metadata vs. SSR, based on official docs and case studies (\([g-title-links]\), \([searchpilot-title-test]\), \([trustradius-title-tests]\); performance implications noted but not guaranteed).

## 5. Implementation steps — actionable checklist

### Step 1 — Confirm external “Bolt.new” origin

- [ ] Open **live production URL** in browser and use “View Source” to search for `Bolt`, `Bolt.new`, and `meta name="generator"`.
- [ ] Run `curl -L https://your-production-domain/` and search for `Bolt` / `Bolt.new` in the raw HTML.
- [ ] Compare live HTML with local `dist/index.html` to confirm any “Bolt.new” is **not** coming from this repo.
- [ ] If “Bolt.new” appears live but not in `dist/index.html`, document **exactly where** it appears (head tag, footer, injected scripts, generator meta).
- [ ] Identify the external system injecting it (hosting dashboard, page builder, proxy, etc.).

### Step 2 — Define canonical domain and brand strings

- [ ] Decide canonical domain and protocol (e.g., `https://ocsunsoakedpools.com`).
- [ ] Decide whether to use `www` subdomain or bare domain as canonical.
- [ ] Approve primary brand name, display name, and any alternate names.
- [ ] Record all of this in a **shared doc** (e.g., `README` or `COPY_IMPROVEMENTS.md`) for future reference.

### Step 3 — Upgrade global shell metadata in `index.html`

- [ ] Update `<title>` in `index.html` from `Welcome` to the approved homepage title.
- [ ] Add `<meta name="description" ...>` in `index.html` with approved homepage description.
- [ ] Add `<link rel="canonical" href="https://canonical-domain/">` in `index.html`, using the canonical domain from Step 2.
- [ ] Add favicon `<link>` tags in `index.html` pointing to the agreed favicon files.
- [ ] Add Open Graph tags in `index.html`:
  - [ ] `og:title`.
  - [ ] `og:description`.
  - [ ] `og:type` = `website`.
  - [ ] `og:site_name`.
  - [ ] `og:url` (canonical homepage URL).
  - [ ] `og:image` (homepage OG image URL).
- [ ] Add X/Twitter Card tags in `index.html`:
  - [ ] `twitter:card` = `summary_large_image`.
  - [ ] `twitter:title`.
  - [ ] `twitter:description`.
  - [ ] `twitter:image`.
  - [ ] `twitter:site` (and `twitter:creator` if desired).
- [ ] Add JSON-LD `WebSite` block in `<head>` of `index.html` with approved fields.
- [ ] Add JSON-LD `LocalBusiness` block in `<head>` of `index.html` with approved fields.
- [ ] Run `npm run build`.
- [ ] Open `dist/index.html` and confirm all new tags and JSON-LD are present and correct.
- [ ] Open `dist/index.html` in a browser to visually confirm **tab title** and **favicon**.

### Step 4 — Plan per-route metadata (before routing refactor)

- [ ] Create a **metadata mapping table** (in a doc or planned `seoConfig`):
  - [ ] Keys: `home`, `about`, `process`, `contact`, `requestQuote`.
  - [ ] Values: `title`, `description`, `ogTitle`, `ogDescription`, `ogImage`, `path`.
- [ ] Ensure the content for each route aligns with copy in `COPY_IMPROVEMENTS.md`.
- [ ] Have the brand owner review and approve all per-route metadata entries.

### Step 5 — Implement URL-based routing and head management (Option B)

- [ ] Introduce a routing solution (e.g., React Router) in `src/App.jsx` (planning only at this stage).
- [ ] Plan to replace state-based navigation in `Header.jsx` and `App.jsx` with route-based navigation.
- [ ] Plan to add a head manager provider (e.g., `HelmetProvider` from `react-helmet-async`) at the app root.
- [ ] For each page component (`Home.jsx`, `About.jsx`, `Process.jsx`, `Contact.jsx`, `RequestQuote.jsx`), plan a **metadata block** that reads from `seoConfig` and sets:
  - [ ] `<title>`.
  - [ ] `<meta name="description">`.
  - [ ] OG and X/Twitter tags (where appropriate).
- [ ] When implemented later, test each route:
  - [ ] Load `/`, `/about`, `/process`, `/contact`, `/request-quote`.
  - [ ] Use “View Source” or devtools **Elements** to confirm tags change per route.
  - [ ] Use `curl` or a text-only browser to check what non-JS crawlers see.

### Step 6 — Add robots.txt and sitemap.xml

- [ ] Draft `robots.txt`:
  - [ ] Allow search engine crawling for all public pages.
  - [ ] Reference `sitemap.xml` URL.
- [ ] Draft `sitemap.xml` listing all main URLs (homepage + key routes).
- [ ] Plan where these files will live in the deployed environment (root of domain).
- [ ] After deployment, fetch `https://canonical-domain/robots.txt` and `https://canonical-domain/sitemap.xml` to confirm accessibility.
- [ ] In Google Search Console:
  - [ ] Submit `sitemap.xml`.
  - [ ] Check for any errors or warnings.

### Step 7 — Favicon and share image verification

- [ ] Confirm that all favicon files exist at the paths referenced in `index.html`.
- [ ] Confirm OG and X/Twitter images exist at their referenced URLs and meet recommended dimensions/aspect ratios.
- [ ] Use browser devtools (Network/Application tabs) to verify that favicon and OG/Twitter image requests return **200 OK**.
- [ ] Follow Google favicon docs \([g-favicons]\) to verify favicon is eligible for use in Search results.

### Step 8 — Cleanup of residual “Bolt.new” references

- [ ] In the hosting platform/dashboard, check for any **project/site name** fields still set to “Bolt.new” and update them to the approved brand.
- [ ] Check for **global meta/OG defaults** in hosting config that may still include “Bolt.new” and update them.
- [ ] Check any legacy CMS/page builder where this site may have been originally created and remove or update “Bolt.new” metadata.
- [ ] Check analytics/tag manager configurations for references to “Bolt.new” in shared preview snippets or link templates.
- [ ] After redeploy, re-check live HTML to confirm **no “Bolt” / “Bolt.new” strings** remain.
- [ ] Use social debuggers (Facebook Sharing Debugger, X Card Validator, LinkedIn Post Inspector) to clear caches and confirm previews no longer show “Bolt.new”.

## 6. Validation & tooling checklist — actionable items

### 6.1 HTML / “View Source” validation

- [ ] Run `npm run build` and open `dist/index.html` locally.
- [ ] Use “View Source” to confirm:
  - [ ] `<title>` matches the target homepage title.
  - [ ] `<meta name="description">` exists and matches approved text.
  - [ ] OG tags exist with correct values.
  - [ ] X/Twitter Card tags exist with correct values.
  - [ ] JSON-LD `WebSite` and `LocalBusiness` blocks are present and are valid JSON.
- [ ] On production, open `https://canonical-domain/`:
  - [ ] Use “View Source” or `curl -L` to confirm **no “Bolt.new”** strings exist.
  - [ ] Confirm canonical, favicon, OG/Twitter tags, and structured data match the target spec.

### 6.2 Google Search Console (GSC) workflow

- [ ] Add or verify the site property in **Google Search Console**.
- [ ] For each key URL (homepage + key routes):
  - [ ] Use **URL Inspection** → “Live URL” to see updated metadata.
  - [ ] Click **Request Indexing** after significant metadata changes.
- [ ] Submit `sitemap.xml` in GSC once it’s deployed.
- [ ] Monitor in GSC:
  - [ ] Coverage (indexed URLs) for errors/warnings.
  - [ ] Performance (CTR, impressions, clicks) by page and query before/after metadata changes.
  - [ ] Site name and favicon appearance in SERPs, using docs \([g-site-names]\) and \([g-favicons]\) as reference.

### 6.3 Social preview checks

- [ ] Facebook / Meta:
  - [ ] Use `https://developers.facebook.com/tools/debug/` to debug each key URL.
  - [ ] Click “Scrape Again” after changes to clear cache.
  - [ ] Confirm the preview title, description, and image match OG tags and no “Bolt.new” appears.
- [ ] X/Twitter:
  - [ ] Use `https://cards-dev.twitter.com/validator` as per \([x-cards]\).
  - [ ] Validate each key URL shows the correct `summary_large_image` card with correct metadata and images.
- [ ] LinkedIn:
  - [ ] Use `https://www.linkedin.com/post-inspector/` for each key URL.
  - [ ] Confirm OG tags are respected and no “Bolt.new” text appears.

### 6.4 Cache invalidation and CDN considerations

- [ ] After metadata changes, perform a **full redeploy** on the hosting/CDN platform.
- [ ] If available, trigger a **manual cache purge** for HTML and assets related to the homepage and key routes.
- [ ] Use social card tools (Facebook/X/LinkedIn) to clear cached previews after each significant metadata update.
- [ ] Note any provider-specific cache rules or TTLs for future reference (best-practice, no case study cited).

## 7. Rollout, monitoring, and acceptance criteria — checklist

### 7.1 Rollout sequencing

- [ ] Phase 1: Implement **Option A** shell-level fixes in `index.html` and clean up external “Bolt.new” references (Steps 1, 2, 3, 8).
- [ ] Phase 2: Add and deploy `robots.txt` and `sitemap.xml`, then verify in GSC (Step 6).
- [ ] Phase 3: Implement routing + per-route metadata (Option B, Step 5) when ready to invest more in SEO.
- [ ] Phase 4: Refine structured data and social image strategy (Steps 3, 5, 7 refinements).

### 7.2 Acceptance criteria

- [ ] **Brand / Bolt.new cleanup**
  - [ ] No `Bolt` / `Bolt.new` in live HTML for any key URL.
  - [ ] No `Bolt` / `Bolt.new` in social previews (Facebook, X/Twitter, LinkedIn) after cache clears.
  - [ ] No `Bolt` / `Bolt.new` in page titles shown in Google Search results post-recrawl.
- [ ] **Metadata correctness**
  - [ ] Homepage and at least two key routes (e.g., About, Contact) have unique, descriptive `<title>` tags including brand name.
  - [ ] Meta descriptions on these pages are high-quality and aligned with on-page content.
  - [ ] OG and Twitter tags are present and correct for title, description, image, and site name.
  - [ ] Canonical URLs and favicon links are valid and consistent.
  - [ ] Structured data (`WebSite`, `LocalBusiness`) passes Google’s Rich Results Test with no critical errors (best-practice, no case study cited).
- [ ] **Canonical / indexing**
  - [ ] Canonical URLs consistently point to the intended domain and correct paths.
  - [ ] `robots.txt` and `sitemap.xml` are accessible and reported as valid in GSC.
- [ ] **Monitoring (no outcome promises)**
  - [ ] GSC is configured and regularly reviewed for impressions, clicks, and CTR by URL and query.
  - [ ] Metadata change dates are annotated in GSC or analytics for before/after comparison.
  - [ ] Over time, CTR and click trends are compared in the spirit of controlled tests (e.g., \([searchpilot-title-test]\), \([trustradius-title-tests]\)), without assuming similar magnitudes of effect.

## 8. Sources (REQUIRED)

### 8.1 Official documentation

- [ ] Keep the following official sources as the **reference set** for implementing and validating metadata:
  - [ ] Title links: `https://developers.google.com/search/docs/appearance/title-link` (Google Search Central).
  - [ ] Snippets / meta descriptions: `https://developers.google.com/search/docs/appearance/snippet`.
  - [ ] Meta/robots tags: `https://developers.google.com/search/docs/crawling-indexing/special-tags`.
  - [ ] Canonicalization: `https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls`.
  - [ ] Site names in search results: `https://developers.google.com/search/docs/appearance/site-names`.
  - [ ] Favicons in Search: `https://developers.google.com/search/docs/appearance/favicon-in-search`.
  - [ ] Large images case study: `https://developers.google.com/search/case-studies/large-images-case-study`.
  - [ ] Open Graph spec: `https://ogp.me/`.
  - [ ] X/Twitter Card markup docs: `https://developer.x.com/en/docs/x-for-websites/cards/overview/markup`.

### 8.2 Case studies / controlled tests

- [ ] Use these case studies as **context** when interpreting performance changes (no guarantees):
  - [ ] Google large images case study: `https://developers.google.com/search/case-studies/large-images-case-study`.
  - [ ] SearchPilot title tag test (location at start): `https://www.searchpilot.com/resources/case-studies/adding-location-to-start-of-title-tags-ctr`.
  - [ ] TrustRadius title tag tests: `https://solutions.trustradius.com/vendor-blog/seo-case-study-title-tag-tests/`.

### 8.3 Best-practice (no case study cited) notes

- [ ] Treat the following as **best-practice implementation guidance** (no specific performance case study):
  - [ ] Using a global title template with brand suffix.
  - [ ] Creating per-route unique titles and descriptions.
  - [ ] Implementing `WebSite` and `LocalBusiness` structured data.
  - [ ] Creating and submitting `robots.txt` and `sitemap.xml`.
  - [ ] Using multiple favicon sizes and Apple touch icons.
  - [ ] Using social debuggers/validators to clear cached previews.

