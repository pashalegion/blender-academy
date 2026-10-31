// Cuerpo de la lección post-5. Solo lo carga es/lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["post-5"] = {
  "overview": "El motion tracking estudia tu vídeo para averiguar cómo se movió la cámara real. Después, Blender crea una cámara 3D equivalente para que lo que añadas parezca fijo en la escena filmada. Se hace en el Movie Clip Editor en tres etapas: seguimiento 2D, calibración de la cámara y resolución.",
  "summary": [
    "Carga tu vídeo en el Movie Clip Editor y usa el modo Tracking.",
    "Usa Detect Features para colocar marcadores y haz su seguimiento por todo el plano.",
    "Elimina los marcadores que resbalen o se desvíen, porque empeoran la calidad de la solución.",
    "Introduce los datos reales de la cámara si los conoces, como la distancia focal.",
    "Resuelve la cámara y usa Setup Tracking Scene para crear la escena 3D."
  ],
  "troubleshooting": [
    {
      "problem": "El error de solución es alto, o el objeto 3D resbala.",
      "cause": "Hay marcadores malos o demasiado pocos y confunden al solver.",
      "solution": "Borra las pistas con más error, añade otras más estables y resuelve de nuevo."
    },
    {
      "problem": "Los marcadores se pierden a mitad del plano.",
      "cause": "El desenfoque de movimiento o el bajo contraste dificultan el seguimiento.",
      "solution": "Prueba mejores puntos o una zona de búsqueda mayor, y graba con una velocidad de obturación más alta si puedes."
    },
    {
      "problem": "La cámara resuelta está inclinada o tiene un tamaño incorrecto.",
      "cause": "La solución no sabe dónde está arriba ni el tamaño de la escena.",
      "solution": "Define el suelo, el origen y la escala con las herramientas de orientación."
    }
  ]
};
