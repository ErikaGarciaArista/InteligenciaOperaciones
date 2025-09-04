// Selecciona todos los elementos de las pestañas
const tabs = document.querySelectorAll('.tab-link');
// Selecciona todos los elementos de contenido
const contents = document.querySelectorAll('.tab-content');
// Selecciona el h1 de la barra superior
const pageTitle = document.querySelector('.page-title');

// Función para actualizar el título de la página
function updatePageTitle() {
    // Busca la pestaña que tiene la clase 'active'
    const activeTab = document.querySelector('.tab-link.active');
    if (activeTab) {
        // Obtiene el texto de la pestaña (sin el ícono)
        const tabText = activeTab.textContent.trim();
        // Asigna el texto al h1 del título
        pageTitle.textContent = tabText;
    }
}

// Llama a la función al cargar la página para establecer el título inicial
updatePageTitle();

// Itera sobre cada pestaña para agregarle un 'event listener'
tabs.forEach(tab => { 
    tab.addEventListener('click', () => {
        // Remueve la clase 'active' de todas las pestañas y contenidos
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));
        
        // Agrega la clase 'active' a la pestaña clicada
        tab.classList.add('active');
        // Agrega la clase 'active' al contenido correspondiente
        document.getElementById(tab.dataset.tab).classList.add('active');
        
        // **Actualiza el título de la barra superior**
        updatePageTitle();
    });
});