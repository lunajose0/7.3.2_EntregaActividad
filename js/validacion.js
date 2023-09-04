function validarFormulario() {
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var email = document.getElementById("email").value;
  var contraseña = document.getElementById("password1").value;
  var repetirContraseña = document.getElementById("password2").value;
  var terminos = document.getElementById("terminos").checked;

  if (nombre === "" || apellido === "" || email === "" || contraseña === "" || repetirContraseña === "" || !terminos) {
      showAlertError("Debe completar todos los campos.");
      return false;
  }

  if (contraseña.length < 6) {
      showAlertError("La contraseña debe tener al menos 6 caracteres.");
      return false;
  }

  if (contraseña !== repetirContraseña) {
      showAlertError("Las contraseñas no coinciden.");
      return false;
  }

  showAlertSuccess();
  return true;
}

function showAlertError(mensaje) {
  var alert = document.getElementById("alert-danger");
  alert.innerHTML = mensaje;
  alert.show();
}

  