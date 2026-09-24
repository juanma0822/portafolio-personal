# Visual Identity and Interaction Direction: Cloud Prism

Use this brief together with `PORTFOLIO-REDESIGN-AGENT-PROMPT.md`.

This is a companion prompt to `PORTFOLIO-REDESIGN-AGENT-PROMPT.md`. Precedence rule: this document overrides the original prompt only for visual identity, color, card behavior, skills presentation, and signature interactions. The original prompt controls every other requirement, including truthful content, mobile responsiveness, accessibility, performance, bilingual content, SEO, GitHub Pages compatibility, and validation.

You are acting as a principal UI/UX designer, interaction designer, creative developer, and senior React engineer. Do not merely describe the redesign. Implement it, test it in the browser, inspect screenshots, and refine it until the result feels authored rather than generated from a template.

## Core Objective

Transform Juan Manuel Valencia Triana’s portfolio from a simple collection of static information into a vibrant, interactive technical experience that makes a strong first impression while remaining credible for DevOps, cloud, platform, and SRE opportunities.

The final site must feel:

- Bold, colorful, polished, and memorable.
- Clearly connected to cloud infrastructure and delivery systems.
- Interactive without becoming a game, dashboard parody, or visual distraction.
- Rich in progressive disclosure: concise by default, detailed on demand.
- Professional enough for engineering managers and easy enough for recruiters to scan.
- Unique to Juan Manuel rather than interchangeable with another developer portfolio.

## Researched Reference Principles

Use the following references as strategic inspiration. Do not reproduce their layouts, assets, animations, source code, or signature visual treatments.

### Brittany Chiang — `https://brittanychiang.com/`

Borrow these principles:

- Immediate role clarity.
- Strong reading hierarchy.
- Experience and projects backed by descriptions, technologies, links, images, and evidence.
- Restrained navigation that keeps attention on content.
- Accessibility treated as a product quality, not an afterthought.

Do not borrow the familiar monochrome/navy developer-portfolio look.

### Josh Comeau — `https://www.joshwcomeau.com/`

Borrow these principles:

- Delight comes from custom, purposeful microinteractions.
- Controls feel tactile and respond naturally.
- Color can create personality without damaging readability.
- Motion supports explanation and discovery.
- Users retain control over theme, motion, and interaction.

Do not add decorative interactions that do not explain Juan Manuel’s work.

### Bruno Simon — `https://bruno-simon.com/`

Borrow one principle only: a portfolio becomes memorable when it owns one unmistakable signature interaction.

Do not build a 3D game, physics engine, or heavy WebGL environment for this site. Juan Manuel’s signature interaction will be a living deployment pipeline and expandable technical case studies.

### Linear — `https://linear.app/`

Borrow these principles:

- Product UI can serve as the visual storytelling asset.
- Dense technical information can look premium through spacing, hierarchy, and motion.
- Status, activity, progress, and system state are useful visual motifs.
- Screens and data should demonstrate capability rather than act as abstract decoration.

Do not copy Linear’s dark monochrome aesthetic or page composition.

### Vercel — `https://vercel.com/`

Borrow these principles:

- Technical positioning can be concise and confident.
- Architecture and deployment concepts can become understandable visual narratives.
- Proof and product capabilities should appear early.

Do not recreate Vercel’s black-and-white identity.

### Cloud Resume Challenge — `https://cloudresumechallenge.dev/`

Use its evidence model: a cloud portfolio becomes credible when it demonstrates deployment, HTTPS, source control, tests, Infrastructure as Code, CI/CD, APIs, observability, and documentation. Represent only capabilities Juan Manuel can verify.

## Identity Concept

Name the internal design system **Cloud Prism**.

The concept combines:

- **Cloud:** connected systems, deployment paths, reliability, scale, and observability.
- **Prism:** one engineering profile expressed through several vivid technical disciplines.
- **Living infrastructure:** interfaces react to focus, hover, selection, and scroll like a system moving through deployment stages.

The site should look like a premium editorial portfolio crossed with a clean cloud control plane. It must not look like an Azure portal clone, terminal theme, generic SaaS landing page, or cyberpunk dashboard.

## Visual Signature

Build one recognizable signature experience: an interactive deployment route that appears in or directly below the hero.

The route has four factual, understandable stages:

1. `Commit`
2. `Build & Test`
3. `Provision`
4. `Observe`

Behavior:

