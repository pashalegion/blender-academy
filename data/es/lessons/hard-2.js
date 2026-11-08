// Cuerpo de la lección hard-2. Solo lo carga es/lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["hard-2"] = {
  "overview": "El modelado hard surface (armas, robots, vehículos, objetos de ciencia ficción) se basa en cortes industriales limpios y brillos definidos. En esta lección dominarás los booleanos no destructivos (Difference, Union, Intersect), entenderás la diferencia entre los solvers Exact y Fast, y aprenderás a combinar booleanos con los modificadores Bevel y Weighted Normal para lograr biseles limpios.",
  "summary": [
    "<span class=\"unverified\" title=\"El estado de BoolTool en Blender 5.2 no está confirmado\">Activa el complemento 'BoolTool' para usar booleanos con atajos.</span> Consulta su estado en la página de complementos.",
    "<span class=\"unverified\" title=\"El estado de BoolTool en Blender 5.2 no está confirmado; atajos sin verificar\">Atajos de BoolTool:</span> selecciona el cortador y luego el objeto -> Ctrl + Shift + '-' para Difference, Ctrl + Shift + '+' para Union.",
    "El modificador Weighted Normal corrige los degradados de sombreado en grandes superficies planas con cortes complejos.",
    "Coloca siempre el modificador Bevel DESPUÉS del modificador Boolean en la pila.",
    "Cambia el solver de Boolean entre 'Exact' (preciso, resuelve caras coplanares) y 'Fast' (rendimiento rápido)."
  ],
  "troubleshooting": [
    {
      "problem": "¡El modificador Boolean falló y ha hecho desaparecer todo el objeto!",
      "cause": "El cortador o el objeto tienen geometría non-manifold, normales invertidas o caras coplanares superpuestas.",
      "solution": "Cambia el solver de 'Exact' a 'Fast' (o al revés). Revisa las normales de ambos objetos (Shift + N) y elimina los vértices duplicados (M -> By Distance)."
    },
    {
      "problem": "El modificador Bevel hace que la geometría explote y se cruce en las esquinas.",
      "cause": "El ancho del bisel es mayor que el espacio de las aristas contiguas, o 'Clamp Overlap' está desactivado.",
      "solution": "Activa 'Clamp Overlap' en el modificador Bevel para evitar que los vértices se crucen. Reduce el ancho del bisel."
    },
    {
      "problem": "El sombreado se ve ondulado y deformado alrededor de los agujeros booleanos.",
      "cause": "Blender conecta los vértices del corte de forma arbitraria y crea triángulos problemáticos.",
      "solution": "Añade un modificador 'Weighted Normal' al final de la pila y marca 'Keep Sharp'."
    }
  ],
  "tutorial": [
    {
      "heading": "Qué hacen los booleanos",
      "steps": [
        "Un booleano combina dos mallas. Añade un modificador Boolean al objeto principal y elige un objeto cortador.",
        "Difference recorta la forma del cortador. Union une las dos. Intersect conserva solo la parte común.",
        "Como es un modificador, puedes seguir moviendo y editando el cortador después."
      ]
    },
    {
      "heading": "Prepara un cortador",
      "steps": [
        "Añade una forma sencilla, como un cilindro para un agujero o un cubo para una ranura, y colócala atravesando el objeto principal.",
        "Selecciona el objeto principal, añade Generate ‣ Boolean, pon la operación en Difference y elige el cortador en el campo Object.",
        "En Object Properties ‣ Viewport Display del cortador, pon Display As en Wire para ver a través, y desactiva su render."
      ],
      "tip": "Guarda todos los cortadores en su propia colección para encontrarlos y ocultarlos fácilmente."
    },
    {
      "heading": "Solvers Exact y Fast",
      "steps": [
        "Exact es preciso y resuelve la mayoría de casos, incluidas caras superpuestas.",
        "Fast es más rápido en escenas pesadas, pero falla con más facilidad.",
        "Si un booleano deja agujeros o caras que faltan, prueba el otro solver y revisa las normales de ambos objetos (Shift + N en Edit Mode)."
      ]
    },
    {
      "heading": "Biseles limpios tras los booleanos",
      "steps": [
        "Añade un modificador Bevel debajo del Boolean para que también se biselen las aristas del corte.",
        "Pon Limit Method del Bevel en Angle para redondear solo las aristas vivas.",
        "Activa Clamp Overlap si el bisel se rompe en partes pequeñas."
      ]
    },
    {
      "heading": "Sombreado suave en hard surface",
      "steps": [
        "Haz clic derecho y usa Shade Smooth by Angle (o Shade Auto Smooth) para que lo plano siga plano y lo curvo suave.",
        "Añade un modificador Weighted Normal al final de la pila para limpiar el sombreado de las caras planas grandes alrededor de los cortes."
      ]
    },
    {
      "heading": "Construye formas complejas paso a paso",
      "steps": [
        "Apila varios modificadores Boolean, uno por cortador, para hacer paneles, rejillas y agujeros.",
        "Usa Union para añadir piezas y Difference para quitarlas.",
        "Aplica los booleanos solo cuando el diseño sea definitivo, porque mantenerlos activos lo deja todo editable."
      ]
    }
  ]
};
