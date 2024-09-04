// Función para cargar los ítems almacenados en localStorage al iniciar la página
function cargarItems() {
    const contenedor = document.getElementById('contenedor');
    const items = JSON.parse(localStorage.getItem('items')) || []; // Obtener los ítems almacenados o un array vacío
  
    // Limpiar el contenedor antes de agregar los elementos
    contenedor.innerHTML = '';
  
    // Agregar cada ítem al contenedor
    items.forEach(item => {
      const li = document.createElement('li');
      li.className = 'list-group-item';
      li.textContent = item;
  
      contenedor.appendChild(li);
    });
  }
  
  // Función para agregar un nuevo ítem
  function agregarItem() {
    const inputItem = document.getElementById('item');
    const nuevoItem = inputItem.value.trim();
  
    if (nuevoItem) {
      const items = JSON.parse(localStorage.getItem('items')) || [];
      items.push(nuevoItem); // Agregar el nuevo ítem al array
      localStorage.setItem('items', JSON.stringify(items)); // Guardar el array actualizado en localStorage
  
      inputItem.value = ''; // Limpiar el campo de entrada
      cargarItems(); // Actualizar la lista con el nuevo ítem
    }
  }
  
  // Función para limpiar todos los ítems
  function limpiarItems() {
    localStorage.removeItem('items'); // Eliminar todos los ítems del localStorage
    cargarItems(); // Limpiar la lista en la interfaz de usuario
  }
  
  // Agregar eventos a los botones
  document.getElementById('agregar').addEventListener('click', agregarItem);
  document.getElementById('limpiar').addEventListener('click', limpiarItems);
  
  // Cargar los ítems al iniciar la página
  cargarItems();