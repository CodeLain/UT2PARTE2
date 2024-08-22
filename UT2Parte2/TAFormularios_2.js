
document.getElementById("Formulario").addEventListener("submit", function(event) {
    event.preventDefault();

    var nombre = document.getElementById("nombre").value;
    var contraseña = document.getElementById("contraseña").value;
    var email = document.getElementById("email").value;

    if (nombre === "" || contraseña === "" || email === "") {
        alert("Debes completar todos los campos antes de enviar"); 
    } else if (contraseña.length < 8){
        alert("La contraseña debe tener un minimo de 8 caracteres");
    } else if (!email.includes("@")){
        alert("Ingrese un email valido");
    } else {
        alert("Formulario enviado");
        document.getElementById("Formulario").reset();
    }
  });
  