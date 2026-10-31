// Lesson body for shade-1. Loaded only by lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["shade-1"] = {
  "overview": "Physically Based Rendering (PBR) is how modern 3D games and movies simulate real-world light interactions. In this lesson, you will master the Principled BSDF shader in Blender's Shader Editor. You'll learn how Base Color (Albedo), Roughness, Metallic, IOR (Index of Refraction), Transmission (Glass), and Normal Maps work together to create any surface imaginable.",
  "summary": [
    "Switch to the 'Shading' workspace tab at the top of Blender to access the Shader Editor and 3D preview.",
    "Metallic is almost always binary in the real world: either 0.0 (dielectrics like wood, plastic, skin) or 1.0 (pure metals like chrome, gold, iron).",
    "Roughness controls surface microsurface: 0.0 is mirror-glossy reflection; 1.0 is diffuse and matte chalk.",
    "Transmission at 1.0 creates glass, diamonds, and transparent liquids (requires IOR ~1.45 for glass).",
    "Always use the 'Node Wrangler' addon (Ctrl + Shift + T on Principled BSDF to auto-connect full PBR texture sets)!"
  ],
  "troubleshooting": [
    {
      "problem": "My Normal Map makes the mesh look black, inverted, or faceted like an ugly glitch!",
      "cause": "The Image Texture node's Color Space is set to 'sRGB' instead of 'Non-Color'.",
      "solution": "On the Normal Map Image Texture node, change the Color Space dropdown from 'sRGB' to 'Non-Color'. Always ensure it plugs into a 'Normal Map' vector node before reaching Principled BSDF."
    },
    {
      "problem": "My textures appear totally black or completely pink in the viewport.",
      "cause": "Pink indicates a missing/broken image file path; black indicates no scene lighting in Rendered mode.",
      "solution": "If pink, go to File -> External Data -> 'Find Missing Files' and point to your texture folder. If black, add a light source (Shift + A -> Light -> Sun/Area) or switch viewport shading to Material Preview."
    },
    {
      "problem": "Glass material shows up completely pitch black and opaque in Eevee.",
      "cause": "Screen Space Refraction is not enabled in the Eevee engine settings.",
      "solution": "In Material Settings under Settings, enable 'Screen Space Refraction'. In Render Properties, check 'Screen Space Reflections' -> 'Refraction'."
    }
  ]
};
