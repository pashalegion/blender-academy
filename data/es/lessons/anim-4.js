// Cuerpo de la lección anim-4. Solo lo carga es/lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["anim-4"] = {
  "overview": "Las restricciones (constraints) controlan automáticamente la posición, la rotación y la escala de un objeto. Pueden hacer que una cámara apunte a un personaje, unir una espada a una mano o llevar un tren por una vía sin poner keyframes en cada movimiento. También funcionan con huesos, por lo que son básicas en el rigging.",
  "summary": [
    "Añade restricciones con Add Object Constraint en el editor Properties.",
    "Se ejecutan de arriba abajo en la pila, así que su orden cambia el resultado.",
    "Cada una tiene un valor Influence que puedes animar con keyframes para activarla y desactivarla.",
    "Track To apunta un objeto a un objetivo. En otros programas se suele llamar Look At o Aim.",
    "Child Of actúa como un padre, pero su Influence se puede animar para cambiar de padre, por ejemplo cuando un personaje coge un objeto."
  ],
  "troubleshooting": [
    {
      "problem": "El objeto ha saltado a otro lugar al añadir Child Of.",
      "cause": "La restricción aplica la transformación del objetivo sobre la del objeto.",
      "solution": "Pulsa Set Inverse en la restricción para que el objeto se quede donde estaba."
    },
    {
      "problem": "Mi cámara apunta mal con Track To.",
      "cause": "Los ejes Track y Up no coinciden con la orientación del objeto.",
      "solution": "Cambia los ejes en la restricción. Las cámaras miran hacia su eje Z local negativo, así que usa -Z como eje de seguimiento e Y como arriba."
    },
    {
      "problem": "Dos restricciones se pelean y el resultado se ve mal.",
      "cause": "La pila va de arriba abajo, y la última trabaja sobre el resultado anterior.",
      "solution": "Reordénalas arrastrándolas, o baja Influence para ver qué hace cada una."
    }
  ]
};
