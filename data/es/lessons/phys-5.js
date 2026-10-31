// Cuerpo de la lección phys-5. Solo lo carga es/lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["phys-5"] = {
  "overview": "Las partículas son grandes cantidades de elementos emitidos desde una malla, normalmente miles. Pueden ser polvo, chispas o efectos mágicos, o copias de un objeto repartidas por una superficie. Reaccionan a la gravedad, los campos de fuerza y las colisiones.",
  "summary": [
    "Añade un sistema de partículas en la pestaña Particle Properties de una malla.",
    "Emission define cuántas partículas aparecen, cuándo empiezan y cuánto duran.",
    "Velocity controla cómo salen del emisor, y Physics cómo se mueven.",
    "En el panel Render puedes mostrar las partículas como cualquier objeto o colección.",
    "Los campos de fuerza, como viento y turbulencia, dan forma al movimiento, y hornear lo hace fiable."
  ],
  "troubleshooting": [
    {
      "problem": "No pasa nada en la vista.",
      "cause": "Las partículas se crean durante la reproducción desde el fotograma inicial.",
      "solution": "Reproduce desde el primer fotograma y revisa Frame Start y End en Emission."
    },
    {
      "problem": "El emisor desaparece o se sigue viendo en el render.",
      "cause": "Show Emitter, en el panel Render, controla si es visible.",
      "solution": "Activa o desactiva Show Emitter según lo que necesite tu plano."
    },
    {
      "problem": "La simulación cambia cada vez o se ve mal al saltar de fotograma.",
      "cause": "El movimiento de las partículas depende de los fotogramas anteriores.",
      "solution": "Reprodúcela desde el principio y hornéala en el panel Cache."
    }
  ]
};
