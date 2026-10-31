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
  ]
};
