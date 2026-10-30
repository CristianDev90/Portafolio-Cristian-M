'use strict';

/* ==========================================================================
   Cristian M — Portfolio
   All site copy in English and Spanish. Edit the values below to update text.
   ========================================================================== */

const translations = {
  en: {
    meta: {
      title: 'Cristian M — Freelance Web & App Developer',
      description:
        'Freelance web developer in Colombia. I build modern websites, online stores and mobile apps for small businesses and entrepreneurs.',
    },

    a11y: {
      skip: 'Skip to main content',
      mainNav: 'Main navigation',
      langGroup: 'Language',
      newTab: '(opens in a new tab)',
      menuOpen: 'Open menu',
      menuClose: 'Close menu',
    },

    nav: {
      projects: 'Projects',
      services: 'Services',
      about: 'About',
      contact: 'Contact',
    },

    hero: {
      eyebrow: 'Freelance web developer',
      titleStart: 'Websites, apps and online stores for your',
      titleHighlight: 'business',
      subtitle:
        'Modern, responsive websites, online stores and mobile apps for small businesses, entrepreneurs and independent professionals.',
      ctaProjects: 'View projects',
      ctaWhatsapp: 'Message me on WhatsApp',
      portraitAlt: 'Portrait of Cristian M',
    },

    projects: {
      eyebrow: 'My projects',
      title: 'Featured Project',
      more: 'More projects',
      vitria: {
        title: 'Vitria',
        kicker: 'Product catalog & orders',
        badge: 'Personal project',
        description:
          'A platform for small businesses to showcase their product catalog and manage orders, with customizable options per product such as flavors or sizes.',
        alt: 'Screenshot of the Vitria project',
      },
      store: {
        badge: 'Sample project',
        title: 'Sample online store',
        description:
          'Catálogo en línea de la tienda Vitria, creado para mostrar cómo funciona un negocio de ventas en línea.',
        alt: 'Captura de la tienda Vitria',
        previewLabel: 'Project preview',
      },
    },

    tags: {
      web: 'Web',
      catalog: 'Catalog',
      orders: 'Orders',
      demo: 'Demo',
    },

    services: {
      eyebrow: 'Services',
      title: 'What I Do',
      web: {
        title: 'Websites',
        description:
          'Business websites, landing pages and personal brands. Modern design and responsive on all devices.',
      },
      stores: {
        title: 'Online stores',
        description:
          'Online stores and product catalogs with easy management and a great user experience.',
      },
      apps: {
        title: 'Mobile apps',
        description:
          'Cross-platform mobile apps built with Flutter and Firebase for iOS and Android.',
      },
      maintenance: {
        title: 'Maintenance',
        description: 'Keep your website or app secure, updated and running smoothly.',
      },
    },

    about: {
      eyebrow: 'About me',
      title: "Hi, I'm Cristian M",
      p1: "I'm a web developer from Colombia and a systems engineering student. I build websites and apps for small businesses and entrepreneurs.",
      p2: 'I work with Flutter and Firebase, and I also run my own online business, so I know firsthand what it takes to sell and support customers online.',
      p3: 'I focus on clean code, modern design and user-friendly experiences.',
      photoAlt: 'Portrait of Cristian M',
      feature1: 'Clean code',
      feature2: 'Responsive design',
      feature3: 'Flutter & Firebase',
      feature4: 'Always learning',
    },

    contact: {
      eyebrow: 'Get in touch',
      title: "Let's work together",
      text: "Have a project in mind? Tell me what you need and I'll get back to you.",
      whatsapp: 'WhatsApp',
      email: 'Email me',
      placeholderNote:
        'Datos de contacto: WhatsApp +57 3145056080 · Email cristian.asepulveda08@gmail.com',
    },

    footer: {
      rights: 'All rights reserved.',
      backToTop: 'Back to top',
    },
  },

  es: {
    meta: {
      title: 'Cristian M — Desarrollador web y de apps freelance',
      description:
        'Desarrollador web freelance en Colombia. Creo sitios web modernos, tiendas en línea y apps móviles para pequeños negocios y emprendedores.',
    },

    a11y: {
      skip: 'Saltar al contenido principal',
      mainNav: 'Navegación principal',
      langGroup: 'Idioma',
      newTab: '(se abre en una pestaña nueva)',
      menuOpen: 'Abrir menú',
      menuClose: 'Cerrar menú',
    },

    nav: {
      projects: 'Proyectos',
      services: 'Servicios',
      about: 'Sobre mí',
      contact: 'Contacto',
    },

    hero: {
      eyebrow: 'Desarrollador web freelance',
      titleStart: 'Páginas web, apps y tiendas en línea para tu',
      titleHighlight: 'negocio',
      subtitle:
        'Sitios web modernos y adaptables, tiendas en línea y apps móviles para pequeños negocios, emprendedores y profesionales independientes.',
      ctaProjects: 'Ver proyectos',
      ctaWhatsapp: 'Escríbeme por WhatsApp',
      portraitAlt: 'Retrato de Cristian M',
    },

    projects: {
      eyebrow: 'Mis proyectos',
      title: 'Proyecto destacado',
      more: 'Más proyectos',
      vitria: {
        title: 'Vitria',
        kicker: 'Catálogo de productos y pedidos',
        badge: 'Proyecto personal',
        description:
          'Una plataforma para que pequeños negocios muestren su catálogo de productos y gestionen pedidos, con opciones personalizables por producto, como sabores o tallas.',
        alt: 'Captura del proyecto Vitria',
      },
      store: {
        badge: 'Proyecto de muestra',
        title: 'Tienda en línea de muestra',
        description:
          'Catálogo en línea de la tienda Vitria, creado para mostrar cómo funciona un negocio de ventas en línea.',
        alt: 'Captura de la tienda Vitria',
        previewLabel: 'Vista previa del proyecto',
      },
    },

    tags: {
      web: 'Web',
      catalog: 'Catálogo',
      orders: 'Pedidos',
      demo: 'Demo',
    },

    services: {
      eyebrow: 'Servicios',
      title: 'Lo que hago',
      web: {
        title: 'Sitios web',
        description:
          'Sitios web para negocios, landing pages y marcas personales. Diseño moderno y adaptable a todos los dispositivos.',
      },
      stores: {
        title: 'Tiendas en línea',
        description:
          'Tiendas en línea y catálogos de productos con una gestión sencilla y una gran experiencia de usuario.',
      },
      apps: {
        title: 'Apps móviles',
        description:
          'Apps móviles multiplataforma creadas con Flutter y Firebase para iOS y Android.',
      },
      maintenance: {
        title: 'Mantenimiento',
        description:
          'Mantén tu sitio web o app seguro, actualizado y funcionando sin problemas.',
      },
    },

    about: {
      eyebrow: 'Sobre mí',
      title: 'Hola, soy Cristian M',
      p1: 'Soy desarrollador web de Colombia y estudiante de ingeniería de sistemas. Creo sitios web y apps para pequeños negocios y emprendedores.',
      p2: 'Trabajo con Flutter y Firebase, y también tengo mi propio negocio en línea, así que sé de primera mano lo que implica vender y atender clientes por internet.',
      p3: 'Me enfoco en código limpio, diseño moderno y experiencias fáciles de usar.',
      photoAlt: 'Retrato de Cristian M',
      feature1: 'Código limpio',
      feature2: 'Diseño adaptable',
      feature3: 'Flutter y Firebase',
      feature4: 'Siempre aprendiendo',
    },

    contact: {
      eyebrow: 'Hablemos',
      title: 'Trabajemos juntos',
      text: '¿Tienes un proyecto en mente? Cuéntame qué necesitas y te responderé.',
      whatsapp: 'WhatsApp',
      email: 'Envíame un correo',
      placeholderNote:
        'Datos de contacto: WhatsApp +57 3145056080 · Email cristian.asepulveda08@gmail.com',
    },

    footer: {
      rights: 'Todos los derechos reservados.',
      backToTop: 'Volver arriba',
    },
  },
};

/* Expose the dictionary for js/main.js (classic scripts share this global). */
window.translations = translations;
