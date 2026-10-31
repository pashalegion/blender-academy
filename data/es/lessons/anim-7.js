// Cuerpo de la lección anim-7. Solo lo carga es/lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["anim-7"] = {
  "overview": "El editor de animación no lineal (NLA) te permite trabajar con animaciones completas en lugar de keyframes sueltos. Las pistas funcionan como capas de un editor de imágenes, así que puedes apilar un paseo y un saludo, mezclarlos o repetir un ciclo sin tocar las claves originales.",
  "summary": [
    "Las acciones son segmentos de animación con nombre y reutilizables, y las tiras (strips) son instancias de ellas.",
    "Push Down mueve la acción activa a una tira nueva en la pila.",
    "Las pistas superiores tienen prioridad sobre las inferiores, salvo que elijas mezclarlas.",
    "La barra lateral controla Blending, Influence, Extrapolation y Repeat de cada tira.",
    "Entra en tweak mode en una tira para editar los keyframes de su acción."
  ],
  "troubleshooting": [
    {
      "problem": "Una capa inferior ha dejado de reproducirse.",
      "cause": "Una tira superior está en Hold, así que sigue mandando al terminar.",
      "solution": "Cambia Extrapolation de esa tira en la barra lateral, por ejemplo a Nothing."
    },
    {
      "problem": "No veo mis keyframes después de usar Push Down.",
      "cause": "La acción se ha movido a una tira y ya no es la acción activa.",
      "solution": "Entra en tweak mode en la tira, o crea una acción nueva en la Action Track."
    },
    {
      "problem": "Una capa superior sustituye por completo la animación inferior.",
      "cause": "Blending de la tira está en Replace.",
      "solution": "Prueba Combine o Add, o baja Influence de la tira."
    }
  ]
};
