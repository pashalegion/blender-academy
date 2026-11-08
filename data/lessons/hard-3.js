// Lesson body for hard-3. Loaded only by lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["hard-3"] = {
  "overview": "Learn how to model with exact millimeter-accurate architectural dimensions. You will configure Blender's scene units (Metric/Imperial), master vertex and edge snapping with target alignment, use the Measure tool, and build modular walls, doors, and window frames suitable for architectural visualization (ArchViz) and level design.",
  "summary": [
    "Set Scene Units in Scene Properties -> Units (Metric, Millimeters/Meters or Imperial/Feet).",
    "Hold Ctrl while transforming to snap to grid increments automatically.",
    "Snapping menu (Shift + Tab): Toggle between Vertex, Edge, Face, and Incremental snapping.",
    "Set Snap Target to 'Closest' or 'Center' depending on whether you want corners to weld.",
    "Use the 3D Cursor (Shift + Right Click) as a temporary pivot point for precision rotational alignment."
  ],
  "troubleshooting": [
    {
      "problem": "My object snaps violently across the scene when moving.",
      "cause": "Snapping is set to 'Face Nearest' with 'Project Individual Elements' or snap distance is misconfigured.",
      "solution": "Set Snap Target to 'Vertex' and Snap With to 'Active' or 'Closest'. Turn off 'Align Rotation to Target' unless aligning normal vectors."
    },
    {
      "problem": "Measurements on screen don't match the dimensions in the Transform sidebar.",
      "cause": "Object scale is unapplied, so mesh dimensions are being multiplied by scale factors.",
      "solution": "Press Ctrl + A in Object Mode and select 'Apply Scale'."
    },
    {
      "problem": "The grid disappears when zooming in close.",
      "cause": "Viewport clip settings or grid subdivisions scaling limits.",
      "solution": "Open Overlays dropdown in top right -> check Grid and adjust Subdivisions to 10."
    }
  ],
  "tutorial": [
    {
      "heading": "Precision is possible in Blender",
      "steps": [
        "Blender is not a CAD program, but you can model to exact sizes with units, typed values and snapping.",
        "This works well for furniture, rooms, product mockups and parts for 3D printing."
      ]
    },
    {
      "heading": "Set up units",
      "steps": [
        "Open Scene Properties ‣ Units.",
        "Choose Metric (or Imperial) for Unit System, keep Unit Scale at 1.0, and set Length to the unit you think in, such as Centimeters or Millimeters.",
        "Sizes in the Sidebar (N) now show in those units."
      ]
    },
    {
      "heading": "Move by exact amounts",
      "steps": [
        "Press G, then an axis (X, Y or Z), then type a number, then Enter. Example: G, X, 0.25, Enter moves 0.25 m along X.",
        "The same works for rotate (R) and scale (S).",
        "You can type units too, for example 50cm or 2ft."
      ]
    },
    {
      "heading": "Snapping",
      "steps": [
        "Turn snapping on with the magnet icon in the viewport header, or hold Ctrl while moving.",
        "In the snapping menu next to the magnet, choose what to snap to: Increment for grid steps, or Vertex, Edge or Face to snap to geometry.",
        "Snap Base sets which point of the moving object is aligned: Closest, Center, Median or Active.",
        "Use vertex snapping to make two objects meet exactly corner to corner."
      ]
    },
    {
      "heading": "Set exact sizes",
      "steps": [
        "Open the Sidebar (N) ‣ Item tab and type values into Dimensions, for example 2 m for a wall's width.",
        "After setting dimensions, apply the scale with Object ‣ Apply ‣ Scale so modifiers and tools measure correctly."
      ]
    },
    {
      "heading": "Draw a plan from points",
      "steps": [
        "Start with a single vertex (add a plane and merge it, or use an add-on), and extrude it (E) along an axis with typed lengths to draw outlines.",
        "Example: E, X, 3, Enter draws a 3 m wall line. Continue for each wall.",
        "Fill the outline with F or extrude it up (E, Z, 2.5) to make walls."
      ]
    },
    {
      "heading": "Math while typing",
      "steps": [
        "Number fields accept math. Type 2.4/3 or 1.2*2 and press Enter.",
        "While moving, rotating or scaling, press = to switch to advanced input, where you can type expressions with units."
      ]
    },
    {
      "heading": "Change edge lengths and measure",
      "steps": [
        "Turn on Edge Length in the Viewport Overlays (Measurement section) in Edit Mode to see lengths on selected edges.",
        "To make an edge a specific length, scale it along its axis with a typed value.",
        "Use the Measure tool from the Toolbar: drag between two points, and hold Ctrl to snap to geometry."
      ]
    },
    {
      "heading": "Use the 3D cursor",
      "steps": [
        "Shift + S opens the snap menu. Cursor to Selected moves the 3D cursor to the selection, and Selection to Cursor moves objects to it.",
        "You can type an exact cursor position in Sidebar ‣ View ‣ 3D Cursor.",
        "New objects appear at the cursor, which makes precise placement easy."
      ]
    }
  ]
};
