function cambiarModoOscuro() {
    const body = document.body;
    body.classList.toggle("modo-oscuro");
}

const btnOscuro = document.getElementById("modo-oscuro");

btnOscuro.addEventListener("click", cambiarModoOscuro);

