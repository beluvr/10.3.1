# 10.3.1
Actividad grupal Lista



// Evento al hacer click en "Elimina el último párrafo ingresado"
buttonRemove.addEventListener("click", function () {
  // Obtiene el último párrafo agregado
  let lastParagraph = container.lastElementChild;
  // Verifica si existe un párrafo
  if (lastParagraph) {
    // Si exite un párrafo, elimina el ultimo
    container.removeChild(lastParagraph);
  } else {
    // Si no hay párrafos 
    alert("No existe ningun párrafo para eliminar");
  }
});


buttonAdd.addEventListener("click", function () {
  let text = inputParagraph.value;
  if (text) {
    let paragraph = document.createElement("p");
    paragraph.appendChild(document.createTextNode(text));
    container.appendChild(paragraph);
    inputParagraph.value = "";
  } else {
    alert("Debe ingresar algún texto para ser ingresado")
  }
});



_____________________


Explicación del código:
1. cargarListado():
Obtiene el contenedor de la lista (#contenedor).
Lee la lista almacenada en localStorage y la convierte de JSON a un array.
Limpia el contenedor actual y lo llena con los ítems almacenados.
2. agregarItem():
Obtiene el valor del campo de entrada, lo limpia de espacios innecesarios y verifica si no está vacío.
Lee la lista actual del localStorage, agrega el nuevo ítem y guarda la lista actualizada.
Limpia el campo de entrada y actualiza la vista del listado.
3. limpiarListado():
Elimina el ítem guardado en localStorage y actualiza la vista del listado para que esté vacío.
4. Eventos:
Asigna las funciones a los botones correspondientes usando addEventListener.
5. Carga inicial:
Llama a cargarListado() cuando se carga el archivo JavaScript para mostrar la lista guardada.
Consideraciones Adicionales:
Asegúrate de que el archivo almacenar.js está correctamente vinculado en tu archivo HTML.
Asegúrate de que no haya errores en la consola del navegador que puedan estar afectando la ejecución del script.
Con estos cambios, tu página web debería ser capaz de agregar ítems a una lista, guardar esa lista en el almacenamiento local y mantener los datos incluso cuando el navegador se cierre. También podrás limpiar el listado cuando lo desees.
