# CINS Design System

**Theme name:** CINS Observatory — Obsidian & Gold

This page records the design decisions so future contributors can improve the site without accidentally replacing its identity.

## The idea

The visual identity combines:
- The official DAU CINS Club crest and its black-and-gold palette.
- A quiet observatory/orbital motif inspired by the idea of exploring complex systems.
- Clear documentation layouts that prioritize reading, finding resources, and learning.

The reference screenshots were inspiration only. This site should not imitate a particular agency landing page, use distracting 3D effects, or sacrifice accessibility for decoration.

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

1. Keep the navigation predictable and readable.
2. Use the official club crest without altering its artwork.
3. Use the orbital motif only in the homepage hero; do not put decorative effects behind long technical instructions.
4. Use cards for navigation and summaries, not for every paragraph.
5. Keep body text comfortable to read on desktop and mobile.
6. Avoid large animations, autoplay media, heavy JavaScript, and unnecessary external fonts.

## Light and dark modes

- Dark mode is the first-visit presentation.
- Light mode uses warm paper and ink colours, not a black navigation strip.
- Both modes must preserve contrast for navigation, body text, links, code blocks, and cards.
- The reader can switch modes using the built-in theme control.

## Accessibility and performance

- Respect the operating system's reduced-motion setting.
- Keep meaningful information in Markdown, not inside decorative images.
- Provide meaningful alternative text for the club crest.
- Avoid colour as the only way of communicating status.
- Keep CSS small and documented so student maintainers can edit it safely.

## Saved restore point

Before this theme was applied, a Git branch was created:

`cins-stage-0-stage-1-curriculum-v1.0-baseline`

It preserves the repository state immediately before the CINS Observatory redesign. The branch is a rollback checkpoint; it does not replace the main branch or delete any content.

**Restore request phrase:** “Make it as it was at discussing CINS Stage 0 and Stage 1 — Detailed Curriculum v1.0.”

When that phrase is used, treat the saved baseline branch as the reference point and confirm the exact files to restore before changing the live site.
