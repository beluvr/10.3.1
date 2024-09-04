// Función para cargar el listado desde el almacenamiento local y actualizar la vista
function cargarListado() {
    const contenedor = document.getElementById('contenedor');
    contenedor.innerHTML = ''; // Limpiar el contenedor actual
    const lista = JSON.parse(localStorage.getItem('listaItems')) || [];
    
    lista.forEach(item => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = item;
        contenedor.appendChild(li);
    });
}

// Función para agregar un nuevo ítem
function agregarItem() {
    const input = document.getElementById('item');
    const nuevoItem = input.value.trim();

    if (nuevoItem) {
        const lista = JSON.parse(localStorage.getItem('listaItems')) || [];
        lista.push(nuevoItem);
        localStorage.setItem('listaItems', JSON.stringify(lista));
        input.value = ''; // Limpiar el campo de entrada
        cargarListado(); // Actualizar la vista del listado
    }
}

// Función para limpiar el listado
function limpiarListado() {
    localStorage.removeItem('listaItems');
    cargarListado(); // Actualizar la vista del listado
}

// Asignar eventos a los botones
document.getElementById('agregar').addEventListener('click', agregarItem);
document.getElementById('limpiar').addEventListener('click', limpiarListado);

// Cargar el listado al inicio
cargarListado();
