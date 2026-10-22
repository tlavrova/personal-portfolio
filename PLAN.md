# Portfolio improvement plan

Working list of improvements for the portfolio. Tick items off as they land.

## ✅ Pass 1 — fixes & cleanup (done, 2026-10-22)

- [x] Profile photo 14 MB → 134 KB; recipe-finder PNG → JPEG; preview (a PNG named `.jpg`) → real JPEG
- [x] Portfolio "Live Demo" link was missing `https://` (resolved to a 404)
- [x] Defined missing CSS variables (`--color-badge-*`, `--color-text-secondary`) — tech badges now render as pills
- [x] One accent colour: replaced ~15 hard-coded `#3498db` / red accent with `--color-primary` tokens (WCAG AA contrast in both themes)
- [x] Section backgrounds set in one place (component CSS) instead of three
- [x] Real `<title>`, meta description, Open Graph tags, manifest name; logo & footer show your name
- [x] No light-mode flash for dark-mode users (theme applied in `index.html` before paint)
- [x] Hamburger is a `<button>` with `aria-expanded` / `aria-label`; visible `:focus-visible` rings
- [x] Anchor links clear the fixed header (`scroll-margin-top`), smooth scroll, `prefers-reduced-motion`
- [x] Removed global `* { transition }`
- [x] Contact form: "Sending…" state, no double submit, timer cleanup, error has `role="alert"`
- [x] Testimonials: stray closing quote fixed, paragraph breaks preserved
- [x] Footer: Experience/Testimonials links, clickable email
- [x] Removed unused code & deps (`styled-components`, `@emailjs/browser`, `@formspree/react`, `web-vitals`, unused `useTheme` calls); test libs/types moved to `devDependencies`
- [x] Poppins font actually loaded

## 🔜 Pass 2 — testimonials & content

### Testimonials: collapsible cards ("Read more")
Long feedback stretches the whole grid row.
- Clamp the quote to ~5 lines with CSS `line-clamp` (`-webkit-line-clamp` + `overflow: hidden`).
- Show a "Read more" / "Show less" button only when the text actually overflows
  (measure `scrollHeight > clientHeight` in a `useLayoutEffect` / `ResizeObserver`).
- Button gets `aria-expanded`; expanding one card shouldn't stretch its neighbours → `align-items: start` on the grid.
- Alternative if cards still feel uneven: masonry-style columns (`columns: 3`) instead of grid.

### Testimonials: "View more" for the section
The list will keep growing.
- Show the first 6 (or 3 on mobile), then a "View more testimonials (N)" button that reveals the rest (or the next batch).
- Order `testimonialsData` so the strongest ones come first; optionally add a `featured: true` flag.
- Move focus to the first newly revealed card for keyboard users.

### Testimonial content (your call)
- Several are internal performance-review texts with critical remarks and mention colleagues by name
  (Vitor, Ruben, Anke, Nicole). Consider trimming to short positive excerpts and asking each person
  if they're OK being quoted publicly.
- Optional: an `excerpt` field shown collapsed, full `content` on "Read more".

### New profile photo
- Drop the new photo into `src/assets/images/` (replace `portfolio-photo.jpg`, or update the import in `Home.tsx`).
- Resize before committing (~800–1000 px, JPEG/WebP ≤ 200 KB): `sips -Z 1000 -s format jpeg -s formatOptions 80 in.jpg --out portfolio-photo.jpg`
- Square-ish crop with face centred works best in the circle; adjust `object-position` in `Home.css` if needed.
- Also update `portfolio-preview.jpg` (project card + README) once the new look is final.

## 🎨 Pass 3 — visual polish

- [ ] Only the hero needs `min-height: 100vh`; drop it for other sections (big empty gaps on tall screens)
- [ ] Experience as a vertical timeline; collapse 2009–2015 roles under "Show earlier roles"
- [ ] Explicit `technologies` field on experiences instead of regex-guessing from bullet text (`ExperienceCard.tsx`)
- [ ] Shorten the hero intro to ~2 lines
- [ ] Active nav link highlight while scrolling (`IntersectionObserver`)
- [ ] Footer heading underlines are left-aligned while text is centred — align them
- [ ] Mobile menu `top: 60px` is hard-coded; use `var(--header-height)`

## 🛠 Pass 4 — tooling

- [ ] Migrate Create React App (deprecated) → Vite; bump TypeScript to 5.x
- [ ] Add a few tests (Contact form validation, theme toggle, testimonials "Read more")
- [ ] Move `HeaderContainer`, `Logo`, `NavLink`, `NavMenu`, `HamburgerMenu` from `components/styles/` to `components/`
- [ ] GitHub Action: build + deploy to Pages on push (instead of local `npm run deploy`)
- [ ] Stop committing `.idea/`
- [ ] `npx update-browserslist-db@latest`
