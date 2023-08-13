document.addEventListener("DOMContentLoaded", function () {
    const contactoForm = document.getElementById("contacto-form");
    
    contactoForm.addEventListener("submit", function (e) {
      e.preventDefault();
      
      const nombre = document.getElementById("nombre").value;
      const email = document.getElementById("email").value;
      const mensaje = document.getElementById("mensaje").value;
            
      alert("¡Gracias por tu mensaje, " + nombre + "! Nos pondremos en contacto contigo pronto.");
      
    });
  });