- Render the route with semantic HTML and CSS, not a canvas-only interaction.
- Connect stages using a responsive line or path.
- Animate a small signal through the stages once on initial entry.
- Each stage can reveal one short capability on hover, focus, or tap.
- Use icons such as `GitCommitHorizontal`, `Workflow`, `Boxes`, and `Activity` from Lucide.
- On mobile, stack or wrap the stages vertically without reducing tap targets.
- Under reduced motion, show the completed static route with no traveling animation.
- Do not show fake real-time metrics, fake uptime, or fake deployment status.

This interaction should become the site’s distinctive visual memory, replacing generic floating cards and decorative blobs.

## Color System

Use a neutral foundation with a controlled spectrum of saturated accents. More color is required, but every color must have a semantic job.

### Light theme foundation

- Canvas: `#F7F8F3`
- Primary surface: `#FFFFFF`
- Ink: `#101315`
- Muted text: `#596168`
- Border: `#D9DEE2`

### Dark theme foundation

- Canvas: `#0C0F10`
- Primary surface: `#141819`
- Elevated surface: `#1B2022`
- Ink: `#F4F7F5`
- Muted text: `#A7B0B3`
- Border: `#30383B`

### Technical spectrum

- Azure / cloud: `#168BFF`
- Infrastructure as Code: `#FF6B4A`
- Delivery / automation: `#C7F436`
- Containers / platform: `#16D9D2`
- Data / integration: `#FF4FA3`
- Security / verification: `#FFC857`

Implement the palette as explicit semantic CSS tokens, adjusting only when contrast testing requires it:

```css
:root {
	--color-canvas: #f7f8f3;
	--color-surface: #ffffff;
	--color-surface-elevated: #ffffff;
	--color-ink: #101315;
	--color-muted: #596168;
	--color-border: #d9dee2;
	--color-cloud: #168bff;
	--color-iac: #ff6b4a;
	--color-delivery: #c7f436;
	--color-platform: #16d9d2;
	--color-data: #ff4fa3;
	--color-security: #ffc857;
	--color-focus: #005fcc;
}

:root[data-theme='dark'] {
	--color-canvas: #0c0f10;
	--color-surface: #141819;
	--color-surface-elevated: #1b2022;
	--color-ink: #f4f7f5;
	--color-muted: #a7b0b3;
	--color-border: #30383b;
	--color-focus: #66b5ff;
}
```

Rules:

- Each project and capability category receives one accent, not a rainbow within every component.
- Use colored borders, top rails, status squares, icon backgrounds, section tints, and selected states.
- Use high-chroma color on small or medium surfaces; preserve calm neutral space around it.
- Do not use a page-wide blue or purple gradient.
- Do not use free-floating gradient orbs, bokeh blobs, or neon fog.
- Gradients are allowed only as restrained transitions inside a clipped card accent, progress line, or text detail where contrast remains strong.
- Never place long body text directly on saturated color.
- Validate WCAG AA contrast for both themes.

## Typography

Use typography to create more personality than the current generic stack.

- Display and headings: `Space Grotesk`, variable if practical.
- Body: `Manrope` or another highly readable humanist sans.
- Technical labels, metadata, commands, and status: `IBM Plex Mono`.
- Load only the weights actually used and use `font-display: swap`.
- Keep letter spacing at `0`.
- Do not use viewport-width font sizing.
- Hero H1 should be strong but not oversized: approximately `clamp(2.5rem, 5vw, 4.75rem)` only if the implementation does not derive arbitrary continuous viewport scaling; otherwise use breakpoint-based sizes.
- Use a compact type scale inside cards and panels.

## Page Composition

Avoid a page made entirely of equal white cards. Alternate composition styles to create rhythm:

- Hero: open, unframed composition with profile image and deployment route.
- Selected work: asymmetric editorial grid with colored case-study surfaces.
- Experience: structured timeline or deployment log.
- Skills: luminous technical constellation or capability board.
- About: unframed text plus three working-principle modules.
- Credentials: compact indexed list.
- Contact: strong full-width color band with clear actions.

Use full-width section bands with constrained inner content. Cards belong only to individual projects, capabilities, or credentials; never wrap an entire section in a decorative card and never place cards inside cards.

## Hero Art Direction

- Keep Juan Manuel’s name as the H1 and first-viewport identity signal.
- Integrate the real profile photograph prominently and respectfully.
- Use a non-rectangular crop only if it remains professional and does not distort the image.
- Place a crisp colored offset frame or registration-mark treatment around the photo instead of a generic shadowed card.
- Add a small availability/status detail only if it is true.
- Use one vivid accent behind a short portion of the role text, not behind the entire heading.
- Place the deployment route in the same viewport or immediately below it.
- Ensure a visible hint of Selected Work appears at the bottom of common mobile and desktop viewports.
- Keep primary and secondary actions visually distinct and do not duplicate them.

