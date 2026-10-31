// Lesson body for shade-3. Loaded only by lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["shade-3"] = {
  "overview": "Procedural materials require zero external image files and never lose resolution no matter how close the camera gets. Ducky 3D guides you through building sci-fi metals, marble, and organic grunge using Noise Texture, Voronoi Texture, ColorRamp, Bump nodes, and the essential Texture Coordinate + Mapping setup.",
  "summary": [
    "Texture Coordinate + Mapping nodes: Select any texture node and press Ctrl + T (with Node Wrangler enabled) to instantly add both.",
    "Plug 'Object' coordinate output (not Generated or UV) into Mapping for seamless procedural textures without UV seams.",
    "ColorRamp node: The primary tool for remapping values, increasing contrast, and converting greyscale noise to color palettes.",
    "Voronoi Texture creates cells, scales, cracked earth, and stone patterns.",
    "Bump node: Converts black-and-white height data into fake surface depth plugged into Principled BSDF 'Normal'."
  ],
  "troubleshooting": [
    {
      "problem": "My procedural noise pattern looks stretched out into long parallel stripes!",
      "cause": "Using 'Generated' texture coordinates on a non-cubic mesh or unapplied scale.",
      "solution": "Connect the 'Object' output of the Texture Coordinate node into the Vector input of the Mapping node. Make sure scale is applied (Ctrl + A -> Scale)."
    },
    {
      "problem": "My bump map looks like an intense spiky mess with jagged harsh shadows.",
      "cause": "The Bump node 'Strength' or 'Distance' is set way too high (default Distance is 1.0 meter!).",
      "solution": "Lower the Bump node 'Strength' to 0.1 and reduce 'Distance' to 0.01 or 0.005 meters for realistic subtle surface relief."
    },
    {
      "problem": "How do I quickly preview what a single node in my shader tree looks like?",
      "cause": "Viewing the final shader doesn't let you debug individual masks.",
      "solution": "With Node Wrangler active, hold Ctrl + Shift and Left-Click any node. It instantly connects a temporary Viewer node so you can isolate its output!"
    }
  ]
};
