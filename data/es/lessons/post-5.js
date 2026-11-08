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
  ],
  "tutorial": [
    {
      "heading": "Prepara el vídeo",
      "steps": [
        "Usa un vídeo con detalles fáciles de seguir (esquinas, marcas, textura) y sin demasiado desenfoque de movimiento.",
        "Abre un archivo nuevo y cambia al workspace Motion Tracking (File ‣ New ‣ VFX ‣ Motion Tracking)."
      ]
    },
    {
      "heading": "Carga el clip y ajústalo",
      "steps": [
        "Pulsa Open en el Movie Clip Editor y elige tu vídeo.",
        "Pulsa Set Scene Frames para que la escena dure lo mismo que el clip.",
        "Precarga los fotogramas (P) para que la reproducción y el seguimiento vayan rápidos."
      ]
    },
    {
      "heading": "Coloca marcadores",
      "steps": [
        "Pulsa Detect Features para colocar marcadores automáticamente, o Ctrl + clic para ponerlos tú en puntos claros.",
        "Reparte marcadores por toda la imagen, en primer plano y al fondo. Necesitas al menos 8 que duren mucho tiempo."
      ]
    },
    {
      "heading": "Sigue los marcadores",
      "steps": [
        "Haz el seguimiento hacia delante por el clip (Ctrl + T, o los botones del panel Track).",
        "Vigila los marcadores que resbalan de su punto. Bórralos o corrígelos, y añade otros donde terminen las pistas."
      ]
    },
    {
      "heading": "Resuelve la cámara",
      "steps": [
        "En el panel Solve, elige fotogramas clave con mucho movimiento de cámara y pulsa Solve Camera Motion.",
        "Mira el error de solución en la cabecera. Cuanto más bajo, mejor; por debajo de 0,3 es muy bueno.",
        "Si es alto, quita las peores pistas (Clean Up) y resuelve otra vez."
      ]
    },
    {
      "heading": "Prepara la escena 3D",
      "steps": [
        "Pulsa Setup Tracking Scene. Blender crea una cámara igual que la real y un fondo con el vídeo.",
        "Selecciona tres marcadores del suelo y pulsa Floor para definir el suelo. Usa Set Origin y Set Scale para la posición y el tamaño."
      ]
    },
    {
      "heading": "Añade objetos 3D",
      "steps": [
        "Añade tu objeto 3D donde deba estar en la escena.",
        "Añade un plano debajo como Shadow Catcher (Object Properties ‣ Visibility) para que su sombra aparezca en el suelo real.",
        "Renderiza con Cycles y compáralo con el vídeo original."
      ]
    }
  ]
};
