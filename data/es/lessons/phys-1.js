// Cuerpo de la lección phys-1. Solo lo carga es/lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["phys-1"] = {
  "overview": "Las simulaciones físicas hacen que las colisiones complejas sean muy sencillas. En esta lección prepararás dinámicas Rigid Body activas y pasivas, crearás una reacción en cadena de fichas de dominó y una bola de demolición contra un muro de ladrillos, configurarás las formas de colisión (Convex Hull o Mesh) y hornearás la simulación.",
  "summary": [
    "En Physics Properties: los objetos 'Active' reciben gravedad y fuerzas; los 'Passive' actúan como suelo u obstáculos inmóviles.",
    "Forma de colisión: 'Convex Hull' es rápida para objetos sólidos; 'Mesh' es necesaria para cuencos, tazas y formas huecas.",
    "Hornear: ve a Scene Properties -> Rigid Body World -> Cache -> haz clic en 'Bake' para que la simulación se reproduzca de forma fiable.",
    "Fricción y rebote: ajusta la resistencia de la superficie y el rebote en los ajustes de física.",
    "<span class=\"unverified\" title=\"El estado de este complemento en Blender 5.2 no está confirmado\">Complemento Cell Fracture: rompe un objeto 3D en muchos fragmentos.</span>"
  ],
  "troubleshooting": [
    {
      "problem": "¡Los objetos atraviesan el suelo y caen al infinito!",
      "cause": "El suelo está en 'Active' en lugar de 'Passive', o la escala no está aplicada.",
      "solution": "Selecciona el suelo -> en Physics Properties, pon Type en 'Passive'. Pulsa Ctrl + A -> 'Apply Scale' tanto en el suelo como en los objetos que caen."
    },
    {
      "problem": "¡Los ladrillos tiemblan y explotan antes de que nada los toque!",
      "cause": "Las formas de colisión se solapan en el fotograma 1, o el margen de colisión es demasiado grueso.",
      "solution": "Reduce 'Collision Margin' a 0,001 m. En Scene Properties -> Rigid Body World, sube 'Substeps Per Frame' de 10 a 30."
    },
    {
      "problem": "Un objeto rebota en un techo invisible en lugar de caer dentro de un cuenco.",
      "cause": "La forma de colisión del cuenco es 'Convex Hull', que cubre las aberturas huecas.",
      "solution": "Cambia Collision Shape de 'Convex Hull' a 'Mesh' en los ajustes de Rigid Body del cuenco."
    }
  ],
  "tutorial": [
    {
      "heading": "Añade física de cuerpo rígido",
      "steps": [
        "Selecciona un objeto y abre Physics Properties (el icono de órbita). Pulsa Rigid Body.",
        "Pulsa Space para reproducir: el objeto cae por la gravedad."
      ]
    },
    {
      "heading": "Activo y pasivo",
      "steps": [
        "Los objetos Active los mueve la simulación: caen, chocan y rebotan.",
        "Los objetos Passive no se mueven, pero los demás chocan con ellos. Pon el suelo en Passive."
      ]
    },
    {
      "heading": "Objetos animados",
      "steps": [
        "Un objeto pasivo puede moverse con tus propios keyframes. Activa Animated en sus ajustes de cuerpo rígido.",
        "Úsalo para un empujador, una plataforma móvil o una bola que lanzas contra una torre."
      ]
    },
    {
      "heading": "Forma de colisión",
      "steps": [
        "Collision Shape define la forma usada en los choques. Box y Convex Hull son rápidas.",
        "Usa Mesh para formas huecas o complejas, como un cuenco, para que los objetos puedan caer dentro."
      ]
    },
    {
      "heading": "Duración de la animación",
      "steps": [
        "La simulación dura lo que el rango de fotogramas de la escena. Cambia End en la Timeline si necesitas más.",
        "Ajusta también el rango de la caché en Scene Properties ‣ Rigid Body World ‣ Cache."
      ]
    },
    {
      "heading": "Hornea la simulación",
      "steps": [
        "La simulación se calcula mientras reproduces. Hornearla guarda el resultado para que se reproduzca fluida e igual siempre.",
        "Ve a Scene Properties ‣ Rigid Body World ‣ Cache y pulsa Bake. Libera el horneado antes de cambiar ajustes."
      ]
    },
    {
      "heading": "Gravedad y velocidad",
      "steps": [
        "Cambia la gravedad en Scene Properties ‣ Gravity, por ejemplo para una escena en la Luna.",
        "Rigid Body World ‣ Speed hace toda la simulación más rápida o más lenta."
      ]
    },
    {
      "heading": "Ajustes del cuerpo rígido",
      "steps": [
        "Friction controla cuánto deslizan los objetos. Bounciness controla cuánto rebotan.",
        "Mass cambia lo pesado que es un objeto frente a otros. Los pesados empujan con facilidad a los ligeros."
      ]
    },
    {
      "heading": "Copiar ajustes y hornear a keyframes",
      "steps": [
        "Configura un objeto, selecciona los demás y por último ese, y usa Object ‣ Rigid Body ‣ Copy from Active.",
        "Object ‣ Rigid Body ‣ Bake to Keyframes convierte la simulación en keyframes normales que puedes editar."
      ]
    },
    {
      "heading": "Ejemplo: derriba una torre",
      "steps": [
        "Construye una torre de cubos (Active) sobre un suelo Passive.",
        "Anima una esfera con keyframes y activa Animated para que choque con la torre; luego reproduce u hornea."
      ]
    }
  ]
};
