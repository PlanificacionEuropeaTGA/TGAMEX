// Traducciones para múltiples idiomas
const translations = {
    es: {
        // Navegación
        nav_home: "Inicio",
        nav_services: "Servicios",
        nav_about: "Nosotros",
        nav_contact: "Contacto",
        
        // Hero section
        hero_title: "Planificación Europea TGA",
        hero_subtitle: "Soluciones de Ingeniería para la Industria",
        discover_more: "Descubre Más",
        
        // Servicios
        our_services: "Nuestros Servicios",
        services_description: "Somos tu aliado en ingeniería. Diseñamos soluciones a medida para garantizar el éxito de tu proyecto.",
        
        service1_title: "Cumplimiento Normativo y Asistencia Técnica",
        service1_description: "Garantizamos el cumplimiento de todas las normativas aplicables y brindamos asistencia técnica especializada.",
        
        service2_title: "Supervisión y Gestión de Obras",
        service2_description: "Supervisión integral de proyectos de construcción e ingeniería con los más altos estándares de calidad.",
        
        service3_title: "Planificación y Preingeniería de Proyectos",
        service3_description: "Desarrollo de planes detallados y estudios de preingeniería para optimizar la ejecución de proyectos.",
        
        service4_title: "Gestión e Integración de Talento Especializado",
        service4_description: "Identificación, selección e integración de profesionales especializados para proyectos específicos.",
        
        // Footer
        all_rights: "Todos los derechos reservados.",
        navigation: "Navegación",
        contact: "Contacto",
        email: "Email"
    },
    
    en: {
        // Navigation
        nav_home: "Home",
        nav_services: "Services",
        nav_about: "About Us",
        nav_contact: "Contact",
        
        // Hero section
        hero_title: "European Planning TGA",
        hero_subtitle: "Engineering Solutions for Industry",
        discover_more: "Discover More",
        
        // Services
        our_services: "Our Services",
        services_description: "We are your engineering partner. We design customized solutions to guarantee the success of your project.",
        
        service1_title: "Regulatory Compliance and Technical Assistance",
        service1_description: "We guarantee compliance with all applicable regulations and provide specialized technical assistance.",
        
        service2_title: "Construction Supervision and Management",
        service2_description: "Comprehensive supervision of construction and engineering projects with the highest quality standards.",
        
        service3_title: "Project Planning and Pre-engineering",
        service3_description: "Development of detailed plans and pre-engineering studies to optimize project execution.",
        
        service4_title: "Specialized Talent Management and Integration",
        service4_description: "Identification, selection and integration of specialized professionals for specific projects.",
        
        // Footer
        all_rights: "All rights reserved.",
        navigation: "Navigation",
        contact: "Contact",
        email: "Email"
    },
    
    de: {
        // Navigation
        nav_home: "Startseite",
        nav_services: "Dienstleistungen",
        nav_about: "Über uns",
        nav_contact: "Kontakt",
        
        // Hero section
        hero_title: "Europäische Planung TGA",
        hero_subtitle: "Ingenieursdienstleistungen für die Industrie",
        discover_more: "Mehr entdecken",
        
        // Services
        our_services: "Unsere Dienstleistungen",
        services_description: "Wir sind Ihr Partner im Ingenieurwesen. Wir entwickeln maßgeschneiderte Lösungen, um den Erfolg Ihres Projekts zu garantieren.",
        
        service1_title: "Regulatorische Compliance und technische Unterstützung",
        service1_description: "Wir garantieren die Einhaltung aller geltenden Vorschriften und bieten spezialisierte technische Unterstützung.",
        
        service2_title: "Bauüberwachung und -management",
        service2_description: "Umfassende Überwachung von Bau- und Ingenieurprojekten mit höchsten Qualitätsstandards.",
        
        service3_title: "Projektplanung und Voringenieurwesen",
        service3_description: "Entwicklung detaillierter Pläne und Voringenieurstudien zur Optimierung der Projektausführung.",
        
        service4_title: "Spezialisiertes Talentmanagement und -integration",
        service4_description: "Identifikation, Auswahl und Integration spezialisierter Fachkräfte für spezifische Projekte.",
        
        // Footer
        all_rights: "Alle Rechte vorbehalten.",
        navigation: "Navigation",
        contact: "Kontakt",
        email: "E-Mail"
    }
};

// Función para obtener el idioma actual
function getCurrentLanguage() {
    return localStorage.getItem('selectedLanguage') || 'es';
}

// Función para establecer el idioma
function setLanguage(lang) {
    localStorage.setItem('selectedLanguage', lang);
    updatePageLanguage(lang);
    updateActiveLanguageButton(lang);
}

// Función para actualizar el contenido de la página
function updatePageLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Actualizar el atributo lang del documento
    document.documentElement.lang = lang;
}

// Función para actualizar el botón activo del selector de idioma
function updateActiveLanguageButton(lang) {
    const buttons = document.querySelectorAll('.language-selector button');
    buttons.forEach(button => {
        button.classList.remove('active');
        if (button.getAttribute('data-lang') === lang) {
            button.classList.add('active');
        }
    });
}

// Exportar funciones para uso global
window.translations = translations;
window.getCurrentLanguage = getCurrentLanguage;
window.setLanguage = setLanguage;
window.updatePageLanguage = updatePageLanguage;
window.updateActiveLanguageButton = updateActiveLanguageButton;

