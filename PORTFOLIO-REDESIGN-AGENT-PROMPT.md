# Portfolio Redesign and Implementation Brief

You are a senior product designer and frontend engineer. Redesign and implement the existing portfolio at:

- Live site: `https://juanma0822.github.io/portafolio-personal/`
- Repository: `https://github.com/juanma0822/portafolio-personal`
- Stack: React 18, Vite, Framer Motion, plain CSS, GitHub Pages

Do not stop at recommendations or mockups. Inspect the repository, make the changes, run the project, test it, and leave it production-ready. Preserve GitHub Pages compatibility and the existing printable CV route.

## Product Goal

Build a memorable, credible, modern portfolio for Juan Manuel Valencia Triana, a DevOps and Cloud Engineer. The page should communicate technical judgment, reliability, automation, and measurable impact within the first viewport. It must feel designed for engineering recruiters and technical leaders, not like a generic developer template.

The experience should be:

- Visually distinctive without becoming theatrical or difficult to scan.
- Technical and precise, using infrastructure-inspired visual language.
- Fast, accessible, bilingual, responsive, and keyboard-friendly.
- Strong enough to demonstrate frontend care while keeping DevOps work as the focus.
- Honest: never invent employers, projects, metrics, certifications, links, or technical outcomes.

## Current-State Audit

The existing page has useful content and working light/dark and ES/EN controls, but requires a substantial redesign.

### Confirmed defects

- The page horizontally overflows on mobile.
- At a `390px` viewport, the document becomes approximately `590px` wide.
- At a `320px` viewport, the document also becomes approximately `590px` wide.
- The desktop navigation remains a single fixed row on mobile. `.nav`, `.nav-items`, and `.nav-actions` extend beyond the viewport.
- At `320px`, timeline content and the contact CV button also cross the viewport edge.
- Decorative `.card-accent` and `.cert-deco` elements extend beyond their boxes. They must be contained without using `overflow-x: hidden` as a substitute for fixing layout defects.
- The current breakpoint at `900px` only collapses the hero. It does not provide a complete tablet/mobile navigation strategy.
- The timeline keeps a `140px` minimum date column too deep into narrow layouts.
- The same CV and contact actions appear repeatedly in the hero card, weakening hierarchy.
- English mode is incomplete because substantial copy is hardcoded in Spanish.
- The theme is not persisted and does not initially respect `prefers-color-scheme`.
- Interactive canvas skills need an accessible and reduced-motion fallback.

### Product and presentation gaps

- There is no Projects or Case Studies section, so claims are not supported by visible evidence.
- Experience descriptions list responsibilities but not constraints, actions, tools, or outcomes.
- Skills are presented as a flat list instead of a useful competency model.
- The hero does not clearly state availability, specialization, primary value, or strongest proof.
- Personal contact information is repeated too prominently. Keep email accessible, but reduce visual noise. Do not expose the phone number in multiple places.
- Certification cards all say only “Verified” and lack issuer, date, credential link, or useful categorization.
- The page lacks GitHub and project repository links in its main contact/social path.
- The visual language relies heavily on generic blue cards, gradients, pills, and hover lifts.
- Typography uses a generic Inter/system stack and lacks a distinctive technical/editorial hierarchy.
- Footer copy such as “Interactive portfolio demo” sounds unfinished.
- Metadata, social previews, structured data, and a clear favicon strategy need review.

## Creative Direction

Create a “cloud operations field notebook” aesthetic: clean editorial typography combined with restrained infrastructure diagrams, deployment-status details, and terminal-inspired micro-elements. It should feel calm, capable, and current rather than cyberpunk.

Use this direction consistently:

- Primary light palette: warm white, near-black graphite, crisp Azure blue, and a restrained signal green.
- Dark theme: charcoal/near-black rather than a page dominated by navy.
- Avoid purple-heavy gradients, neon glow, glassmorphism everywhere, floating gradient blobs, excessive pills, and nested cards.
- Use subtle grid lines, topology paths, deployment nodes, or a fine dot pattern as structural background texture. These must be CSS or lightweight assets and must not reduce readability.
- Use one expressive display font and one technical mono font. Suitable examples are `Space Grotesk` for headings and `IBM Plex Mono` for labels, loaded efficiently with fallbacks. Body text must remain highly readable.
- Use icons from `lucide-react`; do not draw custom interface SVG icons when Lucide provides an equivalent.
- Keep cards at `8px` radius or less. Use borders, spacing, and typography before shadows.
- Use color to convey status and hierarchy, not as decoration on every element.
- Keep letter spacing at `0`; do not scale font size directly with viewport width.

