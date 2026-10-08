// Textos nuevos y ajustes (oct 2026). Se carga DESPUÉS de translations.js y ANTES de language-switcher.js
Object.assign(translations.es, {
  btn_quote: 'Solicita una cotización',
  btn_whatsapp: 'Escríbenos por WhatsApp',
  see_detail: 'Ver detalle',
  cta_home_desc: 'Cuéntanos sobre tu proyecto y te respondemos a la brevedad.',
  about_desc2: 'Nuestra experiencia, combinada con un equipo altamente cualificado, nos permite aportar valor real a cada proyecto, optimizando recursos, tiempos y resultados.',
  join_desc_new: 'Envíanos tu CV y cuéntanos en qué área te gustaría colaborar.',
  btn_send_cv: 'Enviar mi CV',
  phone: 'Teléfono',
  form_title: 'Cuéntanos de tu proyecto',
  form_name: 'Nombre',
  form_company: 'Empresa',
  form_service: 'Servicio de interés',
  form_service_any: 'Aún no lo sé',
  form_message: 'Mensaje',
  form_send: 'Enviar por WhatsApp',
  form_note: 'Al enviar se abrirá WhatsApp con tu mensaje listo para mandar.',
  wa_float_title: 'Escríbenos por WhatsApp',
  wa_greeting: 'Hola, les escribo desde tgamex.com.',
  wa_name: 'Nombre', wa_company: 'Empresa', wa_service: 'Servicio de interés', wa_message: 'Mensaje'
});
Object.assign(translations.en, {
  btn_quote: 'Request a quote',
  btn_whatsapp: 'Message us on WhatsApp',
  see_detail: 'See details',
  cta_home_desc: 'Tell us about your project and we will get back to you shortly.',
  about_desc2: 'Our experience, combined with a highly qualified team, allows us to bring real value to each project, optimizing resources, time, and results.',
  join_desc_new: 'Send us your résumé and tell us which area you would like to work in.',
  btn_send_cv: 'Send my résumé',
  phone: 'Phone',
  form_title: 'Tell us about your project',
  form_name: 'Name',
  form_company: 'Company',
  form_service: 'Service of interest',
  form_service_any: 'Not sure yet',
  form_message: 'Message',
  form_send: 'Send via WhatsApp',
  form_note: 'WhatsApp will open with your message ready to send.',
  wa_float_title: 'Message us on WhatsApp',
  wa_greeting: 'Hello, I am writing from tgamex.com.',
  wa_name: 'Name', wa_company: 'Company', wa_service: 'Service of interest', wa_message: 'Message'
});
Object.assign(translations.de, {
  btn_quote: 'Angebot anfordern',
  btn_whatsapp: 'Schreiben Sie uns per WhatsApp',
  see_detail: 'Details ansehen',
  cta_home_desc: 'Erzählen Sie uns von Ihrem Projekt – wir melden uns umgehend bei Ihnen.',
  about_desc2: 'Unsere Erfahrung und unser hochqualifiziertes Team ermöglichen es uns, in jedem Projekt echten Mehrwert zu schaffen und Ressourcen, Zeit und Ergebnisse zu optimieren.',
  join_desc_new: 'Senden Sie uns Ihren Lebenslauf und teilen Sie uns mit, in welchem Bereich Sie mitarbeiten möchten.',
  btn_send_cv: 'Lebenslauf senden',
  phone: 'Telefon',
  form_title: 'Erzählen Sie uns von Ihrem Projekt',
  form_name: 'Name',
  form_company: 'Unternehmen',
  form_service: 'Gewünschte Dienstleistung',
  form_service_any: 'Noch unklar',
  form_message: 'Nachricht',
  form_send: 'Per WhatsApp senden',
  form_note: 'WhatsApp öffnet sich mit Ihrer vorbereiteten Nachricht.',
  wa_float_title: 'Schreiben Sie uns per WhatsApp',
  wa_greeting: 'Guten Tag, ich schreibe Ihnen über tgamex.com.',
  wa_name: 'Name', wa_company: 'Unternehmen', wa_service: 'Gewünschte Dienstleistung', wa_message: 'Nachricht'
});

document.addEventListener('DOMContentLoaded', function () {
  var WA_NUMBER = '5212221734899'; // WhatsApp de contacto

  function currentLang() {
    try { return localStorage.getItem('tga-language') || 'es'; } catch (e) { return 'es'; }
  }

  // Mantener el atributo lang de la página acorde al idioma elegido
  document.documentElement.lang = currentLang();
  document.querySelectorAll('.language-selector button').forEach(function (b) {
    b.addEventListener('click', function () {
      document.documentElement.lang = b.getAttribute('data-lang');
    });
  });

  // Formulario de contacto: abre WhatsApp con el mensaje armado
  var form = document.getElementById('wa-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var t = translations[currentLang()] || translations.es;
      var sel = document.getElementById('f-servicio');
      var servicio = sel.value ? sel.options[sel.selectedIndex].text : '';
      var lines = [t.wa_greeting, t.wa_name + ': ' + document.getElementById('f-nombre').value.trim()];
      var empresa = document.getElementById('f-empresa').value.trim();
      if (empresa) lines.push(t.wa_company + ': ' + empresa);
      if (servicio) lines.push(t.wa_service + ': ' + servicio);
      lines.push(t.wa_message + ': ' + document.getElementById('f-mensaje').value.trim());
      window.open('https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(lines.join('\n')), '_blank', 'noopener');
    });
  }
});
