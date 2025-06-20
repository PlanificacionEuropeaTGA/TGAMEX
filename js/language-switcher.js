// Funcionalidad del selector de idioma
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar el idioma al cargar la página
    const currentLang = getCurrentLanguage();
    updatePageLanguage(currentLang);
    updateActiveLanguageButton(currentLang);
    
    // Agregar event listeners a los botones de idioma
    const languageButtons = document.querySelectorAll('.language-selector button');
    
    languageButtons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedLang = this.getAttribute('data-lang');
            
            // Agregar efecto de transición
            document.body.classList.add('language-transition');
            
            setTimeout(() => {
                setLanguage(selectedLang);
                document.body.classList.remove('language-transition');
                document.body.classList.add('loaded');
            }, 150);
            
            // Efecto visual en el botón
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);
        });
        
        // Efecto hover mejorado
        button.addEventListener('mouseenter', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'scale(1.05)';
            }
        });
        
        button.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'scale(1)';
            }
        });
    });
    
    // Detectar cambio de idioma del navegador
    window.addEventListener('languagechange', function() {
        const browserLang = navigator.language.substring(0, 2);
        if (translations[browserLang]) {
            setLanguage(browserLang);
        }
    });
    
    // Función para cambiar idioma programáticamente
    window.changeLanguage = function(lang) {
        if (translations[lang]) {
            setLanguage(lang);
        } else {
            console.warn(`Idioma '${lang}' no disponible`);
        }
    };
    
    // Función para obtener todas las traducciones disponibles
    window.getAvailableLanguages = function() {
        return Object.keys(translations);
    };
    
    // Función para obtener la traducción de una clave específica
    window.getTranslation = function(key, lang = null) {
        const targetLang = lang || getCurrentLanguage();
        return translations[targetLang] && translations[targetLang][key] 
            ? translations[targetLang][key] 
            : key;
    };
});

