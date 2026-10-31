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
  ]
};
