// Cuerpo de la lección light-2. Solo lo carga es/lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["light-2"] = {
  "overview": "Una mala iluminación arruina un gran modelo, y una buena hace que uno sencillo luzca espectacular. Esta lección explica los principios clásicos de la iluminación de estudio: la luz principal (Key Light), que ilumina el motivo; la luz de relleno (Fill Light), que suaviza las sombras duras; y la luz de contorno (Rim Light), que separa el motivo del fondo.",
  "summary": [
    "Luz principal: colócala a unos 45 grados del motivo y un poco por encima. Es la luz más intensa de la escena.",
    "Luz de relleno: va en el lado opuesto, con un 20-50 % de potencia y mayor radio para crear sombras suaves.",
    "Luz de contorno: va detrás del motivo y apunta hacia la cámara para perfilar la silueta.",
    "Radio o tamaño de la luz: las luces grandes dan sombras suaves; los puntos pequeños dan sombras muy duras.",
    "Temperatura de color: combina luces principales cálidas (3500-4500 K, naranja) con rellenos fríos (6500-8000 K, cian) para crear contraste."
  ],
  "troubleshooting": [
    {
      "problem": "¡He subido la potencia de 10 W a 100 W y sigue todo oscuro!",
      "cause": "Con las unidades reales de Blender, una habitación normal necesita entre 1000 y 10 000 W, o bien tu objeto es gigantesco.",
      "solution": "Sube la potencia a 500-2500 W, o comprueba las dimensiones del objeto en el panel 'N' para asegurarte de que no mide 50 metros."
    },
    {
      "problem": "Mis luces proyectan sombras duras y feas.",
      "cause": "El 'Radius' o 'Size' de la luz está en 0,0 m.",
      "solution": "Selecciona la luz -> Light Properties (icono verde de bombilla) -> aumenta 'Radius' o 'Size' a 0,5-2,0 m para conseguir sombras suaves."
    },
    {
      "problem": "La luz atraviesa paredes y geometría sólida.",
      "cause": "Contact Shadows no está activado en Eevee, o la geometría es fina y de una sola cara.",
      "solution": "Añade un modificador Solidify a la pared, y en los ajustes de luz de Eevee marca 'Contact Shadows'."
    }
  ],
  "tutorial": [
    {
      "heading": "Posición",
      "steps": [
        "La dirección de la luz cambia cómo se lee una forma. Una luz lateral muestra textura y volumen; una luz frontal lo aplana todo.",
        "Un buen comienzo es una luz principal a unos 45 grados del motivo y un poco por encima."
      ]
    },
    {
      "heading": "Puesta en escena",
      "steps": [
        "Usa la luz para llevar la mirada a lo importante. La zona más brillante atrae primero la atención.",
        "Deja el fondo algo más oscuro para que el motivo destaque, y usa una luz de contorno desde detrás para separarlo del fondo."
      ]
    },
    {
      "heading": "Atenuación",
      "steps": [
        "La luz se debilita con la distancia. Una luz cerca del motivo se apaga rápido en la escena; una lejana ilumina de forma más uniforme.",
        "Acerca o aleja las luces para controlar cómo se atenúan, no solo la potencia."
      ]
    },
    {
      "heading": "Tamaño",
      "steps": [
        "El tamaño de una luz controla la suavidad de la sombra. Luces grandes dan sombras suaves; pequeñas, sombras duras.",
        "Cambia Radius (luces de punto y foco) o Size (luces de área) en Light Properties."
      ]
    },
    {
      "heading": "Color",
      "steps": [
        "El color de la luz crea ambiente. La luz cálida (naranja) parece acogedora o soleada; la fría (azul), tranquila, fría o nocturna.",
        "Combinar una luz principal cálida con un relleno frío añade profundidad y contraste."
      ]
    },
    {
      "heading": "Pulido",
      "steps": [
        "Añade pequeñas luces de relleno para aclarar zonas oscuras, pero deja algo de sombra para que se vea la forma.",
        "Revisa el equilibrio general en el render, ajusta la exposición en Color Management y compara el antes y el después."
      ],
      "tip": "Cambia una luz cada vez y renderiza para ver el efecto."
    }
  ]
};
