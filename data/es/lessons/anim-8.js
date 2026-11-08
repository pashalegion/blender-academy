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
  ],
  "tutorial": [
    {
      "heading": "Qué hacen los drivers",
      "steps": [
        "Un driver une un valor a otro con una regla sencilla, para que se muevan juntos sin keyframes.",
        "Ejemplo: al girar el minutero de un reloj, la aguja de las horas gira 12 veces más despacio automáticamente."
      ]
    },
    {
      "heading": "Modela el reloj",
      "steps": [
        "Haz una esfera de reloj (un cilindro) y dos agujas finas (cubos escalados).",
        "Pon nombres claros a las agujas, como MinuteHand y HourHand."
      ]
    },
    {
      "heading": "Coloca el punto de giro",
      "steps": [
        "Cada aguja debe girar alrededor del centro del reloj.",
        "Pon el 3D cursor en el centro (selecciónalo, Shift + S ‣ Cursor to Selected) y en cada aguja usa Object ‣ Set Origin ‣ Origin to 3D Cursor."
      ]
    },
    {
      "heading": "Limita la rotación",
      "steps": [
        "Añade una restricción Limit Rotation, o bloquea los otros ejes en la Sidebar (N), para que las agujas solo giren en un eje."
      ]
    },
    {
      "heading": "Añade un driver",
      "steps": [
        "Haz clic derecho en el valor de rotación de la aguja de las horas en ese eje y elige Add Driver, o pon el ratón encima y pulsa Ctrl + D.",
        "Abre los ajustes del driver (clic derecho ‣ Edit Driver, o el editor Drivers).",
        "Haz que la variable lea la rotación del minutero: elige Transform Channel, el objeto MinuteHand y el eje de rotación correspondiente."
      ]
    },
    {
      "heading": "Usa una fórmula",
      "steps": [
        "En el campo de expresión, divide la variable entre 12, por ejemplo var / 12.",
        "Ahora, una vuelta del minutero mueve la aguja de las horas una doceava parte.",
        "Anima solo el minutero; la aguja de las horas lo sigue sola."
      ],
      "tip": "Dentro de los drivers, las rotaciones van en radianes, no en grados."
    },
    {
      "heading": "Dónde se usan los drivers",
      "steps": [
        "Los rigs usan drivers para controles deslizantes que mueven shape keys, como un control de sonrisa.",
        "También se usan en máquinas: engranajes, ruedas y pistones que deben ir sincronizados."
      ]
    }
  ]
};
