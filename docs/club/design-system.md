# CINS Design System

**Theme name:** CINS Observatory — Obsidian & Gold  
**Experience mode:** Immersive 3D hero and motion-enhanced documentation

This page records the design decisions so future contributors can improve the site without losing its identity.

## The idea

The visual identity combines:
- The official DAU CINS Club crest and its black-and-gold palette.
- A cinematic 3D network sphere with orbital paths, particle data, and satellite nodes.
- Editorial typography and clean bento-style navigation cards.
- Documentation layouts that prioritize reading, finding resources, and learning.

The supplied reference screenshots are inspiration only. Do not copy a particular agency site or use effects that make technical content difficult to read.

## Motion and 3D

The homepage uses Three.js for a live, animated network sphere. The sphere is decorative and must never contain essential navigation or instructional information.

The current external dependency is pinned to **Three.js 0.187.0**, loaded as an ES module from jsDelivr:

`https://cdn.jsdelivr.net/npm/three@0.187.0/build/three.module.js`

The version is deliberately pinned. Do not change it to an unpinned `latest` URL. When upgrading:
1. Check the official Three.js migration notes and API documentation.
2. Test on desktop and a mid-range mobile device.
3. Verify WebGL failure fallback, reduced-motion behavior, and instant navigation.
4. Check the browser console and performance.
5. Update this page and the version reference in the JavaScript together.

The script pauses rendering when the hero is outside the viewport or the browser tab is hidden. It caps pixel ratio and reduces particle count on smaller screens. It also disposes geometry, materials, observers, and the renderer when the page changes.

## Colour tokens

| Use | Colour | Value |
|---|---|---|
| Main dark background | Obsidian | `#0C0B09` |
| Dark surfaces | Charcoal | `#15130F` |
| Main gold | Antique gold | `#C7A65B` |
| Highlight gold | Warm champagne | `#E8D39A` |
| Light background | Warm paper | `#F8F6F0` |
| Light surfaces | Soft ivory | `#FFFDF8` |
| Main text | Ink | `#29251E` |

## Layout rules

1. Keep navigation predictable and readable.
2. Use the official club crest without altering its artwork.
3. Reserve the heaviest 3D effects for the homepage hero and occasional intentional feature sections.
4. Use animated cards for navigation and summaries, not for every paragraph.
5. Keep body text comfortable to read on desktop and mobile.
6. Avoid autoplay video, sound, and large downloads without a clear purpose.

## Light and dark modes

- Dark mode is the first-visit presentation.
- Light mode uses warm paper and ink colours, not a black navigation strip.
- Both modes must preserve contrast for navigation, body text, links, code blocks, and cards.
- The reader can switch modes using the built-in theme control.

## Accessibility and fallback behavior

- Respect `prefers-reduced-motion`: no 3D animation and no scroll-reveal movement.
- If WebGL is unavailable or the CDN fails, the emblem and CSS orbital fallback remain visible.
- Keep meaningful information in Markdown, not inside the canvas.
- Provide meaningful alternative text for the club crest.
- Do not use colour as the only way to communicate status.

## Saved restore point

Before the CINS Observatory redesign, a Git branch was created:

`cins-stage-0-stage-1-curriculum-v1.0-baseline`

It preserves the repository state immediately before the visual redesign.

**Restore request phrase:** “Make it as it was at discussing CINS Stage 0 and Stage 1 — Detailed Curriculum v1.0.”

When that phrase is used, treat the saved baseline branch as the reference point and confirm the exact files to restore before changing the live site.
