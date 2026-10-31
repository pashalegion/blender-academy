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
  ]
};
