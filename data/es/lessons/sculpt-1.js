// Cuerpo de la lección sculpt-1. Solo lo carga es/lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["sculpt-1"] = {
  "overview": "Esculpir se parece a trabajar con arcilla digital. En esta guía aprenderás a entrar en Sculpt Mode, a preparar una tableta o un ratón y a dominar los pinceles fundamentales: Draw, Clay Strips, Grab, Snake Hook, Crease, Inflate y Smooth, modelando formas orgánicas paso a paso.",
  "summary": [
    "<span class=\"unverified\" title=\"No confirmado todavía en el mapa de teclas del manual de Blender 5.2\">F cambia el radio del pincel; Shift + F cambia su fuerza.</span>",
    "<span class=\"unverified\" title=\"No confirmado todavía en el mapa de teclas del manual de Blender 5.2\">Mantén Ctrl mientras pintas para invertir el efecto del pincel (por ejemplo, Draw excava en lugar de levantar).</span>",
    "<span class=\"unverified\" title=\"No confirmado todavía en el mapa de teclas del manual de Blender 5.2\">Mantén Shift en cualquier momento para cambiar temporalmente al pincel Smooth.</span>",
    "Clay Strips es el pincel ideal para encajar los volúmenes principales y secundarios.",
    "Snake Hook es esencial para estirar cuernos, orejas, dedos y formas largas rápidamente."
  ],
  "troubleshooting": [
    {
      "problem": "¡Arrastro el pincel sobre el cubo por defecto y no pasa NADA!",
      "cause": "Un cubo estándar solo tiene 8 vértices, y los pinceles necesitan vértices que desplazar.",
      "solution": "<span class=\"unverified\" title=\"No confirmado todavía en el mapa de teclas del manual de Blender 5.2\">Pulsa Ctrl + 3 para añadir un modificador Subdivision Surface y aplícalo, O usa el Voxel Remesher (Ctrl + R en Sculpt Mode con un tamaño de vóxel pequeño) para dar a la malla millones de vértices editables.</span>"
    },
    {
      "problem": "Mi trazo de escultura se ve dentado, pixelado y con facetas.",
      "cause": "La resolución de la malla es demasiado baja, o el detalle de Dyntopo es demasiado grueso.",
      "solution": "<span class=\"unverified\" title=\"No confirmado todavía en el mapa de teclas del manual de Blender 5.2\">Reduce el tamaño de Voxel Remesh (por ejemplo, de 0,1 m a 0,02 m) y pulsa Ctrl + R, o activa Dyntopo con un detalle relativo de unos 8 px.</span>"
    },
    {
      "problem": "La sensibilidad a la presión del lápiz no cambia el tamaño ni la fuerza del pincel.",
      "cause": "El icono de presión junto a Radius y Strength, en la cabecera, está desactivado.",
      "solution": "Haz clic en el pequeño icono de lápiz con círculos concéntricos junto a los controles Radius y Strength."
    }
  ],
  "tutorial": [
    {
      "heading": "Prepárate para esculpir",
      "steps": [
        "Cambia a la pestaña de workspace Sculpting. Abre Sculpt Mode con los pinceles a la izquierda.",
        "Si usas una tableta, la presión del lápiz controla la fuerza o el tamaño. Actívala con los iconos de lápiz junto a Radius y Strength, en la cabecera.",
        "Con ratón también se puede; solo es más lento."
      ]
    },
    {
      "heading": "Consigue suficiente geometría",
      "steps": [
        "Los pinceles empujan vértices, así que una malla low poly (como el cubo por defecto) no se esculpe bien.",
        "Usa Remesh en la cabecera: pon un Voxel Size (más pequeño = más detalle) y haz clic en Remesh. Reconstruye la malla con densidad uniforme.",
        "Empieza con un tamaño medio para las formas grandes y redúcelo después para el detalle."
      ]
    },
    {
      "heading": "Controles del pincel",
      "steps": [
        "Pulsa F y mueve el ratón para cambiar el radio. Pulsa Shift + F para cambiar la fuerza.",
        "Mantén Ctrl mientras esculpes para invertir el pincel, por ejemplo excavar en vez de añadir.",
        "Mantén Shift para suavizar momentáneamente con cualquier pincel.",
        "Activa la simetría (el botón X de la cabecera) para esculpir los dos lados de una cara a la vez."
      ]
    },
    {
      "heading": "Los pinceles principales",
      "steps": [
        "Draw: añade o excava trazos sencillos.",
        "Clay Strips: añade capas planas de arcilla, ideal para encajar formas.",
        "Grab: arrastra zonas grandes, perfecto para cambiar proporciones.",
        "Snake Hook: estira cuernos, orejas y pinchos.",
        "Inflate: hincha zonas, como mejillas o narices.",
        "Crease: crea pliegues y arrugas marcados. Smooth: suaviza bultos."
      ]
    },
    {
      "heading": "Encaja una cabeza",
      "steps": [
        "Empieza con una esfera y usa Grab para dar forma al cráneo, la mandíbula y la frente.",
        "Usa Clay Strips para añadir mejillas, nariz y cejas.",
        "Estira orejas o cuernos con Snake Hook. Para un goblin, exagera: orejas grandes, nariz larga y ojos hundidos."
      ]
    },
    {
      "heading": "Refina y detalla",
      "steps": [
        "Vuelve a hacer Remesh con un vóxel más pequeño cuando necesites más detalle.",
        "Usa Crease para arrugas y líneas alrededor de ojos y boca.",
        "Suaviza las zonas abultadas y revisa el modelo desde todos los lados."
      ],
      "tip": "Guarda a menudo, y guarda versiones antes de remallados grandes."
    }
  ]
};
