// Lesson body for phys-2. Loaded only by lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["phys-2"] = {
  "overview": "Creating realistic folds, wrinkles, bedsheets, and plush sofa cushions by hand is notoriously tedious. Blender's Cloth Simulator and Cloth Brush do the heavy lifting for you! Learn how to drop a tablecloth over a table, use Pressure settings to inflate fluffy pillows instantly, enable self-collisions, and pin cloth vertices.",
  "summary": [
    "Cloth needs evenly spaced edges to fold well: add edge loops to the plane before adding Cloth physics (Edge → Subdivide in Edit Mode; Number of Cuts sets the cuts per edge).",
    "Add 'Collision' physics to any solid furniture or table the cloth should interact with.",
    "Enable 'Self Collisions' in the Cloth settings under Collisions to prevent the fabric from clipping through itself.",
    "Pressure: In Cloth physics settings, enable 'Pressure' (>1.0) on a closed mesh (like a cube) to inflate it into a plush cushion/balloon.",
    "Cloth Brush in Sculpt Mode: Drag, grab, and inflate realistic wrinkles manually in real time."
  ],
  "troubleshooting": [
    {
      "problem": "My cloth explodes into giant chaotic jagged spikes the moment I press spacebar!",
      "cause": "The cloth mesh scale was not applied, or collision distance is larger than the distance between vertices.",
      "solution": "<span class=\"unverified\" title=\"Not confirmed in the Blender 5.2 manual keymap yet (values not listed in the 5.2 Cloth page)\">Apply scale (Ctrl + A -> Scale). In Cloth settings under Collisions, reduce 'Distance' from 0.015m down to 0.002m. Also lower collision distance on the obstacle.</span>"
    },
    {
      "problem": "The cloth falls straight through the table as if the table wasn't there.",
      "cause": "The table does not have 'Collision' physics enabled.",
      "solution": "Select the table -> go to Physics Properties -> click the 'Collision' physics button."
    },
    {
      "problem": "Cloth simulation looks like stiff cardboard rather than soft silk.",
      "cause": "Vertex density is too low or Bending stiffness is set too high.",
      "solution": "<span class=\"unverified\" title=\"Not confirmed in the Blender 5.2 manual keymap yet (cloth presets not listed in the 5.2 Cloth page)\">Subdivide the cloth plane with more edge loops. In Cloth settings, choose the 'Silk' or 'Cotton' preset from the top dropdown.</span>"
    }
  ],
  "tutorial": [
    {
      "heading": "Overview",
      "steps": [
        "Cloth physics makes a mesh behave like fabric: it falls, folds and drapes over objects.",
        "Typical uses: tablecloths, flags, curtains, pillows and clothes."
      ]
    },
    {
      "heading": "Add geometry",
      "steps": [
        "Cloth needs enough vertices to fold. Add a plane and, in Edit Mode, subdivide it (right-click ‣ Subdivide, with about 20–30 cuts), or add a Subdivision Surface modifier before the cloth.",
        "Apply the object's scale (Object ‣ Apply ‣ Scale)."
      ]
    },
    {
      "heading": "Set up cloth physics",
      "steps": [
        "Select the cloth and open Physics Properties. Click Cloth.",
        "Press Space to play: the cloth falls with gravity."
      ]
    },
    {
      "heading": "Tweak settings and self-collision",
      "steps": [
        "Presets at the top (such as Cotton or Silk) give quick starting values.",
        "Quality Steps make the simulation more accurate but slower.",
        "Turn on Self Collisions so the fabric doesn't pass through itself when it folds."
      ]
    },
    {
      "heading": "Collisions with the scene",
      "steps": [
        "Select objects the cloth should land on (a table, a chair) and add Collision physics to them.",
        "Collision distance controls how close the cloth stays to the surface."
      ]
    },
    {
      "heading": "Fixing common issues",
      "steps": [
        "If the cloth passes through objects, raise Quality Steps, or make the objects thicker.",
        "If it explodes or jitters, apply scale and check for overlapping geometry.",
        "Bake the simulation in the cloth's Cache panel once it looks right."
      ],
      "tip": "Pin parts of the cloth in place with a vertex group set as the Pin Group, for example the top of a curtain."
    },
    {
      "heading": "Wrap-up",
      "steps": [
        "After the simulation, you can apply it at a good frame to keep the shape, or keep it animated.",
        "Add a Subdivision Surface and Solidify modifier after the Cloth modifier for smoother, thicker fabric."
      ]
    }
  ]
};
