const input = document.getElementById("input");

function campoActivado(){
    input.style.borderColor = "red";
    input.style.borderWidth = "4px"; 
}

function campoDesactivado(){
    input.style.borderColor= "";
    input.style.borderWidth = ""; 
}

input.addEventListener("focus", campoActivado);
input.addEventListener("blur", campoDesactivado);