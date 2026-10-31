// Lesson body for anim-8. Loaded only by lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["anim-8"] = {
  "overview": "A driver lets one value control another, using a function or a math expression. Rotate a minute hand and the hour hand follows at a twelfth of the speed. Drivers are how rigs get sliders and how moving parts stay linked without keyframes.",
  "summary": [
    "Right-click a property and choose Add Driver, or press Ctrl + D with the mouse over it.",
    "Edit the setup in the popover or the Drivers editor.",
    "Variables read values from other properties or from transform channels.",
    "Scripted Expressions combine those variables with math.",
    "Copy As New Driver lets you copy one property and paste it as a driver on another."
  ],
  "troubleshooting": [
    {
      "problem": "The driver stays red or shows an error.",
      "cause": "Its expression or variable is invalid, or an object reference is missing.",
      "solution": "Check each variable's object and spelling, then fix the expression in the Drivers editor."
    },
    {
      "problem": "My value moves the wrong amount.",
      "cause": "Rotations are handled in radians within scripted expressions.",
      "solution": "Check the variable's value in the Drivers editor, and scale it in the expression."
    },
    {
      "problem": "The driver doesn't react when I move the other object.",
      "cause": "The variable is reading the wrong object or Transform Channel.",
      "solution": "Open the driver in the Drivers editor, then check the variable's object and channel."
    }
  ]
};