## Expandable Project Cards

Projects must support progressive disclosure. Implement accessible cards that genuinely open and expand.

### Collapsed state

Each card shows:

- Project index such as `01`.
- Category and accent color.
- Project title.
- One-sentence problem or outcome.
- Three to five core technologies.
- A small architecture preview, verified screenshot, or meaningful visual.
- An explicit `View case study` control with `ChevronDown` or `Expand` icon.

Do not make the whole card an ambiguous button if it also contains links. Use a clearly labeled expansion control.

### Expanded state

Reveal:

- Context and constraint.
- Responsibilities.
- Technical approach.
- Architecture or delivery flow.
- Security and reliability considerations.
- Outcome and lessons learned.
- Verified links to source, demo, documentation, or credentials when available.

### Expansion behavior

- Use Framer Motion `layout` animations or a measured CSS grid-row transition.
- Animate height and content opacity without animating from/to `height: auto` incorrectly.
- On desktop, the selected card may expand to span the full project grid width.
- On mobile, expand inline in the normal document flow.
- Prefer only one expanded card at a time to maintain focus.
- Preserve the reader’s scroll position when another card closes.
- Use a real button with `aria-expanded` and `aria-controls`.
- The expanded content must be reachable and readable with keyboard and screen reader.
- Expansion must still work with motion disabled.
- Deep-linking to a project with a stable hash is desirable if it can be implemented cleanly.
- Do not use a modal for the primary case-study reading experience.

### Card color variants

Give project cards distinct identities:

- Azure infrastructure: blue rail, pale blue surface, topology motif.
- IaC/automation: coral rail, warm neutral surface, code-diff motif.
- Containers/platform: cyan rail, cool surface, cluster/node motif.
- Application/data: pink or yellow rail, neutral surface, data-flow motif.

Keep motifs clipped inside the card. Decorative elements must never create page-level horizontal overflow.

## Skills: Luminous Capability System

Replace flat pills and random bubbles with a vivid, useful capability experience.

Create four or five large capability clusters. Each cluster should have:

- A colored icon tile.
- Category title.
- Short evidence statement.
- Technology nodes.
- Optional connection to a related project.

Visual treatment:

- Use saturated borders or inner rings, subtle colored shadows, crisp highlights, and layered flat surfaces.
- Skills may appear luminous, but text must remain sharp and high contrast.
- Use a restrained “powered” state: hovering or focusing a cluster lights its connected technologies and dims unrelated nodes slightly.
- Provide the same state on tap for touch devices.
- Add an accessible category filter or segmented control only if it improves navigation.
- Animate connection lines or highlights once, not continuously.
- Avoid floating bubbles, uncontrolled collision physics, and canvas-only content.
- Avoid proficiency percentages and progress bars.
- Each listed technology must connect to experience, a project, education, or a truthful learning status.

Suggested color mapping:

- Cloud & Infrastructure: Azure blue.
- Delivery & Automation: electric lime.
- Containers & Platform: cyan.
- Backend & Data: vivid pink.
- Security & Quality: amber.

## Experience as a Deployment Log

Give the experience section a clearer visual identity without trivializing employment history.

- Present entries as releases or deployment records with date, role, organization, scope, and verified outcomes.
- Use a slim vertical status rail with colored nodes.
- Expand an entry to reveal additional responsibilities only when enough verified detail exists.
- Keep the current role visually active using a semantic `Current` label, not a pulsing animation.
- On mobile, date and status appear above content with no fixed-width columns.
- Do not turn the section into a fake terminal transcript.

## Section Transitions and Backgrounds

- Use alternating neutral and softly tinted section bands.
- Introduce thin grid lines, registration marks, or topology paths aligned to the content grid.
- Use one subtle scroll-linked progress indicator if it remains performant and respects reduced motion.
- Section transitions may change accent color as the active domain changes.
- Avoid repetitive centered heading-card-heading-card composition.
- Maintain generous but controlled spacing; the portfolio should feel rich, not empty.

## Microinteractions

Build a small interaction language:

- Buttons compress by one or two pixels on activation.
- Arrow icons travel a few pixels toward their action direction.
- Project images reveal a colored frame on hover/focus.
- Expansion icons rotate with state.
- Skill nodes illuminate related nodes.
- Deployment stages activate sequentially once.
- Navigation reflects the active section.
- Copy-email shows a short confirmed state.

