# Article Page — Structure

## Purpose
Provide a highly readable, immersive, and premium editorial reading experience. It must mirror the 'Frontier' brand's technical and physical aesthetics while operating exclusively in light mode to signal a shift into deep focus reading.

## Sections (in order)
1. **Article Navigation**
   - Layout: Fixed or sticky top bar, highly minimal.
   - Content: "Frontier" logo (left), "Back to Journal" link (right). Monospace.
   - Notes: Transparent background with a fast backdrop blur on scroll.

2. **Hero Header**
   - Layout: Staggered, asymmetric alignment similar to the Founder page Hero, but optimized for readability.
   - Content: Article Title (Massive `font-display`), Publish Date, Reading Time, and Category.
   - Notes: Title text animates in with individual word reveals. Text color is `carbon`. 

3. **Featured Media (FIG 01)**
   - Layout: Full width or large container with padding. 
   - Content: Grayscale hero image.
   - Notes: Must include the "FIG 01" micro-label overlay from the moodboard/founder page styling. Slight parallax effect on scroll.

4. **Reading Body**
   - Layout: Narrow, centered column (`max-w-2xl` or `3xl`) for optimal line length.
   - Content: Article paragraphs, blockquotes, code snippets, inline images.
   - Notes: `font-body` for main text with leading relaxed. Pull quotes should be large `font-display`.

5. **Footer / Next Article CTA**
   - Layout: Large, unmissable text at the bottom.
   - Content: Link to the next logical article in the series.
   - Notes: Hover states should mimic the "Read Essay" lines from the main page.

## Component Map
- `ArticleNav.tsx` (Needs building — top navigation)
- `ArticleHero.tsx` (Needs building — animated title + metadata)
- `ArticleBody.tsx` (Needs building — styled prose/markdown wrapper)
- `ArticleFooterCTA.tsx` (Needs building — bottom navigation)

## Design Notes
- **Strict Light Mode:** Background strictly `#f4f4f5`. Primary text strictly `#1a1a1a` (carbon) or deeply opaque carbon for hierarchy.
- **Typography Matrix:** 
  - Headlines: `Helvetica Now Display` (`tracking-[-0.03em]`).
  - Body: `Geist` (`leading-[1.7]`).
  - Metadata: `Geist Mono` (`text-[10px] tracking-widest uppercase`).
- **Interactions:** Use the Frontier spring (`ease: [0.34, 1.56, 0.64, 1]`) for all Framer Motion reveals. No generic crossfades.
