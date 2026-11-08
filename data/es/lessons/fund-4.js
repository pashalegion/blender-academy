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
  ],
  "tutorial": [
    {
      "heading": "Qué son los modificadores",
      "steps": [
        "Los modificadores cambian un objeto automáticamente sin destruir la malla original.",
        "Selecciona un objeto y abre la pestaña de la llave inglesa (Modifier Properties) en Properties. Haz clic en Add Modifier para verlos, agrupados en Edit, Generate, Deform, etc.",
        "Puedes activar o desactivar cada modificador, cambiar sus ajustes cuando quieras o borrarlo. La malla base no cambia hasta que lo aplicas."
      ]
    },
    {
      "heading": "Modificador Mirror",
      "steps": [
        "Modela solo la mitad de un objeto simétrico, por ejemplo la mitad derecha de una cara o de un coche.",
        "Añade Generate ‣ Mirror. La otra mitad aparece reflejada respecto al origen del objeto.",
        "Elige el eje (X, Y o Z). Bisect corta todo lo que pase al otro lado.",
        "Activa Clipping para que los vértices del centro no lo crucen y se mantengan unidos.",
        "Usa Mirror Object para reflejar respecto a otro objeto (por ejemplo un empty) en lugar del origen propio."
      ]
    },
    {
      "heading": "Opciones comunes y aplicar",
      "steps": [
        "Los iconos de la cabecera de cada modificador lo muestran en Edit Mode, en la vista y en el render. Desactívalos para comparar.",
        "Arrastra el asa de la derecha para reordenar modificadores. La pila se ejecuta de arriba abajo.",
        "Para hacer un modificador permanente, abre su flecha y elige Apply (o pon el ratón encima y pulsa Ctrl + A). El resultado pasa a ser geometría real."
      ],
      "tip": "Aplica solo cuando estés seguro. Mantener los modificadores activos te deja cambiar de idea después."
    },
    {
      "heading": "Subdivision Surface",
      "steps": [
        "Añade Generate ‣ Subdivision Surface para suavizar una forma low poly y hacerla más redonda.",
        "Levels Viewport es para la vista y Render para la imagen final. Números más altos suavizan más pero pesan más.",
        "Ctrl + 1, Ctrl + 2 y Ctrl + 3 en Object Mode lo añaden con ese número de niveles.",
        "Añade bucles cerca de una arista (Ctrl + R) para que siga más definida tras subdividir."
      ]
    },
    {
      "heading": "Modificador Bevel",
      "steps": [
        "Añade Generate ‣ Bevel para redondear aristas sin editar la malla.",
        "Amount define el tamaño y Segments la suavidad.",
        "Pon Limit Method en Angle para que solo se biselen las aristas vivas."
      ]
    },
    {
      "heading": "Modificador Array",
      "steps": [
        "Añade Generate ‣ Array para repetir el objeto en fila, como escalones, postes de una valla o eslabones.",
        "Count define cuántas copias. Relative Offset define la separación según el tamaño del objeto.",
        "Activa Merge para unir las copias que se tocan y que funcionen como una sola malla.",
        "Combina varios Array para hacer cuadrículas."
      ]
    },
    {
      "heading": "Modificador Skin",
      "steps": [
        "Skin convierte un esqueleto de vértices y aristas en una malla gruesa y en bloques.",
        "Empieza con un solo vértice, añade Generate ‣ Skin y extruye vértices (E) en Edit Mode para hacer extremidades.",
        "Pulsa Ctrl + A en Edit Mode para escalar el grosor en los vértices seleccionados.",
        "Añade después un Subdivision Surface para una base de criatura suave y rápida."
      ]
    },
    {
      "heading": "Modificador Boolean",
      "steps": [
        "Los booleanos combinan dos objetos. Añade Generate ‣ Boolean al objeto principal y elige el otro en el campo Object.",
        "Difference recorta el segundo objeto, Union los une e Intersect conserva solo la parte común.",
        "Oculta el objeto cortador (H, o el ojo del Outliner) para ver el resultado.",
        "El solver Exact es preciso; Fast es más rápido pero puede fallar con formas complicadas."
      ]
    },
    {
      "heading": "Wireframe, Solidify y Shrinkwrap",
      "steps": [
        "Wireframe convierte cada arista en una viga fina, para estructuras o estilos especiales. Thickness define el grosor.",
        "Solidify da grosor real a una superficie plana, como convertir un plano en una tabla. Activa Even Thickness para un grosor uniforme.",
        "Shrinkwrap pega un objeto a la superficie de otro. Sirve para ropa, calcomanías y retopología."
      ]
    },
    {
      "heading": "Modificador Lattice",
      "steps": [
        "Un Lattice es una jaula sencilla para doblar otro objeto.",
        "Añádelo con Shift + A ‣ Lattice y escálalo para que rodee tu objeto.",
        "En tu objeto añade Deform ‣ Lattice y elige el lattice en Object.",
        "Selecciona el lattice, pulsa Tab y mueve sus puntos. El objeto se dobla con ellos."
      ]
    },
    {
      "heading": "Aplica la escala y el orden de la pila",
      "steps": [
        "Muchos modificadores (Bevel, Solidify, Array) usan la escala del objeto. Si lo escalaste en Object Mode, el resultado puede verse estirado.",
        "Arréglalo con Object ‣ Apply ‣ Scale (o Ctrl + A ‣ Scale) antes de ajustar el modificador.",
        "El orden importa: Mirror antes de Subdivision Surface da un centro limpio y suave; Boolean antes de Bevel bisela las aristas del corte.",
        "Si el resultado se ve mal, prueba a cambiar el orden de los modificadores."
      ]
    }
  ]
};
