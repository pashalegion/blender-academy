// Cuerpo de la lección hard-3. Solo lo carga es/lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["hard-3"] = {
  "overview": "Aprende a modelar con dimensiones arquitectónicas exactas, al milímetro. Configurarás las unidades de la escena (métricas o imperiales), dominarás el ajuste a vértices y aristas, usarás la herramienta Measure y construirás paredes, puertas y marcos modulares, útiles para visualización arquitectónica (ArchViz) y diseño de niveles.",
  "summary": [
    "Define las unidades en Scene Properties -> Units (Metric, Millimeters/Meters o Imperial/Feet).",
    "Mantén Ctrl mientras transformas para ajustar a incrementos de la cuadrícula.",
    "Menú de Snapping (Shift + Tab): alterna entre ajuste a Vertex, Edge, Face e Incremental.",
    "Ajusta Snap Target a 'Closest' o 'Center' según quieras que coincidan las esquinas.",
    "Usa el 3D Cursor (Shift + clic derecho) como punto de pivote temporal para alineaciones precisas."
  ],
  "troubleshooting": [
    {
      "problem": "Mi objeto salta bruscamente por la escena al moverlo.",
      "cause": "El ajuste está en 'Face Nearest' con 'Project Individual Elements' o la distancia de ajuste está mal configurada.",
      "solution": "Pon Snap Target en 'Vertex' y Snap With en 'Active' o 'Closest'. Desactiva 'Align Rotation to Target' salvo que quieras alinear las normales."
    },
    {
      "problem": "Las medidas en pantalla no coinciden con las dimensiones de la barra lateral Transform.",
      "cause": "La escala del objeto no está aplicada, así que las dimensiones se multiplican por ella.",
      "solution": "Pulsa Ctrl + A en Object Mode y selecciona 'Apply Scale'."
    },
    {
      "problem": "La cuadrícula desaparece al acercarme.",
      "cause": "Depende de los ajustes de recorte de la vista o de los límites de subdivisión de la cuadrícula.",
      "solution": "Abre el menú Overlays, arriba a la derecha, marca Grid y ajusta Subdivisions a 10."
    }
  ]
};
