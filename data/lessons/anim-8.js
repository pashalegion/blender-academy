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
  ],
  "tutorial": [
    {
      "heading": "What drivers do",
      "steps": [
        "A driver links one value to another with a simple rule, so they move together without keyframes.",
        "Example: turning the minute hand of a clock automatically turns the hour hand 12 times slower."
      ]
    },
    {
      "heading": "Model the clock",
      "steps": [
        "Make a clock face (a cylinder) and two thin hands (scaled cubes).",
        "Name the hands clearly, such as MinuteHand and HourHand."
      ]
    },
    {
      "heading": "Set the rotation point",
      "steps": [
        "Each hand must rotate around the center of the clock.",
        "Place the 3D cursor at the clock center (select it, Shift + S ‣ Cursor to Selected), then for each hand use Object ‣ Set Origin ‣ Origin to 3D Cursor."
      ]
    },
    {
      "heading": "Limit the rotation",
      "steps": [
        "Add a Limit Rotation constraint, or lock the other axes in the Sidebar (N), so the hands only turn around one axis."
      ]
    },
    {
      "heading": "Add a driver",
      "steps": [
        "Right-click the hour hand's rotation value on that axis and choose Add Driver, or hover over it and press Ctrl + D.",
        "Open the driver settings (right-click ‣ Edit Driver, or the Drivers editor).",
        "Set the variable to read the minute hand's rotation: choose Transform Channel, pick MinuteHand as the object and the matching rotation axis."
      ]
    },
    {
      "heading": "Use a formula",
      "steps": [
        "In the expression field, divide the variable by 12, for example var / 12.",
        "Now rotating the minute hand once makes the hour hand move one twelfth of a turn.",
        "Animate only the minute hand; the hour hand follows automatically."
      ],
      "tip": "Rotations inside drivers are in radians, not degrees."
    },
    {
      "heading": "Where drivers are used",
      "steps": [
        "Rigs use drivers for sliders that control shape keys, such as a smile slider.",
        "They are also used for machines: gears, wheels and pistons that must stay in sync."
      ]
    }
  ]
};
