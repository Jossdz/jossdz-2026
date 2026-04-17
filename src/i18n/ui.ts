export const languages = {
  en: "English",
  es: "Español",
} as const;

export const defaultLang = "en" as const;

export const ui = {
  en: {
    "nav.home": "Home",
    "nav.talks": "Talks",
    "nav.experience": "Experience",
    "nav.settings": "Settings",
    "hero.subtitle": "Senior Frontend Engineer | React & TypeScript | Educator",
    "about.greeting": "Hey there 👋",
    "about.bio1":
      "I'm a Senior Frontend Engineer with 8 years of experience building web systems that reach millions of users — delivering robust, production-ready code with a strong focus on long-term quality and maintainability. I specialize in React, TypeScript, and Node.js, and I'm known for taking ownership of complex problems, raising team standards, and establishing the kind of shared best practices that make engineering cultures stronger.",
    "about.bio2":
      "I also mentor and teach. I've guided 230+ developers through fullstack engineering with JavaScript and TypeScript, and I design curriculum for industry professionals. Are you looking for someone who can own the frontend and elevate the team around them?",
    "about.cta.email": "Get in touch",
    "about.cta.linkedin": "Connect on LinkedIn",
    "techstack.title": "Tech Stack",
    "experience.title": "Experience",
    "experience.subtitle": "Roles, companies, and the work behind them.",
    "experience.description":
      "My professional journey, roles, and the projects I've worked on over the years. Content coming soon.",
    "talks.title": "Talks",
    "talks.subtitle": "Conferences, workshops, and presentations.",
    "talks.viewSlides": "View Slides",
    "settings.title": "Config",
    "settings.subtitle": "Preferences and configuration options.",
    "settings.language.title": "Language",
    "settings.language.description": "Select your preferred language for the site interface.",
  },
  es: {
    "nav.home": "Inicio",
    "nav.talks": "Charlas",
    "nav.experience": "Experiencia",
    "nav.settings": "Configuración",
    "hero.subtitle": "Ingeniero Frontend Senior | React & TypeScript | Educador",
    "about.greeting": "Hola 👋",
    "about.bio1":
      "Soy un Ingeniero Frontend Senior con 8 años de experiencia construyendo sistemas web que llegan a millones de usuarios — entregando código robusto y listo para producción con un fuerte enfoque en la calidad y mantenibilidad a largo plazo. Me especializo en React, TypeScript y Node.js, y soy conocido por tomar propiedad de problemas complejos, elevar los estándares del equipo y establecer las mejores prácticas compartidas que fortalecen las culturas de ingeniería.",
    "about.bio2":
      "También mentoreo y enseño. He guiado a más de 230 desarrolladores en ingeniería fullstack con JavaScript y TypeScript, y diseño currículum para profesionales de la industria. ¿Buscas a alguien que pueda liderar el frontend y elevar al equipo?",
    "about.cta.email": "Contáctame",
    "about.cta.linkedin": "Conectar en LinkedIn",
    "techstack.title": "Stack Tecnológico",
    "experience.title": "Experiencia",
    "experience.subtitle": "Roles, empresas y el trabajo detrás de ellos.",
    "experience.description":
      "Mi trayectoria profesional, roles y los proyectos en los que he trabajado a lo largo de los años. Contenido próximamente.",
    "talks.title": "Charlas",
    "talks.subtitle": "Conferencias, talleres y presentaciones.",
    "talks.viewSlides": "Ver Diapositivas",
    "settings.title": "Configuración",
    "settings.subtitle": "Preferencias y opciones de configuración.",
    "settings.language.title": "Idioma",
    "settings.language.description": "Selecciona tu idioma preferido para la interfaz del sitio.",
  },
} as const;

export type Lang = keyof typeof ui;
export type UIKey = keyof (typeof ui)[typeof defaultLang];
