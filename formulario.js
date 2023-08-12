document.addEventListener("DOMContentLoaded", function () {
    const registroForm = document.getElementById("registro-form");
    
    registroForm.addEventListener("submit", function (e) {
      e.preventDefault();
      
      const nombre = document.getElementById("nombre").value;
      const apellido = document.getElementById("apellido").value;
      const email = document.getElementById("email").value;
      const contrasena = document.getElementById("contrasena").value;
      const confirmarContrasena = document.getElementById("confirmar-contrasena").value;
      
      if (contrasena === confirmarContrasena) {
        // Aquí podrías realizar una llamada a un servicio para registrar al usuario
        alert("Registro exitoso. ¡Bienvenido, " + nombre + "!");
      } else {
        alert("Las contraseñas no coinciden. Por favor, verifica.");
      }
    });
  });