// Lesson body for hard-4. Loaded only by lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["hard-4"] = {
  "overview": "A model can look perfect on screen and still fail on a printer. Printable models need real-world sizes, solid thickness and a watertight mesh. This lesson covers setting Blender up for accurate parts and exporting a file your slicer can use.",
  "summary": [
    "Set the scene's Units before you model, and work from real measurements.",
    "Every wall needs real thickness. The Solidify modifier can add it to a thin shell.",
    "Check for holes and errors with Select ‣ Select All by Trait ‣ Non Manifold.",
    "The free 3D Print Toolbox add-on, from Blender Extensions, adds checks made for printing.",
    "Export through File ‣ Export ‣ STL, and check the size again in your slicer."
  ],
  "troubleshooting": [
    {
      "problem": "My print is 1000 times too big or too small.",
      "cause": "Units or the STL export Scale don't match what the slicer expects.",
      "solution": "Check the Unit Scale in Scene properties and the Scale setting in the STL export options. Then confirm the size in the slicer."
    },
    {
      "problem": "The slicer reports errors or missing walls.",
      "cause": "The mesh isn't watertight, or faces overlap inside it.",
      "solution": "Use Non Manifold selection to find the problem, fix it, and combine overlapping parts with a Boolean."
    },
    {
      "problem": "Thin parts vanish in the slicer.",
      "cause": "The walls are thinner than the printer can produce.",
      "solution": "Thicken them with Solidify or by editing the mesh, then check your printer's minimum wall size."
    }
  ],
  "tutorial": [
    {
      "heading": "Blender vs CAD for printing",
      "steps": [
        "CAD programs are made for exact parts, but Blender can model precise, printable objects too.",
        "The secret is correct units, exact typed sizes, solid geometry and a final check before export."
      ]
    },
    {
      "heading": "Plan the object",
      "steps": [
        "Decide what you are making and measure the real-world pieces it must fit, for example a desk edge and a pair of headphones.",
        "Write the key numbers down: thickness, widths, gaps and clearances."
      ]
    },
    {
      "heading": "Set up units and grid",
      "steps": [
        "In Scene Properties ‣ Units, choose Metric, set Unit Scale to 0.001 and Length to Millimeters, so 1 unit is 1 mm.",
        "The grid now shows millimeters, which matches most slicers."
      ],
      "tip": "Many slicers expect STL files in millimeters, so this setup avoids prints that come out 1000 times too small."
    },
    {
      "heading": "Fix viewport clipping",
      "steps": [
        "Small units can make objects disappear when you zoom in or out.",
        "Open the Sidebar (N) ‣ View tab and adjust Clip Start (smaller) and Clip End (larger) until the view behaves."
      ]
    },
    {
      "heading": "Helpful settings and tools",
      "steps": [
        "Install the free 3D Print Toolbox add-on from Edit ‣ Preferences ‣ Get Extensions.",
        "Press F3 to search for any command by name.",
        "Turn on snapping (magnet icon) for exact alignment."
      ]
    },
    {
      "heading": "Start with a reference cube",
      "steps": [
        "Add a cube and type its size, for example 20 mm, in Sidebar ‣ Item ‣ Dimensions.",
        "Use it to check that sizes look right before modeling the real part."
      ]
    },
    {
      "heading": "Model with precision",
      "steps": [
        "Work in orthographic front, side and top views (Numpad 1, 3, 7) and wireframe (Z ‣ Wireframe) to read the grid.",
        "Build the part from cubes and extrusions using typed values (G, E and S followed by numbers).",
        "Leave small clearances, for example 0.3 mm, where parts must slide or fit together."
      ]
    },
    {
      "heading": "Give everything real thickness",
      "steps": [
        "Every wall needs thickness. A Solidify modifier can add it to a flat shell.",
        "Most printers need walls of at least about 1–2 mm. Check your printer's recommendation."
      ]
    },
    {
      "heading": "Check the mesh",
      "steps": [
        "In Edit Mode use Select ‣ Select All by Trait ‣ Non Manifold to find holes and broken edges.",
        "Run the 3D Print Toolbox checks (Solid, Intersections, Thickness, Overhang) in the Sidebar.",
        "Combine overlapping parts into one solid with a Boolean Union, then apply it."
      ]
    },
    {
      "heading": "Export for the slicer",
      "steps": [
        "Select the object and use File ‣ Export ‣ STL. Turn on Selection Only if needed.",
        "Open the file in your slicer and check the size and orientation before printing."
      ]
    }
  ]
};
