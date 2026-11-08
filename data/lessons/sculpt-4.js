// Lesson body for sculpt-4. Loaded only by lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["sculpt-4"] = {
  "overview": "Hair in modern Blender is made of curves attached to a surface mesh. You comb and shape those curves with brushes in Curves Sculpt Mode, and Geometry Nodes can add detail such as frizz, clumps and extra strands. This short lesson gets you from a bald mesh to your first groom.",
  "summary": [
    "Add hair as a curves object attached to a surface, such as a head. Add ‣ Curve ‣ Fur is one quick starting point.",
    "Curves Sculpt Mode is where you groom, using brushes to add, comb, cut and shape strands.",
    "The surface object matters. Most brushes, including Add Curves, need one to be set.",
    "Keep the strand count low while you shape the groom, then add density for the final render.",
    "Hair needs a real material and a render test. Check it in the render settings, not just in the viewport."
  ],
  "troubleshooting": [
    {
      "problem": "The Add Curves brush does nothing.",
      "cause": "Most curve sculpting brushes need a surface object, and this curves object doesn't have one.",
      "solution": "Set the surface in the curves object's data properties, then try the brush again."
    },
    {
      "problem": "My hair stays behind when the character moves.",
      "cause": "The curves are no longer attached to the deformed surface.",
      "solution": "Use a Deform Curves on Surface setup, then use Curves ‣ Snap to Deformed Surface to re-attach them. That only works if the mesh topology hasn't changed."
    },
    {
      "problem": "Curves don't line up after I edited the head mesh.",
      "cause": "Changing the surface topology breaks the stored attachment information.",
      "solution": "Use Curves ‣ Snap to Nearest Surface, which moves each curve root to the closest point on the mesh."
    }
  ],
  "tutorial": [
    {
      "heading": "Prepare the base model",
      "steps": [
        "Hair grows on a surface mesh, such as a head or a creature body.",
        "Apply the scale of the mesh (Object ‣ Apply ‣ Scale) before you add hair."
      ]
    },
    {
      "heading": "Quick Fur",
      "steps": [
        "Select the mesh and use Object ‣ Quick Effects ‣ Quick Fur.",
        "Blender creates a hair curves object with a Geometry Nodes setup that already looks like fur.",
        "Adjust the settings in its modifier panel, such as density, length and clumping."
      ]
    },
    {
      "heading": "Guide curves",
      "steps": [
        "For more control, add an empty hair object on the surface with Add ‣ Curve ‣ Empty Hair while the mesh is selected.",
        "Switch to Sculpt Mode on the hair object. Use the Add brush to place a few long guide curves where hair should grow.",
        "Use Comb to shape them, Cut to shorten them, and Puff to lift them off the surface."
      ]
    },
    {
      "heading": "Hair node tools",
      "steps": [
        "Blender comes with ready-made hair node groups in the Asset Browser's Essentials library.",
        "Add them as modifiers to the hair object, for example Interpolate Hair Curves, Clump Hair Curves and Frizz Hair Curves."
      ]
    },
    {
      "heading": "Interpolate hair",
      "steps": [
        "Interpolate Hair Curves creates many child hairs between your few guide curves.",
        "Raise the density to fill the head, and keep the guides few so they are easy to shape."
      ]
    },
    {
      "heading": "Shape the hair",
      "steps": [
        "Clump Hair Curves groups strands into locks for a more natural look.",
        "Adjust the clump shape and distance so locks are not too perfect."
      ]
    },
    {
      "heading": "Noise and frizz",
      "steps": [
        "Add Hair Curves Noise or Frizz Hair Curves to break up perfectly straight strands.",
        "Use a small amount; real hair is a little messy but still follows the overall shape."
      ]
    },
    {
      "heading": "Example: a beard",
      "steps": [
        "Use the same steps on the chin and jaw area.",
        "Paint a density or vertex group mask so hair only grows where the beard should be.",
        "Make the strands shorter and frizzier than head hair."
      ]
    }
  ]
};
