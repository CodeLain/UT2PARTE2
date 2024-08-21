
const imagen = document.getElementById('miImagen');
const imagenOriginal = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCxQk6e_BD_fV729GOLVfqs53FrpbyegdbcQ&s';
const nuevaImagen = 'https://www.bmw.com.uy/content/dam/bmw/marketLATAM/master/LandingPage/bmw-m4-new-01.jpg';
imagen.addEventListener('mouseover', function() {
    imagen.src = nuevaImagen;
});
imagen.addEventListener('mouseout', function() {
    imagen.src = imagenOriginal;
});

