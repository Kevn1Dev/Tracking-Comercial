// Sidebar
document.getElementById('toggleSidebar').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('open');
});

// Modo Oscuro
const toggleButton = document.getElementById('toggleLightMode');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Render inicial
renderProjects();
