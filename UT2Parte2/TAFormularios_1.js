
const personas = [
    "Mateo", "Lucía", "Santiago", "Valeria", "Daniel", "Sofía",
    "Alejandro", "Camila", "Nicolás", "Martina", "Sebastián", "Emma",
    "Diego", "Paula", "Javier", "Carla", "Andrés", "Mía", 
    "Lucas", "Isabella", "Carlos", "Alicia", "Tomás", "Gabriela",
    "Felipe", "Laura", "Pablo", "Elena", "Gonzalo", "Mariana"
];
const listaPersonas = document.getElementById("listaPersonas");
const inputBusqueda = document.getElementById("inputBusqueda");

function mostrarLista(nombres){
    let nombresLista = nombres.map(
        function(nombre){
            return "<li>" + nombre + "</li>"
        }
    );
    let juntarNombres = nombresLista.join("");
    listaPersonas.innerHTML = juntarNombres;
}

function filtrarLista(){
    let valor = inputBusqueda.value.toLowerCase();
    let filtroPersonas = personas.filter(
        function(persona){
            return persona.toLowerCase().includes(valor);
        }
    );
    mostrarLista(filtroPersonas);
}

inputBusqueda.addEventListener("input", filtrarLista);
mostrarLista(personas);