function CambiarElemento(){
    const texto=document.getElementById("Original")
    texto.textContent="Texto cambiado...";
}
const button=document.getElementById("Cambiar")
button.addEventListener("click",CambiarElemento);