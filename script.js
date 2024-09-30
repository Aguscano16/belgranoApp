// Obtener elementos del DOM
const body = document.getElementById('body');
const changeColorBtn = document.getElementById('changeColorBtn');
const resetColorBtn = document.getElementById('resetColorBtn');

// Función para cambiar el color a celeste
changeColorBtn.addEventListener('click', () => {
    body.style.backgroundColor = '#00bfff';  // color celeste
    changeColorBtn.style.display = 'none';   // Esconder el botón de cambiar color
    resetColorBtn.style.display = 'inline-block'; // Mostrar el botón de restaurar color
});

// Función para restaurar el color a blanco
resetColorBtn.addEventListener('click', () => {
    body.style.backgroundColor = 'white';  // color blanco
    changeColorBtn.style.display = 'inline-block'; // Mostrar el botón de cambiar color
    resetColorBtn.style.display = 'none';  // Esconder el botón de restaurar color
});
