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

### ✅ Testimonials: collapsible cards ("Read more") — done
Long feedback stretches the whole grid row.
- Clamp the quote to ~5 lines with CSS `line-clamp` (`-webkit-line-clamp` + `overflow: hidden`).
- Show a "Read more" / "Show less" button only when the text actually overflows
  (measure `scrollHeight > clientHeight` in a `useLayoutEffect` / `ResizeObserver`).
- Button gets `aria-expanded`; expanding one card shouldn't stretch its neighbours → `align-items: start` on the grid.
- Alternative if cards still feel uneven: masonry-style columns (`columns: 3`) instead of grid.

### ✅ Testimonials: "View more" for the section — done (shows 6, reveals 6 more per click; `PAGE_SIZE` in `Testimonials.tsx`)
The list will keep growing.
- Show the first 6 (or 3 on mobile), then a "View more testimonials (N)" button that reveals the rest (or the next batch).
- Order `testimonialsData` so the strongest ones come first; optionally add a `featured: true` flag.
- Move focus to the first newly revealed card for keyboard users.

### Testimonial content (your call)
- Several are internal performance-review texts with critical remarks and mention colleagues by name
  (Vitor, Ruben, Anke, Nicole). Consider trimming to short positive excerpts and asking each person
  if they're OK being quoted publicly.
- Optional: an `excerpt` field shown collapsed, full `content` on "Read more".

### Add more testimonials (your task)
- [ ] Collect new feedback (current/former colleagues, managers, clients; LinkedIn recommendations are a good source)
- [ ] Add each as a new entry in `src/components/data/testimonialsData.ts` (`id`, `name`, `role`, `company`, `content`, optional `image`)
- [ ] Keep the strongest ones in the first 6 — only those are visible before "View more"
- Aim for variety: different roles and companies, not only Dialog

### Content review — check every section for outdated info (your task)
Drafts for the hero intro and trimmed testimonials, plus open questions: [CONTENT-DRAFTS.md](CONTENT-DRAFTS.md).
Go through the live site section by section and update anything that's no longer accurate.
- [ ] **Hero** — title, intro text (also planned: shorten to ~2 lines)
- [ ] **About** — bio paragraphs, skill icons (anything missing or no longer used?)
- [ ] **Experience** — current job title/level (a testimonial mentions a move to medior), dates, responsibilities,
      `technologies` per role (typos fixed 2026-10-22)
- [ ] **Projects** — descriptions, tech lists, links still working; add newer projects
- [ ] **Testimonials** — see "Testimonial content" and "Add more testimonials" above
- [ ] **Contact** — email, location, availability text ("open to freelance work, full-time positions…")
- [ ] **Footer & meta** — links, page description / Open Graph text in `public/index.html`
- Data lives in `src/components/data/*.ts`; hero/about/contact text is in the component files

### New profile photo
- Run `npm run photo -- path/to/new-photo.jpg` — resizes, compresses and saves it as `src/assets/images/portfolio-photo.jpg`
- Square-ish crop with face centred works best in the circle; adjust `object-position` in `Home.css` if needed.
- Also update `portfolio-preview.jpg` (project card + README) once the new look is final.

## 🎨 Pass 3 — visual polish

- [x] Only the hero needs `min-height: 100vh`; drop it for other sections (big empty gaps on tall screens)
- [x] Experience as a vertical timeline; collapse 2009–2015 roles under "Show earlier roles"
- [x] Explicit `technologies` field on experiences instead of regex-guessing from bullet text (`ExperienceCard.tsx`)
- [ ] Shorten the hero intro to ~2 lines
- [x] Active nav link highlight while scrolling (`IntersectionObserver`)
- [x] Footer heading underlines are left-aligned while text is centred — align them
- [x] Mobile menu `top: 60px` is hard-coded; use `var(--header-height)`
- [x] Left-align body text and lists — `.App { text-align: center }` centres everything, which makes experience bullets and long testimonials hard to read; keep centring only for section titles/hero on mobile
- [x] Replace the Todo List screenshot — it's mostly white space and makes the card look broken next to the others
- [x] Use one heading font throughout (Poppins on section titles only today; card/contact headings use the system font)
- [x] Consistent spacing scale for section padding (currently mixes 0, 60px, 80px, 4rem) — e.g. `--space-section` token
- [x] Project cards: give "Live Demo" a clear primary-button style, keep "Source" secondary; consider making the image clickable
- [x] Contact section: left column is mostly empty at desktop width — rebalance (e.g. narrower info column, or stack info above the form)
- [x] Dark mode: cards barely stand out (`#1e1e1e` on `#121212`) — lighten `--color-card-bg` slightly or add a subtle border

## 🛠 Pass 4 — tooling

- [x] Migrate Create React App (deprecated) → Vite 8; bump TypeScript to 5.9
- [x] Add a few tests (Contact form validation, theme toggle, testimonials "Read more"/"View more", experience toggle) — Vitest, `npm test`
- [x] Move `HeaderContainer`, `Logo`, `NavLink`, `NavMenu`, `HamburgerMenu` from `components/styles/` to `components/`
- [ ] GitHub Action: build + deploy to Pages on push (instead of local `npm run deploy`) — also removes `gh-pages`, the source of the remaining `npm audit` warnings
- [ ] Add ESLint (CRA bundled it; Vite doesn't) — `typescript-eslint` + `eslint-plugin-react-hooks`
- [x] Stop committing `.idea/`
- [x] `npx update-browserslist-db@latest`