## Information Architecture

Use the following page order:

1. Sticky header
2. Hero / positioning statement
3. Selected work / case studies
4. Experience timeline
5. Technical capabilities
6. About and working principles
7. Certifications and education
8. Contact call to action
9. Footer

The next section must remain slightly visible below the hero on common desktop and mobile viewports so the page invites scrolling.

## Header

- Keep the name or compact monogram as the brand link to `#top`.
- Desktop navigation: Work, Experience, Skills, About, Contact.
- Highlight the active section using `IntersectionObserver`.
- Add a compact icon button for theme and an accessible language control.
- Use Lucide `Sun`, `Moon`, `Languages`, `Menu`, and `X` icons where appropriate.
- Below the tablet breakpoint, replace the desktop links with a real menu button.
- The mobile menu must open as a compact anchored panel or full-width drawer below the header, never as an overflowing horizontal row.
- Trap focus only if implemented as a modal. Otherwise preserve logical tab order and close on link activation, Escape, and outside click.
- Add visible focus states and correct `aria-expanded`, `aria-controls`, labels, and current-section semantics.
- Keep touch targets at least `44px` by `44px`.

## Hero

The hero must not be a card or a split layout where the primary message is trapped inside a card.

Required content hierarchy:

- Small availability/status line, only if factually true.
- H1: `Juan Manuel Valencia Triana`.
- Clear role: `DevOps & Cloud Engineer`.
- A concise two-line value proposition focused on Azure, Infrastructure as Code, CI/CD, security, and reliability.
- Primary CTA: view selected work.
- Secondary CTA: download CV.
- Compact links to GitHub, LinkedIn, and email with recognizable icons and accessible labels.
- Profile photo as a strong visual asset, integrated into the composition rather than placed in a generic ID card.
- A restrained infrastructure visual such as a deployment path (`Commit -> Pipeline -> Infrastructure -> Observe`) or a small live-status panel using only factual, non-sensitive labels.

Remove duplicated hero CTAs, repeated contact details, and the quotation “Infraestructura que simplemente funciona” unless it is rewritten as a stronger, specific value statement.

The mobile hero must prioritize name, role, value proposition, CTAs, and photo in that order. It must fit comfortably without text clipping or horizontal scrolling.

## Selected Work / Case Studies

This is the most important new section. Create a reusable data-driven `Projects` or `CaseStudies` component and add it to navigation and translations.

Each case study should support:

- Project name and concise category.
- Problem or operational constraint.
- Juan Manuel’s role and contribution.
- Architecture or implementation summary.
- Technologies used.
- Outcome or impact.
- Repository, live demo, architecture, or details link when one genuinely exists.
- Optional screenshot or diagram with meaningful alt text.

Potential categories already supported by the portfolio are Azure infrastructure with Bicep, CI/CD automation, the PRAE backend, and the React Native/Supabase student application. Use them only to the extent verified by existing repository content or user-provided data.

Do not fabricate numbers. If impact metrics are unavailable, use honest qualitative outcomes such as reduced manual steps, standardized provisioning, improved traceability, or offline support only when confirmed. If essential project facts are missing, centralize clearly marked content placeholders in a data file rather than publishing fictional copy. The page must still look complete when optional links or metrics are absent.

On desktop, use a varied but orderly editorial layout, not a uniform wall of cards. On mobile, use a single-column sequence. Include one featured case study with a larger visual treatment and two or three supporting cases.

## Experience

- Retain all verified roles and dates.
- Convert each description into concise, outcome-oriented bullets where the source supports them.
- Show role, organization, period, key tools, and two or three contributions.
- Avoid exposing confidential internal architecture, identifiers, customer data, or proprietary metrics.
- On desktop, dates may occupy a narrow timeline rail.
- At `<= 640px`, stack the date above the content and remove any fixed or minimum-width date column.
- Timeline decoration must never reduce content width below a readable size.

## Technical Capabilities

Replace the undifferentiated skill cloud with grouped competencies:

- Cloud & Infrastructure: Azure, Bicep, Terraform.
- Delivery & Operations: CI/CD, GitHub Actions or Azure DevOps when verified, Jenkins, Git.
- Containers & Platform: Docker, Kubernetes.
- Backend & Data: Node.js, PostgreSQL, Cosmos DB, Event Hubs, Supabase.
- Application Engineering: React, React Native, APIs, Swagger, JWT.

