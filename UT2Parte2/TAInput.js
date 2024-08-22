const input = document.getElementById("input");


function campoActivo(){
    input.style.borderColor="black";
}

function campoDesactivado(){
    input.style.borderColor="";
}

input.addEventListener("focus", campoActivo);
input.addEventListener("blur", campoDesactivado);