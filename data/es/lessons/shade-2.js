// Cuerpo de la lección shade-2. Solo lo carga es/lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["shade-2"] = {
  "overview": "Desplegar UV es aplanar un modelo 3D en coordenadas 2D para que las texturas puedan envolverlo, igual que cuando desmontas una caja de cartón. En esta lección aprenderás dónde colocar costuras (Ctrl + E -> Mark Seam), cómo usar Smart UV Project y cómo mantener una densidad de texel constante para que las texturas no se estiren.",
  "summary": [
    "Selecciona las aristas donde irán las costuras (escóndelas en huecos naturales o zonas ocultas) -> Ctrl + E -> 'Mark Seam' (se vuelven rojas).",
    "En Edit Mode, pulsa 'A' para seleccionar todas las caras y después 'U' -> 'Unwrap'.",
    "Abre la ventana 'UV Editor' para ver las islas UV en 2D.",
    "Empaqueta las islas: en el UV Editor, haz clic en UV -> 'Pack Islands' para aprovechar al máximo la textura.",
    "Comprueba la deformación: en las superposiciones del UV Editor, activa 'Display Stretch' (azul = sin distorsión, verde o rojo = estirado)."
  ],
  "troubleshooting": [
    {
      "problem": "¡Mi despliegue UV está horriblemente deformado y estirado en una dirección!",
      "cause": "Olvidaste aplicar la escala del objeto antes de desplegar.",
      "solution": "Ve a Object Mode, pulsa Ctrl + A -> 'Apply Scale'. Vuelve a Edit Mode, pulsa 'A' y luego 'U' -> 'Unwrap'."
    },
    {
      "problem": "Dos partes de mi malla se solapan en el UV Editor.",
      "cause": "La malla no tiene suficientes costuras y la isla se pliega sobre sí misma.",
      "solution": "Añade otra costura en el pliegue. Vuelve a desplegar con 'U' -> 'Unwrap', y en el UV Editor pulsa UV -> 'Pack Islands'."
    },
    {
      "problem": "La textura se ve borrosa en una parte del modelo y nítida en otra.",
      "cause": "La densidad de texel es irregular: el tamaño de las islas UV no coincide con sus proporciones reales en 3D.",
      "solution": "En el UV Editor, selecciona todas las islas y haz clic en UV -> 'Average Island Scale', y luego en 'Pack Islands'."
    }
  ]
};
