// Cuerpo de la lección fund-6. Solo lo carga es/lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["fund-6"] = {
  "overview": "Casi todos los modelos empiezan con cuatro herramientas. Extrude saca geometría nueva de una superficie, Inset crea una cara más pequeña dentro de otra, Bevel redondea las aristas duras y Loop Cut añade un anillo de aristas con el que trabajar. Si las aprendes en Edit Mode, podrás construir la mayoría de objetos sencillos.",
  "summary": [
    "Pulsa Tab para cambiar entre Object Mode y Edit Mode. Estas herramientas funcionan sobre una malla en Edit Mode.",
    "E extruye la selección: duplica los vértices y mantiene la geometría nueva conectada a la original.",
    "I hace un inset de las caras seleccionadas, una forma limpia de empezar un panel, una ventana o un botón.",
    "Ctrl + B bisela las aristas seleccionadas. Usa la rueda del ratón durante el bisel para cambiar el número de segmentos.",
    "Ctrl + R añade un loop cut. Pasa el cursor por una arista para ver el bucle, haz clic para confirmarlo y deslízalo a su sitio."
  ],
  "troubleshooting": [
    {
      "problem": "Mi extrusión no ha hecho nada, pero ahora la malla se ve rara.",
      "cause": "Pulsar E y cancelar con clic derecho detiene el movimiento, pero la geometría extruida se queda encima de la original.",
      "solution": "Pulsa Ctrl + Z enseguida para deshacerlo. Si lo descubres más tarde, selecciona todo en Edit Mode y usa Merge by Distance para eliminar los vértices duplicados."
    },
    {
      "problem": "Mi bisel se ve estirado o desigual.",
      "cause": "El objeto tiene la escala sin aplicar, así que Blender mide el bisel sobre una malla estirada.",
      "solution": "En Object Mode, usa Object ‣ Apply ‣ Scale y vuelve a biselar."
    },
    {
      "problem": "Loop Cut solo se ve en parte de la malla, o no aparece.",
      "cause": "Los loop cuts siguen filas de quads, y los triángulos y n-gons detienen el bucle.",
      "solution": "Limpia las caras de esa zona para que la fila sea de quads, o usa la herramienta Knife para un corte puntual."
    }
  ],
  "tutorial": [
    {
      "heading": "Prepárate en Edit Mode",
      "steps": [
        "Selecciona una malla, como el cubo por defecto, y pulsa Tab para entrar en Edit Mode.",
        "Pulsa 1, 2 o 3 en la fila superior del teclado para seleccionar vértices, aristas o caras.",
        "Todas las herramientas de esta lección actúan sobre las partes seleccionadas. Pulsa Tab otra vez para volver a Object Mode."
      ]
    },
    {
      "heading": "Extrude (E)",
      "steps": [
        "Selecciona una cara y pulsa E. Mueve el ratón para sacar geometría nueva y haz clic izquierdo para confirmar.",
        "La extrusión mantiene unida la parte nueva a la antigua, así se hacen crecer formas: brazos desde un cuerpo, una chimenea desde un tejado.",
        "Escribe un número para extruir una distancia exacta, por ejemplo E, 0.5, Enter.",
        "También puedes extruir aristas y vértices sueltos para dibujar contornos punto a punto.",
        "Pulsa Alt + E para más opciones, como Extrude Faces Along Normals, que empuja cada cara en su propia dirección."
      ],
      "tip": "Si pulsas E y cancelas con clic derecho, la copia extruida se queda. Pulsa Ctrl + Z para quitarla."
    },
    {
      "heading": "Inset (I)",
      "steps": [
        "Selecciona una o varias caras y pulsa I. Mueve el ratón para crear una cara más pequeña dentro de cada una.",
        "Haz clic izquierdo para confirmar. Después puedes extruir la cara interior hacia dentro o hacia fuera para hacer un panel, una ventana o un botón.",
        "Pulsa I dos veces rápido para hacer el inset de cada cara por separado y no como grupo."
      ]
    },
    {
      "heading": "Bevel (Ctrl + B)",
      "steps": [
        "Selecciona aristas y pulsa Ctrl + B. Mueve el ratón para redondear o cortar la arista viva.",
        "Usa la rueda del ratón durante el bisel para añadir segmentos. Más segmentos dan una arista más suave y redonda.",
        "Pulsa Ctrl + Shift + B para biselar vértices (esquinas) en lugar de aristas.",
        "Los objetos reales casi nunca tienen aristas perfectamente vivas, así que un bisel pequeño hace que el modelo capte la luz y parezca más real."
      ],
      "tip": "Si el bisel se ve desigual, probablemente la escala no está aplicada. Ve a Object Mode, usa Object ‣ Apply ‣ Scale y vuelve a biselar."
    },
    {
      "heading": "Loop Cut (Ctrl + R)",
      "steps": [
        "Pulsa Ctrl + R y pasa el ratón por una arista. Una línea amarilla muestra un bucle que rodea toda la malla.",
        "Usa la rueda del ratón para añadir varios cortes a la vez.",
        "Haz clic izquierdo para colocar el corte, deslízalo por la malla y vuelve a hacer clic. Si haces clic derecho, queda centrado.",
        "Los loop cuts añaden detalle justo donde lo necesitas y ayudan a mantener aristas definidas con Subdivision Surface."
      ]
    },
    {
      "heading": "Knife (K)",
      "steps": [
        "Pulsa K para usar la herramienta Knife. Haz clic en la malla para colocar puntos de corte; cada clic añade un tramo.",
        "Pulsa Enter o Space para confirmar el corte, o Esc para cancelar.",
        "Usa el cuchillo para cortes que no siguen un bucle, como una línea diagonal o una abertura de cualquier forma."
      ]
    },
    {
      "heading": "Herramienta Spin",
      "steps": [
        "La herramienta Spin está en la Toolbar (puede estar agrupada con Spin Duplicates; mantén pulsado el icono para ver ambas).",
        "Barre la geometría seleccionada alrededor del 3D cursor, como en un torno.",
        "Coloca el 3D cursor en el centro, selecciona un perfil (por ejemplo, medio contorno de un jarrón) y arrastra el manejador de Spin.",
        "En el panel Adjust Last Operation ajusta el número de pasos y el ángulo (360 grados para una vuelta completa)."
      ]
    },
    {
      "heading": "Desliza vértices y aristas",
      "steps": [
        "Selecciona una arista o un vértice y pulsa G dos veces rápido para deslizarlo por las aristas vecinas en lugar de moverlo libremente.",
        "Deslizar mantiene la forma de la superficie mientras cambias dónde está un bucle.",
        "Es una forma rápida de mover un loop cut después de crearlo."
      ]
    },
    {
      "heading": "Rip (V)",
      "steps": [
        "Selecciona un vértice o una arista y pulsa V para rasgar: la malla se separa ahí y puedes alejar los dos lados.",
        "Rip sirve para hacer aberturas o separar partes de una superficie.",
        "Úsalo con cuidado, porque crea bordes abiertos que quizá tengas que rellenar después (F crea una cara entre las aristas seleccionadas)."
      ]
    }
  ]
};
