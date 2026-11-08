// Lesson body for anim-7. Loaded only by lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["anim-7"] = {
  "overview": "The Nonlinear Animation editor lets you work with whole animations instead of single keyframes. Tracks work like layers in an image editor, so you can stack a walk and a wave, blend them, or repeat a cycle without touching the original keys.",
  "summary": [
    "Actions are named, reusable animation segments, and strips are instances of them.",
    "Push Down moves the active action into a new strip on the stack.",
    "Higher tracks take precedence over lower ones, unless you choose to blend them.",
    "The sidebar controls each strip's Blending, Influence, Extrapolation and Repeat settings.",
    "Enter tweak mode on a strip to edit its action's keyframes."
  ],
  "troubleshooting": [
    {
      "problem": "A lower layer stopped playing.",
      "cause": "A strip above it is set to Hold, so it keeps overriding after it ends.",
      "solution": "Change that strip's Extrapolation in the sidebar, for example to Nothing."
    },
    {
      "problem": "I can't see my keyframes after using Push Down.",
      "cause": "The action moved into a strip, so it's no longer the active action.",
      "solution": "Enter tweak mode on the strip, or create a new action on the Action Track."
    },
    {
      "problem": "An upper layer completely replaces the animation beneath it.",
      "cause": "The strip's Blending is set to Replace.",
      "solution": "Try Combine or Add, or lower the strip's Influence."
    }
  ],
  "tutorial": [
    {
      "heading": "Animation layers",
      "steps": [
        "The NLA (Nonlinear Animation) editor lets you stack and blend whole animations, like layers in an image editor.",
        "For example, combine a walk with a separate wave of the arm."
      ]
    },
    {
      "heading": "Actions and strips",
      "steps": [
        "An action is a named piece of animation, such as walk or jump.",
        "In the NLA editor, click Push Down next to an action to turn it into a strip on a track. You can then start a new action on top."
      ]
    },
    {
      "heading": "Use it",
      "steps": [
        "Open the NLA editor (change any area's Editor Type). Each object has tracks.",
        "Move, duplicate and scale strips to change timing or repeat them.",
        "Press Tab on a strip to enter tweak mode and edit its keyframes; press Tab again to leave."
      ]
    },
    {
      "heading": "Hold",
      "steps": [
        "A strip's Extrapolation decides what happens before and after it. Hold keeps the first or last pose forever.",
        "Set it to Nothing on upper layers so they don't cover everything after they end."
      ]
    },
    {
      "heading": "Replace and Combine",
      "steps": [
        "Blending sets how a strip mixes with the strips below. Replace overrides them.",
        "Combine adds the movement on top of what is below, which is ideal for layering small changes, such as a head turn on a walk."
      ]
    },
    {
      "heading": "Blending control",
      "steps": [
        "Influence sets how strongly a strip affects the result. Keyframe it to fade a layer in and out.",
        "Blend In and Blend Out fade a strip smoothly at its start and end."
      ]
    },
    {
      "heading": "Strip panel options",
      "steps": [
        "The sidebar (N) shows strip settings such as Repeat, Playback Scale and Reversed.",
        "Repeat makes a cycle, for example a walk cycle repeated several times."
      ]
    },
    {
      "heading": "Modifiers and baking",
      "steps": [
        "Strips can have F-curve modifiers, such as Noise, for extra variation.",
        "Bake Action merges the layers into one new action when you are done."
      ]
    },
    {
      "heading": "Example: a walk cycle with layers",
      "steps": [
        "Animate one walk cycle and push it down. Set Repeat so it walks for the whole shot.",
        "Add a new layer with Combine to add an arm wave or a head turn without touching the walk."
      ]
    }
  ]
};
