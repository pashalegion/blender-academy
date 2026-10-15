# Blender Academy

A free learning hub for Blender and 3D art, with 8 focused learning tracks, version-aware lesson notes, troubleshooting, shortcuts, a hardware checker, a resource vault, and a glossary.

## Learning program

The 23 lessons are organized as focused tracks. Fundamentals now progresses from a current Blender 5 interface orientation through modifier and topology deep dives, then uses the complete Blender Guru donut course as a project capstone. The old separate Donut Part 1 card was removed because it duplicated the opening section of that full course.

1. **Blender Fundamentals (4 lessons):** interface and navigation, modifiers, clean topology, then the full donut project.
2. **Hard Surface & Modeling (3):** a low-poly environment asset, Boolean and bevel workflows, and precision modeling and snapping.
3. **Digital Sculpting & Anatomy (3):** core sculpting brushes, Dyntopo vs. voxel remesh, and manual retopology.
4. **Materials, Shading & UVs (3):** Principled BSDF and PBR, UV seams, and procedural materials.
5. **Lighting, Cameras & Render (3):** Cycles vs. Eevee, three-point studio lighting, and HDRI world lighting.
6. **Rigging & Character Animation (3):** armature basics, automatic weights, and animation principles using a bouncing ball.
7. **Geometry Nodes & Procedural (2):** Geometry Nodes fundamentals, then procedural curves and cables.
8. **Physics, Cloth & VFX (2):** rigid body dynamics, then cloth simulation.

### Version guidance

The refreshed interface lesson and donut capstone use Blender 5-era instruction. Other community lessons may have been recorded for earlier versions; their lesson notes identify version-sensitive steps where known and link to the official Blender manual. Check the lesson card and its notes before following version-specific UI instructions.

## Study tools

- Troubleshooting notes on every lesson.
- A keyboard shortcuts reference page.
- Local lesson completion, bookmarks, XP, achievements, and a per-lesson notepad.
- Blender rig checker, free resource vault, plugin directory, and 3D glossary.
- Browser-local progress backup and restore.

## Run locally

Open `index.html` in a browser, or use the included `start.bat` / `start-server.ps1` launchers.

## Project structure

- `index.html` — single-page interface
- `css/style.css` — application styling
- `js/data.js` — lesson and reference data
- `js/app.js` — navigation, lessons, progress, and interactions
- `js/visuals.js`, `js/hardware.js`, `js/vault.js`, `js/glossary.js` — supporting views
