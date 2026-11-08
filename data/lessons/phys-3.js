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
  ],
  "tutorial": [
    {
      "heading": "Model the scene",
      "steps": [
        "Make a simple container, such as a cup or a glass, and a small object to act as the water source.",
        "Place them inside a larger cube: this will be the domain."
      ]
    },
    {
      "heading": "The three fluid objects",
      "steps": [
        "Domain: the box where the simulation happens. Liquid cannot leave it.",
        "Flow: the object that creates (or removes) liquid.",
        "Effector: an object the liquid collides with, such as the cup."
      ]
    },
    {
      "heading": "Add fluid physics",
      "steps": [
        "Select each object and open Physics Properties ‣ Fluid.",
        "Set the big cube to Domain, the source to Flow and the cup to Effector."
      ]
    },
    {
      "heading": "Change the simulation type",
      "steps": [
        "On the domain, set Domain Type to Liquid. On the flow object, set Flow Type to Liquid."
      ]
    },
    {
      "heading": "Fluid mesh",
      "steps": [
        "Turn on Mesh in the domain settings so the liquid becomes a smooth surface you can render.",
        "Give the domain a water material (for example Principled BSDF with Transmission)."
      ]
    },
    {
      "heading": "Flow behavior",
      "steps": [
        "Geometry turns the flow object itself into liquid once.",
        "Inflow keeps adding liquid, like a tap. Outflow removes liquid, like a drain."
      ]
    },
    {
      "heading": "Simulation quality",
      "steps": [
        "Resolution Divisions sets the detail. Low values are fast for testing; raise them for the final result.",
        "Bigger domains need more divisions."
      ]
    },
    {
      "heading": "Bake the simulation",
      "steps": [
        "In the domain's Cache panel, set the frame range and click Bake (Bake All, depending on the cache type).",
        "Press Esc to stop a bake. Free the bake before changing settings."
      ],
      "tip": "Pin the domain's physics panel so you can bake while another object is selected."
    },
    {
      "heading": "Speed and amount",
      "steps": [
        "Time Scale in the domain changes the simulation speed.",
        "Make the flow object bigger or change its timing to control how much liquid appears."
      ]
    },
    {
      "heading": "Forces and direction",
      "steps": [
        "Use Initial Velocity on the flow object to shoot liquid in a direction.",
        "Force fields (Shift + A ‣ Force Field) such as Wind can push the liquid. Gravity can be changed in the Scene Properties.",
        "Viscosity settings make the liquid thicker, like honey."
      ]
    }
  ]
};
