
// Sidebar
// funcionalidad para cerrar/abrir el sidebar
document.getElementById('toggleSidebar').addEventListener('click', function(){
    document.getElementById('sidebar').classList.toggle('open');
});
// Header
// funcionalidad para cambiar al modo oscuro
const toggleButton = document.getElementById('toggleLightMode');

// Función para alternar entre el modo oscuro y claro
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});