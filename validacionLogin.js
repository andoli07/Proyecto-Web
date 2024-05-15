document.getElementById("login").addEventListener("submit", function(event) {
    var email = document.getElementById("exampleDropdownFormEmail1").value;
    var password = document.getElementById("exampleDropdownFormPassword1").value;
    
    if (!email || !validateEmail(email)) {
      alert("Por favor, ingresa un correo electrónico válido.", "red");
      event.preventDefault();
      return false;
    }
    
    if (!password || !validatePassword(password)) {
      alert("La contraseña debe tener al menos 4 caracteres.", "red");
      event.preventDefault();
      return false;
    }
    
    alert("¡Datos correctos!", "green");
    return true;
  });
  
  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email); 
  }
  
  function validatePassword(password) {
    return password.length >= 4;
  }
  
  function alert(message, color) {
    // Crear una nueva alerta
    var alertDiv = document.createElement("div");
    alertDiv.className = "alert alert-danger";
    alertDiv.style.backgroundColor = color;
    alertDiv.textContent = message;
  
    // Agregar la alerta al DOM
    var loginForm = document.getElementById("login");
    loginForm.parentNode.insertBefore(alertDiv, loginForm);
  
    // Eliminar la alerta después de 3 segundos
    setTimeout(function() {
      alertDiv.parentNode.removeChild(alertDiv);
    }, 3000);
  }