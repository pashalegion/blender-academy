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
  ]
};
