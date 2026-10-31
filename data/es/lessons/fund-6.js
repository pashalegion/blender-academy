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
  ]
};
