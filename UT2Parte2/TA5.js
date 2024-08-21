
let contador = 0;
const boton = document.getElementById('incrementar');
const mostrarContador = document.getElementById('contador');
boton.addEventListener('click', function() {
   
    contador++;
    
   
    mostrarContador.textContent = contador;
});



