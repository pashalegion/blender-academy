// Cuerpo de la lección anim-5. Solo lo carga es/lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["anim-5"] = {
  "overview": "Las shape keys guardan versiones distintas de la misma malla y mezclan entre ellas. Son la forma estándar de animar expresiones faciales y bocas, y de corregir zonas problemáticas de un rig. Otros programas las llaman morph targets o blend shapes.",
  "summary": [
    "La clave Basis es la forma de reposo con la que se comparan las demás.",
    "Añade una clave en Object Data Properties ‣ Shape Keys y mueve vértices en Edit Mode para crear la forma nueva.",
    "El valor Value mezcla entre Basis (0) y la forma nueva (1).",
    "Usa claves Relative para formas que se combinan, como expresiones y poses correctivas.",
    "Pon keyframes en Value para animar una clave, y usa drivers para controlarla desde un rig."
  ],
  "troubleshooting": [
    {
      "problem": "Blender no me deja aplicar un modificador a mi malla.",
      "cause": "Por lo general, no se pueden aplicar modificadores a una malla con shape keys.",
      "solution": "Aplica los modificadores antes de crear las claves. Si no, déjalos sin aplicar hasta exportar."
    },
    {
      "problem": "Mis ediciones han cambiado todas las shape keys.",
      "cause": "Has editado Basis o la clave equivocada.",
      "solution": "Selecciona la clave correcta en la lista antes de entrar en Edit Mode, y comprueba que Basis no esté activa."
    },
    {
      "problem": "Una shape key mueve el lado equivocado de la cara.",
      "cause": "La forma no está separada ni reflejada.",
      "solution": "Usa un Vertex Group para limitar la clave a un lado, o la opción de espejo del menú Shape Keys para reflejarla."
    }
  ]
};
