// Cuerpo de la lección anim-6. Solo lo carga es/lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["anim-6"] = {
  "overview": "Blender no es solo 3D. Grease Pencil es un objeto con el que dibujas, trazo a trazo, dentro del espacio 3D. Sirve para animación 2D tradicional, animación recortada, motion graphics o storyboards. La plantilla 2D Animation te deja dibujar al instante.",
  "summary": [
    "File ‣ New ‣ 2D Animation abre una configuración preparada, con fondo blanco y capas Line y Fill.",
    "Para añadirlo a una escena, usa Add ‣ Grease Pencil ‣ Blank.",
    "Los trazos se crean en Draw Mode y necesitan un keyframe en la línea de tiempo, así que crea uno o activa Auto Key.",
    "Corrige los trazos después en Edit Mode o Sculpt Mode.",
    "Onion Skinning muestra los fotogramas cercanos con transparencia, lo que facilita dibujar un movimiento suave."
  ],
  "troubleshooting": [
    {
      "problem": "No aparece nada cuando dibujo.",
      "cause": "Dibujar necesita un keyframe en la capa activa en el fotograma actual.",
      "solution": "Crea un keyframe o activa Auto Key, y comprueba que la capa esté visible y desbloqueada."
    },
    {
      "problem": "Mi dibujo está en un ángulo extraño o cuesta verlo.",
      "cause": "Los trazos se colocan en el espacio 3D, así que la vista y el plano de dibujo importan.",
      "solution": "Usa la plantilla 2D Animation, que dibuja en el plano frontal (X-Z), y pulsa Numpad 1 para la vista frontal."
    },
    {
      "problem": "Mi dibujo nuevo se ha añadido a lo que tenía en ese fotograma.",
      "cause": "Sigues en el mismo keyframe, así que los trazos se añaden ahí.",
      "solution": "Pasa a otro fotograma con Auto Key activado, o añade un keyframe nuevo antes de dibujar."
    }
  ]
};
