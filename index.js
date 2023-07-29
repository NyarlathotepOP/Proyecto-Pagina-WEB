//Funcion para el cambio de modo oscuro
function cambiarModoOscuro(){
    const body = document.body;
    body.classList.toggle("modo-oscuro");
}

//Boton para el cambio a modo oscuro
const botonModoOscuro = document.getElementById("boton-modo-oscuro");

botonModoOscuro.addEventListener("click", cambiarModoOscuro)