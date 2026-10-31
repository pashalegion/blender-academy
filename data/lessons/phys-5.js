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
  ]
};
