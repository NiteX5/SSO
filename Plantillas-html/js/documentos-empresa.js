// Datos de ejemplo
const documents = [
    { id: 1, name: "Orden de Servicio", status: "pending" },
    { id: 2, name: "Inicio de Actividades", status: "approved" },
    { id: 3, name: "Declaración del Representante Legal", status: "inReview" },
    { id: 4, name: "Aprobación de Trabajo Excepcional", status: "approved" },
    { id: 5, name: "Programa SSO", status: "inReview" },
    { id: 6, name: "Matriz de Riesgo", status: "pending" },
    { id: 7, name: "Procedimiento de Trabajo", status: "inReview" },
    { id: 8, name: "Reunión de Inicio", status: "pending" },
    { id: 9, name: "Reglamento Interno", status: "pending" }
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
function renderTable(docs) {
    const tbody = document.getElementById('documentsTableBody');
    tbody.innerHTML = '';

    docs.forEach(doc => {
        const tr = document.createElement('tr');
        tr.className = 'border-b';
        tr.innerHTML = `
            <td class="p-2 font-medium">${doc.name}</td>
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
        `;
        tbody.appendChild(tr);
    });
}

// Función para filtrar documentos
function filterDocuments() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const statusFilter = document.getElementById('statusFilter').value;

    const filteredDocs = documents.filter(doc => {
        const matchesSearch = doc.name.toLowerCase().includes(searchTerm);
        const matchesFilter = statusFilter === 'all' || doc.status === statusFilter;
        return matchesSearch && matchesFilter;
    });

    renderTable(filteredDocs);
}

// Event listeners
document.getElementById('searchInput').addEventListener('input', filterDocuments);
document.getElementById('statusFilter').addEventListener('change', filterDocuments);

// Inicializar la tabla
renderTable(documents);