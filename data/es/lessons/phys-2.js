// Cuerpo de la lección phys-2. Solo lo carga es/lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["phys-2"] = {
  "overview": "Crear a mano pliegues, arrugas, sábanas y cojines realistas es muy laborioso. ¡El simulador de tela de Blender y el pincel Cloth hacen el trabajo pesado! Aprende a dejar caer un mantel sobre una mesa, a inflar cojines con Pressure, a activar las autocolisiones y a fijar vértices de la tela.",
  "summary": [
    "La tela necesita aristas repartidas para plegarse bien: subdivide el plano antes de añadir la física Cloth (Edge → Subdivide en Edit Mode; Number of Cuts define los cortes por arista).",
    "Añade la física 'Collision' a los muebles o mesas con los que deba interactuar la tela.",
    "Activa 'Self Collisions' en Cloth, dentro de Collisions, para que la tela no se atraviese a sí misma.",
    "Pressure: en los ajustes de Cloth, activa 'Pressure' (>1,0) en una malla cerrada, como un cubo, para inflarla como un cojín.",
    "Pincel Cloth en Sculpt Mode: arrastra e infla arrugas realistas a mano en tiempo real."
  ],
  "troubleshooting": [
    {
      "problem": "¡Mi tela explota en picos caóticos en cuanto pulso la barra espaciadora!",
      "cause": "La escala de la tela no está aplicada, o la distancia de colisión es mayor que la distancia entre vértices.",
      "solution": "<span class=\"unverified\" title=\"No confirmado en la página de Cloth del manual de Blender 5.2\">Aplica la escala (Ctrl + A -> Scale). En Cloth, dentro de Collisions, reduce 'Distance' de 0,015 m a 0,002 m. Reduce también la distancia de colisión en el obstáculo.</span>"
    },
    {
      "problem": "La tela atraviesa la mesa como si no existiera.",
      "cause": "La mesa no tiene activada la física 'Collision'.",
      "solution": "Selecciona la mesa -> Physics Properties -> haz clic en el botón 'Collision'."
    },
    {
      "problem": "La simulación parece cartón rígido en vez de seda suave.",
      "cause": "La densidad de vértices es baja o la rigidez de doblado es demasiado alta.",
      "solution": "<span class=\"unverified\" title=\"No confirmado en la página de Cloth del manual de Blender 5.2\">Subdivide el plano con más bucles. En los ajustes de Cloth, elige el preset 'Silk' o 'Cotton' en el menú superior.</span>"
    }
  ],
  "tutorial": [
    {
      "heading": "Introducción",
      "steps": [
        "La física de tela hace que una malla se comporte como un tejido: cae, se pliega y se apoya sobre los objetos.",
        "Usos típicos: manteles, banderas, cortinas, cojines y ropa."
      ]
    },
    {
      "heading": "Añade geometría",
      "steps": [
        "La tela necesita suficientes vértices para plegarse. Añade un plano y, en Edit Mode, subdivídelo (clic derecho ‣ Subdivide, con unos 20–30 cortes), o añade un Subdivision Surface antes de la tela.",
        "Aplica la escala del objeto (Object ‣ Apply ‣ Scale)."
      ]
    },
    {
      "heading": "Configura la física de tela",
      "steps": [
        "Selecciona la tela y abre Physics Properties. Pulsa Cloth.",
        "Pulsa Space para reproducir: la tela cae por la gravedad."
      ]
    },
    {
      "heading": "Ajustes y autocolisión",
      "steps": [
        "Los presets de arriba (como Cotton o Silk) dan valores de partida rápidos.",
        "Quality Steps hace la simulación más precisa pero más lenta.",
        "Activa Self Collisions para que el tejido no se atraviese a sí mismo al plegarse."
      ]
    },
    {
      "heading": "Colisiones con la escena",
      "steps": [
        "Selecciona los objetos sobre los que debe caer la tela (una mesa, una silla) y añádeles la física Collision.",
        "La distancia de colisión controla lo cerca que queda la tela de la superficie."
      ]
    },
    {
      "heading": "Problemas frecuentes",
      "steps": [
        "Si la tela atraviesa objetos, sube Quality Steps o haz los objetos más gruesos.",
        "Si explota o tiembla, aplica la escala y revisa que no haya geometría superpuesta.",
        "Hornea la simulación en el panel Cache de la tela cuando se vea bien."
      ],
      "tip": "Fija partes de la tela con un grupo de vértices como Pin Group, por ejemplo la parte de arriba de una cortina."
    },
    {
      "heading": "Para terminar",
      "steps": [
        "Tras la simulación, puedes aplicarla en un buen fotograma para conservar la forma, o dejarla animada.",
        "Añade Subdivision Surface y Solidify después del modificador Cloth para una tela más suave y gruesa."
      ]
    }
  ]
};
