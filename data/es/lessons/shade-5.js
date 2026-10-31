// Cuerpo de la lección shade-5. Solo lo carga es/lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["shade-5"] = {
  "overview": "Hornear (bake) guarda información en una imagen de textura. El uso clásico es pasar el detalle fino de un modelo pesado a un mapa de normales de un modelo ligero, y por eso los modelos de videojuegos parecen detallados y funcionan rápido. También permite convertir materiales procedurales en texturas para otros programas.",
  "summary": [
    "El horneado funciona con Cycles, en Render ‣ Bake, y usa tus ajustes de render.",
    "La malla low poly necesita un mapa UV y un material con una imagen en la que hornear.",
    "El nodo Image Texture activo es el destino del horneado, aunque no esté conectado a nada.",
    "Selected to Active hornea del objeto seleccionado al activo, así que selecciona primero la malla high poly y al final la low poly.",
    "Pon el nodo de imagen del mapa de normales en Non-Color y conéctalo mediante un nodo Normal Map."
  ],
  "troubleshooting": [
    {
      "problem": "El horneado ha terminado, pero la imagen está vacía o mal.",
      "cause": "El nodo Image Texture activo no era el que querías, o no había nada seleccionado en el shader.",
      "solution": "Haz clic en el nodo Image Texture correcto para activarlo y vuelve a hornear."
    },
    {
      "problem": "Mi mapa de normales tiene manchas negras o zonas vacías.",
      "cause": "Los rayos de la malla low poly no llegan a la superficie high poly.",
      "solution": "Alinea las dos mallas y aumenta Extrusion o Max Ray Distance en Selected to Active. Para más control, usa un objeto Cage."
    },
    {
      "problem": "La imagen se ve bien, pero el modelo tiene mal sombreado.",
      "cause": "Es probable que el mapa de normales se esté leyendo como color.",
      "solution": "Pon su Color Space en Non-Color y conéctalo mediante un nodo Normal Map."
    }
  ]
};
