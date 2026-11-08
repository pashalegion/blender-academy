// Cuerpo de la lección hard-3. Solo lo carga es/lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["hard-3"] = {
  "overview": "Aprende a modelar con dimensiones arquitectónicas exactas, al milímetro. Configurarás las unidades de la escena (métricas o imperiales), dominarás el ajuste a vértices y aristas, usarás la herramienta Measure y construirás paredes, puertas y marcos modulares, útiles para visualización arquitectónica (ArchViz) y diseño de niveles.",
  "summary": [
    "Define las unidades en Scene Properties -> Units (Metric, Millimeters/Meters o Imperial/Feet).",
    "Mantén Ctrl mientras transformas para ajustar a incrementos de la cuadrícula.",
    "Menú de Snapping (Shift + Tab): alterna entre ajuste a Vertex, Edge, Face e Incremental.",
    "Ajusta Snap Target a 'Closest' o 'Center' según quieras que coincidan las esquinas.",
    "Usa el 3D Cursor (Shift + clic derecho) como punto de pivote temporal para alineaciones precisas."
  ],
  "troubleshooting": [
    {
      "problem": "Mi objeto salta bruscamente por la escena al moverlo.",
      "cause": "El ajuste está en 'Face Nearest' con 'Project Individual Elements' o la distancia de ajuste está mal configurada.",
      "solution": "Pon Snap Target en 'Vertex' y Snap With en 'Active' o 'Closest'. Desactiva 'Align Rotation to Target' salvo que quieras alinear las normales."
    },
    {
      "problem": "Las medidas en pantalla no coinciden con las dimensiones de la barra lateral Transform.",
      "cause": "La escala del objeto no está aplicada, así que las dimensiones se multiplican por ella.",
      "solution": "Pulsa Ctrl + A en Object Mode y selecciona 'Apply Scale'."
    },
    {
      "problem": "La cuadrícula desaparece al acercarme.",
      "cause": "Depende de los ajustes de recorte de la vista o de los límites de subdivisión de la cuadrícula.",
      "solution": "Abre el menú Overlays, arriba a la derecha, marca Grid y ajusta Subdivisions a 10."
    }
  ],
  "tutorial": [
    {
      "heading": "En Blender se puede modelar con precisión",
      "steps": [
        "Blender no es un programa CAD, pero puedes modelar a medidas exactas con unidades, valores escritos y ajuste (snapping).",
        "Funciona muy bien para muebles, habitaciones, maquetas de productos y piezas para imprimir en 3D."
      ]
    },
    {
      "heading": "Configura las unidades",
      "steps": [
        "Abre Scene Properties ‣ Units.",
        "Elige Metric (o Imperial) en Unit System, deja Unit Scale en 1.0 y pon Length en la unidad que uses, como Centimeters o Millimeters.",
        "Las medidas de la Sidebar (N) se mostrarán en esas unidades."
      ]
    },
    {
      "heading": "Mueve cantidades exactas",
      "steps": [
        "Pulsa G, luego un eje (X, Y o Z), escribe un número y pulsa Enter. Ejemplo: G, X, 0.25, Enter mueve 0,25 m en X.",
        "Lo mismo sirve para rotar (R) y escalar (S).",
        "También puedes escribir unidades, por ejemplo 50cm o 2ft."
      ]
    },
    {
      "heading": "Ajuste (snapping)",
      "steps": [
        "Activa el ajuste con el icono del imán en la cabecera de la vista, o mantén Ctrl mientras mueves.",
        "En el menú junto al imán, elige a qué ajustar: Increment para pasos de cuadrícula, o Vertex, Edge o Face para ajustar a la geometría.",
        "Snap Base define qué punto del objeto se alinea: Closest, Center, Median o Active.",
        "Usa el ajuste a vértices para que dos objetos se toquen exactamente esquina con esquina."
      ]
    },
    {
      "heading": "Medidas exactas",
      "steps": [
        "Abre la Sidebar (N) ‣ pestaña Item y escribe valores en Dimensions, por ejemplo 2 m para el ancho de una pared.",
        "Después aplica la escala con Object ‣ Apply ‣ Scale para que los modificadores y herramientas midan bien."
      ]
    },
    {
      "heading": "Dibuja un plano con puntos",
      "steps": [
        "Empieza con un solo vértice (añade un plano y fusiónalo, o usa un complemento) y extrúyelo (E) por un eje con longitudes escritas para dibujar contornos.",
        "Ejemplo: E, X, 3, Enter dibuja una línea de pared de 3 m. Sigue con cada pared.",
        "Rellena el contorno con F o extrúyelo hacia arriba (E, Z, 2.5) para levantar las paredes."
      ]
    },
    {
      "heading": "Matemáticas al escribir",
      "steps": [
        "Los campos numéricos aceptan operaciones. Escribe 2.4/3 o 1.2*2 y pulsa Enter.",
        "Mientras mueves, rotas o escalas, pulsa = para cambiar a la entrada avanzada, donde puedes escribir expresiones con unidades."
      ]
    },
    {
      "heading": "Cambia longitudes y mide",
      "steps": [
        "Activa Edge Length en Viewport Overlays (apartado Measurement) en Edit Mode para ver las longitudes de las aristas seleccionadas.",
        "Para dar a una arista una longitud concreta, escálala en su eje con un valor escrito.",
        "Usa la herramienta Measure de la Toolbar: arrastra entre dos puntos y mantén Ctrl para ajustar a la geometría."
      ]
    },
    {
      "heading": "Usa el 3D cursor",
      "steps": [
        "Shift + S abre el menú de ajuste. Cursor to Selected lleva el 3D cursor a la selección, y Selection to Cursor lleva los objetos al cursor.",
        "Puedes escribir una posición exacta en Sidebar ‣ View ‣ 3D Cursor.",
        "Los objetos nuevos aparecen en el cursor, lo que facilita colocarlos con precisión."
      ]
    }
  ]
};
