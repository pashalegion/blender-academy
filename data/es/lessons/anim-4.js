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
  ],
  "tutorial": [
    {
      "heading": "Qué hacen las restricciones",
      "steps": [
        "Las restricciones (constraints) controlan automáticamente la posición, rotación o escala de un objeto a partir de otro.",
        "Añádelas en Object Constraint Properties (el icono bajo la llave inglesa) con Add Object Constraint.",
        "Cada una tiene un control Influence. Puedes animarlo con keyframes para activarla y desactivarla."
      ]
    },
    {
      "heading": "Copy Location, Rotation, Scale y Transforms",
      "steps": [
        "Copy Location hace que un objeto siga la posición de otro. Puedes elegir los ejes y añadir un desplazamiento.",
        "Copy Rotation y Copy Scale copian solo la rotación o solo la escala.",
        "Copy Transforms copia las tres a la vez."
      ]
    },
    {
      "heading": "Restricciones de límite",
      "steps": [
        "Limit Distance mantiene un objeto dentro, fuera o a una distancia exacta de un objetivo.",
        "Limit Location, Limit Rotation y Limit Scale fijan un mínimo y un máximo, por ejemplo una puerta que no se abre más de 90 grados.",
        "Activa Affect Transform para que los límites se apliquen también al mover el objeto."
      ]
    },
    {
      "heading": "Maintain Volume y Transformation",
      "steps": [
        "Maintain Volume aplasta los otros ejes cuando estiras uno, conservando el volumen, como en estirar y encoger.",
        "Transformation convierte un movimiento en otro, por ejemplo girar un dial hace girar un engranaje."
      ]
    },
    {
      "heading": "Restricciones de seguimiento",
      "steps": [
        "Damped Track apunta un eje hacia un objetivo; es la forma más sencilla de apuntar.",
        "Locked Track apunta manteniendo un eje bloqueado, útil para cosas que solo deben girar a izquierda y derecha.",
        "Stretch To apunta a un objetivo y se estira para alcanzarlo."
      ],
      "tip": "Track To es otra restricción para apuntar; en cámaras, pon el eje de seguimiento en -Z y arriba en Y."
    },
    {
      "heading": "Restricciones de relación",
      "steps": [
        "Armature permite que los objetos sigan huesos de una armadura con pesos.",
        "Child Of funciona como emparentar, pero puedes animar su influencia para cambiar de padre, por ejemplo un personaje que coge una taza. Pulsa Set Inverse para que el objeto no salte.",
        "Floor impide que un objeto atraviese un objeto suelo."
      ]
    },
    {
      "heading": "Follow Path, Pivot y Shrinkwrap",
      "steps": [
        "Follow Path mueve un objeto por una curva. Anima el tiempo de evaluación de la curva o usa Animate Path para que lo recorra.",
        "Pivot gira un objeto alrededor de otro punto.",
        "Shrinkwrap pega un objeto a la superficie de otro."
      ]
    },
    {
      "heading": "La pila",
      "steps": [
        "Las restricciones se ejecutan de arriba abajo, así que el orden cambia el resultado.",
        "Arrástralas para reordenarlas y baja Influence para ver qué hace cada una."
      ]
    }
  ]
};