Use compact rows, a capability matrix, or toolchain groups with short evidence statements. Do not use arbitrary percentage bars or self-rated proficiency scores.

The existing canvas bubbles may be removed if they are decorative, difficult to use on touch, costly, or inaccessible. If retained:

- Size it with stable responsive dimensions.
- Pause animation offscreen.
- Support touch and keyboard use.
- Provide equivalent semantic HTML content.
- Disable motion under `prefers-reduced-motion`.
- Confirm that it does not capture scrolling or cause layout shift.

## About and Principles

- Reduce the biography to two concise paragraphs.
- Add three evidence-based working principles such as Infrastructure as Code, secure delivery, and observable systems.
- Avoid generic claims such as “passionate,” “innovative,” or “hard-working” unless backed by examples.
- Keep career goals concise and recruiter-relevant.

## Certifications and Education

- Reduce visual weight compared with projects and experience.
- Display issuer, year, and credential link where available.
- Do not label an item “Verified” unless it links to a real verification source or the source data proves verification.
- Use a compact list or grid with consistent metadata.
- Keep long certificate names readable without truncating essential text.

## Contact

- Make the closing section decisive: a short invitation for DevOps, cloud, or platform engineering conversations.
- Include email, LinkedIn, GitHub, and CV.
- Use `mailto:` correctly and provide a copy-email action with visible success feedback.
- Do not add a contact form unless a real delivery backend or service is configured.
- Keep the phone number optional and avoid repeating it in the footer.
- Replace placeholder-sounding footer text with a concise copyright and technology note.

## Bilingual Content

- Move all visible ES/EN copy into a single structured content source.
- Translate navigation, hero, section headings, descriptions, dates, CTA labels, accessibility labels, status text, and footer.
- Do not mix Spanish and English within one selected locale except proper names and standard technology terms.
- Persist the selected language in `localStorage`.
- Set the document `lang` attribute dynamically.
- Spanish is the default unless an existing requirement says otherwise.

## Theme

- Support light and dark themes with equal visual quality.
- Respect `prefers-color-scheme` on first visit and persist explicit user choice.
- Update `color-scheme` so native controls render correctly.
- Use design tokens for background, surfaces, text, muted text, borders, accent, success, and focus.
- Meet WCAG AA contrast in both themes.
- Avoid a dark theme dominated entirely by dark blue.

## Motion and Interaction

Use Framer Motion selectively:

- One restrained hero entrance sequence.
- Section reveals triggered once as content enters the viewport.
- Subtle topology/deployment progression in the hero.
- Purposeful hover/focus feedback on project links and controls.
- No constant floating cards, excessive parallax, large rotations, cursor followers, or animation that competes with reading.
- Honor `prefers-reduced-motion: reduce` in CSS and React behavior.
- Touch devices must not depend on hover.

## Responsive Requirements

Design mobile-first and test at minimum:

- `320 x 568`
- `360 x 800`
- `390 x 844`
- `430 x 932`
- `768 x 1024`
- `1024 x 768`
- `1280 x 800`
- `1440 x 900`

Required invariants at every size:

- `document.documentElement.scrollWidth <= document.documentElement.clientWidth`.
- No element may cross the viewport edge, including decorative pseudo-elements.
- Do not solve overflow globally with `overflow-x: hidden` or `clip`; fix the responsible element. Local clipping is valid only for intentional decoration inside its owning component.
- Long names, email addresses, dates, project titles, and translated labels must wrap safely.
- Use `min-width: 0` on flex/grid children where required.
- Use responsive grid tracks such as `minmax(0, 1fr)`.
- Use consistent page gutters: approximately `16px` on small mobile, `24px` on tablet, and `32px+` on desktop.
- Buttons may wrap or become full-width on narrow screens but must remain aligned and at least `44px` high.
- Header height and hero content must not jump when switching language or theme.
- Fixed-format elements must have stable dimensions or aspect ratios.
- Test at 200% zoom and with long English labels.

## Accessibility

- Use semantic landmarks and a logical heading hierarchy with one H1.
- Add a skip-to-content link.
- Ensure every control has an accessible name.
- Provide visible `:focus-visible` styles.
- Maintain logical keyboard order and full keyboard operability.
- Use meaningful image alt text; use empty alt text for purely decorative images.
- Respect reduced motion and increased contrast preferences where practical.
- Announce copy-to-clipboard success with an `aria-live` region.
- Do not communicate status using color alone.
- Verify with automated accessibility tooling and a manual keyboard pass.

