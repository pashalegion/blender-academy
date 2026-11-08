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
  ],
  "tutorial": [
    {
      "heading": "Capas de animación",
      "steps": [
        "El editor NLA (Nonlinear Animation) permite apilar y mezclar animaciones completas, como capas de un editor de imágenes.",
        "Por ejemplo, combina un paseo con un saludo del brazo por separado."
      ]
    },
    {
      "heading": "Acciones y tiras",
      "steps": [
        "Una acción es un fragmento de animación con nombre, como walk o jump.",
        "En el editor NLA, pulsa Push Down junto a una acción para convertirla en una tira de una pista. Luego puedes empezar otra acción encima."
      ]
    },
    {
      "heading": "Úsalo",
      "steps": [
        "Abre el editor NLA (cambia el Editor Type de un área). Cada objeto tiene pistas.",
        "Mueve, duplica y escala tiras para cambiar el tiempo o repetirlas.",
        "Pulsa Tab sobre una tira para entrar en tweak mode y editar sus keyframes; vuelve a pulsar Tab para salir."
      ]
    },
    {
      "heading": "Hold",
      "steps": [
        "Extrapolation de una tira decide qué pasa antes y después de ella. Hold mantiene la primera o la última pose para siempre.",
        "Ponla en Nothing en las capas superiores para que no tapen todo después de terminar."
      ]
    },
    {
      "heading": "Replace y Combine",
      "steps": [
        "Blending define cómo se mezcla una tira con las de debajo. Replace las sustituye.",
        "Combine suma el movimiento a lo que hay debajo; es ideal para pequeños cambios, como girar la cabeza durante un paseo."
      ]
    },
    {
      "heading": "Control de la mezcla",
      "steps": [
        "Influence define cuánto afecta una tira al resultado. Anímala para que una capa aparezca y desaparezca.",
        "Blend In y Blend Out suavizan el principio y el final de una tira."
      ]
    },
    {
      "heading": "Opciones del panel de tiras",
      "steps": [
        "La barra lateral (N) muestra los ajustes de la tira, como Repeat, Playback Scale y Reversed.",
        "Repeat crea un ciclo, por ejemplo un ciclo de paseo repetido varias veces."
      ]
    },
    {
      "heading": "Modificadores y horneado",
      "steps": [
        "Las tiras pueden tener modificadores de F-curve, como Noise, para dar más variación.",
        "Bake Action une las capas en una acción nueva cuando termines."
      ]
    },
    {
      "heading": "Ejemplo: ciclo de paseo con capas",
      "steps": [
        "Anima un ciclo de paseo y haz Push Down. Ajusta Repeat para que camine durante todo el plano.",
        "Añade una capa nueva en Combine para sumar un saludo o un giro de cabeza sin tocar el paseo."
      ]
    }
  ]
};
