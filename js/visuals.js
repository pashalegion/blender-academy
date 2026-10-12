/**
 * Blender Academy Vector Visuals
 * Bespoke SVG vector illustrations for every 3D learning lesson and addon.
 */

const BLENDER_VISUALS = {
  // Lesson Visualizations
  lessons: {
    "fund-1": `
      <svg viewBox="0 0 240 120" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bg-fund-1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#181a20"/>
            <stop offset="100%" stop-color="#121316"/>
          </linearGradient>
        </defs>
        <rect width="240" height="120" fill="url(#bg-fund-1)"/>
        <!-- 3D Perspective Grid -->
        <path d="M20 90 L220 90 M40 105 L200 105 M60 78 L180 78" stroke="#2c303a" stroke-width="1"/>
        <path d="M120 70 L40 115 M120 70 L80 115 M120 70 L120 115 M120 70 L160 115 M120 70 L200 115" stroke="#2c303a" stroke-width="1"/>
        <!-- XYZ Axis Gizmo -->
        <!-- Z Axis (Blue/Up) -->
        <line x1="120" y1="65" x2="120" y2="20" stroke="#00a2ff" stroke-width="2.5" stroke-linecap="round"/>
        <polygon points="120,15 116,23 124,23" fill="#00a2ff"/>
        <text x="126" y="22" fill="#00a2ff" font-size="9" font-weight="bold" font-family="monospace">Z</text>
        <!-- X Axis (Red/Right) -->
        <line x1="120" y1="65" x2="175" y2="82" stroke="#ff4444" stroke-width="2.5" stroke-linecap="round"/>
        <polygon points="180,84 170,80 174,88" fill="#ff4444"/>
        <text x="182" y="93" fill="#ff4444" font-size="9" font-weight="bold" font-family="monospace">X</text>
        <!-- Y Axis (Green/Left) -->
        <line x1="120" y1="65" x2="65" y2="82" stroke="#00e676" stroke-width="2.5" stroke-linecap="round"/>
        <polygon points="60,84 66,88 70,80" fill="#00e676"/>
        <text x="50" y="93" fill="#00e676" font-size="9" font-weight="bold" font-family="monospace">Y</text>
        <!-- Camera frustum icon -->
        <path d="M175 30 L205 20 L205 45 Z" fill="none" stroke="#ea7600" stroke-width="1.5"/>
        <rect x="160" y="26" width="15" height="13" rx="2" fill="#ea7600" opacity="0.3" stroke="#ea7600" stroke-width="1.5"/>
        <circle x="120" y="65" r="3.5" fill="#ffffff"/>
      </svg>
    `,

    "fund-2": `
      <svg viewBox="0 0 240 120" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="240" height="120" fill="#15171c"/>
        <!-- Isometric Cube -->
        <g transform="translate(120, 68)">
          <!-- Cube Faces -->
          <polygon points="0,-28 26,-13 0,2 -26,-13" fill="#2d313c" stroke="#484f60" stroke-width="1.5"/>
          <polygon points="0,2 26,-13 26,17 0,32" fill="#1f222a" stroke="#484f60" stroke-width="1.5"/>
          <polygon points="0,2 -26,-13 -26,17 0,32" fill="#262933" stroke="#484f60" stroke-width="1.5"/>
          <!-- Transform Gizmo: Translation Arrows -->
          <line x1="0" y1="-28" x2="0" y2="-55" stroke="#00a2ff" stroke-width="2"/>
          <polygon points="0,-58 -4,-50 4,-50" fill="#00a2ff"/>
          <line x1="26" y1="-13" x2="52" y2="0" stroke="#ff4444" stroke-width="2"/>
          <polygon points="55,2 47,-4 49,4" fill="#ff4444"/>
          <!-- Rotation Ring arc -->
          <path d="M -30,-5 A 35 22 0 0 1 30,-5" fill="none" stroke="#ea7600" stroke-width="2" stroke-dasharray="3 2"/>
          <polygon points="32,-3 26,-7 29,-1" fill="#ea7600"/>
          <!-- Scale Box on tip -->
          <line x1="-26" y1="-13" x2="-50" y2="0" stroke="#00e676" stroke-width="2"/>
          <rect x="-54" y="-3" width="6" height="6" fill="#00e676"/>
        </g>
      </svg>
    `,

    "fund-3": `
      <svg viewBox="0 0 240 120" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="240" height="120" fill="#17161b"/>
        <g transform="translate(120, 60)">
          <!-- Donut Dough Base (Torus) -->
          <ellipse cx="0" cy="5" rx="55" ry="32" fill="#b07d48" stroke="#8c5f34" stroke-width="2"/>
          <!-- Donut Hole -->
          <ellipse cx="0" cy="5" rx="20" ry="12" fill="#17161b" stroke="#8c5f34" stroke-width="2"/>
          <!-- Pink Icing with dripping curves -->
          <path d="M -50,0 C -45,15 -35,18 -28,8 C -20,24 -10,20 -2,12 C 6,25 18,22 26,10 C 35,20 45,12 48,0 C 53,-12 45,-25 0,-25 C -45,-25 -53,-12 -50,0 Z" fill="#ff4d88" opacity="0.9" stroke="#ff2a73" stroke-width="1.5"/>
          <ellipse cx="0" cy="-2" rx="17" ry="10" fill="#17161b" stroke="#ff2a73" stroke-width="1.5"/>
          <!-- Colorful Sprinkles -->
          <line x1="-30" y1="-8" x2="-22" y2="-12" stroke="#ffd600" stroke-width="3" stroke-linecap="round"/>
          <line x1="-12" y1="-18" x2="-8" y2="-10" stroke="#00e676" stroke-width="3" stroke-linecap="round"/>
          <line x1="15" y1="-15" x2="24" y2="-12" stroke="#00a2ff" stroke-width="3" stroke-linecap="round"/>
          <line x1="-25" y1="4" x2="-18" y2="2" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>
          <line x1="20" y1="3" x2="28" y2="-2" stroke="#ffd600" stroke-width="3" stroke-linecap="round"/>
          <line x1="5" y1="-14" x2="10" y2="-8" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>
        </g>
      </svg>
    `,

    "fund-4": `
      <svg viewBox="0 0 240 120" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="240" height="120" fill="#15171c"/>
        <!-- Low poly vs Subdivided & Mirror Modifier -->
        <g transform="translate(70, 60)">
          <!-- Low Poly Cube Wireframe -->
          <polygon points="0,-25 24,-12 0,2 -24,-12" fill="none" stroke="#6b7280" stroke-width="1.5"/>
          <polygon points="0,2 24,-12 24,14 0,28" fill="none" stroke="#6b7280" stroke-width="1.5"/>
          <polygon points="0,2 -24,-12 -24,14 0,28" fill="none" stroke="#6b7280" stroke-width="1.5"/>
          <text x="0" y="42" fill="#9ca3af" font-size="9" text-anchor="middle" font-family="sans-serif">Base Mesh</text>
        </g>
        <!-- Arrow -->
        <path d="M105 60 L125 60 M120 55 L126 60 L120 65" stroke="#ea7600" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <g transform="translate(170, 60)">
          <!-- Subdivided Smooth Sphere / Beveled Box -->
          <ellipse cx="0" cy="2" rx="28" ry="24" fill="#1f232b" stroke="#00a2ff" stroke-width="1.5"/>
          <!-- Subdiv Wireframe lines -->
          <ellipse cx="0" cy="2" rx="28" ry="8" fill="none" stroke="#00a2ff" stroke-width="1" stroke-dasharray="3 2" opacity="0.7"/>
          <ellipse cx="0" cy="2" rx="10" ry="24" fill="none" stroke="#00a2ff" stroke-width="1" stroke-dasharray="3 2" opacity="0.7"/>
          <!-- Mirror line center -->
          <line x1="0" y1="-24" x2="0" y2="28" stroke="#ea7600" stroke-width="1.5" stroke-dasharray="4 2"/>
          <text x="0" y="42" fill="#00a2ff" font-size="9" text-anchor="middle" font-family="sans-serif">Subdiv + Mirror</text>
        </g>
      </svg>
    `,

    "fund-5": `
      <svg viewBox="0 0 240 120" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="240" height="120" fill="#15171c"/>
        <!-- Clean Quad Mesh Grid Flow -->
        <g transform="translate(120, 60)">
          <!-- Quad Flow Rings -->
          <ellipse cx="0" cy="0" rx="60" ry="32" fill="none" stroke="#374151" stroke-width="1.5"/>
          <ellipse cx="0" cy="0" rx="42" ry="22" fill="none" stroke="#00e676" stroke-width="1.5"/>
          <ellipse cx="0" cy="0" rx="24" ry="12" fill="none" stroke="#374151" stroke-width="1.5"/>
          <!-- Radial Spoke Edges forming pure Quads -->
          <line x1="0" y1="-32" x2="0" y2="-12" stroke="#00e676" stroke-width="1.5"/>
          <line x1="0" y1="12" x2="0" y2="32" stroke="#00e676" stroke-width="1.5"/>
          <line x1="-60" y1="0" x2="-24" y2="0" stroke="#00e676" stroke-width="1.5"/>
          <line x1="24" y1="0" x2="60" y2="0" stroke="#00e676" stroke-width="1.5"/>
          <line x1="-42" y1="-22" x2="-17" y2="-8" stroke="#00e676" stroke-width="1.5"/>
          <line x1="17" y1="-8" x2="42" y2="-22" stroke="#00e676" stroke-width="1.5"/>
          <line x1="-42" y1="22" x2="-17" y2="8" stroke="#00e676" stroke-width="1.5"/>
          <line x1="17" y1="8" x2="42" y2="22" stroke="#00e676" stroke-width="1.5"/>
          <!-- Quad Vertices -->
          <circle cx="0" cy="-22" r="3" fill="#ffffff"/>
          <circle cx="42" cy="0" r="3" fill="#ffffff"/>
          <circle cx="-42" cy="0" r="3" fill="#ffffff"/>
          <circle cx="0" cy="22" r="3" fill="#ffffff"/>
        </g>
        <text x="120" y="108" fill="#00e676" font-size="9" text-anchor="middle" font-family="monospace">100% CLEAN QUADS</text>
      </svg>
    `,

    "hard-1": `
      <svg viewBox="0 0 240 120" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="240" height="120" fill="#16181e"/>
        <!-- Low Poly Medieval Well -->
        <g transform="translate(120, 65)">
          <!-- Well Stone Base -->
          <path d="M-35,15 L35,15 L30,42 L-30,42 Z" fill="#475569" stroke="#64748b" stroke-width="1.5"/>
          <ellipse cx="0" cy="15" rx="35" ry="10" fill="#334155" stroke="#64748b" stroke-width="1.5"/>
          <ellipse cx="0" cy="15" rx="25" ry="6" fill="#1e293b"/>
          <!-- Wooden Support Beams -->
          <line x1="-25" y1="15" x2="-25" y2="-22" stroke="#b45309" stroke-width="4" stroke-linecap="round"/>
          <line x1="25" y1="15" x2="25" y2="-22" stroke="#b45309" stroke-width="4" stroke-linecap="round"/>
          <!-- Crossbeam and hanging rope -->
          <line x1="-27" y1="-22" x2="27" y2="-22" stroke="#d97706" stroke-width="3"/>
          <line x1="0" y1="-22" x2="0" y2="-2" stroke="#e2e8f0" stroke-width="1.5"/>
          <!-- Bucket -->
          <polygon points="-6,-2 6,-2 4,8 -4,8" fill="#78350f" stroke="#92400e" stroke-width="1"/>
          <!-- A-Frame Shingled Roof -->
          <polygon points="0,-48 -38,-24 38,-24" fill="#ea7600" opacity="0.9" stroke="#f97316" stroke-width="1.5"/>
          <line x1="0" y1="-48" x2="0" y2="-24" stroke="#c2410c" stroke-width="1.5"/>
        </g>
      </svg>
    `,

    "hard-2": `
      <svg viewBox="0 0 240 120" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="240" height="120" fill="#15171c"/>
        <!-- Booleans & Bevels: Cylinder cut into cube -->
        <g transform="translate(120, 62)">
          <!-- Main Cube -->
          <polygon points="0,-30 45,-8 0,14 -45,-8" fill="#2d333f" stroke="#00a2ff" stroke-width="1.5"/>
          <polygon points="0,14 45,-8 45,26 0,48" fill="#1e222b" stroke="#00a2ff" stroke-width="1.5"/>
          <polygon points="0,14 -45,-8 -45,26 0,48" fill="#252a35" stroke="#00a2ff" stroke-width="1.5"/>
          <!-- Circular Cutout Hole (Boolean Difference) -->
          <ellipse cx="0" cy="-8" rx="20" ry="10" fill="#15171c" stroke="#ea7600" stroke-width="2"/>
          <path d="M-20,-8 L-20,10 A 20 10 0 0 0 20,10 L20,-8" fill="#101114" stroke="#ea7600" stroke-width="1.5"/>
          <!-- Highlighted Bevel Edges (glowing white) -->
          <line x1="0" y1="14" x2="45" y2="-8" stroke="#ffffff" stroke-width="1.5" opacity="0.8"/>
          <line x1="0" y1="14" x2="-45" y2="-8" stroke="#ffffff" stroke-width="1.5" opacity="0.8"/>
          <line x1="0" y1="14" x2="0" y2="48" stroke="#ffffff" stroke-width="1.5" opacity="0.8"/>
        </g>
      </svg>
    `,

    "hard-3": `
      <svg viewBox="0 0 240 120" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="240" height="120" fill="#14171d"/>
        <!-- Precision Snapping & CAD Dimensions -->
        <g transform="translate(40, 25)">
          <!-- Grid Dots -->
          <pattern id="grid-cad" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="8" cy="8" r="1" fill="#334155"/>
          </pattern>
          <rect width="160" height="70" fill="url(#grid-cad)"/>
          <!-- CAD Wall Shape -->
          <path d="M20 50 L90 50 L90 20 L140 20 L140 50 L140 60 L20 60 Z" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
          <!-- Dimension Arrows & Callout -->
          <line x1="20" y1="72" x2="140" y2="72" stroke="#fbbf24" stroke-width="1.5"/>
          <line x1="20" y1="67" x2="20" y2="77" stroke="#fbbf24" stroke-width="1.5"/>
          <line x1="140" y1="67" x2="140" y2="77" stroke="#fbbf24" stroke-width="1.5"/>
          <text x="80" y="83" fill="#fbbf24" font-size="9" text-anchor="middle" font-family="monospace">4.250 m</text>
          <!-- Snap Target Crosshair -->
          <circle cx="90" cy="20" r="5" fill="none" stroke="#ea7600" stroke-width="1.5"/>
          <circle cx="90" cy="20" r="1.5" fill="#ea7600"/>
        </g>
      </svg>
    `,

    "sculpt-1": `
      <svg viewBox="0 0 240 120" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="240" height="120" fill="#17151a"/>
        <!-- Digital Clay Sphere with Sculpt Brush -->
        <g transform="translate(120, 60)">
          <!-- Clay Mound -->
          <ellipse cx="0" cy="0" rx="55" ry="38" fill="#2d2233" stroke="#a855f7" stroke-width="1.5"/>
          <!-- Clay Strips Grooves -->
          <path d="M-30,-10 C-15,-18 10,-8 32,-15" stroke="#e040fb" stroke-width="5" stroke-linecap="round" fill="none" opacity="0.8"/>
          <path d="M-25,5 C-10,0 15,10 35,2" stroke="#e040fb" stroke-width="5" stroke-linecap="round" fill="none" opacity="0.8"/>
          <path d="M-20,18 C-5,12 18,22 28,14" stroke="#c084fc" stroke-width="4" stroke-linecap="round" fill="none" opacity="0.8"/>
          <!-- Sculpt Brush Circle Gizmo -->
          <circle cx="15" cy="-5" r="18" fill="none" stroke="#ffd600" stroke-width="1.5" stroke-dasharray="3 2"/>
          <circle cx="15" cy="-5" r="2.5" fill="#ffd600"/>
          <!-- Strength Vector Arrow -->
          <line x1="15" y1="-5" x2="15" y2="-22" stroke="#ffd600" stroke-width="1.5"/>
        </g>
      </svg>
    `,

    "sculpt-2": `
      <svg viewBox="0 0 240 120" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="240" height="120" fill="#16171c"/>
        <!-- Dyntopo Triangles (Left) vs Voxel Uniform Quads (Right) -->
        <g transform="translate(70, 60)">
          <circle cx="0" cy="0" r="30" fill="#1f242d" stroke="#64748b" stroke-width="1.5"/>
          <!-- Random Triangles -->
          <path d="M-20,-10 L0,-25 L10,-5 L-10,15 L-25,5 Z M0,-25 L15,-10 L25,-5" stroke="#38bdf8" stroke-width="1" fill="none"/>
          <text x="0" y="44" fill="#38bdf8" font-size="9" text-anchor="middle" font-family="monospace">DYNTOPO</text>
        </g>
        <!-- VS -->
        <text x="120" y="64" fill="#ea7600" font-size="12" font-weight="bold" text-anchor="middle" font-family="sans-serif">⇄</text>
        <g transform="translate(170, 60)">
          <circle cx="0" cy="0" r="30" fill="#1f242d" stroke="#64748b" stroke-width="1.5"/>
          <!-- Uniform Voxel Grid -->
          <line x1="-28" y1="-10" x2="28" y2="-10" stroke="#a855f7" stroke-width="1"/>
          <line x1="-30" y1="0" x2="30" y2="0" stroke="#a855f7" stroke-width="1"/>
          <line x1="-28" y1="10" x2="28" y2="10" stroke="#a855f7" stroke-width="1"/>
          <line x1="-10" y1="-28" x2="-10" y2="28" stroke="#a855f7" stroke-width="1"/>
          <line x1="0" y1="-30" x2="0" y2="30" stroke="#a855f7" stroke-width="1"/>
          <line x1="10" y1="-28" x2="10" y2="28" stroke="#a855f7" stroke-width="1"/>
          <text x="0" y="44" fill="#a855f7" font-size="9" text-anchor="middle" font-family="monospace">VOXEL REMESH</text>
        </g>
      </svg>
    `,

    "sculpt-3": `
      <svg viewBox="0 0 240 120" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="240" height="120" fill="#15171c"/>
        <!-- Retopology: Low poly quad mesh projecting onto high-poly head -->
        <g transform="translate(120, 60)">
          <!-- High Poly Organic Silhouette -->
          <path d="M-35,-20 C-35,-40 35,-40 35,-20 C35,0 20,35 0,38 C-20,35 -35,0 -35,-20 Z" fill="#262c38" stroke="#475569" stroke-width="1.5"/>
          <!-- Retopology Quad Strips (Eye Loops & Mouth Loops) -->
          <!-- Eye Loop Left -->
          <circle cx="-14" cy="-12" r="9" fill="none" stroke="#00e676" stroke-width="1.5"/>
          <circle cx="-14" cy="-12" r="3" fill="#00e676"/>
          <!-- Eye Loop Right -->
          <circle cx="14" cy="-12" r="9" fill="none" stroke="#00e676" stroke-width="1.5"/>
          <circle cx="14" cy="-12" r="3" fill="#00e676"/>
          <!-- Mouth Loop -->
          <ellipse cx="0" cy="18" rx="14" ry="6" fill="none" stroke="#00e676" stroke-width="1.5"/>
          <!-- Facial Edge Loop Connectors -->
          <path d="M-14,-3 L-10,12 M14,-3 L10,12 M0,-12 L0,12 M-23,-12 L-14,18 L0,24 L14,18 L23,-12" fill="none" stroke="#00e676" stroke-width="1" stroke-dasharray="2 2"/>
        </g>
      </svg>
    `,

    "shade-1": `
      <svg viewBox="0 0 240 120" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="240" height="120" fill="#15171d"/>
        <!-- Principled BSDF PBR Material Sphere Split -->
        <g transform="translate(120, 60)">
          <!-- Outer Sphere Frame -->
          <circle cx="0" cy="0" r="40" fill="#1e222a" stroke="#4b5563" stroke-width="1.5"/>
          <!-- Quadrant 1: Metallic (Reflective Chrome) -->
          <path d="M0,0 L0,-40 A40,40 0 0,1 40,0 Z" fill="#94a3b8" opacity="0.9"/>
          <!-- Quadrant 2: Rough Matte -->
          <path d="M0,0 L40,0 A40,40 0 0,1 0,40 Z" fill="#ea7600" opacity="0.8"/>
          <!-- Quadrant 3: Normal Bump Map (Tangent space colors Purple/Cyan) -->
          <path d="M0,0 L0,40 A40,40 0 0,1 -40,0 Z" fill="#818cf8" opacity="0.8"/>
          <!-- Quadrant 4: Base Color Green -->
          <path d="M0,0 L-40,0 A40,40 0 0,1 0,-40 Z" fill="#00e676" opacity="0.8"/>
          <!-- Specular Highlight -->
          <ellipse cx="14" cy="-18" rx="8" ry="5" fill="#ffffff" opacity="0.8"/>
          <!-- Cross dividing line -->
          <line x1="-40" y1="0" x2="40" y2="0" stroke="#ffffff" stroke-width="1"/>
          <line x1="0" y1="-40" x2="0" y2="40" stroke="#ffffff" stroke-width="1"/>
        </g>
        <text x="120" y="112" fill="#94a3b8" font-size="8" text-anchor="middle" font-family="monospace">METALLIC • ROUGHNESS • NORMAL</text>
      </svg>
    `,

    "shade-2": `
      <svg viewBox="0 0 240 120" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="240" height="120" fill="#14161b"/>
        <!-- 3D Cube unfolding into 2D UV Cross Layout -->
        <g transform="translate(65, 60)">
          <!-- 3D Cube with Red Seams -->
          <polygon points="0,-24 22,-12 0,0 -22,-12" fill="#2d3340" stroke="#ef4444" stroke-width="2"/>
          <polygon points="0,0 22,-12 22,12 0,24" fill="#1e232d" stroke="#ef4444" stroke-width="2"/>
          <polygon points="0,0 -22,-12 -22,12 0,24" fill="#262b36" stroke="#ef4444" stroke-width="2"/>
          <text x="0" y="38" fill="#ef4444" font-size="8" text-anchor="middle" font-family="sans-serif">Mark Seam</text>
        </g>
        <path d="M98 60 L118 60 M113 55 L119 60 L113 65" stroke="#ea7600" stroke-width="2" stroke-linecap="round"/>
        <g transform="translate(170, 60)">
          <!-- Flattened UV Island Cross -->
          <g stroke="#00a2ff" stroke-width="1.5" fill="#1e2532">
            <rect x="-10" y="-30" width="20" height="20"/>
            <rect x="-30" y="-10" width="20" height="20"/>
            <rect x="-10" y="-10" width="20" height="20" fill="#2c3749"/>
            <rect x="10" y="-10" width="20" height="20"/>
            <rect x="-10" y="10" width="20" height="20"/>
          </g>
          <text x="0" y="38" fill="#00a2ff" font-size="8" text-anchor="middle" font-family="sans-serif">UV Editor</text>
        </g>
      </svg>
    `,

    "shade-3": `
      <svg viewBox="0 0 240 120" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="240" height="120" fill="#15171d"/>
        <!-- Procedural Shader Nodes Network -->
        <g transform="translate(25, 30)">
          <!-- Node 1: Texture Coord -->
          <rect x="0" y="10" width="45" height="38" rx="4" fill="#1e222a" stroke="#a855f7" stroke-width="1.5"/>
          <rect x="0" y="10" width="45" height="10" rx="2" fill="#a855f7"/>
          <text x="22" y="18" fill="#fff" font-size="6" text-anchor="middle" font-weight="bold">TexCoord</text>
          <!-- Noodle Wire 1 -->
          <path d="M45 32 C60 32, 55 24, 70 24" stroke="#ea7600" stroke-width="2" fill="none"/>
          <!-- Node 2: Noise Texture -->
          <rect x="70" y="5" width="45" height="46" rx="4" fill="#1e222a" stroke="#ea7600" stroke-width="1.5"/>
          <rect x="70" y="5" width="45" height="10" rx="2" fill="#ea7600"/>
          <text x="92" y="13" fill="#fff" font-size="6" text-anchor="middle" font-weight="bold">Noise</text>
          <!-- Noodle Wire 2 -->
          <path d="M115 28 C130 28, 125 36, 140 36" stroke="#00e676" stroke-width="2" fill="none"/>
          <!-- Node 3: ColorRamp -->
          <rect x="140" y="15" width="48" height="42" rx="4" fill="#1e222a" stroke="#00e676" stroke-width="1.5"/>
          <rect x="140" y="15" width="48" height="10" rx="2" fill="#00e676"/>
          <text x="164" y="23" fill="#000" font-size="6" text-anchor="middle" font-weight="bold">ColorRamp</text>
          <!-- Ramp bar -->
          <rect x="145" y="32" width="38" height="8" rx="1" fill="url(#ramp-grad)"/>
        </g>
        <defs>
          <linearGradient id="ramp-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#000"/>
            <stop offset="100%" stop-color="#ea7600"/>
          </linearGradient>
        </defs>
      </svg>
    `,

    "light-1": `
      <svg viewBox="0 0 240 120" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="240" height="120" fill="#14151a"/>
        <!-- Cycles (Ray Bounces) vs EEVEE -->
        <g transform="translate(120, 60)">
          <!-- Ground plane -->
          <line x1="-90" y1="35" x2="90" y2="35" stroke="#374151" stroke-width="2"/>
          <!-- Light Source (Lamp) -->
          <circle cx="-60" cy="-30" r="12" fill="#ffd600" opacity="0.3"/>
          <circle cx="-60" cy="-30" r="6" fill="#ffd600"/>
          <!-- Ray Trace Bounces -->
          <path d="M-55,-25 L-20,35 L20,-10 L60,35 L80,0" stroke="#ffd600" stroke-width="1.5" stroke-dasharray="3 2" fill="none"/>
          <!-- Sphere receiving illumination -->
          <circle cx="20" cy="15" r="20" fill="#1f2937" stroke="#60a5fa" stroke-width="1.5"/>
          <!-- Camera receiving rays -->
          <polygon points="75,-5 90,-15 90,5" fill="#ea7600"/>
          <rect x="65" y="-10" width="10" height="10" rx="2" fill="#ea7600"/>
        </g>
        <text x="120" y="112" fill="#ffd600" font-size="8" text-anchor="middle" font-family="monospace">PATH-TRACED PHOTOREALISM</text>
      </svg>
    `,

    "light-2": `
      <svg viewBox="0 0 240 120" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="240" height="120" fill="#14161c"/>
        <!-- Top-Down 3-Point Studio Lighting Diagram -->
        <g transform="translate(120, 60)">
          <!-- Center Subject -->
          <circle cx="0" cy="0" r="14" fill="#374151" stroke="#ffffff" stroke-width="2"/>
          <text x="0" y="3" fill="#fff" font-size="7" text-anchor="middle" font-weight="bold">MODEL</text>
          <!-- Camera (Bottom Center) -->
          <polygon points="-6,40 6,40 0,32" fill="#9ca3af"/>
          <rect x="-8" y="40" width="16" height="10" rx="2" fill="#4b5563"/>
          <!-- 1. Key Light (Warm Orange, Top-Right) -->
          <circle cx="48" cy="-32" r="7" fill="#ea7600"/>
          <path d="M42,-26 L12,-4" stroke="#ea7600" stroke-width="2" stroke-dasharray="2 2"/>
          <text x="60" y="-30" fill="#ea7600" font-size="8" font-weight="bold">KEY</text>
          <!-- 2. Fill Light (Soft Cyan, Top-Left) -->
          <circle cx="-50" cy="-20" r="9" fill="#00a2ff" opacity="0.6"/>
          <path d="M-42,-16 L-12,-2" stroke="#00a2ff" stroke-width="1.5" stroke-dasharray="2 2" opacity="0.7"/>
          <text x="-70" y="-18" fill="#00a2ff" font-size="8" font-weight="bold">FILL</text>
          <!-- 3. Rim / Back Light (Bright Yellow, Back) -->
          <circle cx="20" cy="30" r="6" fill="#ffd600"/>
          <path d="M16,24 L4,10" stroke="#ffd600" stroke-width="1.5" stroke-dasharray="2 2"/>
          <text x="32" y="34" fill="#ffd600" font-size="8" font-weight="bold">RIM</text>
        </g>
      </svg>
    `,

    "light-3": `
      <svg viewBox="0 0 240 120" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="240" height="120" fill="#15171d"/>
        <!-- HDRI 360 World Dome Lighting -->
        <g transform="translate(120, 60)">
          <!-- Panoramic Sky Dome Arc -->
          <path d="M-80,20 A80,45 0 0,1 80,20" fill="none" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4 3"/>
          <!-- Sun in HDRI -->
          <circle cx="-50" cy="-15" r="8" fill="#f59e0b"/>
          <line x1="-50" y1="-28" x2="-50" y2="-2" stroke="#f59e0b" stroke-width="1"/>
          <!-- Mountain Silhouettes inside Dome -->
          <polygon points="-80,20 -40,-2 0,20" fill="#1e293b" opacity="0.7"/>
          <polygon points="-20,20 30,-8 80,20" fill="#1e293b" opacity="0.7"/>
          <!-- Reflective Ground & Chrome Sphere -->
          <ellipse cx="0" cy="20" rx="35" ry="12" fill="#0f172a" stroke="#475569" stroke-width="1"/>
          <circle cx="0" cy="10" r="18" fill="#334155" stroke="#38bdf8" stroke-width="2"/>
          <!-- Reflection of Sky in Chrome Sphere -->
          <ellipse cx="-4" cy="5" rx="10" ry="6" fill="#7dd3fc" opacity="0.7"/>
        </g>
        <text x="120" y="112" fill="#38bdf8" font-size="8" text-anchor="middle" font-family="monospace">360° ENVIRONMENT LIGHTING</text>
      </svg>
    `,

    "anim-1": `
      <svg viewBox="0 0 240 120" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="240" height="120" fill="#16171d"/>
        <!-- Armature & Bone Hierarchy -->
        <g transform="translate(120, 60)">
          <!-- Base Root Joint -->
          <circle cx="0" cy="38" r="4" fill="#ffd600"/>
          <!-- Bone 1: Lower Spine -->
          <polygon points="0,38 -7,22 0,10 7,22" fill="#2d3748" stroke="#ffd600" stroke-width="1.5"/>
          <circle cx="0" cy="10" r="4" fill="#ffd600"/>
          <!-- Bone 2: Upper Arm / Limb -->
          <polygon points="0,10 24,0 42,-18 20,-10" fill="#2d3748" stroke="#ff5252" stroke-width="1.5"/>
          <circle cx="42" cy="-18" r="4" fill="#ff5252"/>
          <!-- IK Target Controller (Crosshair Box) -->
          <rect x="36" y="-24" width="12" height="12" fill="none" stroke="#00e676" stroke-width="2"/>
          <line x1="42" y1="-28" x2="42" y2="-8" stroke="#00e676" stroke-width="1.5"/>
          <line x1="32" y1="-18" x2="52" y2="-18" stroke="#00e676" stroke-width="1.5"/>
          <!-- Head Bone -->
          <polygon points="0,10 -5,-10 0,-25 5,-10" fill="#2d3748" stroke="#ffd600" stroke-width="1.5"/>
          <circle cx="0" cy="-25" r="4" fill="#ffd600"/>
        </g>
      </svg>
    `,

    "anim-2": `
      <svg viewBox="0 0 240 120" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="240" height="120" fill="#15171d"/>
        <!-- Weight Paint Heatmap Gradient on Arm Mesh -->
        <g transform="translate(120, 60)">
          <!-- Arm Mesh Cylinder with Heatmap -->
          <defs>
            <linearGradient id="weight-heat" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stop-color="#1e3a8a"/>   <!-- Blue 0% -->
              <stop offset="35%" stop-color="#06b6d4"/>  <!-- Cyan -->
              <stop offset="70%" stop-color="#eab308"/>  <!-- Yellow -->
              <stop offset="100%" stop-color="#ef4444"/> <!-- Red 100% -->
            </linearGradient>
          </defs>
          <path d="M-22,35 L22,35 L16,-30 L-16,-30 Z" fill="url(#weight-heat)" stroke="#64748b" stroke-width="1.5"/>
          <ellipse cx="0" cy="-30" rx="16" ry="6" fill="#ef4444"/>
          <!-- Bone running through the center -->
          <line x1="0" y1="35" x2="0" y2="-30" stroke="#ffffff" stroke-width="2" stroke-dasharray="4 2"/>
          <circle cx="0" cy="-30" r="3.5" fill="#ffffff"/>
          <circle cx="0" cy="35" r="3.5" fill="#ffffff"/>
        </g>
        <text x="120" y="112" fill="#ef4444" font-size="8" text-anchor="middle" font-family="monospace">WEIGHT PAINT: BLUE (0%) → RED (100%)</text>
      </svg>
    `,

    "anim-3": `
      <svg viewBox="0 0 240 120" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="240" height="120" fill="#14161c"/>
        <!-- Bouncing Ball Arc & Graph Editor Handles -->
        <g transform="translate(120, 50)">
          <!-- Ground line -->
          <line x1="-90" y1="30" x2="90" y2="30" stroke="#475569" stroke-width="2"/>
          <!-- Arc of Motion (Parabolic curves) -->
          <path d="M-75,30 Q-45,-40 -15,30 Q15,-20 45,30 Q65,5 85,30" fill="none" stroke="#ea7600" stroke-width="1.5" stroke-dasharray="3 2"/>
          <!-- Apex 1: Stretched ball -->
          <ellipse cx="-45" cy="-20" rx="9" ry="14" fill="#fbbf24" stroke="#d97706" stroke-width="1.5"/>
          <!-- Impact 1: Squashed ball -->
          <ellipse cx="-15" cy="26" rx="16" ry="7" fill="#ef4444" stroke="#b91c1c" stroke-width="1.5"/>
          <!-- Apex 2 -->
          <circle cx="15" cy="-5" r="10" fill="#fbbf24" stroke="#d97706" stroke-width="1.5"/>
          <!-- Impact 2 -->
          <ellipse cx="45" cy="27" rx="13" ry="6" fill="#ef4444" stroke="#b91c1c" stroke-width="1.5"/>
        </g>
        <text x="120" y="108" fill="#fbbf24" font-size="8" text-anchor="middle" font-family="monospace">SQUASH & STRETCH ARCS</text>
      </svg>
    `,

    "geo-1": `
      <svg viewBox="0 0 240 120" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="240" height="120" fill="#15161c"/>
        <!-- Geometry Nodes: Procedural Distribution -->
        <g transform="translate(120, 60)">
          <!-- Terrain Plane -->
          <polygon points="-75,10 0,-15 75,10 0,35" fill="#1e293b" stroke="#7c4dff" stroke-width="1.5"/>
          <!-- Distributed Points & Random Instances (Pebbles & Crystals) -->
          <!-- Crystal 1 -->
          <polygon points="-30,0 -26,-15 -22,0" fill="#a855f7"/>
          <polygon points="-45,5 -42,-8 -39,5" fill="#c084fc"/>
          <!-- Crystal 2 (Center) -->
          <polygon points="0,-2 5,-22 10,-2" fill="#7c4dff"/>
          <polygon points="12,-5 16,-16 20,-5" fill="#a855f7"/>
          <!-- Crystal 3 (Right) -->
          <polygon points="35,12 39,-4 43,12" fill="#c084fc"/>
          <!-- Floating Point Gizmos (Cyan) -->
          <circle cx="-15" cy="8" r="2" fill="#38bdf8"/>
          <circle cx="25" cy="2" r="2" fill="#38bdf8"/>
          <circle cx="-50" cy="18" r="2" fill="#38bdf8"/>
        </g>
        <text x="120" y="112" fill="#a855f7" font-size="8" text-anchor="middle" font-family="monospace">INSTANCE ON POINTS</text>
      </svg>
    `,

    "geo-2": `
      <svg viewBox="0 0 240 120" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="240" height="120" fill="#15171d"/>
        <!-- Procedural Cables & Sci-Fi Curves -->
        <g transform="translate(120, 55)">
          <!-- Hanging Cables (Catenary arcs) -->
          <path d="M-80,-20 C-50,45 50,45 80,-20" fill="none" stroke="#00a2ff" stroke-width="5" stroke-linecap="round"/>
          <path d="M-80,-20 C-50,45 50,45 80,-20" fill="none" stroke="#38bdf8" stroke-width="2" stroke-linecap="round"/>
          <path d="M-70,-20 C-40,25 40,25 70,-20" fill="none" stroke="#ea7600" stroke-width="3" stroke-linecap="round"/>
          <!-- Wall Jack Connectors -->
          <rect x="-85" y="-25" width="8" height="14" fill="#374151" stroke="#9ca3af" stroke-width="1"/>
          <rect x="77" y="-25" width="8" height="14" fill="#374151" stroke="#9ca3af" stroke-width="1"/>
        </g>
        <text x="120" y="110" fill="#00a2ff" font-size="8" text-anchor="middle" font-family="monospace">CURVE TO MESH GENERATOR</text>
      </svg>
    `,

    "phys-1": `
      <svg viewBox="0 0 240 120" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="240" height="120" fill="#14171d"/>
        <!-- Rigid Body Dominos Cascade -->
        <g transform="translate(120, 60)">
          <!-- Floor -->
          <line x1="-80" y1="25" x2="80" y2="25" stroke="#475569" stroke-width="2"/>
          <!-- Domino 1 (Standing) -->
          <rect x="50" y="-15" width="8" height="38" rx="1" fill="#38bdf8" stroke="#0284c7" stroke-width="1"/>
          <rect x="25" y="-12" width="8" height="38" rx="1" fill="#38bdf8" stroke="#0284c7" stroke-width="1"/>
          <!-- Domino 3 (Tipping) -->
          <g transform="translate(5, 5) rotate(25)">
            <rect x="-4" y="-19" width="8" height="38" rx="1" fill="#00e676" stroke="#16a34a" stroke-width="1"/>
          </g>
          <!-- Domino 4 (Fallen) -->
          <g transform="translate(-20, 15) rotate(50)">
            <rect x="-4" y="-19" width="8" height="38" rx="1" fill="#ffd600" stroke="#ca8a04" stroke-width="1"/>
          </g>
          <!-- Domino 5 (Slammed down) -->
          <g transform="translate(-50, 20) rotate(75)">
            <rect x="-4" y="-19" width="8" height="38" rx="1" fill="#ef4444" stroke="#dc2626" stroke-width="1"/>
          </g>
        </g>
        <text x="120" y="110" fill="#00e676" font-size="8" text-anchor="middle" font-family="monospace">RIGID BODY DYNAMICS</text>
      </svg>
    `,

    "phys-2": `
      <svg viewBox="0 0 240 120" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="240" height="120" fill="#15171d"/>
        <!-- Cloth Simulation: Plush Cushion with Seams & Folds -->
        <g transform="translate(120, 60)">
          <!-- Pillow Body (Inflated Cloth Pressure) -->
          <path d="M-50,0 C-50,-24 50,-24 50,0 C50,24 -50,24 -50,0 Z" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
          <!-- Pinched Center Button -->
          <circle cx="0" cy="0" r="4" fill="#ea7600"/>
          <!-- Wrinkle Folds radiating from center -->
          <path d="M-4, -2 C-18,-12 -35,-8 -45,-3" stroke="#38bdf8" stroke-width="1.5" fill="none" opacity="0.7"/>
          <path d="M4, -2 C18,-12 35,-8 45,-3" stroke="#38bdf8" stroke-width="1.5" fill="none" opacity="0.7"/>
          <path d="M-4, 2 C-18,12 -35,8 -45,3" stroke="#38bdf8" stroke-width="1.5" fill="none" opacity="0.7"/>
          <path d="M4, 2 C18,12 35,8 45,3" stroke="#38bdf8" stroke-width="1.5" fill="none" opacity="0.7"/>
          <!-- Seam piping edge -->
          <ellipse cx="0" cy="0" rx="49" ry="22" fill="none" stroke="#64748b" stroke-width="1" stroke-dasharray="3 2"/>
        </g>
        <text x="120" y="110" fill="#38bdf8" font-size="8" text-anchor="middle" font-family="monospace">CLOTH & PRESSURE SIMULATION</text>
      </svg>
    `
  },

  // Addon / Plugin Visualizations
  addons: {
    "node-wrangler": `
      <svg viewBox="0 0 80 80" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="80" height="80" rx="12" fill="#181a20"/>
        <!-- Node blocks connected by lightning wire -->
        <rect x="10" y="24" width="22" height="32" rx="3" fill="#2d3340" stroke="#00a2ff" stroke-width="1.5"/>
        <rect x="48" y="24" width="22" height="32" rx="3" fill="#2d3340" stroke="#00a2ff" stroke-width="1.5"/>
        <line x1="32" y1="40" x2="48" y2="40" stroke="#ffd600" stroke-width="2"/>
        <!-- Lightning bolt -->
        <polygon points="40,28 35,42 42,42 38,54 48,38 41,38" fill="#ffd600"/>
      </svg>
    `,

    "loop-tools": `
      <svg viewBox="0 0 80 80" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="80" height="80" rx="12" fill="#181a20"/>
        <!-- Irregular polygon turning into perfect circle -->
        <circle cx="40" cy="40" r="24" fill="none" stroke="#ea7600" stroke-width="2"/>
        <circle cx="40" cy="16" r="3" fill="#ffffff"/>
        <circle cx="64" cy="40" r="3" fill="#ffffff"/>
        <circle cx="40" cy="64" r="3" fill="#ffffff"/>
        <circle cx="16" cy="40" r="3" fill="#ffffff"/>
        <circle cx="57" cy="23" r="3" fill="#ffd600"/>
        <circle cx="23" cy="57" r="3" fill="#ffd600"/>
        <circle cx="57" cy="57" r="3" fill="#ffd600"/>
        <circle cx="23" cy="23" r="3" fill="#ffd600"/>
      </svg>
    `,

    "bool-tool": `
      <svg viewBox="0 0 80 80" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="80" height="80" rx="12" fill="#181a20"/>
        <!-- Intersecting Shapes Cut -->
        <rect x="18" y="22" width="30" height="30" rx="4" fill="#3b82f6" opacity="0.6"/>
        <circle cx="50" cy="48" r="16" fill="#ef4444" opacity="0.6"/>
        <!-- Subtract cut line -->
        <path d="M34 38 L48 38 L48 52" stroke="#ffffff" stroke-width="2" fill="none"/>
      </svg>
    `,

    "images-as-planes": `
      <svg viewBox="0 0 80 80" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="80" height="80" rx="12" fill="#181a20"/>
        <!-- 3D Angled Picture Plane -->
        <polygon points="20,25 60,18 55,55 15,62" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
        <!-- Mountain inside photo plane -->
        <polygon points="22,54 36,36 48,50" fill="#10b981"/>
        <circle cx="48" cy="28" r="4" fill="#ffd600"/>
      </svg>
    `,

    "extra-objects": `
      <svg viewBox="0 0 80 80" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="80" height="80" rx="12" fill="#181a20"/>
        <!-- Cogwheel Gear Primitive -->
        <circle cx="40" cy="40" r="15" fill="none" stroke="#f59e0b" stroke-width="4"/>
        <circle cx="40" cy="40" r="6" fill="#181a20" stroke="#f59e0b" stroke-width="2"/>
        <!-- Gear Teeth -->
        <line x1="40" y1="16" x2="40" y2="24" stroke="#f59e0b" stroke-width="5"/>
        <line x1="40" y1="56" x2="40" y2="64" stroke="#f59e0b" stroke-width="5"/>
        <line x1="16" y1="40" x2="24" y2="40" stroke="#f59e0b" stroke-width="5"/>
        <line x1="56" y1="40" x2="64" y2="40" stroke="#f59e0b" stroke-width="5"/>
      </svg>
    `,

    "rigify": `
      <svg viewBox="0 0 80 80" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="80" height="80" rx="12" fill="#181a20"/>
        <!-- Human Rigging Controller Skeleton -->
        <circle cx="40" cy="20" r="7" fill="none" stroke="#ef4444" stroke-width="1.5"/>
        <line x1="40" y1="27" x2="40" y2="50" stroke="#ef4444" stroke-width="2"/>
        <!-- Arms -->
        <line x1="20" y1="36" x2="60" y2="36" stroke="#ef4444" stroke-width="2"/>
        <!-- Controller Rings -->
        <circle cx="20" cy="36" r="4" fill="none" stroke="#ffd600" stroke-width="1.5"/>
        <circle cx="60" cy="36" r="4" fill="none" stroke="#ffd600" stroke-width="1.5"/>
        <!-- Legs -->
        <line x1="40" y1="50" x2="26" y2="70" stroke="#ef4444" stroke-width="2"/>
        <line x1="40" y1="50" x2="54" y2="70" stroke="#ef4444" stroke-width="2"/>
        <!-- Foot Controllers -->
        <rect x="20" y="68" width="12" height="4" rx="2" fill="#00e676"/>
        <rect x="48" y="68" width="12" height="4" rx="2" fill="#00e676"/>
      </svg>
    `,

    "blenderkit": `
      <svg viewBox="0 0 80 80" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="80" height="80" rx="12" fill="#181a20"/>
        <!-- 3D Box with Download Arrow -->
        <polygon points="40,20 62,30 40,40 18,30" fill="#3b82f6" stroke="#60a5fa" stroke-width="1.5"/>
        <polygon points="40,40 62,30 62,56 40,66" fill="#1d4ed8" stroke="#60a5fa" stroke-width="1.5"/>
        <polygon points="40,40 18,30 18,56 40,66" fill="#2563eb" stroke="#60a5fa" stroke-width="1.5"/>
        <line x1="40" y1="28" x2="40" y2="50" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>
        <polygon points="40,54 34,44 46,44" fill="#ffffff"/>
      </svg>
    `,

    "poly-haven": `
      <svg viewBox="0 0 80 80" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="80" height="80" rx="12" fill="#181a20"/>
        <!-- HDRI World Sun Dome -->
        <circle cx="40" cy="40" r="24" fill="#0284c7" stroke="#38bdf8" stroke-width="1.5"/>
        <polygon points="20,52 35,32 50,48 60,38 64,52" fill="#047857"/>
        <circle cx="32" cy="26" r="5" fill="#f59e0b"/>
      </svg>
    `,

    "fspy": `
      <svg viewBox="0 0 80 80" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="80" height="80" rx="12" fill="#181a20"/>
        <!-- Vanishing Point Axes (Red X & Blue Z) -->
        <line x1="10" y1="20" x2="68" y2="60" stroke="#ef4444" stroke-width="2"/>
        <line x1="10" y1="60" x2="68" y2="20" stroke="#00a2ff" stroke-width="2"/>
        <line x1="40" y1="12" x2="40" y2="68" stroke="#00e676" stroke-width="1.5" stroke-dasharray="2 2"/>
        <circle cx="39" cy="40" r="4" fill="#ffffff"/>
      </svg>
    `,

    "screencast-keys": `
      <svg viewBox="0 0 80 80" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="80" height="80" rx="12" fill="#181a20"/>
        <!-- Keycap with Shortcut Wave -->
        <rect x="20" y="24" width="40" height="32" rx="6" fill="#374151" stroke="#9ca3af" stroke-width="2"/>
        <text x="40" y="44" fill="#ffffff" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">TAB</text>
        <!-- Soundwave / broadcast arcs -->
        <path d="M 64,30 A 18 18 0 0 1 64,50" fill="none" stroke="#ea7600" stroke-width="2" stroke-linecap="round"/>
        <path d="M 16,30 A 18 18 0 0 0 16,50" fill="none" stroke="#ea7600" stroke-width="2" stroke-linecap="round"/>
      </svg>
    `
  },

  getLessonSvg(id) {
    return this.lessons[id] || `
      <svg viewBox="0 0 240 120" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="240" height="120" fill="#181a20"/>
        <polygon points="120,35 155,55 120,75 85,55" fill="#2d3340" stroke="#ea7600" stroke-width="1.5"/>
        <polygon points="120,75 155,55 155,85 120,105" fill="#1e232d" stroke="#ea7600" stroke-width="1.5"/>
        <polygon points="120,75 85,55 85,85 120,105" fill="#252b36" stroke="#ea7600" stroke-width="1.5"/>
      </svg>
    `;
  },

  getAddonSvg(id) {
    return this.addons[id] || `
      <svg viewBox="0 0 80 80" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="80" height="80" rx="12" fill="#181a20"/>
        <circle cx="40" cy="40" r="16" fill="none" stroke="#ea7600" stroke-width="2"/>
      </svg>
    `;
  }
};
