// Lesson body for phys-4. Loaded only by lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["phys-4"] = {
  "overview": "Smoke and fire use the same fluid system as liquid, but the domain is set to Gas. A Flow object emits smoke, fire or both, and Blender simulates it inside the domain. Quick Smoke builds a working setup in one click, which you can then adjust.",
  "summary": [
    "Use Quick Smoke from the Object menu to create a domain and flow together.",
    "Set the Flow Type to Smoke, Fire + Smoke, or Fire.",
    "Use Inflow behavior for a constant source, like the base of a fire.",
    "Raise Resolution Divisions on the domain for finer detail, then expect a longer bake.",
    "Hide the flow object from renders, so only the fire and smoke appear."
  ],
  "troubleshooting": [
    {
      "problem": "I see a box in my render, or the smoke looks solid.",
      "cause": "The domain object is showing, or its volume material needs adjusting.",
      "solution": "Check that the domain has the volume material from Quick Smoke, and adjust its Density and Blackbody settings."
    },
    {
      "problem": "The fire is low detail and looks like cubes.",
      "cause": "Resolution Divisions is too low.",
      "solution": "Increase the value and bake again. Preview at a low value first, because bake times climb quickly."
    },
    {
      "problem": "The smoke stops at an invisible wall.",
      "cause": "It hit the edge of the domain.",
      "solution": "Scale the domain up before you bake, or enable the Adaptive Domain option."
    }
  ]
};
