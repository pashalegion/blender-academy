// Cuerpo de la lección post-4. Solo lo carga es/lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["post-4"] = {
  "overview": "Casi todo Blender se puede controlar con Python, incluida la creación de objetos, la animación, el render y la importación y exportación. No necesitas ser programador para empezar. Un script pequeño puede convertir una tarea repetitiva en un solo clic.",
  "summary": [
    "El workspace Scripting reúne Text Editor, Python Console e Info Editor.",
    "Escribe scripts en el Text Editor y pulsa Run Script para ejecutarlos.",
    "El Info Editor registra las acciones como Python, lo que ayuda a descubrir comandos.",
    "Empieza los scripts con import bpy, que da acceso a los datos y herramientas de Blender.",
    "La documentación oficial de la API de Python es la referencia principal. Los complementos son scripts empaquetados para ampliar Blender."
  ],
  "troubleshooting": [
    {
      "problem": "Mi script ha fallado, pero no veo por qué.",
      "cause": "Los errores de los scripts aparecen en la consola del sistema.",
      "solution": "Usa Window ‣ Toggle System Console en Windows, o inicia Blender desde una terminal en Linux y macOS."
    },
    {
      "problem": "Un comando de un tutorial antiguo ya no existe.",
      "cause": "La API de Python cambia entre versiones de Blender.",
      "solution": "Busca el comando actual en la documentación de la API de Python."
    },
    {
      "problem": "Un comando falla con un error de contexto.",
      "cause": "Muchos operadores necesitan un modo, una selección o un objeto activo concretos.",
      "solution": "Comprueba que el objeto esté activo y en el modo correcto, o edita sus datos directamente con bpy.data."
    }
  ],
  "tutorial": [
    {
      "heading": "Por qué programar",
      "steps": [
        "Python te permite controlar Blender con código: crear objetos, cambiar ajustes y automatizar tareas repetitivas y aburridas."
      ]
    },
    {
      "heading": "El workspace Scripting",
      "steps": [
        "Haz clic en la pestaña Scripting. Muestra el Text Editor, la Python Console y el Info Editor.",
        "El Info Editor registra tus acciones como comandos de Python, lo que te ayuda a encontrar el código de lo que haces."
      ]
    },
    {
      "heading": "Tu primer script",
      "steps": [
        "En el Text Editor pulsa New y escribe: import bpy",
        "Añade una línea como bpy.ops.mesh.primitive_cube_add(location=(0, 0, 2)).",
        "Pulsa Run Script (el botón de reproducir). Aparecerá un cubo 2 unidades por encima del centro."
      ]
    },
    {
      "heading": "Controla Blender con código",
      "steps": [
        "bpy.data da acceso a todos los datos, como objetos y materiales.",
        "bpy.context da lo que estás usando ahora, como bpy.context.object para el objeto activo.",
        "Cambia propiedades directamente, por ejemplo bpy.context.object.scale.z = 3.",
        "Usa bucles para repetir acciones, por ejemplo añadir 10 cubos en fila."
      ]
    },
    {
      "heading": "Consejos",
      "steps": [
        "Con Python Tooltips activado (Edit ‣ Preferences ‣ Interface), pon el ratón sobre un botón para ver su nombre en Python.",
        "Usa la Python Console para probar líneas sueltas; Tab completa los nombres.",
        "Cuando un script falle, lee el error en la consola del sistema o en el Info Editor."
      ],
      "tip": "La API de Python cambia entre versiones de Blender; consulta la documentación oficial de tu versión."
    }
  ]
};