Motion rules:

- Most transitions: `160–280ms`.
- Expansion: `320–480ms` with a natural easing curve.
- Avoid large spring overshoot.
- Never animate every element on every scroll event.
- No cursor follower, page-wide parallax, autoplay sound, or continuous glow cycle.
- Under `prefers-reduced-motion`, remove transforms and sequencing while preserving state changes.

## Mobile Experience

Mobile is a first-class composition, not a compressed desktop page.

- Replace desktop navigation with a menu button and accessible drawer/panel.
- Stack the deployment route clearly.
- Keep color accents visible but reduce decorative density.
- Expand project cards inline.
- Make project visuals full-width with stable aspect ratios.
- Use `16px` minimum page gutters at `320px`.
- Allow action groups to wrap or become full-width.
- Ensure every label in Spanish and English fits.
- Do not hide meaningful content merely to make the layout fit.
- No horizontal scrolling at any supported width.
- Test long project names and email addresses explicitly.

## Content and Asset Integrity

- Do not invent project screenshots. Use real images, sanitized architecture diagrams, or intentional CSS/HTML visualizations built from verified facts.
- Do not expose internal company data, Azure resource names, subscriptions, tenant information, logs, incident details, or private repository links.
- If a project cannot be described publicly, present a sanitized capability case study and state its scope honestly.
- Do not invent performance percentages, cost savings, uptime, deployment frequency, certification verification, GitHub statistics, or visitor counts.
- Missing factual content must be represented in a centralized content checklist, not disguised with plausible filler.

## Implementation Requirements

- Continue using React, Vite, Framer Motion, and the existing GitHub Pages setup.
- Add `lucide-react` for interface icons if it is not already installed.
- Create design tokens using CSS custom properties.
- Model project color variants and expanded content through data rather than duplicated JSX.
- Use semantic HTML for all information represented visually.
- Keep decorative topology and pipeline visuals lightweight.
- Do not add Three.js or a large animation dependency.
- Avoid inline styles except values that are genuinely data-driven and safe.
- Remove obsolete bubble-canvas and tilt-card code if the new system replaces it.
- Keep bundle size disciplined and lazy-load non-critical project imagery.

## Required Prototype Decision

Before implementing the whole page, build and inspect these three slices in both themes and at `390px` and `1440px`:

1. Hero with profile image and deployment route.
2. One collapsed and one expanded project card.
3. One luminous skills cluster in active and inactive states.

Take screenshots and evaluate:

- Does it look distinctive without resembling a generic SaaS template?
- Is there enough color while neutral space still supports reading?
- Does expansion feel smooth and preserve layout context?
- Are bright skills readable, useful, and keyboard-accessible?
- Does the visual system still feel credible for a DevOps engineer?

If these slices fail, refine the system before propagating it across the page.

## Acceptance Criteria

The redesign is complete only when:

- The Cloud Prism identity is recognizable across the entire site.
- At least three verified projects or case-study shells use distinct semantic color treatments.
- Project cards expand and collapse accessibly on desktop and mobile.
- Skills use vivid category styling with meaningful interactive relationships.
- The deployment route is the single signature interaction.
- Light and dark themes both feel intentionally designed.
- ES and EN modes have no mixed-language visible copy.
- The site remains usable with JavaScript animation disabled or reduced.
- There is no horizontal overflow at `320`, `360`, `390`, `430`, `768`, `1024`, `1280`, and `1440` pixel widths.
- No meaningful element overlaps, clips, or becomes unreadable at 200% zoom.
- All interactions work by keyboard and touch.
- There are no serious or critical accessibility violations.
- Production build succeeds with no new console errors or missing assets.
- GitHub Pages subpath deployment and `cv.html` still work.
- Full-page screenshots have been reviewed in mobile and desktop, in both themes.

## Deliverables

Implement the design and then provide:

1. A short explanation of the Cloud Prism identity and signature interaction.
2. A list of reference principles used, without claiming or implying copied designs.
3. Files added, changed, and removed.
4. Before/after screenshots for hero, project expansion, skills, and full page.
5. Responsive overflow results for every required width.
6. Accessibility, build, console, and performance results.
7. A factual-content checklist for any owner input still required.
8. Any remaining limitation with a concrete next step.

Do not stop after changing colors or adding hover effects. Deliver a coherent visual system, meaningful interaction, strong project storytelling, and verified responsive behavior.