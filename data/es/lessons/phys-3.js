// Cuerpo de la lección phys-3. Solo lo carga es/lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["phys-3"] = {
  "overview": "Las simulaciones de líquidos usan tres tipos de objeto: un Domain que contiene la simulación, un Flow que crea el líquido y Effectors con los que choca. Cuando entiendes esos papeles, puedes preparar vertidos, salpicaduras y recipientes que se llenan.",
  "summary": [
    "El Domain contiene toda la simulación. El fluido no puede salir de él, así que hazlo lo bastante grande.",
    "Un objeto Flow de tipo Liquid con comportamiento Inflow funciona como un grifo.",
    "Añade objetos Effector a todo aquello con lo que deba chocar el líquido, como un vaso.",
    "Resolution Divisions define el detalle. Los dominios grandes necesitan más divisiones.",
    "Hornea en el panel Cache del dominio y activa Mesh para que el líquido se renderice como superficie."
  ],
  "troubleshooting": [
    {
      "problem": "No pasa nada al pulsar play.",
      "cause": "Hay que hornear la simulación, o el tipo de dominio no es Liquid.",
      "solution": "Pon el tipo de dominio en Liquid y pulsa Bake en el panel Cache. Pulsa Esc para detener un horneado."
    },
    {
      "problem": "El líquido atraviesa mi vaso.",
      "cause": "El vaso no es un Effector, o sus paredes son demasiado finas para la resolución.",
      "solution": "Define el vaso como Effector, engrosa sus paredes y sube Resolution Divisions."
    },
    {
      "problem": "El líquido se ve como bloques o cuesta verlo.",
      "cause": "Ves una vista previa de baja resolución, y puede que el dominio no tenga malla.",
      "solution": "Activa Mesh en el dominio, añade un material al objeto de dominio y sube la resolución para el horneado final."
    }
  ],
  "tutorial": [
    {
      "heading": "Modela la escena",
      "steps": [
        "Haz un recipiente sencillo, como una taza o un vaso, y un objeto pequeño que hará de fuente de agua.",
        "Colócalos dentro de un cubo más grande: será el dominio."
      ]
    },
    {
      "heading": "Los tres objetos de fluido",
      "steps": [
        "Domain: la caja donde ocurre la simulación. El líquido no puede salir de ella.",
        "Flow: el objeto que crea (o elimina) líquido.",
        "Effector: un objeto con el que choca el líquido, como la taza."
      ]
    },
    {
      "heading": "Añade la física de fluidos",
      "steps": [
        "Selecciona cada objeto y abre Physics Properties ‣ Fluid.",
        "Pon el cubo grande como Domain, la fuente como Flow y la taza como Effector."
      ]
    },
    {
      "heading": "Cambia el tipo de simulación",
      "steps": [
        "En el dominio, pon Domain Type en Liquid. En el objeto Flow, pon Flow Type en Liquid."
      ]
    },
    {
      "heading": "Malla del fluido",
      "steps": [
        "Activa Mesh en los ajustes del dominio para que el líquido sea una superficie suave que se pueda renderizar.",
        "Dale al dominio un material de agua (por ejemplo Principled BSDF con Transmission)."
      ]
    },
    {
      "heading": "Comportamiento del flujo",
      "steps": [
        "Geometry convierte el propio objeto Flow en líquido una sola vez.",
        "Inflow añade líquido sin parar, como un grifo. Outflow lo elimina, como un desagüe."
      ]
    },
    {
      "heading": "Calidad de la simulación",
      "steps": [
        "Resolution Divisions define el detalle. Valores bajos son rápidos para probar; súbelos para el resultado final.",
        "Los dominios más grandes necesitan más divisiones."
      ]
    },
    {
      "heading": "Hornea la simulación",
      "steps": [
        "En el panel Cache del dominio, define el rango de fotogramas y pulsa Bake (o Bake All, según el tipo de caché).",
        "Pulsa Esc para detener un horneado. Libéralo antes de cambiar ajustes."
      ],
      "tip": "Fija (pin) el panel de física del dominio para poder hornear con otro objeto seleccionado."
    },
    {
      "heading": "Velocidad y cantidad",
      "steps": [
        "Time Scale, en el dominio, cambia la velocidad de la simulación.",
        "Agranda el objeto Flow o cambia cuándo emite para controlar cuánto líquido aparece."
      ]
    },
    {
      "heading": "Fuerzas y dirección",
      "steps": [
        "Usa Initial Velocity en el objeto Flow para lanzar el líquido en una dirección.",
        "Los campos de fuerza (Shift + A ‣ Force Field), como Wind, pueden empujar el líquido. La gravedad se cambia en Scene Properties.",
        "Los ajustes de viscosidad hacen el líquido más espeso, como la miel."
      ]
    }
  ]
};
