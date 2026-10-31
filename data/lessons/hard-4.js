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
  ]
};
