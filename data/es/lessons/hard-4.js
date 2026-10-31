// Cuerpo de la lección hard-4. Solo lo carga es/lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["hard-4"] = {
  "overview": "Un modelo puede verse perfecto en pantalla y fallar en la impresora. Los modelos imprimibles necesitan tamaños reales, grosor sólido y una malla sin agujeros. Esta lección explica cómo preparar Blender para piezas precisas y exportar un archivo que tu laminador pueda usar.",
  "summary": [
    "Define las unidades de la escena antes de modelar y trabaja con medidas reales.",
    "Cada pared necesita grosor real. El modificador Solidify puede añadirlo a una capa fina.",
    "Busca agujeros y errores con Select ‣ Select All by Trait ‣ Non Manifold.",
    "El complemento gratuito 3D Print Toolbox, en Blender Extensions, añade comprobaciones pensadas para imprimir.",
    "Exporta con File ‣ Export ‣ STL y vuelve a comprobar el tamaño en tu laminador."
  ],
  "troubleshooting": [
    {
      "problem": "Mi impresión es 1000 veces demasiado grande o pequeña.",
      "cause": "Las unidades o la escala de exportación STL no coinciden con lo que espera el laminador.",
      "solution": "Revisa Unit Scale en Scene Properties y Scale en las opciones de exportación STL. Luego confirma el tamaño en el laminador."
    },
    {
      "problem": "El laminador indica errores o faltan paredes.",
      "cause": "La malla no es estanca o tiene caras solapadas por dentro.",
      "solution": "Usa la selección Non Manifold para encontrar el problema, arréglalo y une las partes solapadas con un Boolean."
    },
    {
      "problem": "Las partes finas desaparecen en el laminador.",
      "cause": "Las paredes son más finas de lo que puede fabricar la impresora.",
      "solution": "Engrósalas con Solidify o editando la malla, y consulta el grosor mínimo de pared de tu impresora."
    }
  ]
};
