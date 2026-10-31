// Lesson body for light-3. Loaded only by lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["light-3"] = {
  "overview": "High Dynamic Range Images (HDRIs) capture 360-degree real-world lighting, reflections, and color in 32-bit floating point precision. In this lesson, you will connect free CC0 HDRIs from Poly Haven into Blender's World shader, rotate the sun angle, balance ambient background brightness, and render transparent backgrounds for PNG composites.",
  "summary": [
    "Go to the World Properties tab -> Click yellow dot next to 'Color' -> Select 'Environment Texture'.",
    "Open an .exr or .hdr file downloaded from PolyHaven.com.",
    "Rotate the HDRI: Switch Shader Editor to 'World' mode, select Environment Texture, press Ctrl + T, and adjust 'Rotation Z' on the Mapping node.",
    "Transparent Render: In Render Properties -> 'Film' -> Check 'Transparent' to hide the HDRI background while keeping its realistic lighting reflections.",
    "Use Light Paths node to show a custom solid background color while lighting with the HDRI."
  ],
  "troubleshooting": [
    {
      "problem": "My entire scene background turned neon pink!",
      "cause": "You added an Environment Texture node but didn't open an image, or the HDRI file was moved/deleted.",
      "solution": "Open the World Shader or World Properties and click 'Open' to re-link your .hdr or .exr image file."
    },
    {
      "problem": "I can't see the HDRI in the 3D viewport while modeling.",
      "cause": "Viewport Shading is set to Solid mode or Material Preview with default studio lights.",
      "solution": "Switch to Rendered Mode (press 'Z' -> Rendered). In Material Preview, click the shading dropdown arrow and check 'Scene Lights' and 'Scene World'."
    },
    {
      "problem": "The HDRI looks low resolution and pixelated in the final render.",
      "cause": "A 1K HDRI is great for lighting but blurry as a background backdrop.",
      "solution": "Enable Render Properties -> Film -> 'Transparent' to render without the background, or download an 8K/16K HDRI for direct camera backdrops."
    }
  ]
};
