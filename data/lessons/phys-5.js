// Lesson body for phys-5. Loaded only by lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["phys-5"] = {
  "overview": "Particles are large numbers of items emitted from a mesh, typically thousands of them. They can be dust, sparks or magic effects, or they can be copies of an object you scatter across a surface. They respond to gravity, force fields and collisions.",
  "summary": [
    "Add a particle system in the Particle properties tab of a mesh.",
    "Emission sets how many particles appear, when they start, and how long they live.",
    "Velocity controls how they leave the emitter, and Physics controls how they move.",
    "In the Render panel, you can show particles as any object or collection.",
    "Force fields such as wind and turbulence shape the motion, and baking keeps it reliable."
  ],
  "troubleshooting": [
    {
      "problem": "Nothing happens in the viewport.",
      "cause": "Particles are created during playback from the start frame.",
      "solution": "Press play from the first frame, and check Frame Start and End in Emission."
    },
    {
      "problem": "The emitter object disappears or stays visible in the render.",
      "cause": "Show Emitter in the Render panel controls whether it's visible.",
      "solution": "Turn Show Emitter on or off, whichever your shot needs."
    },
    {
      "problem": "The simulation changes each time or looks wrong after jumping frames.",
      "cause": "Particle motion depends on earlier frames.",
      "solution": "Play it from the start, then bake it in the Cache panel."
    }
  ],
  "tutorial": [
    {
      "heading": "Add a particle system",
      "steps": [
        "Select a mesh and open Particle Properties (the sparkle icon). Click + to add a system.",
        "Press Space: particles spray from the surface."
      ]
    },
    {
      "heading": "Emission",
      "steps": [
        "Number sets how many particles appear. Frame Start and End set when they are emitted.",
        "Lifetime sets how many frames each particle lives."
      ]
    },
    {
      "heading": "Source and velocity",
      "steps": [
        "Emit From chooses faces, vertices or volume.",
        "Velocity ‣ Normal pushes particles out from the surface. Object Velocity and Randomize add more variety."
      ]
    },
    {
      "heading": "Physics",
      "steps": [
        "Newtonian physics gives realistic falling and bouncing. Mass and size matter.",
        "Forces like Brownian add random jittery movement, good for dust."
      ]
    },
    {
      "heading": "Deflection",
      "steps": [
        "Add Collision physics to an object to make particles bounce off it."
      ]
    },
    {
      "heading": "Render settings",
      "steps": [
        "Render As decides how particles look: Halo (points), Object or Collection.",
        "With Object, choose a mesh such as a spark or a leaf. Scale and Scale Randomness vary the size.",
        "Rotation settings let each particle spin or face its direction."
      ]
    },
    {
      "heading": "Viewport display",
      "steps": [
        "Show fewer particles in the viewport (Viewport Display ‣ Amount) to keep it fast, while rendering them all."
      ]
    },
    {
      "heading": "Children and field weights",
      "steps": [
        "Children create extra particles around each main one, for more detail without more simulation.",
        "Field Weights decide how much gravity and force fields affect the particles."
      ]
    },
    {
      "heading": "Force fields",
      "steps": [
        "Add a force field (Shift + A ‣ Force Field), such as Wind or Turbulence, to push particles around."
      ]
    },
    {
      "heading": "Scatter objects",
      "steps": [
        "Set the system to Hair type with Render As Object to place static copies, like grass, rocks or trees, over a surface."
      ]
    },
    {
      "heading": "Bake",
      "steps": [
        "Bake the simulation in the Cache panel so it plays the same every time."
      ],
      "tip": "Hair particles are the older way to make hair; the Hair & Fur lesson shows the newer hair curves."
    }
  ]
};
