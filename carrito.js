// Obtén referencias a los productos relevantes
const carrito = document.getElementById('carrito')
const productos1 = document.getElementById('lista-1')
const lista = document.querySelector('#lista-carrito tbody')
const vaciarCarritoBtn = document.getElementById('vaciar-carrito')

cargarEventListeners();

function cargarEventListeners() {
    productos1.addEventListener(`click`, comprarProducto);
    carrito.addEventListener(`click`, eliminarProducto);
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}

function comprarProducto(e) {
    e.preventDefault();

    if (e.target.classList.contains(`agregar-carrito`)) {
        const producto = e.target.parentElement.parentElement;
        leerDatosProducto(producto)
    }
}

function leerDatosProducto(producto) {
    const infoProducto = {
        imagen: producto.querySelector(`img`).src,
        titulo: producto.querySelector(`h3`).textContent,
        precio: producto.querySelector(`.precio`).textContent,
        id: producto.querySelector(`a`).getAttribute(`data-id`)
    }
    insertarProductoEnCarrito(infoProducto)
}

function insertarProductoEnCarrito(producto) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td><img src="${producto.imagen}" width=100 /></td>
        <td>${producto.titulo}</td>
        <td>${producto.precio}</td>
        <td><a href="#" class="borrar" data-id="${producto.id}">X</a></td>
    `;
    lista.appendChild(row);
}

function eliminarProducto(e){
    e.preventDefault();
    let producto,
        productoId;

    if(e.target.classList.contains(`borrar`)){
        e.target.parentElement.parentElement.remove();
        producto = e.target.parentElement.parentElement;
        productoId = producto.querySelector(`a`).getAttribute(`data-id`);
    }
}

function vaciarCarrito() {
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
}