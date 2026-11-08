// Lesson body for light-1. Loaded only by lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["light-1"] = {
  "overview": "Cycles is Blender's path tracer, while Eevee is its real-time render engine. Learn when to pick each engine and how to optimize render settings for speed and quality. In Blender 5.2, the engine is named Eevee in the interface; older videos may call it Eevee Next.",
  "summary": [
    "Switch Render Engine in Render Properties: Cycles for photorealism, EEVEE for instant real-time speed.",
    "In Cycles, enable GPU Compute in Render Properties and configure CUDA / OptiX / HIP in System Preferences.",
    "Enable Denoising: Use OptiX (NVIDIA) or OpenImageDenoise (CPU/AMD) to clean up noise with low sample counts (e.g. 128-256 samples).",
    "Set Color Management: Change 'View Transform' from Standard to 'AgX' (or Filmic) with 'High Contrast' for cinematic dynamic range.",
    "Press F12 to render the final frame, and Ctrl + F12 to render an animation sequence."
  ],
  "troubleshooting": [
    {
      "problem": "Cycles render is taking 30 minutes per frame and my computer fan is screaming!",
      "cause": "Render samples are set unnecessarily high (e.g. 4096) or rendering on CPU instead of GPU.",
      "solution": "In Edit -> Preferences -> System, select your GPU under OptiX or CUDA. In Render Properties, set Max Samples to 256 or 512, and turn on 'Denoise'."
    },
    {
      "problem": "My render window renders nothing but a grey void or solid black image.",
      "cause": "Camera object is missing, disabled in render (camera icon in outliner), or there are no lights in the scene.",
      "solution": "Check the top-right Outliner: ensure your Camera icon is enabled. Press Numpad 0 to see what the active camera sees. Add a light source."
    },
    {
      "problem": "Bright highlights look flat, washed out, and have zero color vibrancy.",
      "cause": "View Transform is set to 'Standard', which clips high-dynamic-range highlights to pure white.",
      "solution": "Go to Render Properties -> Color Management and choose a view transform such as AgX. Follow the linked Blender 5.2 manual for current names and controls."
    }
  ],
  "tutorial": [
    {
      "heading": "Two render engines",
      "steps": [
        "Blender has two main render engines: Cycles and Eevee.",
        "Cycles is a path tracer: it follows light rays to get realistic light, shadows and reflections, but takes longer.",
        "Eevee is real-time: it is very fast and good for previews, animation and stylized looks, but it uses shortcuts that are less accurate."
      ]
    },
    {
      "heading": "Switch engine",
      "steps": [
        "Open Render Properties (the camera-back icon) and change Render Engine.",
        "Press Z ‣ Rendered in the viewport to preview the result live."
      ]
    },
    {
      "heading": "Compare them on the same scene",
      "steps": [
        "Render the same scene in both engines and compare light bouncing, soft shadows, glass and reflections.",
        "Newer Eevee (shown as Eevee Next in some older videos) adds ray tracing options and better shadows, so the gap is smaller than it used to be."
      ]
    },
    {
      "heading": "When to use which",
      "steps": [
        "Use Cycles for realistic stills, product shots and anything with glass or complex light.",
        "Use Eevee for fast previews, motion graphics, stylized looks and long animations on weaker computers.",
        "Many artists set up the scene in Eevee and do the final render in Cycles."
      ],
      "tip": "In Cycles, use the GPU if you have a supported one: Edit ‣ Preferences ‣ System ‣ Cycles Render Devices."
    }
  ]
};
