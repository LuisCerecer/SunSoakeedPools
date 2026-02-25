# Visual Updates Checklist — Sun Soaked Pools

**Legend:** `[X]` = Done &nbsp;|&nbsp; `[ ]` = Pending

---

## 🔴 High Priority

### 1. Global Typography
- [X] Add `Montserrat` (400, 600, 700, 800) + `Inter` (400, 500) via Google Fonts `<link>` in `index.html`
- [X] Use `Inter` for body/paragraph copy; keep `Montserrat` for headings only
- [X] Increase size contrast between `h1`, `h2`, `h3` — headings should feel clearly tiered
- [X] Add `letter-spacing: -0.03em` to all `h2` elements at large sizes

**Files:** `index.html`, `index.css`

### 2. Header — Readability on Light Hero Photos
- [X] Add a permanent top-down gradient (`rgba(0,0,0,0.35)` → transparent) at the top of the Hero, behind the header, so white nav text is always readable
- [X] Add a teal left-border active indicator to mobile nav menu items (instead of color-only)
- [X] Standardize "FREE QUOTE" button in header to `borderRadius: 8px` (currently `4px`, inconsistent with rest of page)

**Files:** `Header.jsx`, `Hero.jsx`

---

## 🟡 Medium Priority

### 4. Hero — Polish
- [X] Add Ken Burns slow-zoom CSS keyframe animation to background images (gentle 1.0 → 1.04 scale over 6s)
- [X] Add a `3px solid #5dd3d3` top border to the white quote form card to tie it into the brand
- [X] Add `"5.0 · Yelp Verified"` supporting label next to the star rating row

**Files:** `Hero.jsx`

---

### 5. Contact Form — Dark Panel + Toggle Style
- [X] Change left panel background to a diagonal gradient: `linear-gradient(135deg, #1f2937 0%, #0f172a 100%)`
- [X] Restyle the "Email / Schedule a call" toggle as pill-shaped tab buttons (filled teal when active) instead of radio buttons

**Files:** `ContactFormSection.jsx`

---

### 6. Section Borders — Remove Dated Dividers
- [X] Remove all `borderTop: '1px solid #e5e7eb'` section separators — let background color contrast handle separation
- [X] Remove the corresponding `position: 'relative'` placeholder left behind on sections that only existed to support those borders

**Files:** `ServicesSection.jsx`, `BeforeAfter.jsx`, `ProcessSection.jsx`, `Reviews.jsx`, `ContactFormSection.jsx`

---

### 7. Card Consistency — Normalize Border Radius
- [X] Update service cards from `borderRadius: 12px` to `16px`
- [X] Update before/after cards from `borderRadius: 12px` to `16px`
- [X] Add teal border hover accent on service cards: transitions from transparent to `rgba(93,211,211,0.6)` on hover
- [X] Make the third (bottom-center) service card span the full grid width instead of 50% centered

**Files:** `ServicesSection.jsx`, `BeforeAfter.jsx`

---

## 🟢 Low Priority

### 8. Before/After — Labels & Heading
- [ ] Add "Before" (dark pill) and "After" (teal pill) badge overlays on each before/after image
- [ ] Add a centered teal decorative underline (3px × 40px) beneath the section `<h2>` heading
- [ ] Change card hover to `scale(1.01)` instead of `translateY(-4px)` since these are static images

**Files:** `BeforeAfter.jsx`

---

### 9. Process Section — Connecting Line + Circles
- [ ] Increase step number circles from `48px` to `56px`
- [ ] Change step circle color from `#5dd3d3` to `#0891b2` to match the hero primary CTA button
- [ ] Add a horizontal dashed/solid line connecting the step circles on desktop
- [ ] Switch card images from fixed `height: 200px` to `aspect-ratio: 16/10`

**Files:** `ProcessSection.jsx`

---

### 10. FAQ Section — Depth
- [ ] Change FAQ section background from white (`#ffffff`) to `#f8fafc`
- [ ] Add `box-shadow: 0 2px 8px rgba(0,0,0,0.04)` to all FAQ items at rest (currently only the open item has shadow)

**Files:** `FAQSection.jsx`

---

### 11. Footer — Polish
- [ ] Replace `borderTop: '1px solid rgba(255,255,255,0.1)'` with `borderTop: '3px solid #5dd3d3'`
- [ ] Update copyright bar text color from `#9ca3af` to `#d1d5db` for consistency
- [ ] Set explicit `minWidth: 300px` and `maxWidth: 420px` on the Google Maps embed container

**Files:** `Footer.jsx`
