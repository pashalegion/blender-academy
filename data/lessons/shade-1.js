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
  ],
  "tutorial": [
    {
      "heading": "What PBR means",
      "steps": [
        "PBR (Physically Based Rendering) describes materials with real-world properties, so they look right under any light.",
        "In Blender, the Principled BSDF node does almost all of this in one place."
      ]
    },
    {
      "heading": "Open the Shader Editor",
      "steps": [
        "Click the Shading workspace tab at the top. The Shader Editor is at the bottom and the viewport shows Material Preview.",
        "Select an object and click New to create a material. You will see a Principled BSDF connected to Material Output."
      ]
    },
    {
      "heading": "Base Color",
      "steps": [
        "Base Color is the main color of the surface, without shine or shadow.",
        "Click the color field to pick a color, or connect an image texture to its socket."
      ]
    },
    {
      "heading": "Metallic",
      "steps": [
        "Metallic is usually either 0 (wood, plastic, skin, stone) or 1 (pure metals like gold, chrome or iron).",
        "Values in between are mostly used for dirty or partly painted metal."
      ]
    },
    {
      "heading": "Roughness",
      "steps": [
        "Roughness controls how blurry reflections are. 0 is a perfect mirror; 1 is completely matte, like chalk.",
        "Most real surfaces sit between 0.2 and 0.7. Small changes in roughness make materials look much more real."
      ]
    },
    {
      "heading": "Specular and IOR",
      "steps": [
        "IOR (index of refraction) controls how strongly a surface reflects at different angles. Glass is about 1.45–1.5, water about 1.33.",
        "Most non-metals work well with the defaults."
      ]
    },
    {
      "heading": "Transmission for glass",
      "steps": [
        "Set Transmission Weight to 1 to make glass or clear liquids, with Roughness near 0 and the right IOR.",
        "Glass looks best in Cycles. In Eevee, check the material and render settings for refraction."
      ]
    },
    {
      "heading": "Subsurface and emission",
      "steps": [
        "Subsurface lets light pass into the surface and scatter, for skin, wax, milk and leaves.",
        "Emission makes a surface glow, for screens and lamps. Set the Emission Color and raise the Strength."
      ]
    },
    {
      "heading": "Use texture maps",
      "steps": [
        "Real PBR materials use image maps: color, roughness, normal and sometimes metallic and displacement.",
        "Set data maps (roughness, normal, metallic) to Non-Color in the Image Texture node.",
        "A normal map must go through a Normal Map node before the Normal input.",
        "With Node Wrangler enabled, select the Principled BSDF and press Ctrl + Shift + T to load a whole texture set at once."
      ]
    }
  ]
};
