# 🎨 Blender Academy — Free 3D Modeling & Animation Learning Hub

A modern, comprehensive web platform dedicated to learning **Blender 4.x** and 3D modeling from scratch completely for free.

---

## 🌟 What's Included

### 🛣️ 8 Structured Learning Tracks
1. **🧭 Blender Fundamentals**: Viewport navigation, 3D space, transforms (G/R/S), the Donut rite of passage, Modifiers 101, and clean topology.
2. **📐 Hard Surface & 3D Environment Modeling**: Low-poly game asset modeling (The Medieval Well), Boolean cuts & Bevel workflows, ArchViz millimeter precision, and modular design.
3. **🗿 Digital Sculpting & Anatomy**: Core sculpt brushes (Draw, Clay Strips, Snake Hook), Dyntopo vs Voxel Remesher, stylized facial anatomy, and manual retopology with Shrinkwrap.
4. **🎨 Materials, Shading & UV Unwrapping**: Principled BSDF, PBR workflows (Albedo, Roughness, Metallic, Normal), Seam placement & Texel density, procedural node shading, and direct mesh painting.
5. **💡 Lighting, Cameras & Rendering**: Cycles (path-tracing) vs EEVEE Next (realtime), 3-point cinematic lighting, photorealistic Poly Haven HDRIs, depth of field, and AgX color management.
6. **🦴 Rigging & Character Animation**: Bones & armatures, automatic weights & bone heat error fixes, Rigify auto-rigging, Graph Editor bezier curves, and bouncing ball principles.
7. **🔮 Geometry Nodes & Procedural Power**: Modern node-based scattering, instances on points, procedural cables, and exposed parameters.
8. **🌊 Physics, Cloth & VFX**: Rigid body destruction, domino chains, realistic cloth simulation with pillows/folds, and Mantaflow physics.

---

### 🚨 Detailed Troubleshooting for Every Lesson
No more getting stuck on weird bugs! Every lesson features a **"Common Gotchas & Fixes"** section detailing:
- **The Problem**: Exact symptoms (e.g. inverted dark shading, squished bevels, pink render backgrounds, bone heat weighting errors).
- **Why it happens**: Clear explanation of underlying 3D concepts (flipped normals, unapplied object scale, missing textures, non-manifold geometry).
- **Quick Fix**: 1-2 click step-by-step hotkeys and UI settings.

---

### 🔌 Beginner Add-ons & Plugins Directory
Comprehensive catalog of essential tools with activation guides and hotkeys:
- **Built-in Addons**: Node Wrangler, LoopTools, BoolTool, Images as Planes, Extra Objects, Rigify.
- **Free Community Addons**: BlenderKit (free 10k+ asset library), Poly Haven (instant HDRIs & textures), fSpy (photo perspective matcher), Screencast Keys.

---

### 🏆 Gamification & Achievements System
- **Leveling & XP Engine**: Earn +100 XP per lesson, +15 XP per troubleshooting guide explored, and badge bonuses.
- **Ranks**: From *Default Cube Survivor* to *3D Grandmaster*.
- **Interactive Easter Egg**: Interactive 3D spinning cube in the header with a "Delete Default Cube (Press X)" button that explodes into particles and unlocks your first achievement!
- **14 Unlockable Badges**: Visual and audio/toast celebration upon reaching milestones.
- **Personal Study Notepad**: Auto-saved study notes per lesson.
- **Backup & Restore**: Export your progress as JSON and import anytime.

---

## 🚀 How to Run

### Method 1: Instant Launch (No installation needed)
Double-click `start.bat` or open `index.html` directly in any web browser (Google Chrome, Microsoft Edge, Firefox, Brave).

### Method 2: Local HTTP Server (PowerShell)
Right-click `start-server.ps1` and select **Run with PowerShell** (or run `powershell -ExecutionPolicy Bypass -File .\start-server.ps1`). It will serve the site at `http://localhost:5500`.

---

## 📁 Directory Structure
```
blender-academy/
├── index.html            # Main web application interface
├── css/
│   └── style.css         # Blender 4.x dark UI theme & styling
├── js/
│   ├── data.js           # Curated lessons, troubleshooting, plugins, badges, shortcuts
│   └── app.js            # Gamification, progress tracking, filters, modals
├── start.bat             # One-click Windows launcher
├── start-server.ps1      # Native PowerShell local web server
└── README.md             # Documentation
```
