# Founder Home — Strategy & Structure

## Purpose
Introduce the founder as an authority in product engineering and strategy. The experience must feel like a premium editorial magazine, blending narrative, statistical authority, deep-dive writing, and a showcase of high-end craft.

## Editorial Narrative Arc
1. **The Persona (Hero):** Dominant typography overlapping atmospheric visuals, establishing instant presence.
2. **The Proof (Metrics):** Hard numbers and a concise philosophical statement.
3. **The Philosophy:** Core beliefs and values (Taste matters, Speed, Soul).
4. **The Mind (Journal):** Asymmetric, grid-breaking editorial layout for highlighted essays, followed by a structured archive grid.
5. **The Invitation (CTC) & Contact:** A calm, high-intent closing call to action with contact details.
6. **Footer:** Clean, minimal footer.

## Sections & Content (in order)

1. **Editorial Hero**
   - Layout: Full width, overlapping elements. Front/back layered typography with the founder image.
   - Copy: "PRODUCT ARCHITECT" / "STRATEGIST" / "FirstName LastName"
   - Components: `EditorialHero`, `GenerativeCircleBackground`

2. **Authority & Metrics**
   - Layout: Clean horizontal metric row beneath a distinct biographical statement.
   - Copy: "10+ Years Building", "50+ Products Shipped", "100% Signal".
   - Components: `AuthorityMetrics`

3. **The Philosophy**
   - Layout: Stark, minimal typographic blocks using extensive whitespace.
   - Copy: 
     - "Build with speed, style, and soul." 
     - "AI accelerates execution. Human taste defines the outcome."
     - "We don't do 'digital solutions.' We build products people understand instantly."
   - Components: `PhilosophyStatement`
   - UX Notes: Helvetica Now Display for impact. Slow fade-in reveals.

4. **The Journal (Featured Essays)**
   - Layout: Magazine-style asymmetric grid with floating imagery (Big 3 Listings).
   - Copy: Snippets of "The End of Traditional Agencies", "Designing for the Void."
   - Components: `EditorialGrid`

5. **More from the Journal (Archive Grid)**
   - Layout: Smaller 3x2 grid of articles placed immediately under the featured essays.
   - Copy: Additional essays and observations. Clean title and date layout.
   - Components: `JournalArchiveGrid`, `ArchiveCard`
   - UX Notes: Minimalist border lines, crisp hover states transitioning text or borders to `#197853`.

6. **Call to Conversation (CTC) & Contact**
   - Layout: Full width, dark atmospheric block with an oversized circular geometric signal element.
   - Copy: "Build something meaningful. The only thing standing between you and your startup idea is a weekend of commitment." / [ Start a Conversation ]
   - Contact Info: Email, Twitter/X, LinkedIn.
   - Components: `ContactSection`

7. **Footer**
   - Layout: Minimal, bottom-anchored alignment.
   - Copy: Copyright, Studio Links, "Built at the Frontier".
   - Components: `MinimalFooter`

## Component Map (Updated)
- `EditorialHero` (Already Built)
- `AuthorityMetrics` (Already Built)
- `PhilosophyStatement` (New)
- `EditorialGrid` (Already Built)
- `JournalArchiveGrid` & `ArchiveCard` (New)
- `ContactSection` (New)
- `MinimalFooter` (New)
