/**
 * Blender Academy — 3D Jargon & Terminology Decoder (Idea 5)
 * Searchable dictionary explaining 3D modeling and animation terms simply.
 */

const BLENDER_GLOSSARY = {
  terms: [
    {
      term: "Normals & Face Orientation",
      category: "Geometry",
      difficulty: "Must Know",
      summary: "The imaginary perpendicular arrow pointing outward from every polygon indicating which side is the 'front'.",
      explanation: "If normals point inward, Blender thinks the inside of your object is the outside. This causes black shading glitches, broken booleans, and failed 3D printing.",
      hotkey: "Shift + N (Recalculate Normals Outside) in Edit Mode"
    },
    {
      term: "UV Unwrapping",
      category: "Texturing",
      difficulty: "Must Know",
      summary: "Flattening a 3D mesh onto a 2D coordinate plane so textures can be painted and wrapped onto it.",
      explanation: "Like unfolding a cardboard box flat onto a table. U and V are the 2D spatial axes corresponding to 3D X, Y, and Z coordinates.",
      hotkey: "U ➔ Unwrap in Edit Mode; Ctrl + E ➔ Mark Seam"
    },
    {
      term: "Quads vs. Tris vs. N-Gons",
      category: "Topology",
      difficulty: "Must Know",
      summary: "Polygons classified by vertex count: 4 vertices (Quad), 3 vertices (Tri), 5+ vertices (N-gon).",
      explanation: "Quads are the gold standard because they subdivide smoothly and deform cleanly during character animation. Tris are used in game engines. N-gons cause unpredictable shading pinches on curved surfaces.",
      hotkey: "Ctrl + T (Triangulate); Alt + J (Tris to Quads)"
    },
    {
      term: "Non-Manifold Geometry",
      category: "Topology",
      difficulty: "Troubleshooting",
      summary: "Geometry that physically cannot exist in real 3D solid reality.",
      explanation: "Examples include: an internal face buried inside a hollow cube, an edge shared by 3 or more faces (T-junction), or zero-thickness faces. Non-manifold meshes break automatic rigging and modifiers.",
      hotkey: "Select ➔ Select All by Trait ➔ Non-Manifold (Ctrl+Alt+Shift+M)"
    },
    {
      term: "Retopology",
      category: "Modeling",
      difficulty: "Intermediate",
      summary: "Rebuilding clean, low-poly animated geometry over a heavy multi-million vertex sculpt.",
      explanation: "Raw high-poly sculpts are too dense to animate or put into game engines. Retopology draws clean quad edge loops around joints and eyes over the sculpt silhouette.",
      hotkey: "Use Shrinkwrap modifier + Face Snapping"
    },
    {
      term: "Texel Density",
      category: "Texturing",
      difficulty: "Intermediate",
      summary: "The ratio of texture pixels (resolution) to 3D surface area.",
      explanation: "If a tiny coin on a character has 2048x2048 UV space while the entire chest has 512x512, the coin looks ultra-sharp while the body looks blurry. Maintaining uniform texel density ensures consistent crispness.",
      hotkey: "UV Editor ➔ UV ➔ Average Island Scale"
    },
    {
      term: "Inverse Kinematics (IK) vs. FK",
      category: "Animation",
      difficulty: "Animation",
      summary: "Forward Kinematics (FK) rotates joint-by-joint from shoulder to wrist; Inverse Kinematics (IK) moves the hand and auto-bends the arm.",
      explanation: "With IK, if you place a character's foot on a staircase, the knee and hip bend automatically to keep the foot planted. Essential for walking cycles.",
      hotkey: "Shift + I in Pose Mode (Add IK Constraint to Bone)"
    },
    {
      term: "Texture Baking",
      category: "Texturing",
      difficulty: "Game Dev",
      summary: "Transferring heavy 3D geometry details (pores, bevels, shadows) onto 2D image maps.",
      explanation: "Allows a 2,000-polygon game model to look like a 2,000,000-polygon cinematic sculpt by encoding high-frequency lighting depth into a Normal Map texture.",
      hotkey: "Render Properties (Cycles) ➔ Bake section"
    },
    {
      term: "Principled BSDF",
      category: "Shading",
      difficulty: "Materials",
      summary: "Blender's unified Physically Based Rendering (PBR) super-shader.",
      explanation: "Based on Disney's PBR research. Replaces dozens of older complex nodes with a single interface controlling Base Color, Metallic, Roughness, Specular, Transmission, and Normal inputs.",
      hotkey: "Shift + A in Shader Editor ➔ Shader ➔ Principled BSDF"
    },
    {
      term: "Subsurface Scattering (SSS)",
      category: "Shading",
      difficulty: "Materials",
      summary: "Light penetrating translucent materials, scattering internally, and exiting at a different angle.",
      explanation: "Think of shining a flashlight behind your fingers and seeing a red glow. Without SSS, human skin, wax, marble, jade, and milk look like hard, dead plastic.",
      hotkey: "Principled BSDF ➔ Subsurface Weight slider"
    },
    {
      term: "Dyntopo (Dynamic Topology)",
      category: "Sculpting",
      difficulty: "Sculpting",
      summary: "Real-time triangle tessellation under your sculpt brush strokes.",
      explanation: "Unlike regular sculpting which only pushes existing vertices, Dyntopo generates brand new geometry as you stroke. Pulling out long horns or ears never runs out of resolution.",
      hotkey: "Ctrl + D in Sculpt Mode to toggle Dyntopo"
    },
    {
      term: "Boolean Operators",
      category: "Modeling",
      difficulty: "Modeling",
      summary: "Mathematical solid volume interactions: Difference (cut), Union (fuse), and Intersect.",
      explanation: "Allows you to carve holes into objects or weld complex shapes together. Powered by Blender's Fast and Exact solvers.",
      hotkey: "Ctrl + Shift + '-' or '+' (with BoolTool addon enabled)"
    }
  ]
};
