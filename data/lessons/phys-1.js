// Lesson body for phys-1. Loaded only by lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["phys-1"] = {
  "overview": "Physics simulations make complex natural collisions effortless. In this lesson, you'll set up Rigid Body Active and Passive dynamics, create a chain reaction of toppling dominos and a wrecking ball smashing a brick wall, configure collision shapes (Convex Hull vs Mesh), and bake physics simulations into keyframes.",
  "summary": [
    "In Physics Properties: 'Active' objects are affected by gravity and forces; 'Passive' objects act as immovable static ground/obstacles.",
    "Collision Shape: 'Convex Hull' is fast and efficient for solid items; 'Mesh' is required for hollow bowls, cups, and complex shapes.",
    "Bake Simulation: Go to Scene Properties -> Rigid Body World -> Cache -> Click 'Bake' so simulations replay smoothly and reliably.",
    "Friction & Bounciness: Adjust surface resistance and bounce restitution in the physics settings.",
    "<span class=\"unverified\" title=\"Add-on status in Blender 5.2 is not confirmed\">Cell Fracture add-on: shatters a 3D object into many shards.</span>"
  ],
  "troubleshooting": [
    {
      "problem": "Objects pass straight through the floor and fall into infinity!",
      "cause": "The floor object is either set to 'Active' instead of 'Passive', or scale is unapplied.",
      "solution": "Select the floor object -> In Physics Properties, set Type to 'Passive'. Press Ctrl + A -> 'Apply Scale' on both the floor and falling objects."
    },
    {
      "problem": "Bricks start jittering and exploding before anything even hits them!",
      "cause": "Collision shapes are overlapping each other at frame 1, or collision margin is too thick.",
      "solution": "Reduce 'Collision Margin' to 0.001m. In Scene Properties -> Rigid Body World, increase 'Substeps Per Frame' from 10 to 30."
    },
    {
      "problem": "An object inside a bowl bounces off an invisible roof instead of landing inside.",
      "cause": "The bowl's collision shape is set to 'Convex Hull' which shrinkwraps over hollow openings.",
      "solution": "Change the Collision Shape from 'Convex Hull' to 'Mesh' in the bowl's Rigid Body settings."
    }
  ]
};
