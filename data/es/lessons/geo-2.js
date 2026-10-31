// Cuerpo de la lección geo-2. Solo lo carga es/lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["geo-2"] = {
  "overview": "¡Deja de modelar cables y cuerdas a mano! Aprende a crear un generador procedural de cables con Geometry Nodes. Dibujarás curvas en la vista y Blender las convertirá automáticamente en cables con grosor ajustable desde el panel del modificador.",
  "summary": [
    "Nodo Curve to Mesh: convierte curvas matemáticas en geometría tubular 3D.",
    "Curve Circle: conéctalo a 'Profile Curve' de 'Curve to Mesh' para definir el radio y la resolución del tubo.",
    "Exponer parámetros: arrastra sockets a huecos vacíos de Group Input para crear controles en el modificador.",
    "Resample Curve: controla la densidad de puntos para que la curva se deforme limpiamente.",
    "Set Curve Radius: permite estrechar el cable de forma procedural desde una base gruesa hasta una punta fina."
  ],
  "troubleshooting": [
    {
      "problem": "¡El nodo 'Curve to Mesh' no genera geometría visible!",
      "cause": "La entrada 'Profile Curve' está vacía.",
      "solution": "Añade un nodo 'Curve Circle' (o 'Curve Line') y conecta su salida Curve a 'Profile Curve' en 'Curve to Mesh'."
    },
    {
      "problem": "Los cables parecen palos doblados en lugar de arcos suaves.",
      "cause": "La curva no tiene suficientes puntos.",
      "solution": "Añade un nodo 'Resample Curve' justo antes de 'Curve to Mesh' y ajusta Count a 32 o Length a 0,05 m."
    },
    {
      "problem": "¿Cómo cambio el grosor del cable desde el panel Modifier sin abrir los nodos?",
      "cause": "El radio está fijo dentro del árbol de nodos.",
      "solution": "Arrastra una conexión desde la entrada 'Radius' de Curve Circle hasta un hueco libre del nodo 'Group Input'. Aparecerá como control en la pestaña Modifier."
    }
  ]
};
