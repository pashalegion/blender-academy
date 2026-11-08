// Cuerpo de la lección light-4. Solo lo carga es/lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["light-4"] = {
  "overview": "Un buen render depende tanto de dónde pones la cámara como del modelo. Esta lección trata sobre cómo mover y apuntar la cámara, cómo cambia la distancia focal la sensación de un plano y cómo la profundidad de campo desenfoca el fondo para dirigir la mirada.",
  "summary": [
    "Numpad 0 muestra la vista desde la cámara activa.",
    "Usa View ‣ Align View ‣ Align Active Camera to View para llevar la cámara a lo que estás viendo.",
    "Activa Lock Camera to View en la barra lateral para mover la cámara con la navegación normal de la vista.",
    "Las focales largas acercan y aplanan la perspectiva; las cortas muestran más escena y la exageran.",
    "Activa Depth of Field en las propiedades de la cámara, elige un Focus Object y baja F-Stop para aumentar el desenfoque."
  ],
  "troubleshooting": [
    {
      "problem": "Toda la imagen se ve borrosa tras activar Depth of Field.",
      "cause": "El punto de enfoque no está en tu motivo.",
      "solution": "Define Focus Object en el motivo para que el enfoque lo siga automáticamente."
    },
    {
      "problem": "Depth of Field está activado, pero no veo desenfoque.",
      "cause": "F-Stop es demasiado alto para esta escena, o la escala es poco habitual.",
      "solution": "Baja F-Stop y comprueba que la escena use una escala real razonable."
    },
    {
      "problem": "Los objetos desaparecen cuando están muy cerca o muy lejos de la cámara.",
      "cause": "Están fuera del rango de Clip Start y Clip End de la cámara.",
      "solution": "Ajusta Clip Start y Clip End en los ajustes Lens de la cámara."
    }
  ],
  "tutorial": [
    {
      "heading": "Mira por la cámara",
      "steps": [
        "Pulsa Numpad 0 para ver a través de la cámara activa. Es lo que mostrará el render.",
        "Si no hay cámara, añade una con Shift + A ‣ Camera."
      ]
    },
    {
      "heading": "Mueve la cámara",
      "steps": [
        "Selecciona la cámara y muévela y gírala como cualquier objeto (G, R).",
        "Más fácil: encuadra la vista que te guste y usa View ‣ Align View ‣ Align Active Camera to View.",
        "O abre la Sidebar (N) ‣ pestaña View, activa Lock Camera to View y navega normalmente; la cámara te sigue."
      ]
    },
    {
      "heading": "Distancia focal",
      "steps": [
        "En Camera Properties ‣ Lens, Focal Length define el zoom. 50 mm se ve natural, 24 mm es angular y 85–135 mm es un objetivo de retrato cerrado y favorecedor.",
        "Las focales cortas exageran la perspectiva; las largas la aplanan."
      ]
    },
    {
      "heading": "Recorte",
      "steps": [
        "Clip Start y Clip End definen la distancia más cercana y la más lejana que ve la cámara.",
        "Si desaparecen objetos, ajusta estos valores."
      ]
    },
    {
      "heading": "Profundidad de campo",
      "steps": [
        "Activa Depth of Field en Camera Properties.",
        "Pon tu motivo en Focus Object para que siga nítido.",
        "Baja F-Stop para más desenfoque del fondo (por ejemplo 1,8); súbelo para que más escena esté enfocada."
      ]
    },
    {
      "heading": "Composición",
      "steps": [
        "Usa las guías de la cámara (Camera Properties ‣ Viewport Display ‣ Composition Guides) para mostrar tercios u otras guías.",
        "Coloca el motivo sobre una línea de tercios, deja espacio hacia donde mira y evita cortar objetos en puntos incómodos."
      ],
      "tip": "Ajusta la resolución de salida en Output Properties antes de encuadrar, porque cambia la forma del encuadre."
    }
  ]
};
