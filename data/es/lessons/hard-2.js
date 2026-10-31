// Cuerpo de la lección hard-2. Solo lo carga es/lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["hard-2"] = {
  "overview": "El modelado hard surface (armas, robots, vehículos, objetos de ciencia ficción) se basa en cortes industriales limpios y brillos definidos. En esta lección dominarás los booleanos no destructivos (Difference, Union, Intersect), entenderás la diferencia entre los solvers Exact y Fast, y aprenderás a combinar booleanos con los modificadores Bevel y Weighted Normal para lograr biseles limpios.",
  "summary": [
    "<span class=\"unverified\" title=\"El estado de BoolTool en Blender 5.2 no está confirmado\">Activa el complemento 'BoolTool' para usar booleanos con atajos.</span> Consulta su estado en la página de complementos.",
    "<span class=\"unverified\" title=\"El estado de BoolTool en Blender 5.2 no está confirmado; atajos sin verificar\">Atajos de BoolTool:</span> selecciona el cortador y luego el objeto -> Ctrl + Shift + '-' para Difference, Ctrl + Shift + '+' para Union.",
    "El modificador Weighted Normal corrige los degradados de sombreado en grandes superficies planas con cortes complejos.",
    "Coloca siempre el modificador Bevel DESPUÉS del modificador Boolean en la pila.",
    "Cambia el solver de Boolean entre 'Exact' (preciso, resuelve caras coplanares) y 'Fast' (rendimiento rápido)."
  ],
  "troubleshooting": [
    {
      "problem": "¡El modificador Boolean falló y ha hecho desaparecer todo el objeto!",
      "cause": "El cortador o el objeto tienen geometría non-manifold, normales invertidas o caras coplanares superpuestas.",
      "solution": "Cambia el solver de 'Exact' a 'Fast' (o al revés). Revisa las normales de ambos objetos (Shift + N) y elimina los vértices duplicados (M -> By Distance)."
    },
    {
      "problem": "El modificador Bevel hace que la geometría explote y se cruce en las esquinas.",
      "cause": "El ancho del bisel es mayor que el espacio de las aristas contiguas, o 'Clamp Overlap' está desactivado.",
      "solution": "Activa 'Clamp Overlap' en el modificador Bevel para evitar que los vértices se crucen. Reduce el ancho del bisel."
    },
    {
      "problem": "El sombreado se ve ondulado y deformado alrededor de los agujeros booleanos.",
      "cause": "Blender conecta los vértices del corte de forma arbitraria y crea triángulos problemáticos.",
      "solution": "Añade un modificador 'Weighted Normal' al final de la pila y marca 'Keep Sharp'."
    }
  ]
};
