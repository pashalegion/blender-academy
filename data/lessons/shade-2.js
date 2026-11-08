// Lesson body for shade-2. Loaded only by lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["shade-2"] = {
  "overview": "UV unwrapping is the process of flattening a 3D model into 2D coordinates so textures can be wrapped around it—just like cutting a cardboard box flat. In this lesson, you'll learn where to place Seams (Ctrl + E -> Mark Seam), how to use Smart UV Project, and how to maintain consistent Texel Density so textures never stretch.",
  "summary": [
    "Select edges where seams should go (hide them in natural crevices or unseen undersides) -> Ctrl + E -> 'Mark Seam' (edges turn red).",
    "In Edit Mode, press 'A' to select all faces, then press 'U' -> 'Unwrap'.",
    "Open the 'UV Editor' window to view the unwrapped 2D UV islands.",
    "Pack UV Islands: In UV Editor, click UV -> 'Pack Islands' to maximize texture resolution usage.",
    "Check UV Stretch: In UV Editor overlays, enable 'Display Stretch' (Blue = zero distortion, Green/Red = stretching)."
  ],
  "troubleshooting": [
    {
      "problem": "My UV unwrap is horribly warped and stretched out in one direction!",
      "cause": "You forgot to apply object scale before unwrapping!",
      "solution": "Go to Object Mode, press Ctrl + A -> 'Apply Scale'. Return to Edit Mode, press 'A', then 'U' -> 'Unwrap' again."
    },
    {
      "problem": "Two parts of my mesh are overlapping on top of each other in the UV editor.",
      "cause": "The mesh wasn't split with enough seams, causing the island to fold over itself.",
      "solution": "Add an extra seam along the dividing fold. Re-unwrap with 'U' -> 'Unwrap'. In UV Editor, press UV -> 'Pack Islands'."
    },
    {
      "problem": "The texture resolution looks blurry on one part of the model but sharp on another.",
      "cause": "Inconsistent Texel Density (UV island sizes don't match their real 3D proportions).",
      "solution": "In the UV Editor, select all islands and click UV -> 'Average Island Scale', then 'Pack Islands'."
    }
  ],
  "tutorial": [
    {
      "heading": "Add a texture to an object",
      "steps": [
        "Select an object, open the Shading workspace and add a material.",
        "Add an Image Texture node (Shift + A ‣ Texture ‣ Image Texture) and connect its Color to Base Color.",
        "Click New in the node and choose Generated Type: UV Grid. This test pattern shows any stretching clearly."
      ]
    },
    {
      "heading": "Default UV maps",
      "steps": [
        "Most new objects come with a UV map already. You can see it in Object Data Properties ‣ UV Maps.",
        "A UV map tells Blender how to lay the 2D image onto the 3D surface."
      ]
    },
    {
      "heading": "Editing a mesh changes the UVs",
      "steps": [
        "When you extrude or move parts in Edit Mode, the UV map does not update by itself, so the texture can stretch.",
        "After big changes, unwrap the mesh again."
      ]
    },
    {
      "heading": "Preview and edit UV maps",
      "steps": [
        "Open the UV Editing workspace. The left side is the UV Editor and the right side is the 3D Viewport in Edit Mode.",
        "Select faces in the 3D view to see their UVs on the left.",
        "In the UV Editor, use G, R and S to move, rotate and scale UV islands, just like objects."
      ]
    },
    {
      "heading": "Unwrap the mesh",
      "steps": [
        "In Edit Mode select all (A) and press U ‣ Unwrap. Blender flattens the mesh using its seams.",
        "Without seams, Unwrap may give a strange result, so add seams first for clean results."
      ]
    },
    {
      "heading": "Smart UV Project and Project From View",
      "steps": [
        "U ‣ Smart UV Project cuts the mesh automatically by angle. It is fast and good for hard objects and props.",
        "U ‣ Project From View projects the UVs exactly as you see the object in the viewport, which is handy for flat surfaces."
      ]
    },
    {
      "heading": "Add seams to a cube",
      "steps": [
        "Seams are edges where the surface is cut open, like the folds of a cardboard box.",
        "Select edges and press Ctrl + E ‣ Mark Seam. They turn red.",
        "Mark seams so the cube can unfold flat, then press U ‣ Unwrap. You get a cross-shaped layout."
      ]
    },
    {
      "heading": "Add seams to a cylinder",
      "steps": [
        "Mark one vertical seam down the side, plus seams around the top and bottom caps.",
        "Unwrap: the side becomes a long rectangle and the caps become two circles.",
        "Hide seams in places viewers will not notice, such as the back or underneath."
      ]
    },
    {
      "heading": "Separate faces in the UV Editor",
      "steps": [
        "Sometimes you want to move faces away from their island. Select them in the UV Editor and separate them so they can move on their own.",
        "Then pack the islands again with UV ‣ Pack Islands."
      ]
    },
    {
      "heading": "Apply the object's scale",
      "steps": [
        "If the object was scaled in Object Mode, unwrapping can look stretched.",
        "Use Object ‣ Apply ‣ Scale first, then unwrap again."
      ],
      "tip": "Always check the UV Grid texture after unwrapping: squares should look square everywhere."
    }
  ]
};
