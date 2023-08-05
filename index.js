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
    // Aquí puedes agregar la lógica para buscar y mostrar los resultados según la entrada del usuario
    console.log("Búsqueda realizada:", busqueda);
});
