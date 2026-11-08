// Cuerpo de la lección fund-1. Solo lo carga es/lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["fund-1"] = {
  "overview": "Empieza por aquí: esta lección presenta la interfaz de Blender 5, cómo moverte por la vista 3D, cómo seleccionar y añadir objetos y las primeras operaciones de mover, rotar y escalar. Te servirá como orientación antes de las lecciones de modelado y del proyecto del donut.",
  "summary": [
    "Conoce los editores principales de Blender y cómo moverte por la interfaz.",
    "Orbita la vista con el botón central del ratón (MMB), revisa las vistas ortográficas y entiende la diferencia entre perspectiva y ortográfica.",
    "Añade y selecciona objetos, y practica mover, rotar y escalar con G, R y S.",
    "Prueba lo aprendido añadiendo y colocando objetos en la escena.",
    "Guarda tu proyecto con Ctrl + S mientras practicas."
  ],
  "troubleshooting": [
    {
      "problem": "No consigo orbitar ni desplazar la vista con comodidad.",
      "cause": "La navegación depende del ratón y al principio puede resultar extraña.",
      "solution": "Usa MMB para orbitar, Shift + MMB para desplazarte y la rueda para hacer zoom. Usa los controles de vista o el menú circular de la tecla ` cuando necesites un ángulo concreto."
    },
    {
      "problem": "Mi objeto se mueve en la dirección equivocada.",
      "cause": "La transformación no está limitada a un eje o está bloqueada en otro distinto.",
      "solution": "Empieza la transformación con G, R o S, y pulsa X, Y o Z para limitarla. Escribe un número para dar un valor exacto y confirma con Enter."
    },
    {
      "problem": "Me pierdo después de cambiar de editor o de workspace.",
      "cause": "Los workspaces de Blender reorganizan las áreas de trabajo según la tarea.",
      "solution": "Usa las pestañas de workspace de la parte superior para volver a Layout. Puedes cambiar el tipo de editor con el selector de la esquina superior izquierda de cada área."
    }
  ],
  "tutorial": [
    {
      "heading": "Descarga y abre Blender",
      "steps": [
        "Descarga Blender gratis desde blender.org. Elige la versión para tu sistema (Windows, macOS o Linux).",
        "Instálalo, o descomprime la versión portable, y ábrelo.",
        "Haz clic fuera de la pantalla de bienvenida para cerrarla. Verás la escena por defecto: un cubo, una cámara y una luz."
      ]
    },
    {
      "heading": "Conoce la interfaz",
      "steps": [
        "El área grande del centro es la 3D Viewport, donde ves y editas la escena.",
        "Arriba a la derecha está el Outliner, una lista de todo lo que hay en la escena. Debajo está el editor Properties, con pestañas para render, objeto, modificadores y materiales.",
        "Abajo está la Timeline, que se usa para animar.",
        "Arriba están las pestañas de workspace (Layout, Modeling, Sculpting, Shading, etc.). Cada una reorganiza los editores para una tarea.",
        "Pulsa T para mostrar u ocultar la Toolbar a la izquierda de la vista, y N para la Sidebar de la derecha."
      ],
      "tip": "Pon el ratón sobre un área y pulsa Ctrl + Space para que ocupe toda la ventana. Vuelve a pulsarlo para regresar."
    },
    {
      "heading": "Muévete por la vista 3D",
      "steps": [
        "Mantén pulsado el botón central del ratón (MMB) y arrastra para orbitar.",
        "Mantén Shift + MMB y arrastra para desplazarte.",
        "Usa la rueda del ratón para acercar y alejar.",
        "Si no tienes botón central, arrastra los iconos de arriba a la derecha de la vista (la bola de ejes de colores, la mano y la lupa).",
        "Selecciona un objeto y pulsa Numpad . (punto) para encuadrarlo."
      ]
    },
    {
      "heading": "Perspectiva, ortográfica y la cámara",
      "steps": [
        "La vista en perspectiva muestra profundidad, como una foto: lo lejano se ve más pequeño.",
        "La vista ortográfica elimina la profundidad y las líneas paralelas siguen paralelas. Es útil para modelar con precisión.",
        "Pulsa Numpad 5 para cambiar entre perspectiva y ortográfica.",
        "Pulsa Numpad 0 para mirar a través de la cámara activa. Es lo que mostrará tu render final."
      ]
    },
    {
      "heading": "Coordenadas y vistas estándar",
      "steps": [
        "Blender usa tres ejes: X (rojo, de izquierda a derecha), Y (verde, de delante a atrás) y Z (azul, de arriba abajo).",
        "Pulsa Numpad 1 para la vista frontal, Numpad 3 para la derecha y Numpad 7 para la superior.",
        "Mantén Ctrl con esas teclas para ver el lado opuesto: trasera, izquierda e inferior.",
        "Si no tienes teclado numérico, mantén la tecla ` (acento grave) para un menú circular con todas las vistas."
      ]
    },
    {
      "heading": "Selecciona y añade objetos",
      "steps": [
        "Haz clic izquierdo en un objeto para seleccionarlo. El último seleccionado es el objeto activo y tiene un contorno más claro.",
        "Shift + clic izquierdo añade o quita objetos de la selección. A selecciona todo y Alt + A lo deselecciona.",
        "Pulsa Shift + A para abrir el menú Add, elige Mesh y una forma como UV Sphere o Cylinder.",
        "Los objetos nuevos aparecen en el 3D cursor (el círculo rojo y blanco). Shift + clic derecho mueve el cursor.",
        "Justo después de añadir, abre el panel Adjust Last Operation, abajo a la izquierda, para cambiar el tamaño o el detalle.",
        "Pulsa X y confirma, o pulsa Supr, para borrar los objetos seleccionados."
      ]
    },
    {
      "heading": "Mueve objetos con G",
      "steps": [
        "Selecciona un objeto y pulsa G (grab). Mueve el ratón y haz clic izquierdo o pulsa Enter para confirmar.",
        "Haz clic derecho o pulsa Esc para cancelar.",
        "Escribe un número mientras mueves para desplazar una distancia exacta, por ejemplo G, 2 y Enter."
      ]
    },
    {
      "heading": "Limita el movimiento a un eje",
      "steps": [
        "Mientras mueves, pulsa X, Y o Z para limitar el movimiento a ese eje. Una línea de color muestra el eje.",
        "Pulsa Shift + X, Shift + Y o Shift + Z para moverte en un plano excluyendo ese eje. Por ejemplo, Shift + Z mueve solo por el suelo.",
        "Combínalo con un número: G, Z, 1, Enter sube el objeto exactamente 1 metro."
      ]
    },
    {
      "heading": "Rota con R y escala con S",
      "steps": [
        "Pulsa R para rotar el objeto seleccionado. Pulsa X, Y o Z para girar sobre ese eje y escribe los grados, por ejemplo R, Z, 90, Enter.",
        "Pulsa S para escalar. Aleja el ratón del objeto para agrandarlo y acércalo para hacerlo más pequeño.",
        "S, Z, 2, Enter hace el objeto el doble de alto sin cambiar su anchura.",
        "Pulsa Alt + G, Alt + R o Alt + S para restablecer posición, rotación o escala."
      ]
    },
    {
      "heading": "Usa la Toolbar",
      "steps": [
        "La Toolbar de la izquierda tiene las herramientas Select, Cursor, Move, Rotate, Scale y Transform.",
        "Con Move, Rotate o Scale activas, arrastra los manejadores de colores que aparecen sobre el objeto.",
        "Con práctica, la mayoría pasa a los atajos (G, R, S), porque son más rápidos."
      ]
    },
    {
      "heading": "Reto: crea una pequeña escena",
      "steps": [
        "Empieza un archivo nuevo con File ‣ New ‣ General.",
        "Añade al menos tres objetos distintos con Shift + A.",
        "Muévelos, rótalos y escálalos para construir algo sencillo, como una mesa con una lámpara o un muñeco de nieve.",
        "Mira la escena desde las vistas frontal, derecha y superior para comprobar las posiciones.",
        "Guarda tu trabajo con Ctrl + S y dale un nombre claro al archivo."
      ],
      "tip": "Guarda a menudo. Blender no guarda automáticamente en tu archivo."
    }
  ]
};
