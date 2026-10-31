# Blender Academy

A free learning hub for Blender and 3D art, with 8 focused learning tracks, version-aware lesson notes, troubleshooting, shortcuts, a hardware checker, a resource vault, and a glossary.

## Learning program

The 45 lessons are organized as focused tracks. Fundamentals now progresses from a current Blender 5 interface orientation through modifier and topology deep dives, then uses the complete Blender Guru donut course as a project capstone. The old separate Donut Part 1 card was removed because it duplicated the opening section of that full course.

1. **Blender Fundamentals (7 lessons):** interface and navigation, essential mesh tools, modifiers, clean topology, scene organization, the Asset Browser, then the full donut project.
2. **Hard Surface & Modeling (4):** a low-poly environment asset, Boolean and bevel workflows, precision modeling and snapping, and designing for 3D printing.
3. **Digital Sculpting & Anatomy (4):** core sculpting brushes, Dyntopo vs. voxel remesh, manual retopology, and hair grooming.
4. **Materials, Shading & UVs (6):** Principled BSDF and PBR, UV seams and packing, procedural materials, texture painting, and baking.
5. **Lighting, Cameras & Render (4):** Cycles vs. Eevee, three-point studio lighting, HDRI world lighting, and camera work.
6. **Rigging & Character Animation (8):** armature basics, automatic weights, animation principles, constraints, shape keys, the NLA Editor, drivers, and Grease Pencil 2D animation.
7. **Geometry Nodes & Procedural (2):** Geometry Nodes fundamentals, then procedural curves and cables.
8. **Physics, Cloth & VFX (5):** rigid body dynamics, cloth, liquid, smoke and fire, then particles.
9. **Post-Production & Pipeline (5):** compositing, video editing, motion tracking, exporting to game engines, and Python scripting.

### Version guidance

The refreshed interface lesson and donut capstone use Blender 5-era instruction. Other community lessons may have been recorded for earlier versions; their lesson notes identify version-sensitive steps where known and link to the official Blender manual. Check the lesson card and its notes before following version-specific UI instructions.

## Study tools

- Troubleshooting notes on every lesson.
- A keyboard shortcuts reference page.
- Local lesson completion, bookmarks, XP, achievements, and a per-lesson notepad.
- Blender rig checker, free resource vault, plugin directory, and 3D glossary.
- Progress is saved in this browser; export a backup to keep or move it.

## Run locally

Open `index.html` in a browser, or serve the folder with `start-server.ps1` or `python -m http.server`. There is no build step and nothing loads from a CDN.

## Project structure

- `index.html`, `lessons.html`, `lesson.html`, `tracks.html`, `shortcuts.html`, `rig.html`, `plugins.html`, `vault.html`, `glossary.html`, `progress.html`, `secrets.html`, `404.html` — pages
- `css/style.css` — styling
- `js/common.js` — storage, navigation and toasts for every page; other files in `js/` belong to one page each
- `data/lessons-index.js` — lesson metadata
- `data/lessons/<id>.js` — lesson bodies, loaded only by `lesson.html`
- `data/reference.js` — shortcuts, add-ons, vault, glossary, hardware, achievements
- `tests/check-data.mjs` — run by hand to check lesson IDs
- `CHANGES.md`, `VIDEOS.md` — content checks
