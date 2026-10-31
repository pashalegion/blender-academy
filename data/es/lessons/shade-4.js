// Cuerpo de la lección shade-4. Solo lo carga es/lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["shade-4"] = {
  "overview": "Texture Paint Mode te permite pintar directamente sobre un modelo 3D, como si decoraras una miniatura. Es ideal para trabajos estilizados y low poly. Blender usa tu mapa UV para pasar cada trazo a una imagen, así que primero debes desplegar el modelo.",
  "summary": [
    "Despliega primero el modelo: la pintura se escribe en una imagen a través del mapa UV.",
    "Usa el workspace Texture Paint, que muestra el Image Editor y la vista 3D a la vez.",
    "Añade una ranura de textura para crear la imagen en la que pintas, normalmente empezando por Base Color.",
    "Puedes pintar en la vista 3D o directamente sobre la imagen plana en el Image Editor.",
    "Guarda la imagen pintada. Las imágenes son independientes de la malla y no se conservan solo por guardar la escena."
  ],
  "troubleshooting": [
    {
      "problem": "Blender dice que faltan texturas, o mi pincel no pinta nada.",
      "cause": "El material no tiene imagen sobre la que pintar, o la malla no tiene mapa UV.",
      "solution": "Despliega la malla y añade una ranura de textura Base Color en los ajustes de la herramienta."
    },
    {
      "problem": "Mi pintura ha desaparecido al volver a abrir el archivo.",
      "cause": "La imagen nueva no se guardó ni se empaquetó en el archivo .blend.",
      "solution": "Usa Image ‣ Save en el Image Editor, o empaqueta la imagen en el archivo, antes de cerrar Blender."
    },
    {
      "problem": "La pintura aparece en el sitio equivocado o en varias zonas a la vez.",
      "cause": "Las islas UV se solapan, así que varias zonas usan la misma parte de la imagen.",
      "solution": "Despliega de nuevo para que no se solapen. Las UV reflejadas o apiladas comparten pintura a propósito, así que déjalas si eso es lo que quieres."
    }
  ]
};
