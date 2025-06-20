// Script para el selector de idioma
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar el idioma
    let currentLang = localStorage.getItem('tga-language') || 'es';
    
    // Aplicar el idioma al cargar la página
    applyLanguage(currentLang);
    
    // Marcar el botón del idioma activo
    updateActiveLanguageButton(currentLang);
    
    // Agregar event listeners a los botones de idioma
    document.querySelectorAll('.language-selector button').forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            localStorage.setItem('tga-language', lang);
            applyLanguage(lang);
            updateActiveLanguageButton(lang);
        });
    });
});

// Función para aplicar el idioma seleccionado
function applyLanguage(lang) {
    // Recorrer todos los elementos con atributo data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        
        // Si la clave existe en las traducciones, actualizar el contenido
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
    
    // Actualizar atributos title y placeholder si existen
    document.querySelectorAll('[data-i18n-title]').forEach(element => {
        const key = element.getAttribute('data-i18n-title');
        if (translations[lang] && translations[lang][key]) {
            element.setAttribute('title', translations[lang][key]);
        }
    });
    
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.setAttribute('placeholder', translations[lang][key]);
        }
    });
}

// Función para actualizar el botón de idioma activo
function updateActiveLanguageButton(lang) {
    document.querySelectorAll('.language-selector button').forEach(button => {
        if (button.getAttribute('data-lang') === lang) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}
