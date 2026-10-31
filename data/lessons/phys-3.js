// Lesson body for phys-3. Loaded only by lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["phys-3"] = {
  "overview": "Liquid simulations use three kinds of object: a Domain that contains the simulation, a Flow that creates the liquid, and Effectors that it collides with. Once you know those roles, you can set up pours, splashes and filling containers.",
  "summary": [
    "The Domain contains the entire simulation. Fluid can't leave it, so make it large enough.",
    "A Flow object with Liquid type and Inflow behavior works like a tap.",
    "Add Effector objects for anything the liquid should hit, such as a cup.",
    "Resolution Divisions sets the detail level. Bigger domains need more divisions.",
    "Bake in the domain's Cache panel, and enable Mesh on the domain so the liquid renders as a surface."
  ],
  "troubleshooting": [
    {
      "problem": "Nothing happens when I press play.",
      "cause": "The simulation has to be baked, or the domain type isn't Liquid.",
      "solution": "Set the domain type to Liquid, then press Bake in the Cache panel. Press Esc to stop a bake."
    },
    {
      "problem": "Liquid passes straight through my cup.",
      "cause": "The cup isn't an Effector, or its walls are too thin for the resolution.",
      "solution": "Set the cup as an Effector, make its walls thicker and raise Resolution Divisions."
    },
    {
      "problem": "The liquid looks like blocks or is hard to see.",
      "cause": "You're seeing a low-resolution preview, and the domain may have no mesh.",
      "solution": "Enable Mesh on the domain and add a material to the domain object, then raise the resolution for the final bake."
    }
  ]
};
