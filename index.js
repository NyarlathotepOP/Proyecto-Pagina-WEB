//Funcion para el cambio de modo oscuro
function cambiarModoOscuro(){
    const body = document.body;
    body.classList.toggle("modo-oscuro");
}

//Boton para el cambio a modo oscuro
const botonModoOscuro = document.getElementById("boton-modo-oscuro");

botonModoOscuro.addEventListener("click", cambiarModoOscuro);

const botonBusqueda = document.getElementById("boton-busqueda");
const barraBusqueda = document.getElementById("barra-busqueda");

botonBusqueda.addEventListener("click", () => {
    const busqueda = barraBusqueda.value.toLowerCase();
    // Aquí se puede agregar la lógica para buscar y mostrar los resultados según la entrada del usuario
    console.log("Búsqueda realizada:", busqueda);
});
const botonAplicarFiltros = document.getElementById("aplicar-filtros");
const selectCategoria = document.getElementById("categoria");
const inputPrecio = document.getElementById("precio");
const seccionProductos = document.querySelector(".productos");

botonAplicarFiltros.addEventListener("click", () => {
    const categoriaSeleccionada = selectCategoria.value;
    const precioMaximo = inputPrecio.value !== "" ? parseFloat(inputPrecio.value) : Infinity;
    
    // Aquí se puede implementar la lógica para filtrar y mostrar los productos según las opciones seleccionadas
    
    seccionProductos.innerHTML = `
        <div class="producto">Producto 1</div>
        <div class="producto">Producto 2</div>
        <div class="producto">Producto 3</div>
    `;
});
