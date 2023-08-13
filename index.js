function cambiarModoOscuro() {
    const body = document.body;
    body.classList.toggle("modo-oscuro");
}

const btnOscuro = document.getElementById("modo-oscuro");

btnOscuro.addEventListener("click", cambiarModoOscuro);

const btnCargar = document.getElementById('load-more');
const productosOcultos = document.querySelectorAll('.box-container .box');
let productosMostrados = 3;
const productosPorCargar =1;

function mostrarProductosOcultos() {
    for (let i = productosMostrados; i < productosMostrados + productosPorCargar; i++) {
        if (productosOcultos[i]) {
            productosOcultos[i].style.display = 'block';
        }
    }
    productosMostrados += productosPorCargar;
    if (productosMostrados >= productosOcultos.length) {
        btnCargar.style.display = 'none';
    }
}
btnCargar.addEventListener('click', mostrarProductosOcultos);
mostrarProductosOcultos();

document.querySelector('a[href="#productos"]').addEventListener("click", function (e) {
    e.preventDefault();
  
    const targetSection = document.querySelector("#productos");
    const offsetTop = targetSection.offsetTop;
  
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth"
    });
  });
  
document.querySelector('a[href="#inicio"]').addEventListener("click", function (e) {
    e.preventDefault();
  
    const targetSection = document.querySelector("#inicio");
    const offsetTop = targetSection.offsetTop;
  
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth"
    });
  });
  
document.querySelector('a[href="#servicios"]').addEventListener("click", function (e) {
    e.preventDefault();
  
    const targetSection = document.querySelector("#servicios");
    const offsetTop = targetSection.offsetTop;
  
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth"
    });
  });
  