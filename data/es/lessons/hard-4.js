// Cuerpo de la lección hard-4. Solo lo carga es/lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["hard-4"] = {
  "overview": "Un modelo puede verse perfecto en pantalla y fallar en la impresora. Los modelos imprimibles necesitan tamaños reales, grosor sólido y una malla sin agujeros. Esta lección explica cómo preparar Blender para piezas precisas y exportar un archivo que tu laminador pueda usar.",
  "summary": [
    "Define las unidades de la escena antes de modelar y trabaja con medidas reales.",
    "Cada pared necesita grosor real. El modificador Solidify puede añadirlo a una capa fina.",
    "Busca agujeros y errores con Select ‣ Select All by Trait ‣ Non Manifold.",
    "El complemento gratuito 3D Print Toolbox, en Blender Extensions, añade comprobaciones pensadas para imprimir.",
    "Exporta con File ‣ Export ‣ STL y vuelve a comprobar el tamaño en tu laminador."
  ],
  "troubleshooting": [
    {
      "problem": "Mi impresión es 1000 veces demasiado grande o pequeña.",
      "cause": "Las unidades o la escala de exportación STL no coinciden con lo que espera el laminador.",
      "solution": "Revisa Unit Scale en Scene Properties y Scale en las opciones de exportación STL. Luego confirma el tamaño en el laminador."
    },
    {
      "problem": "El laminador indica errores o faltan paredes.",
      "cause": "La malla no es estanca o tiene caras solapadas por dentro.",
      "solution": "Usa la selección Non Manifold para encontrar el problema, arréglalo y une las partes solapadas con un Boolean."
    },
    {
      "problem": "Las partes finas desaparecen en el laminador.",
      "cause": "Las paredes son más finas de lo que puede fabricar la impresora.",
      "solution": "Engrósalas con Solidify o editando la malla, y consulta el grosor mínimo de pared de tu impresora."
    }
  ],
  "tutorial": [
    {
      "heading": "Blender frente a CAD para imprimir",
      "steps": [
        "Los programas CAD están hechos para piezas exactas, pero Blender también puede modelar objetos precisos e imprimibles.",
        "El secreto: unidades correctas, medidas escritas exactas, geometría sólida y una comprobación final antes de exportar."
      ]
    },
    {
      "heading": "Planifica el objeto",
      "steps": [
        "Decide qué vas a hacer y mide las piezas reales con las que debe encajar, por ejemplo el borde de una mesa y unos auriculares.",
        "Apunta las medidas clave: grosores, anchos, huecos y holguras."
      ]
    },
    {
      "heading": "Configura unidades y cuadrícula",
      "steps": [
        "En Scene Properties ‣ Units, elige Metric, pon Unit Scale en 0.001 y Length en Millimeters, para que 1 unidad sea 1 mm.",
        "La cuadrícula mostrará milímetros, como la mayoría de laminadores."
      ],
      "tip": "Muchos laminadores esperan los STL en milímetros, así evitas impresiones 1000 veces más pequeñas."
    },
    {
      "heading": "Arregla el recorte de la vista",
      "steps": [
        "Con unidades pequeñas, los objetos pueden desaparecer al acercar o alejar.",
        "Abre la Sidebar (N) ‣ pestaña View y ajusta Clip Start (más pequeño) y Clip End (más grande) hasta que la vista funcione bien."
      ]
    },
    {
      "heading": "Ajustes y herramientas útiles",
      "steps": [
        "Instala el complemento gratuito 3D Print Toolbox desde Edit ‣ Preferences ‣ Get Extensions.",
        "Pulsa F3 para buscar cualquier comando por su nombre.",
        "Activa el ajuste (icono del imán) para alinear con exactitud."
      ]
    },
    {
      "heading": "Empieza con un cubo de referencia",
      "steps": [
        "Añade un cubo y escribe su tamaño, por ejemplo 20 mm, en Sidebar ‣ Item ‣ Dimensions.",
        "Úsalo para comprobar que los tamaños son correctos antes de modelar la pieza real."
      ]
    },
    {
      "heading": "Modela con precisión",
      "steps": [
        "Trabaja en las vistas ortográficas frontal, lateral y superior (Numpad 1, 3, 7) y en alambre (Z ‣ Wireframe) para leer la cuadrícula.",
        "Construye la pieza con cubos y extrusiones usando valores escritos (G, E y S seguidos de números).",
        "Deja pequeñas holguras, por ejemplo 0,3 mm, donde las piezas deban deslizar o encajar."
      ]
    },
    {
      "heading": "Da grosor real a todo",
      "steps": [
        "Cada pared necesita grosor. Un modificador Solidify puede añadirlo a una capa plana.",
        "La mayoría de impresoras necesitan paredes de al menos 1–2 mm. Consulta la recomendación de la tuya."
      ]
    },
    {
      "heading": "Revisa la malla",
      "steps": [
        "En Edit Mode usa Select ‣ Select All by Trait ‣ Non Manifold para encontrar agujeros y aristas rotas.",
        "Ejecuta las comprobaciones de 3D Print Toolbox (Solid, Intersections, Thickness, Overhang) en la Sidebar.",
        "Une las partes superpuestas en un solo sólido con un Boolean Union y aplícalo."
      ]
    },
    {
      "heading": "Exporta para el laminador",
      "steps": [
        "Selecciona el objeto y usa File ‣ Export ‣ STL. Activa Selection Only si hace falta.",
        "Abre el archivo en el laminador y comprueba tamaño y orientación antes de imprimir."
      ]
    }
  ]
};
