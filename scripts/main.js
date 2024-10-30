
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

// Datos de ejemplo de proyectos
let projects = [
    { name: "Proyecto A", amount: "$5000", status: "Aprobado", approvalDate: "2023-10-15" },
    { name: "Proyecto B", amount: "$3000", status: "En espera", approvalDate: "N/A" },
    { name: "Proyecto C", amount: "$8000", status: "Aprobado", approvalDate: "2023-11-05" },
];

// Mostrar la tabla de proyectos
function renderProjects(page = 1) {
    const projectsBody = document.getElementById('projectsBody');
    projectsBody.innerHTML = "";

    // Filtrar proyectos aprobados
    const approvedProjects = projects.filter(proj => proj.status === "Aprobado");

    // Paginación
    const projectsPerPage = 5;
    const start = (page - 1) * projectsPerPage;
    const paginatedProjects = approvedProjects.slice(start, start + projectsPerPage);

    paginatedProjects.forEach(project => {
        const row = document.createElement('tr');
        row.className = "approved-project";
        row.innerHTML = `
            <td>${project.name}</td>
            <td>${project.amount}</td>
            <td>${project.status}</td>
            <td>${project.approvalDate}</td>
            <td><button class="deleteBtn">Eliminar</button></td>
        `;
        projectsBody.appendChild(row);

        // Botón de eliminación
        row.querySelector(".deleteBtn").addEventListener("click", () => {
            projects = projects.filter(p => p.name !== project.name);
            renderProjects(page);
        });
    });

    renderPagination(approvedProjects.length, page);
}

// Función de paginación
function renderPagination(totalProjects, currentPage) {
    const pagination = document.getElementById("pagination");
    pagination.innerHTML = "";

    const totalPages = Math.ceil(totalProjects / 5);
    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement("button");
        button.textContent = i;
        button.className = currentPage === i ? "active" : "";
        button.addEventListener("click", () => renderProjects(i));
        pagination.appendChild(button);
    }
}

// Función para agregar proyecto
document.getElementById('addProjectBtn').addEventListener('click', () => {
    const name = prompt("Nombre del proyecto:");
    const amount = prompt("Monto del proyecto:");
    const status = "Aprobado"; // Solo se agregan aprobados
    const approvalDate = new Date().toISOString().split('T')[0];

    if (name && amount) {
        projects.push({ name, amount, status, approvalDate });
        renderProjects();
    }
});

// Render inicial
renderProjects();