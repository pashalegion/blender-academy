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
  ],
  "tutorial": [
    {
      "heading": "What an HDRI is",
      "steps": [
        "An HDRI is a 360-degree photo that stores a very wide range of brightness.",
        "Used as the world background, it lights the whole scene with realistic light, colors and reflections."
      ]
    },
    {
      "heading": "Where to find HDRIs",
      "steps": [
        "Poly Haven (polyhaven.com) has free CC0 HDRIs you can use for anything.",
        "Download the .hdr or .exr file. 1K–4K is enough for lighting; use larger files if the background will be seen sharply."
      ]
    },
    {
      "heading": "Add an HDRI to the world",
      "steps": [
        "Open World Properties (the red globe icon). Click the small circle next to Color and choose Environment Texture.",
        "Click Open and choose your HDRI file.",
        "Switch the viewport to Rendered or Material Preview with Scene World on to see it."
      ]
    },
    {
      "heading": "Rotate and adjust it",
      "steps": [
        "In the Shader Editor, switch to World. Select the Environment Texture node and press Ctrl + T (Node Wrangler) to add Mapping.",
        "Change Rotation Z on the Mapping node to turn the sun to where you want it.",
        "Change Strength on the Background node to make the light brighter or darker."
      ]
    },
    {
      "heading": "HDRI light with a plain background",
      "steps": [
        "You can light the scene with the HDRI but show a plain color behind it.",
        "One way: in Render Properties ‣ Film, turn on Transparent and add the background color later.",
        "Another way: use a Light Path node in the world nodes to show a different color to the camera."
      ]
    },
    {
      "heading": "Dome lighting setup",
      "steps": [
        "For a ground that catches shadows, place your model on a large plane or a half-sphere dome.",
        "The HDRI still lights everything, and the floor gives the scene a base."
      ]
    },
    {
      "heading": "Shadows and their darkness",
      "steps": [
        "To make shadows visible on a transparent background, set the floor as a Shadow Catcher (Object Properties ‣ Visibility).",
        "Adjust the HDRI Strength or rotation to make shadows lighter, darker or point in a different direction."
      ]
    }
  ]
};
