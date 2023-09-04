function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;
    var contraseña = document.getElementById("password1").value;
    var repetirContraseña = document.getElementById("password2").value;
    var terminos = document.getElementById("terminos").checked;
  
    if (nombre === "" || apellido === "" || email === "" || contraseña === "" || repetirContraseña === "" || !terminos) {
      showAlertError();
      return false;
    }
  
    if (contraseña.length < 6) {
      showAlertError();
      return false;
    }
  
    if (contraseña !== repetirContraseña) {
      showAlertError();
      return false;
    }
  
    showAlertSuccess();
    return true;
  }
  