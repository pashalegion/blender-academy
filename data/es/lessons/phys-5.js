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
  ],
  "tutorial": [
    {
      "heading": "Añade un sistema de partículas",
      "steps": [
        "Selecciona una malla y abre Particle Properties (el icono de chispas). Pulsa + para añadir un sistema.",
        "Pulsa Space: las partículas salen de la superficie."
      ]
    },
    {
      "heading": "Emisión",
      "steps": [
        "Number define cuántas partículas aparecen. Frame Start y End definen cuándo se emiten.",
        "Lifetime define cuántos fotogramas vive cada partícula."
      ]
    },
    {
      "heading": "Origen y velocidad",
      "steps": [
        "Emit From elige caras, vértices o volumen.",
        "Velocity ‣ Normal empuja las partículas hacia fuera de la superficie. Object Velocity y Randomize añaden variedad."
      ]
    },
    {
      "heading": "Física",
      "steps": [
        "La física Newtonian da caídas y rebotes realistas. La masa y el tamaño importan.",
        "Fuerzas como Brownian añaden un temblor aleatorio, bueno para el polvo."
      ]
    },
    {
      "heading": "Rebote",
      "steps": [
        "Añade la física Collision a un objeto para que las partículas reboten en él."
      ]
    },
    {
      "heading": "Ajustes de render",
      "steps": [
        "Render As decide cómo se ven las partículas: Halo (puntos), Object o Collection.",
        "Con Object, elige una malla como una chispa o una hoja. Scale y Scale Randomness varían el tamaño.",
        "Los ajustes de rotación hacen que cada partícula gire o mire hacia su dirección."
      ]
    },
    {
      "heading": "Visualización en la vista",
      "steps": [
        "Muestra menos partículas en la vista (Viewport Display ‣ Amount) para que vaya rápido, y renderízalas todas."
      ]
    },
    {
      "heading": "Hijas y pesos de campo",
      "steps": [
        "Children crea partículas extra alrededor de cada una, para más detalle sin más simulación.",
        "Field Weights decide cuánto afectan la gravedad y los campos de fuerza a las partículas."
      ]
    },
    {
      "heading": "Campos de fuerza",
      "steps": [
        "Añade un campo de fuerza (Shift + A ‣ Force Field), como Wind o Turbulence, para empujar las partículas."
      ]
    },
    {
      "heading": "Dispersa objetos",
      "steps": [
        "Pon el sistema en tipo Hair con Render As Object para colocar copias fijas, como hierba, rocas o árboles, sobre una superficie."
      ]
    },
    {
      "heading": "Hornea",
      "steps": [
        "Hornea la simulación en el panel Cache para que se reproduzca siempre igual."
      ],
      "tip": "Las partículas de tipo Hair son la forma antigua de hacer pelo; la lección de pelo y pelaje muestra las curvas de pelo nuevas."
    }
  ]
};
