// Lesson body for shade-3. Loaded only by lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["shade-3"] = {
  "overview": "Procedural materials require zero external image files and never lose resolution no matter how close the camera gets. This lesson covers building sci-fi metals, marble, and organic grunge using Noise Texture, Voronoi Texture, ColorRamp, Bump nodes, and the essential Texture Coordinate + Mapping setup.",
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
  ],
  "tutorial": [
    {
      "heading": "Open the Shader Editor",
      "steps": [
        "Click the Shading workspace tab, or change any area to the Shader Editor.",
        "Select your object and click New to add a material."
      ]
    },
    {
      "heading": "Shader nodes basics",
      "steps": [
        "Each node does one job. Data flows from left to right along the connections.",
        "The Principled BSDF decides how the surface looks, and Material Output sends it to the render.",
        "Drag from one socket to another to connect them. Ctrl + right-click and drag cuts connections."
      ]
    },
    {
      "heading": "Add new nodes",
      "steps": [
        "Press Shift + A in the Shader Editor, or use the Add menu, and choose a node from a category such as Texture or Converter.",
        "Use the search at the top of the Add menu to find nodes by name."
      ]
    },
    {
      "heading": "Image vs procedural",
      "steps": [
        "Image textures use pictures. They are easy, but need UVs and can look blurry up close.",
        "Procedural textures are made by math, like Noise, Voronoi and Wave. They have no resolution limit and need no image files."
      ]
    },
    {
      "heading": "Connect a procedural texture",
      "steps": [
        "Add a Noise Texture and connect its Color or Fac output to Base Color.",
        "Add a Color Ramp between them to choose your own colors and control contrast.",
        "Add a Texture Coordinate and Mapping node before the texture (Node Wrangler: select the texture and press Ctrl + T) to control its position and scale."
      ]
    },
    {
      "heading": "Edit the texture",
      "steps": [
        "Change Scale to make the pattern bigger or smaller, Detail for more fine variation, and Roughness for sharper or softer noise.",
        "Drag the Color Ramp handles closer together for harder edges."
      ]
    },
    {
      "heading": "Make a metal material",
      "steps": [
        "Set Metallic to 1 and choose a grey or colored Base Color.",
        "Connect a Noise Texture through a Color Ramp into Roughness, so some areas are shinier than others.",
        "Optionally add a Bump node fed by the same noise, connected to Normal, for small surface dents."
      ]
    }
  ]
};
