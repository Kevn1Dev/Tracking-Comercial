// Sidebar
document.getElementById('toggleSidebar').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('open');
});

// Modo Oscuro
const toggleButton = document.getElementById('toggleLightMode');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Datos de ejemplo de proyectos
let projects = [
    { name: "Proyecto A", description: "Descripción del proyecto A", contractType: "Contrato Tipo 1", amount: "$5000", status: "Aprobado", approvalDate: "2023-10-15" },
    { name: "Proyecto B", description: "Descripción del proyecto B", contractType: "Contrato Tipo 2", amount: "$3000", status: "En espera", approvalDate: "N/A" },
    { name: "Proyecto C", description: "Descripción del proyecto C", contractType: "Contrato Tipo 1", amount: "$8000", status: "Aprobado", approvalDate: "2023-11-05" },
    { name: "Proyecto D", description: "Descripción del proyecto D", contractType: "Contrato Tipo 3", amount: "$10000", status: "No aprobado", approvalDate: "N/A" },
    { name: "Proyecto E", description: "Descripción del proyecto E", contractType: "Contrato Tipo 2", amount: "$4000", status: "No aprobado", approvalDate: "N/A" },
    { name: "Proyecto F", description: "Descripción del proyecto F", contractType: "Contrato Tipo 1", amount: "$2000", status: "En espera", approvalDate: "N/A" },
    { name: "Proyecto G", description: "Descripción del proyecto G", contractType: "Contrato Tipo 1", amount: "$7500", status: "Aprobado", approvalDate: "2023-11-01" },
    { name: "Proyecto H", description: "Descripción del proyecto H", contractType: "Contrato Tipo 2", amount: "$3000", status: "No aprobado", approvalDate: "N/A" },
    { name: "Proyecto I", description: "Descripción del proyecto I", contractType: "Contrato Tipo 3", amount: "$12000", status: "En espera", approvalDate: "N/A" },
    { name: "Proyecto J", description: "Descripción del proyecto J", contractType: "Contrato Tipo 1", amount: "$9000", status: "Aprobado", approvalDate: "2023-10-25" },
    { name: "Proyecto K", description: "Descripción del proyecto K", contractType: "Contrato Tipo 2", amount: "$4000", status: "En espera", approvalDate: "N/A" },
    { name: "Proyecto L", description: "Descripción del proyecto L", contractType: "Contrato Tipo 1", amount: "$5500", status: "Aprobado", approvalDate: "2023-09-30" },
    { name: "Proyecto M", description: "Descripción del proyecto M", contractType: "Contrato Tipo 3", amount: "$8500", status: "No aprobado", approvalDate: "N/A" },
    { name: "Proyecto N", description: "Descripción del proyecto N", contractType: "Contrato Tipo 1", amount: "$12000", status: "En espera", approvalDate: "N/A" },
    { name: "Proyecto O", description: "Descripción del proyecto O", contractType: "Contrato Tipo 2", amount: "$11000", status: "Aprobado", approvalDate: "2023-10-20" },
    { name: "Proyecto P", description: "Descripción del proyecto P", contractType: "Contrato Tipo 1", amount: "$9500", status: "No aprobado", approvalDate: "N/A" },
    { name: "Proyecto Q", description: "Descripción del proyecto Q", contractType: "Contrato Tipo 2", amount: "$3700", status: "En espera", approvalDate: "N/A" },
    { name: "Proyecto R", description: "Descripción del proyecto R", contractType: "Contrato Tipo 3", amount: "$6500", status: "Aprobado", approvalDate: "2023-11-07" },
    { name: "Proyecto S", description: "Descripción del proyecto S", contractType: "Contrato Tipo 1", amount: "$8100", status: "En espera", approvalDate: "N/A" },
    { name: "Proyecto T", description: "Descripción del proyecto T", contractType: "Contrato Tipo 2", amount: "$9200", status: "No aprobado", approvalDate: "N/A" }
];


// Mostrar formulario para agregar un nuevo proyecto
document.getElementById('addProjectBtn').addEventListener('click', () => {
    // Mostrar el modal
    document.getElementById('projectModal').style.display = 'block';
});

// Función para cerrar el modal
document.getElementById('closeModalBtn').addEventListener('click', () => {
    document.getElementById('projectModal').style.display = 'none';
});

// Función para guardar el proyecto ingresado
document.getElementById('submitProjectForm').addEventListener('click', () => {
    const name = document.getElementById('projectName').value;
    const description = document.getElementById('projectDescription').value;
    const contractType = document.getElementById('projectContractType').value;
    const amount = document.getElementById('projectAmount').value;
    const status = document.getElementById('projectStatus').value; // Obtener el estado seleccionado
    const approvalDate = (status === "Aprobado") ? new Date().toISOString().split('T')[0] : "N/A"; // Fecha solo si está aprobado

    if (name && description && contractType && amount && status) {
        const newProject = { name, description, contractType, amount, status, approvalDate };
        projects.push(newProject);
        renderProjects(); // Volver a renderizar
        document.getElementById('projectModal').style.display = 'none'; // Cerrar el modal
    } else {
        alert("Por favor, complete todos los campos.");
    }
});


function renderProjects(page = 1) {
    const approvedProjects = projects.filter(proj => proj.status === "Aprobado");
    const pendingProjects = projects.filter(proj => proj.status === "En espera" || proj.status === "No aprobado");

    const projectsPerPage = 5;
    const start = (page - 1) * projectsPerPage;
    const paginatedApprovedProjects = approvedProjects.slice(start, start + projectsPerPage);
    const paginatedPendingProjects = pendingProjects.slice(start, start + projectsPerPage);

    // Mostrar proyectos aprobados
    const projectsBody = document.getElementById('projectsBody');
    projectsBody.innerHTML = "";

    // Mostrar proyectos no aprobados
    const rejectedProjectsBody = document.getElementById('rejectedProjectsBody');
    rejectedProjectsBody.innerHTML = "";

    // Crear filas para cada proyecto   
    paginatedApprovedProjects.forEach(project => {
        const row = createProjectRow(project);
        projectsBody.appendChild(row);
    });

    // Paginación
    renderPagination(approvedProjects.length, page);
}  

// Crear una fila de proyecto
function createProjectRow(project) {
    const row = document.createElement('tr');
    row.className = "approved-project";
    row.innerHTML = `
        <td>${project.name}</td>
        <td>${project.amount}</td>
        <td>${project.status}</td>
        <td>${project.approvalDate}</td>
        <td><button class="deleteBtn">Eliminar</button></td>
    `;
    return row;
}

// Función para eliminar un proyecto
function deleteProject(projectName, currentPage) {
    projects = projects.filter(p => p.name !== projectName);
    renderProjects(currentPage); // Re-renderizar la página actual
}

// Función de paginación
function renderPagination(totalProjects, currentPage) {
    const pagination = document.getElementById("pagination");
    pagination.innerHTML = "";

    const totalPages = Math.ceil(totalProjects / 5);
    for (let i = 1; i <= totalPages; i++) {
        const button = createPaginationButton(i, currentPage);
        pagination.appendChild(button);
    }
}

// Crear botón de paginación
function createPaginationButton(pageNumber, currentPage) {
    const button = document.createElement("button");
    button.textContent = pageNumber;
    button.className = pageNumber === currentPage ? "active" : "";
    button.addEventListener("click", () => renderProjects(pageNumber));
    return button;
}

// Render inicial
renderProjects();
