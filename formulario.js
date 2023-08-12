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
        alert("Registro exitoso. ¡Bienvenido, " + nombre + "!");
      } else {
        alert("Las contraseñas no coinciden. Por favor, verifica.");
      }
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const inicioSesionForm = document.getElementById("inicio-sesion-form");
    
    inicioSesionForm.addEventListener("submit", function (e) {
      e.preventDefault();
      
      const email = document.getElementById("email").value;
      const contrasena = document.getElementById("contrasena").value;
            
      if (email === "usuario@example.com" && contrasena === "contrasena123") {
        alert("Inicio de sesión exitoso. ¡Bienvenido!");
      } else {
        alert("Credenciales incorrectas. Por favor, verifica.");
      }
    });
  });
  