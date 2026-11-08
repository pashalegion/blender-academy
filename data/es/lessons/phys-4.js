// Cuerpo de la lección phys-4. Solo lo carga es/lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["phys-4"] = {
  "overview": "El humo y el fuego usan el mismo sistema de fluidos que los líquidos, pero con el dominio en Gas. Un objeto Flow emite humo, fuego o ambos, y Blender lo simula dentro del dominio. Quick Smoke crea en un clic una configuración funcional que después puedes ajustar.",
  "summary": [
    "Usa Quick Smoke en el menú Object para crear dominio y flujo a la vez.",
    "Define Flow Type como Smoke, Fire + Smoke o Fire.",
    "Usa el comportamiento Inflow para una fuente constante, como la base de un fuego.",
    "Sube Resolution Divisions en el dominio para más detalle, y espera un horneado más largo.",
    "Oculta el objeto emisor en el render para que solo se vean el fuego y el humo."
  ],
  "troubleshooting": [
    {
      "problem": "Veo una caja en el render, o el humo parece sólido.",
      "cause": "Se está viendo el objeto de dominio, o hay que ajustar su material de volumen.",
      "solution": "Comprueba que el dominio tenga el material de volumen de Quick Smoke y ajusta Density y Blackbody."
    },
    {
      "problem": "El fuego tiene poco detalle y parece hecho de cubos.",
      "cause": "Resolution Divisions es demasiado bajo.",
      "solution": "Sube el valor y hornea de nuevo. Haz antes una prueba con un valor bajo, porque los tiempos aumentan rápido."
    },
    {
      "problem": "El humo se detiene en una pared invisible.",
      "cause": "Ha llegado al borde del dominio.",
      "solution": "Escala el dominio antes de hornear o activa la opción Adaptive Domain."
    }
  ],
  "tutorial": [
    {
      "heading": "Añade los objetos",
      "steps": [
        "Añade un objeto pequeño que será la fuente del fuego, como una esfera o un tronco.",
        "El fuego ocurre dentro de una caja de dominio, igual que las simulaciones de líquido."
      ]
    },
    {
      "heading": "Añade la física de fuego",
      "steps": [
        "Selecciona la fuente, abre Physics Properties ‣ Fluid y pon Type en Flow.",
        "Pon Flow Type en Fire, Smoke o Fire + Smoke."
      ]
    },
    {
      "heading": "Quick Smoke",
      "steps": [
        "La forma más rápida: selecciona la fuente y usa Object ‣ Quick Effects ‣ Quick Smoke.",
        "Crea el dominio y un material de volumen. Después pon Flow Type en Fire + Smoke para tener llamas."
      ]
    },
    {
      "heading": "Reproduce cada fotograma",
      "steps": [
        "En el menú Playback de la Timeline, pon Sync en Play Every Frame para que la vista previa no se salte fotogramas.",
        "La primera reproducción calcula la simulación y puede ir lenta."
      ]
    },
    {
      "heading": "Comportamiento y origen del flujo",
      "steps": [
        "Inflow emite sin parar, como un tronco ardiendo. Geometry emite solo una vez.",
        "Flow Source puede ser la malla, su superficie o partículas."
      ]
    },
    {
      "heading": "Densidad y combustible",
      "steps": [
        "Use Flow aumenta la cantidad de humo. Absolute Density fija la densidad en vez de sumarla.",
        "Fuel controla cuánto arde el fuego; más combustible da llamas más grandes."
      ]
    },
    {
      "heading": "Da forma al fuego",
      "steps": [
        "Usa un grupo de vértices para emitir solo desde una parte del objeto.",
        "Initial Velocity lanza el fuego en una dirección, y una textura en el flujo hace que el fuego se rompa de forma más natural."
      ]
    },
    {
      "heading": "Colisiones y ocultar la fuente",
      "steps": [
        "Añade la física Collision o Effector a los objetos que el humo debe rodear.",
        "Oculta el objeto Flow en el render para que solo se vea el fuego."
      ]
    },
    {
      "heading": "Ajustes del dominio",
      "steps": [
        "Resolution Divisions define el detalle. Súbelo para el resultado final y espera horneados más largos.",
        "Time Scale cambia la velocidad. Border Collisions decide qué paredes del dominio frenan el humo.",
        "Adaptive Domain encoge el dominio alrededor del humo para ahorrar tiempo."
      ]
    },
    {
      "heading": "Hornea y renderiza",
      "steps": [
        "Hornea en el panel Cache del dominio y renderiza. Cycles da el fuego más realista.",
        "Ajusta Density y la intensidad de Blackbody del material de volumen para afinar el aspecto."
      ]
    }
  ]
};