## SEO and Sharing

- Improve the document title and meta description in both a truthful and concise way.
- Add canonical URL, Open Graph, and Twitter card metadata.
- Add a real social preview image optimized for sharing.
- Add favicon and theme color metadata.
- Add valid `Person` JSON-LD with only verified public information and links.
- Preserve correct relative/base paths for deployment under `/portafolio-personal/` on GitHub Pages.
- Ensure `cv.html`, profile image, social image, and all internal anchors work from the deployed subpath.

## Engineering Constraints

- Keep React + Vite unless a concrete blocker requires otherwise.
- Preserve the existing GitHub Pages workflow and `vite.config.js` base path.
- Prefer data-driven sections over repeated hardcoded markup.
- Remove unused components and dead code such as unused tilt implementations after confirming they are not referenced.
- Avoid inline styles; use coherent component classes or CSS modules if introduced consistently.
- Install only justified dependencies. `lucide-react` is acceptable for icons.
- Do not introduce a large UI framework for this small site.
- Do not expose secrets, private project details, internal URLs, customer identifiers, or confidential infrastructure data.
- Keep runtime messages, code comments, identifiers, and repository artifacts in English.
- Preserve the printable CV and verify its mobile and print rendering separately.

## Suggested Component Structure

Use the existing structure where practical, adding only useful boundaries:

```text
src/
  components/
    Header.jsx
    MobileMenu.jsx
    Hero.jsx
    Projects.jsx
    ProjectCaseStudy.jsx
    Experience.jsx
    Skills.jsx
    About.jsx
    Credentials.jsx
    Contact.jsx
    Footer.jsx
  data/
    portfolio.js
  hooks/
    useActiveSection.js
    usePersistentPreference.js
  i18n.js
  styles.css
```

This is guidance, not a requirement to fragment small components unnecessarily.

## Implementation Sequence

1. Inspect the repository, current deployment configuration, assets, and existing content.
2. Record a baseline using screenshots and horizontal overflow measurements at the required viewports.
3. Refactor content into a bilingual structured data model without changing verified facts.
4. Implement the mobile-first design system and global tokens.
5. Fix the header and every overflow source before adding decorative polish.
6. Build the hero and selected work section.
7. Rework experience, skills, about, credentials, contact, and footer.
8. Add theme/language persistence, active navigation, reduced-motion behavior, and accessibility details.
9. Add metadata and validate GitHub Pages asset paths.
10. Run all automated and visual checks, fix defects, and report the final result.

## Validation and Definition of Done

Do not claim completion until all applicable checks pass.

### Functional checks

- Run `npm install` if dependencies are not installed.
- Run `npm run build` successfully with no warnings caused by the change.
- Start the app and test both direct local navigation and the GitHub Pages base path behavior.
- Confirm every navigation anchor, CTA, external link, CV link, theme control, language control, mobile menu action, and email action works.
- Confirm refresh persistence for theme and language.
- Confirm no console errors, failed requests, or missing assets.

### Automated responsive check

Use Playwright to inspect every required viewport and assert:

```js
document.documentElement.scrollWidth <= document.documentElement.clientWidth
```

Also report any element whose bounding rectangle has `left < 0` or `right > innerWidth`, excluding intentional local decoration that is clipped by its own component.

### Visual check

- Capture full-page screenshots at `390 x 844`, `768 x 1024`, and `1440 x 900`.
- Inspect the screenshots, not only test output.
- Confirm no overlap, clipping, unreadable text, broken wrapping, empty canvas, layout shift, or awkward whitespace.
- Verify light and dark themes and ES/EN at mobile and desktop widths.
- Verify the first viewport communicates identity, specialization, proof, and a primary action.

### Accessibility and quality

- Run an accessibility audit, targeting zero serious or critical violations.
- Navigate the entire page using only the keyboard.
- Test reduced-motion mode.
- Check color contrast in both themes.
- Aim for Lighthouse scores of at least 95 Accessibility, 95 Best Practices, and 90 Performance/SEO on production build, while explaining any justified exception.

## Final Response Format

When finished, provide:

1. A concise summary of the redesign and why the chosen direction supports a DevOps/Cloud profile.
2. Files added and changed.
3. Content that still needs owner-supplied facts or assets, clearly separated from completed work.
4. Commands and checks run, with results.
5. Before/after overflow measurements for all required viewport widths.
6. Paths to desktop and mobile screenshots.
7. Any remaining risk or limitation.

Do not finish with a proposal. Implement, validate, and deliver the working site.