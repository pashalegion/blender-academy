// Cuerpo de la lección fund-5. Solo lo carga es/lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["fund-5"] = {
  "overview": "Una mala topología provoca fallos de sombreado, errores de render y deformaciones desastrosas al animar. En esta lección aprenderás la diferencia entre quads (polígonos de 4 lados), tris (3 lados) y n-gons (5 lados o más). Descubrirás cómo identificar geometría non-manifold, eliminar caras internas ocultas y mantener un buen flujo de aristas.",
  "summary": [
    "Los quads (caras de 4 lados) son lo ideal para subdividir, deformar y desplegar UV limpiamente.",
    "Los tris son aceptables en superficies planas y son el formato nativo de los motores de videojuegos.",
    "Los n-gons (más de 4 vértices) causan errores de sombreado impredecibles y pellizcos al subdividir: ¡evítalos en superficies curvas!",
    "Caras interiores: nunca dejes caras dentro de un volumen cerrado, porque estropean los pesos automáticos y los modificadores.",
    "Flujo de aristas: los bucles deben seguir los contornos naturales, los músculos o las uniones de la estructura."
  ],
  "troubleshooting": [
    {
      "problem": "¿Cómo encuentro caras internas o non-manifold ocultas dentro de mi malla?",
      "cause": "Extruir hacia dentro por accidente crea geometría interior invisible.",
      "solution": "<span class=\"unverified\" title=\"No confirmado todavía en el mapa de teclas del manual de Blender 5.2\">En Edit Mode, deselecciona todo (Alt + A) y haz clic en Select -> Select All by Trait -> 'Non-Manifold' (o Ctrl + Alt + Shift + M). Revisa los vértices resaltados y borra las caras interiores innecesarias.</span>"
    },
    {
      "problem": "Mi superficie plana muestra pellizcos y sombras onduladas tras aplicar el sombreado suave.",
      "cause": "El sombreado suave intenta interpolar a través de aristas vivas de 90 grados.",
      "solution": "Usa Object -> Shade Auto Smooth. En las versiones actuales de Blender, este comportamiento está disponible con el modificador de nodos de geometría Smooth by Angle; consulta el manual de Blender 5.2 para ver el proceso actual."
    },
    {
      "problem": "La extrusión ha creado un pliegue raro que no puedo suavizar.",
      "cause": "Hay vértices duplicados o el valor de Crease de la arista es mayor que 0.",
      "solution": "Selecciona todo (A) -> 'M' -> 'By Distance'. Pulsa también 'N' -> pestaña Item y comprueba si 'Crease' es mayor que 0. Vuelve a ponerlo a 0."
    }
  ],
  "tutorial": [
    {
      "heading": "Qué es la topología",
      "steps": [
        "La topología es cómo están colocados los vértices, aristas y caras de la malla: cómo está construida la superficie, no solo su forma.",
        "Dos modelos pueden verse iguales y tener topologías muy distintas. Una buena topología facilita editar, suavizar, texturizar y animar."
      ]
    },
    {
      "heading": "Por qué importa una geometría limpia",
      "steps": [
        "Las mallas limpias se sombrean suavemente, sin manchas oscuras ni pliegues raros.",
        "Se subdividen de forma predecible con Subdivision Surface.",
        "Se deforman bien al animar, por ejemplo en codos y rodillas.",
        "Son más fáciles de desplegar en UV y de cambiar después."
      ]
    },
    {
      "heading": "Palabras que debes conocer",
      "steps": [
        "Vertex: un punto. Edge: una línea entre dos vértices. Face: una forma rellena entre aristas.",
        "Quad: cara de 4 lados. Tri: 3 lados. N-gon: 5 o más lados.",
        "Edge loop: un anillo de aristas conectadas alrededor de una forma. Alt + clic izquierdo en una arista en Edit Mode selecciona su bucle.",
        "Pole: un vértice donde se unen 3, 5 o más aristas. Unos pocos son normales; demasiados en mal sitio causan pellizcos.",
        "Normales: hacia dónde mira una cara. Las caras que miran hacia dentro causan sombras oscuras."
      ]
    },
    {
      "heading": "Cómo es una buena topología",
      "steps": [
        "Sobre todo quads, repartidos de forma uniforme.",
        "Los bucles siguen la forma, como alrededor de ojos, bocas o la curva de un asa.",
        "Más detalle solo donde la forma lo necesita, y geometría sencilla en las zonas planas.",
        "Sin caras escondidas dentro del objeto y sin agujeros que no deban estar."
      ],
      "tip": "Activa Statistics en el menú Viewport Overlays para ver cuántos vértices, caras y triángulos tiene tu modelo."
    },
    {
      "heading": "Trucos para arreglar mallas",
      "steps": [
        "Quita vértices duplicados: en Edit Mode selecciona todo (A) y luego M ‣ By Distance.",
        "Arregla caras del revés: selecciona todo y pulsa Shift + N (Recalculate Outside). Activa Face Orientation en Overlays: azul es correcto, rojo está invertido.",
        "Convierte triángulos en quads: selecciónalos y pulsa Alt + J.",
        "Elimina aristas innecesarias con X ‣ Dissolve Edges en vez de borrarlas, para que las caras sigan cerradas.",
        "Encuentra agujeros y geometría rota con Select ‣ Select All by Trait ‣ Non Manifold."
      ]
    },
    {
      "heading": "Si dudas, mantenlo simple",
      "steps": [
        "Empieza con las mínimas caras posibles y añade detalle solo cuando lo necesites.",
        "Usa loop cuts (Ctrl + R) y Subdivision Surface en lugar de muchos vértices colocados a mano.",
        "Si una malla se vuelve un lío, rehacer esa parte limpia suele ser más rápido que arreglarla."
      ]
    },
    {
      "heading": "Que la perfección no te frene",
      "steps": [
        "Los triángulos y n-gons están bien en superficies planas que no se doblan ni se subdividen.",
        "Los objetos de fondo, los estáticos y los de videojuegos no necesitan una topología de quads perfecta.",
        "Busca topología limpia donde importa: superficies curvas, cosas que se mueven y objetos vistos de cerca."
      ]
    }
  ]
};
