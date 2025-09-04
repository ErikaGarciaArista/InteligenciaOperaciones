
// ================================
// 📌 Toggle Hamburguesa (abrir/cerrar sidebar en móviles)
// ================================
const toggle = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".sidebar");

if (toggle) {
    toggle.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    });
}

// ================================
// 📌 Tabs y contenido
// ================================
const tabs = document.querySelectorAll(".tab-link");     // todas las pestañas
const contents = document.querySelectorAll(".tab-content"); // todos los contenidos
const pageTitle = document.querySelector(".page-title"); // título en la barra

// Función para actualizar el título de la página
function updatePageTitle() {
    const activeTab = document.querySelector(".tab-link.active");
    if (activeTab && pageTitle) {
    const tabText = activeTab.textContent.trim();
    pageTitle.textContent = tabText;
    }
}

// Establecer título inicial al cargar
updatePageTitle();

// Asignar eventos de click a las pestañas
tabs.forEach(tab => {
    tab.addEventListener("click", () => {
    // Quitar 'active' de todas las pestañas y contenidos
    tabs.forEach(t => t.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));

    // Activar pestaña clicada y su contenido
    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");

    // Actualizar título
    updatePageTitle();

    // 🔹 Cierra el menú en móviles después de seleccionar una pestaña
    if (window.innerWidth <= 768 && sidebar.classList.contains("active")) {
        sidebar.classList.remove("active");
    }
    });
});

