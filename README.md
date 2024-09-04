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