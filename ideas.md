# Portfolio Design Direction

## Three stylistic approaches

### Theme Name: Graphite Field Notes
Very dark, editorial, and instrument-like: a developer portfolio that feels part lab notebook, part technical publication. It uses measured typography, hairline rules, and warm signal accents rather than decorative effects.

**Probability:** 0.07

### Theme Name: Signal / Terminal
A restrained dark interface with precise monospace labels, amber status lights, and subtle grid overlays. It evokes systems thinking and observability without becoming a cyberpunk dashboard.

**Probability:** 0.04

### Theme Name: Solar Circuit
A light, paper-like portfolio with ink-black type, electric cobalt highlights, and diagrammatic project storytelling. It feels optimistic, rigorous, and more like a design-engineering journal than a resume.

**Probability:** 0.02

## Chosen approach: Graphite Field Notes

### Design Movement
Contemporary editorialism fused with industrial interface design: a dark technical journal where every visual decision feels documented, intentional, and useful.

### Core Principles
1. **Evidence over decoration.** Project content, links, code, and architecture carry the visual weight; ornament only helps users orient themselves.
2. **Instrument-panel clarity.** Use small labels, indexed sections, hairline rules, and compact metadata to make the site feel navigable like a well-designed lab notebook.
3. **Asymmetric editorial rhythm.** Avoid a centered template stack. Pair wide narrative blocks with narrow annotations, side rails, and offset project compositions.
4. **Warm technicality.** A near-black graphite base, paper-white type, and one ownable saffron signal color create a human, precise atmosphere.

### Color Philosophy
The background is a deep graphite rather than pure black so long reading sessions feel less harsh and cards retain depth. Text uses warm mineral whites to avoid a sterile blue-gray cast. Saffron is reserved for actions, indexes, and active signals: it suggests a desk lamp over a workbench, not neon spectacle. A muted oxide red is used only for system-state notes and unavailable content.

### Layout Paradigm
A persistent left-side index rail on desktop establishes orientation, while the content canvas uses editorial offsets: a wide hero statement, a narrow proof column, and project cards that alternate between text-heavy and visual-heavy compositions. On smaller screens, the rail becomes a compact top bar and the same hierarchy collapses into a readable single column.

### Signature Elements
- Section markers formatted like `01 / PROJECTS` with a saffron index tab.
- A recurring ruled-paper motif: fine horizontal lines, measurement ticks, and subtle technical annotations.
- Project cards with a dark graphite surface, a left evidence strip, and an explicit state label such as `CURATED`, `LAB`, or `SOURCE available`.

### Interaction Philosophy
Interactions should feel like operating a precise instrument: clear hover targets, immediate focus states, short transitions, and no surprise motion. Links reveal their destination through underlines or metadata rather than oversized effects. Missing personal information remains visible as a calm, honest placeholder instead of a fake accomplishment.

### Animation
Use 180–260ms ease-out transitions for links, buttons, and card surfaces. On page entry, reveal the index rail and hero content with a small vertical shift and opacity change, staggered by 40ms. Project cards may rise 4px on hover with a saffron rule extending across their header. Respect `prefers-reduced-motion` by disabling non-essential reveals and transform effects.

### Typography System
Use **Space Grotesk** for display text and interface headings: technical but human, with distinctive geometry. Use **IBM Plex Sans** for body copy and supporting prose for reliable reading. Use **IBM Plex Mono** only for labels, metadata, code-like fragments, and timestamps. Display hierarchy: oversized but controlled H1, compact uppercase eyebrow labels, 20–28px section titles, and 15–17px body copy with generous line height.

### Brand Essence
**A technical field guide to Shaikie’s work—built for people who care how systems are made, not only what they look like.** Personality: observant, exacting, exploratory.

### Brand Voice
Headlines are concise and specific. CTAs describe the next piece of evidence rather than making generic promises. Microcopy is calm, candid, and slightly archival.

Example lines:
- “Systems in progress, documented with intent.”
- “Read the build notes →”

### Wordmark & Logo
The mark is a compact `S/` glyph: a broken saffron loop crossed by a graphite measurement line, suggesting both the first letter of the name and a circuit trace. It should appear as a bold graphic symbol without text, paired with the `SHAIKIE` wordmark set in Space Grotesk with custom tracking.

### Signature Brand Color
**Workbench Saffron — `#E5A83B`**. It is the brand’s signal color: warm, legible, and ownable against graphite without drifting into generic electric blue or purple.

## Style Decisions
- The portfolio is dark-first, editorial, and evidence-led rather than a generic template.
- No invented projects, statistics, testimonials, experience, or skills will be presented as fact.
- Missing personal details will appear as clearly marked content requirements.
- The UI will prioritize asymmetric composition, hairline rules, workbench saffron accents, and purposeful motion.

## Accepted visual-review amendments

- The `S/` mark, `SHAIKIE` wordmark, and persistent index rail are brand infrastructure on desktop; the compact mobile header carries the same system on small screens.
- Every primary route uses at least one ruled-paper or instrument motif through hairline rules, indexed sections, measurement ticks, or evidence strips.
- Project surfaces foreground state, evidence, source/build-note metadata, and candid verification status before decorative showcase treatment.
