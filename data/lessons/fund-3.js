// Lesson body for fund-3. Loaded only by lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["fund-3"] = {
  "overview": "Follow Blender Guru's complete beginner donut course made for Blender 5.0 (published in 2026). It is a full start-to-finish course covering the basics, modeling, organic forms, materials, texturing, UVs, Geometry Nodes sprinkles, lighting, and rendering. Blender 5.2 is the current LTS release; the core workflows still apply, and use the official 5.2 manual linked below if a control has moved.",
  "summary": [
    "The course is split into eight chapters: basics, modeling, organic modeling, materials, texturing, UV unwrapping, sprinkles with Geometry Nodes, and final lighting/rendering.",
    "Save incremental versions of the .blend file as you go, especially before modifiers, UV edits, and simulation or node setup.",
    "Treat provided textures and assets as optional learning aids; the course page lists downloadable resources and setup steps.",
    "If a Blender 5.0 menu or panel differs in 5.2, search the versioned manual linked below for the feature name."
  ],
  "troubleshooting": [
    {
      "problem": "The tutorial's interface doesn't exactly match Blender 5.2.",
      "cause": "The course was recorded for Blender 5.0 and some UI details may have changed in 5.2.",
      "solution": "Look up the tool name in the linked Blender 5.2 manual. The course page also includes current chapter links and project resources."
    },
    {
      "problem": "The course's texture or asset is missing.",
      "cause": "Some course assets are provided as separate downloads and are not embedded in the video.",
      "solution": "Open the Blender Guru course page linked above and download the relevant project resources. Reconnect missing files through File -> External Data -> Find Missing Files."
    },
    {
      "problem": "I can't see vertices behind the front faces in Edit Mode.",
      "cause": "Solid shading blocks occluded geometry.",
      "solution": "Press Alt + Z to toggle X-Ray mode. Now you can select both front and back vertices effortlessly with box select (B)."
    }
  ],
  "tutorial": [
    {
      "heading": "Part 1: The basics",
      "steps": [
        "Start a new General file and delete the default cube (select it, press X).",
        "Add a donut shape with Shift + A ‣ Mesh ‣ Torus.",
        "Use the Adjust Last Operation panel to set the size and the number of segments.",
        "Practice moving around the scene and save your file with a clear name."
      ],
      "tip": "The course is long, so split it into sessions and save a new version of the file after each part."
    },
    {
      "heading": "Part 2: Basic modeling",
      "steps": [
        "Add a Subdivision Surface modifier so the torus looks smooth.",
        "In Edit Mode, turn on Proportional Editing (O) and move a few vertices so the donut looks handmade, not perfect.",
        "Duplicate the top half of the faces for the icing: select them, press Shift + D, then P ‣ Selection to make them a separate object.",
        "Give the icing thickness with a Solidify modifier and keep it on the donut with a Shrinkwrap modifier."
      ]
    },
    {
      "heading": "Part 3: Organic modeling",
      "steps": [
        "Make drips in the icing by extruding (E) edges at the icing border downwards.",
        "Use Sculpt Mode brushes, such as Grab and Smooth, to make the icing look soft and natural.",
        "Keep checking from different angles so the shapes look believable all around."
      ]
    },
    {
      "heading": "Part 4: Materials",
      "steps": [
        "Open the Shading workspace to see the Shader Editor.",
        "Click New to give the donut and the icing their own materials.",
        "Adjust Base Color and Roughness on the Principled BSDF node. Give the icing a slightly shiny look and the dough a matte look.",
        "Use Subsurface for a softer, food-like look on the dough."
      ]
    },
    {
      "heading": "Part 5: Texturing",
      "steps": [
        "Add color variation so the donut does not look like plastic, for example a lighter ring around the middle.",
        "Use procedural textures such as Noise Texture connected through a Color Ramp to mix two colors.",
        "Preview the result in Material Preview or Rendered mode (Z menu)."
      ]
    },
    {
      "heading": "Part 6: UV unwrapping",
      "steps": [
        "Some textures need a UV map so they wrap around the model correctly.",
        "In Edit Mode, select all and unwrap (U ‣ Unwrap). Check the result in the UV Editor.",
        "Adjust seams where a texture stretches or shows a visible join."
      ]
    },
    {
      "heading": "Part 7: Scattering sprinkles",
      "steps": [
        "Model one sprinkle (a small stretched cylinder) and make a few color variations.",
        "Put the sprinkles in their own collection.",
        "On the icing, use Geometry Nodes to distribute points over the top surface and place sprinkle instances on them.",
        "Randomize rotation and scale so no two sprinkles look the same."
      ]
    },
    {
      "heading": "Part 8: Lighting and rendering",
      "steps": [
        "Place the camera for a nice composition: Numpad 0 to look through it, and Lock Camera to View in the sidebar to adjust it.",
        "Add lights, for example an area light from the side, or use an HDRI world for natural light.",
        "Choose Cycles in Render Properties for realistic results, then press F12 to render.",
        "Save the image from the render window with Image ‣ Save As."
      ]
    }
  ]
};
