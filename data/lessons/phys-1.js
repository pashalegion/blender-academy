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
  ],
  "tutorial": [
    {
      "heading": "Add rigid body physics",
      "steps": [
        "Select an object and open Physics Properties (the orbit icon). Click Rigid Body.",
        "Press Space to play the animation: the object falls with gravity."
      ]
    },
    {
      "heading": "Active and passive",
      "steps": [
        "Active objects are moved by the simulation: they fall, collide and bounce.",
        "Passive objects stay still but other objects collide with them. Make the floor Passive."
      ]
    },
    {
      "heading": "Animated objects",
      "steps": [
        "A passive object can still move by your own keyframes. Turn on Animated in its rigid body settings.",
        "Use this for a pusher, a moving platform, or a ball you throw into a tower."
      ]
    },
    {
      "heading": "Collision shape",
      "steps": [
        "Collision Shape sets the shape used for collisions. Box and Convex Hull are fast.",
        "Use Mesh for hollow or complex shapes, such as a bowl, so objects can fall inside."
      ]
    },
    {
      "heading": "Animation length",
      "steps": [
        "The simulation runs for the scene's frame range. Set the End frame in the Timeline if you need longer.",
        "Set the cache range too, in Scene Properties ‣ Rigid Body World ‣ Cache."
      ]
    },
    {
      "heading": "Bake the simulation",
      "steps": [
        "Simulations are calculated as you play. Baking saves the result so it plays smoothly and the same every time.",
        "Go to Scene Properties ‣ Rigid Body World ‣ Cache and click Bake. Free the bake before changing settings."
      ]
    },
    {
      "heading": "Gravity and speed",
      "steps": [
        "Change gravity in Scene Properties ‣ Gravity, for example for a moon scene.",
        "Rigid Body World ‣ Speed makes the whole simulation faster or slower."
      ]
    },
    {
      "heading": "Rigid body settings",
      "steps": [
        "Friction controls how much objects slide. Bounciness controls how much they bounce.",
        "Mass changes how heavy an object is compared with others. Heavy objects push light ones easily."
      ]
    },
    {
      "heading": "Copy settings and bake to keyframes",
      "steps": [
        "Set up one object, select the others and then that one, and use Object ‣ Rigid Body ‣ Copy from Active.",
        "Object ‣ Rigid Body ‣ Bake to Keyframes turns the simulation into normal keyframes you can edit."
      ]
    },
    {
      "heading": "Example: smash a tower",
      "steps": [
        "Build a tower of cubes (Active) on a Passive floor.",
        "Animate a sphere with keyframes and turn on Animated so it can hit the tower, then play or bake."
      ]
    }
  ]
};
