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
  ],
  "tutorial": [
    {
      "heading": "Add the objects",
      "steps": [
        "Add a small object to be the fire source, such as a sphere or a log.",
        "Fire happens inside a domain box, like liquid simulations."
      ]
    },
    {
      "heading": "Add fire physics",
      "steps": [
        "Select the source and open Physics Properties ‣ Fluid, and set Type to Flow.",
        "Set Flow Type to Fire, Smoke, or Fire + Smoke."
      ]
    },
    {
      "heading": "Quick Smoke",
      "steps": [
        "The fastest setup: select the source and use Object ‣ Quick Effects ‣ Quick Smoke.",
        "It creates the domain and a volume material for you. Set the Flow Type to Fire + Smoke afterwards for flames."
      ]
    },
    {
      "heading": "Play every frame",
      "steps": [
        "In the Timeline's Playback menu, set Sync to Play Every Frame so the preview doesn't skip frames.",
        "The first playback calculates the simulation and can be slow."
      ]
    },
    {
      "heading": "Flow behavior and source",
      "steps": [
        "Inflow keeps emitting, like a burning log. Geometry emits only once.",
        "Flow Source can be the mesh, its surface, or particles."
      ]
    },
    {
      "heading": "Density and fuel",
      "steps": [
        "Use Flow raises the amount of smoke. Absolute Density sets density instead of adding to it.",
        "Fuel controls how much fire burns; more fuel makes bigger flames."
      ]
    },
    {
      "heading": "Shape the fire",
      "steps": [
        "Use a vertex group to emit only from part of the object.",
        "Initial Velocity sends fire in a direction, and a texture on the flow makes the fire break up more naturally."
      ]
    },
    {
      "heading": "Collisions and hiding the source",
      "steps": [
        "Add Collision or Effector physics to objects the smoke should flow around.",
        "Hide the flow object from the render so only the fire is visible."
      ]
    },
    {
      "heading": "Domain settings",
      "steps": [
        "Resolution Divisions sets the detail. Raise it for the final result, and expect longer bakes.",
        "Time Scale changes the speed. Border Collisions decide which domain walls block smoke.",
        "Adaptive Domain shrinks the domain around the smoke to save time."
      ]
    },
    {
      "heading": "Bake and render",
      "steps": [
        "Bake in the domain's Cache panel, then render. Cycles gives the most realistic fire.",
        "Adjust the volume material's Density and Blackbody intensity to tune the look."
      ]
    }
  ]
};
