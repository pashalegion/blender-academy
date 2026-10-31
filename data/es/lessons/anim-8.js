// Cuerpo de la lección anim-8. Solo lo carga es/lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["anim-8"] = {
  "overview": "Un driver permite que un valor controle a otro mediante una función o una expresión matemática. Por ejemplo, un valor puede mover otro a una velocidad distinta. Los drivers son la base de los controles deslizantes de un rig y mantienen unidas las piezas móviles sin keyframes.",
  "summary": [
    "Haz clic derecho en una propiedad y elige Add Driver, o pulsa Ctrl + D con el ratón encima.",
    "Edita la configuración en la ventana emergente o en el editor Drivers.",
    "Las variables leen valores de otras propiedades o de canales de transformación.",
    "Scripted Expressions combina esas variables con matemáticas.",
    "Copy As New Driver te permite copiar una propiedad y pegarla como driver en otra."
  ],
  "troubleshooting": [
    {
      "problem": "El driver se queda en rojo o muestra un error.",
      "cause": "La expresión o una variable no son válidas, o falta la referencia a un objeto.",
      "solution": "Comprueba el objeto y la escritura de cada variable, y corrige la expresión en el editor Drivers."
    },
    {
      "problem": "Mi valor se mueve una cantidad incorrecta.",
      "cause": "Las rotaciones se manejan en radianes dentro de las expresiones.",
      "solution": "Comprueba el valor de la variable en el editor Drivers y escálalo en la expresión."
    },
    {
      "problem": "El driver no reacciona cuando muevo el otro objeto.",
      "cause": "La variable está leyendo el objeto o el Transform Channel equivocado.",
      "solution": "Abre el driver en el editor Drivers y revisa el objeto y el canal de la variable."
    }
  ]
};
