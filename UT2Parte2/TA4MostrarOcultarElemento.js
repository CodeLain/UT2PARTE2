const parrafo = document.getElementById("texto");
const boton = document.getElementById("mostrarOcultar")

function mostrarOcultar(){
    if(parrafo.style.display === "none"){
        parrafo.style.display = "block"
    }else{
        parrafo.style.display = "none";
    }
}

boton.addEventListener("click", mostrarOcultar)