// Cuerpo de la lección fund-4. Solo lo carga es/lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["fund-4"] = {
  "overview": "Los modificadores son una herramienta no destructiva muy potente: cambian la geometría sin alterar de forma permanente los vértices originales hasta que decides aplicarlos. Esta lección explica tres de los más usados: Subdivision Surface (curvas suaves), Mirror (modelado simétrico) y Solidify (grosor).",
  "summary": [
    "Añade modificadores desde el icono de la llave inglesa en el panel Properties, a la derecha.",
    "Atajo de Subdivision Surface: Ctrl + 1, Ctrl + 2 o Ctrl + 3 añaden al instante 1, 2 o 3 niveles de subdivisión en la vista.",
    "¡El orden de los modificadores importa mucho! Se ejecutan de arriba abajo.",
    "Modificador Mirror: activa siempre 'Clipping' para que los vértices centrales se suelden y no crucen el eje.",
    "Bucles de apoyo: pulsa Ctrl + R en Edit Mode para añadir bucles cerca de las esquinas y definir mejor las curvas subdivididas."
  ],
  "troubleshooting": [
    {
      "problem": "¡Mi malla tiene sombras oscuras raras, líneas pellizcadas y manchas negras tras añadir Subdivision!",
      "cause": "¡Normales de cara invertidas! Blender cree que algunas caras miran hacia dentro.",
      "solution": "Entra en Edit Mode, selecciona todo con 'A' y pulsa Shift + N ('Recalculate Normals Outside'). Para comprobarlo, activa 'Face Orientation' en el menú Viewport Overlays (azul = bien, rojo = invertida)."
    },
    {
      "problem": "El modificador Mirror deja un hueco feo en el centro de mi modelo.",
      "cause": "Clipping está desactivado, o el origen de la malla no está alineado con el eje de simetría.",
      "solution": "Marca la casilla 'Clipping' en el modificador Mirror. En Edit Mode, selecciona los vértices centrales y pulsa G y luego X hacia el centro hasta que se junten."
    },
    {
      "problem": "Tengo vértices duplicados uno encima de otro y el sombreado se ve raro.",
      "cause": "Al extruir (E) y cancelar con clic derecho se cancela el movimiento, ¡pero NO se borran los vértices extruidos!",
      "solution": "En Edit Mode, pulsa 'A' para seleccionar todo, y luego 'M' -> 'By Distance'. La barra inferior te indicará cuántos vértices duplicados se han eliminado."
    }
  ]
};
