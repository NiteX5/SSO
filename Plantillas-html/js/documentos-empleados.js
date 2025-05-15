// Datos de ejemplo
const employees = [
    {
        id: 1,
        name: "Juan Pérez",
        documents: [
            { id: 1, name: "Tarjeta de Identificación", status: "approved" },
            { id: 2, name: "Certificado de Entrenamiento de Seguridad", status: "pending" },
            { id: 3, name: "Examen Médico", status: "inReview" },
        ]
    },
    {
        id: 2,
        name: "María García",
        documents: [
            { id: 4, name: "Tarjeta de Identificación", status: "approved" },
            { id: 5, name: "Certificado de Entrenamiento de Seguridad", status: "approved" },
            { id: 6, name: "Examen Médico", status: "approved" },
        ]
    }
];

// Función para obtener el color de fondo del badge según el estado
function getStatusBadgeClass(status) {
    const baseClasses = "inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold";
    switch (status) {
        case "pending":
            return `${baseClasses} bg-red-100 text-red-800`;
        case "inReview":
            return `${baseClasses} bg-yellow-100 text-yellow-800`;
        case "approved":
            return `${baseClasses} bg-green-100 text-green-800`;
        case "rejected":
            return `${baseClasses} bg-gray-100 text-gray-800`;
        default:
            return `${baseClasses} bg-gray-100 text-gray-800`;
    }
}

// Función para traducir el estado
function translateStatus(status) {
    const translations = {
        pending: "Pendiente",
        inReview: "En Revisión",
        approved: "Aprobado",
        rejected: "Rechazado"
    };
    return translations[status] || status;
}

// Función para renderizar la tabla
function renderTable(emps) {
    const tbody = document.getElementById('employeesTableBody');
    tbody.innerHTML = '';

    emps.forEach(employee => {
        const isAllApproved = employee.documents.every(doc => doc.status === "approved");
        
        const tr = document.createElement('tr');
        tr.className = 'border-b';
        tr.innerHTML = `
            <td class="p-2 font-medium">${employee.name}</td>
            <td class="p-2">
                <span class="${getStatusBadgeClass(isAllApproved ? 'approved' : 'pending')}">
                    ${isAllApproved ? 'Aprobado' : 'Pendiente'}
                </span>
            </td>
            <td class="p-2">
                <button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-8 w-8 p-0 border-0" onclick="toggleEmployeeDocuments(${employee.id})">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                </button>
            </td>
        `;
        tbody.appendChild(tr);

        // Crear fila oculta para documentos
        const docRow = document.createElement('tr');
        docRow.id = `docs-${employee.id}`;
        docRow.className = 'hidden';
        docRow.innerHTML = `
            <td colspan="3" class="p-0">
                <table class="w-full">
                    <thead>
                        <tr class="bg-gray-50">
                            <th class="p-2 text-left">Nombre del Documento</th>
                            <th class="p-2 text-left">Estado</th>
                            <th class="p-2 text-left">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${employee.documents.map(doc => `
                            <tr class="border-t">
                                <td class="p-2 pl-8">${doc.name}</td>
                                <td class="p-2">
                                    <span class="${getStatusBadgeClass(doc.status)}">
                                        ${translateStatus(doc.status)}
                                    </span>
                                </td>
                                <td class="p-2">
                                    <button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3">
                                        ${doc.status === 'pending' ? 'Subir' : 'Ver'}
                                    </button>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </td>
        `;
        tbody.appendChild(docRow);
    });
}

// Función para alternar la visibilidad de los documentos
function toggleEmployeeDocuments(employeeId) {
    const docsRow = document.getElementById(`docs-${employeeId}`);
    docsRow.classList.toggle('hidden');
}

// Función para filtrar empleados
function filterEmployees() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    const filteredEmps = employees.filter(emp => 
        emp.name.toLowerCase().includes(searchTerm)
    );

    renderTable(filteredEmps);
}

// Event listeners
document.getElementById('searchInput').addEventListener('input', filterEmployees);

// Inicializar la tabla
renderTable(employees);