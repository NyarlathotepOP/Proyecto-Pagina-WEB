//modo oscuro-opaco
function cambiarModoOscuro() {
    const body = document.body;
    body.classList.toggle("modo-oscuro");
}

const btnOscuro = document.getElementById("modo-oscuro");

btnOscuro.addEventListener("click", cambiarModoOscuro);

//cargar mas
const btnCargar = document.getElementById('load-more');
const productosOcultos = document.querySelectorAll('.box-container .box');
let productosMostrados = 3;
const productosPorCargar = 1;

function mostrarProductosOcultos() {
    for (let i = productosMostrados; i < productosMostrados + productosPorCargar; i++) {
        if (productosOcultos[i]) {
            productosOcultos[i].style.display = 'block';
        }
    }
    productosMostrados += productosPorCargar;
    //
    if (productosMostrados >= productosOcultos.length) {
        btnCargar.style.display = 'none';
    }
}
btnCargar.addEventListener('click', mostrarProductosOcultos);
mostrarProductosOcultos();