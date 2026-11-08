// Cuerpo de la lección sculpt-3. Solo lo carga es/lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["sculpt-3"] = {
  "overview": "Las esculturas con millones de triángulos no se pueden riggear ni animar de forma eficiente. La retopología consiste en dibujar geometría limpia de quads y baja resolución sobre tu escultura. Aprende a usar las herramientas de ajuste de Blender, el modificador Shrinkwrap y los bucles de caras alrededor de la boca y los ojos para que las expresiones deformen bien.",
  "summary": [
    "Añade un Plane nuevo, añádele un modificador 'Shrinkwrap' que apunte a tu escultura y activa el ajuste a caras (Face Snapping).",
    "Activa 'In Front' en Object Properties -> Viewport Display para que la nueva malla siempre se vea sobre la escultura.",
    "Crea primero los bucles clave: círculos alrededor de los ojos, la boca y la mandíbula.",
    "Conecta los bucles con tiras de quads usando Extrude (E) y Auto Merge.",
    "Los complementos PolyQuilt o RetopoFlow aceleran mucho la retopología."
  ],
  "troubleshooting": [
    {
      "problem": "Los vértices de mi plano de retopología se hunden dentro de la escultura.",
      "cause": "Sin la opción 'In Front' ni un desplazamiento, las caras se meten en la escultura.",
      "solution": "En el modificador Shrinkwrap, aumenta ligeramente 'Offset' (por ejemplo, 0,005 m). En Object Properties -> Viewport Display, marca 'In Front'."
    },
    {
      "problem": "Los vértices se ajustan a la parte TRASERA de la cabeza en lugar de a la delantera.",
      "cause": "El ajuste no ignora automáticamente los polígonos que miran hacia atrás.",
      "solution": "En el menú Snapping (arriba, en el centro), marca 'Backface Culling' o usa con cuidado el modo X-Ray (Alt + Z)."
    },
    {
      "problem": "Tengo un número impar de vértices y me queda un triángulo inevitable.",
      "cause": "El número de bucles no coincide entre dos ramas que se unen.",
      "solution": "Usa una transición de topología estándar (convertir 3 bucles en 1 quad) para mantener un flujo de quads puros."
    }
  ],
  "tutorial": [
    {
      "heading": "Por qué hacer retopología",
      "steps": [
        "Las esculturas detalladas tienen millones de polígonos desordenados. Son difíciles de animar, desplegar en UV o usar en videojuegos.",
        "La retopología consiste en construir una malla nueva, limpia y ligera sobre la escultura, siguiendo su forma."
      ]
    },
    {
      "heading": "Prepara los objetos",
      "steps": [
        "Conserva la escultura como referencia high poly.",
        "Añade un plano nuevo y colócalo delante de la escultura. Será la nueva malla.",
        "En Object Properties ‣ Viewport Display del plano, activa In Front para que siempre se vea sobre la escultura."
      ]
    },
    {
      "heading": "Ajuste (snapping)",
      "steps": [
        "Activa el ajuste (icono del imán) y ponlo en Face Project para que los vértices nuevos se peguen a la superficie de la escultura.",
        "Al mover y extruir vértices, quedarán sobre la escultura."
      ]
    },
    {
      "heading": "Modificador Shrinkwrap",
      "steps": [
        "Añade un modificador Shrinkwrap a la nueva malla y elige la escultura como Target.",
        "Dale un Offset pequeño para que la malla quede justo por encima de la superficie.",
        "Pon un modificador Mirror encima si el modelo es simétrico."
      ]
    },
    {
      "heading": "Flujo de retopología",
      "steps": [
        "Empieza por los bucles importantes: alrededor de ojos, boca y articulaciones principales.",
        "Extruye aristas (E) y conéctalas en quads siguiendo el flujo de la forma.",
        "Rellena huecos con F y mantén las caras de tamaño parecido.",
        "Usa G G para deslizar vértices por las aristas y mantener una separación uniforme."
      ],
      "tip": "Busca quads y buenos bucles donde el modelo se dobla."
    },
    {
      "heading": "Aplica los modificadores",
      "steps": [
        "Cuando termines, aplica los modificadores Mirror y Shrinkwrap para que la forma pase a ser geometría real.",
        "Revisa si hay agujeros y corrige las caras que miren hacia dentro (Shift + N)."
      ]
    },
    {
      "heading": "Hornea el detalle high poly",
      "steps": [
        "La malla limpia tiene menos detalle que la escultura. Hornea el detalle de la escultura en un mapa de normales para recuperarlo como textura.",
        "Consulta la lección de horneado de texturas para ver todos los pasos."
      ]
    }
  ]
};
