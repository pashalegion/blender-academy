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
  ]
};
