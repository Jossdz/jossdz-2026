import React, { Suspense, lazy } from "react";
import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiNextdotjs,
  SiJavascript,
  SiRemix,
  SiReactrouter,
  SiStorybook,
  SiDocker,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiVite,
  SiWebflow,
  SiCloudflare,
  SiFigma,
  SiGitlab,
  SiRedux,
  SiReactquery,
  SiWebpack,
  SiNetlify,
  SiGithub,
  SiGit,
  SiJest,
  SiMocha,
  SiAngular,
  SiVercel,
  SiGatsby,
  SiGraphql,
  SiStyledcomponents,
  SiEslint,
  SiStripe,
} from "react-icons/si";
const LogoModel = lazy(() => import("@/components/LogoModel"));

type TechIcon = {
  name: string;
  color: string;
  icon?: React.ReactNode;
};

type Project = {
  label: string;
  image?: string;
  href?: string;
};

type Role = {
  title: string;
  period: string;
};

type Experience = {
  company: string;
  roles: Role[];
  location: string;
  modality: string;
  description: string | { en: string; es: string };
  tech: TechIcon[];
  projects: Project[];
  model?: string;
};

const experiences: Experience[] = [
  {
    model: "/TL.glb",
    company: "Team Liquid",
    roles: [
      { title: "Frontend Developer", period: "2021 — 2023" },
      { title: "Frontend Engineer", period: "2023 — 2026" },
    ],
    location: "Remote",
    modality: "Full-time",
    description: {
      en: "At Team Liquid, I grew from Frontend Developer to Frontend Engineer, helping build and scale fan-facing digital experiences used by millions globally. My work spanned pixel-perfect implementation, React and TypeScript modernization, component standardization, developer experience improvements, and the delivery of high-visibility projects like Liquid Vault and WoW Race to World First. I collaborated closely with teams across Design, Fan Support, Translations, backend, mobile, and frontend, and in my final stage there I took on direct stakeholder management for Webflow projects, leading the development of business-critical pages from request to launch.",
      es: "En Team Liquid, crecí de Frontend Developer a Frontend Engineer, ayudando a construir y escalar experiencias digitales para fans usadas por millones de personas en todo el mundo. Mi trabajo abarcó implementación pixel-perfect, modernización de React y TypeScript, estandarización de componentes, mejoras en la experiencia del desarrollador y la entrega de proyectos de alta visibilidad como Liquid Vault y WoW Race to World First. Colaboré estrechamente con equipos de Diseño, Fan Support, Traducciones, backend, mobile y frontend, y en mi etapa final asumí la gestión directa de stakeholders para proyectos en Webflow, liderando el desarrollo de páginas críticas para el negocio desde la solicitud hasta el lanzamiento.",
    },
    tech: [
      // Frontend
      { name: "React", color: "#61DAFB", icon: <SiReact /> },
      { name: "React Native", color: "#61DAFB", icon: <SiReact /> },
      { name: "TypeScript", color: "#3178C6", icon: <SiTypescript /> },
      { name: "React Router 7", color: "#CA4245", icon: <SiReactrouter /> },
      { name: "i18n", color: "#a6a6a8" },
      { name: "Storybook", color: "#FF4785", icon: <SiStorybook /> },
      { name: "Webflow", color: "#4353FF", icon: <SiWebflow /> },
      { name: "Figma", color: "#F24E1E", icon: <SiFigma /> },
      { name: "Redux", color: "#764ABC", icon: <SiRedux /> },
      { name: "TanStack Query", color: "#FF4154", icon: <SiReactquery /> },
      // Backend
      { name: "Node.js", color: "#339933", icon: <SiNodedotjs /> },
      { name: "Express", color: "#ffffff", icon: <SiExpress /> },
      { name: "MongoDB", color: "#47A248", icon: <SiMongodb /> },
      { name: "PostgreSQL", color: "#4169E1", icon: <SiPostgresql /> },
      // Bundlers
      { name: "Vite", color: "#646CFF", icon: <SiVite /> },
      { name: "Webpack", color: "#8DD6F9", icon: <SiWebpack /> },
      // Testing
      { name: "Playwright", color: "#2EAD33" },
      // Infra
      { name: "Docker", color: "#2496ED", icon: <SiDocker /> },
      { name: "Cloudflare", color: "#F48120", icon: <SiCloudflare /> },
      { name: "GitLab", color: "#FC6D26", icon: <SiGitlab /> },
    ],
    projects: [
      { label: "Team Liquid Page", href: "https://tl.gg", image: "/tlgg.png" },
      { label: "The Vault", href: "https://tl.gg/vault", image: "/tlvault.png" },
      {
        label: "Race To World First",
        href: "https://teamliquid.com/race-to-world-first",
        image: "/rwf.png",
      },
    ],
  },
  {
    model: "/IH.glb",
    company: "Ironhack",
    roles: [
      { title: "Web Dev Teaching Assistant", period: "2018 — 2019" },
      { title: "Web Dev Lead Teacher", period: "2019 — 2021" },
      { title: "Lead Instructor & Curriculum Designer", period: "2021 — 2022" },
    ],
    location: "Mexico City",
    modality: "Hybrid",
    description: {
      en: "At Ironhack, I progressed from Teacher Assistant to Lead Teacher and later B2B SME / Lead Teacher, taking on increasing responsibility across mentorship, curriculum design, and technical training. I helped guide students through full-stack development with the MERN stack, collaborated on curriculum creation with a global team, mentored over 231 developers, and later designed and delivered a B2B React Native and TypeScript program focused on software architecture, SOLID, TDD/BDD, and production-grade development practices.",
      es: "En Ironhack, avancé de Teaching Assistant a Lead Teacher y posteriormente a B2B SME / Lead Teacher, asumiendo responsabilidades crecientes en mentoría, diseño curricular y formación técnica. Guié a estudiantes en el desarrollo full-stack con el stack MERN, colaboré en la creación de currículo con un equipo global, mentoricé a más de 231 desarrolladores, y posteriormente diseñé e impartí un programa B2B de React Native y TypeScript enfocado en arquitectura de software, SOLID, TDD/BDD y prácticas de desarrollo a nivel producción.",
    },
    tech: [
      { name: "React", color: "#61DAFB", icon: <SiReact /> },
      { name: "JavaScript", color: "#F7DF1E", icon: <SiJavascript /> },
      { name: "HTML", color: "#E34F26" },
      { name: "CSS", color: "#1572B6" },
      { name: "Node.js", color: "#339933", icon: <SiNodedotjs /> },
      { name: "MongoDB", color: "#47A248", icon: <SiMongodb /> },
      { name: "Express", color: "#ffffff", icon: <SiExpress /> },
      { name: "Redux", color: "#764ABC", icon: <SiRedux /> },
      { name: "React Native", color: "#61DAFB", icon: <SiReact /> },
      { name: "Jest", color: "#C21325", icon: <SiJest /> },
      { name: "Mocha", color: "#8D6748", icon: <SiMocha /> },
      { name: "OOP", color: "#a6a6a8" },
      { name: "BDD", color: "#a6a6a8" },
      { name: "Git", color: "#F05032", icon: <SiGit /> },
      { name: "GitHub", color: "#ffffff", icon: <SiGithub /> },
      { name: "Netlify", color: "#00C7B7", icon: <SiNetlify /> },
      { name: "Angular", color: "#DD0031", icon: <SiAngular /> },
      { name: "Vercel", color: "#ffffff", icon: <SiVercel /> },
    ],
    projects: [
      { label: "Ironhack First Generation", image: "/ih-gen1.jpg" },
      { label: "Web Dev Curriculum Summit", image: "/ih-curriculum-summit.jpg" },
    ],
  },
  {
    company: "Platzi",
    roles: [{ title: "Course Creator and Instructor", period: "2019" }],
    location: "Mexico City",
    modality: "Full-time",
    description: {
      en: "I designed and taught this beginner-level course on Platzi, one of the largest tech education platforms in Latin America. The course covers building high-performance websites and web applications with Gatsby (a React-based framework), including GraphQL, styled-components, Stripe Checkout, and deploying to production with Netlify. It has 219 reviews with a rating of 4.5 / 5.",
      es: "Diseñé e impartí este curso de nivel principiante en Platzi, una de las plataformas de educación tecnológica más grandes de América Latina. El curso cubre la construcción de sitios web y aplicaciones web de alto rendimiento con Gatsby (un framework basado en React), incluyendo GraphQL, styled-components, Stripe Checkout y el despliegue a producción con Netlify. Cuenta con 219 reseñas y una calificación de 4.5 / 5.",
    },
    tech: [
      { name: "Gatsby JS", color: "#663399", icon: <SiGatsby /> },
      { name: "React", color: "#61DAFB", icon: <SiReact /> },
      { name: "GraphQL", color: "#E10098", icon: <SiGraphql /> },
      { name: "styled-components", color: "#DB7093", icon: <SiStyledcomponents /> },
      { name: "Gatsby CLI", color: "#663399", icon: <SiGatsby /> },
      { name: "ESLint", color: "#4B32C3", icon: <SiEslint /> },
      { name: "Stripe Checkout", color: "#635BFF", icon: <SiStripe /> },
      { name: "React Context API", color: "#61DAFB", icon: <SiReact /> },
      { name: "Netlify", color: "#00C7B7", icon: <SiNetlify /> },
    ],
    projects: [
      {
        label: "GatsbyJS Course",
        image: "/platzi-gatsby.png",
        href: "https://platzi.com/cursos/gatsby/por-que-gatsby-seguridad-y-velocidad/",
      },
    ],
  },
  {
    company: "Tech Stand Up",
    roles: [{ title: "Co-host & Creator", period: "2020" }],
    location: "Remote",
    modality: "Side project",
    description: {
      en: "Co-hosted Tech Stand Up, a Spanish-language podcast about software development, the tech industry, and professional experiences in the field. Produced 5 episodes over 6 weeks alongside co-host Diego, covering topics like React, SPA deployment tools, Deno, remote work, and esports.",
      es: "Co-presenté Tech Stand Up, un podcast en español sobre desarrollo de software, la industria tecnológica y experiencias de profesionales en el área. Produjimos 5 episodios en 6 semanas junto a Diego, cubriendo temas como React, herramientas de despliegue para SPAs, Deno, trabajo remoto y esports.",
    },
    tech: [],
    projects: [
      {
        label: "Tech Stand Up Podcast",
        href: "https://podcasts.apple.com/us/podcast/tech-stand-up/id1513334918",
        image:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts125/v4/81/80/55/818055b6-84c4-0d5d-eb25-642f4377568b/mza_9383109127697832384.jpg/300x300bb.webp",
      },
    ],
  },
  {
    company: "Freelance",
    roles: [{ title: "Independent Contractor", period: "2017 — Present" }],
    location: "Remote",
    modality: "Contract",
    description:
      "Partnered with startups and agencies to deliver production-grade web applications. Projects range from marketing sites to complex SPAs. Consistent focus on performance, maintainability, and shipping on time.",
    tech: [
      { name: "React", color: "#61DAFB", icon: <SiReact /> },
      { name: "Next.js", color: "#ffffff", icon: <SiNextdotjs /> },
      { name: "Remix", color: "#ffffff", icon: <SiRemix /> },
      { name: "TypeScript", color: "#3178C6", icon: <SiTypescript /> },
    ],
    projects: [{ label: "Client Projects" }, { label: "Consulting" }, { label: "Open Source" }],
  },
];

const cardBaseStyle: React.CSSProperties = {
  position: "relative",
  width: "100%",
  height: 120,
  borderRadius: 16,
  overflow: "hidden",
  backgroundColor: "rgba(177,229,242,0.06)",
  border: "1px solid rgba(255,255,255,0.08)",
};

function ProjectCard({ label, image, href }: Project) {
  const [hovered, setHovered] = React.useState(false);

  const inner = (
    <div
      style={cardBaseStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {image && (
        <img
          src={image}
          alt={label}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: hovered ? "scale(1.06)" : "scale(1)",
            transition: "transform 0.4s ease",
          }}
        />
      )}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(18,18,24,0.88) 0%, rgba(18,18,24,0.35) 50%, transparent 100%)",
        }}
      />
      <span
        style={{
          position: "absolute",
          bottom: 10,
          left: 12,
          right: 12,
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          color: "#e8e9f3",
          lineHeight: 1.3,
        }}
      >
        {label}
      </span>
    </div>
  );

  const wrapStyle: React.CSSProperties = { flex: "1 1 0", minWidth: 140 };

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="project-card-wrap"
        style={{ ...wrapStyle, textDecoration: "none" }}
      >
        {inner}
      </a>
    );
  }
  return (
    <div className="project-card-wrap" style={wrapStyle}>
      {inner}
    </div>
  );
}

function RoleProgression({ roles }: { roles: Role[] }) {
  if (roles.length === 1) {
    const r = roles[0];
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          marginBottom: 24,
          flexWrap: "wrap",
        }}
      >
        <span style={{ fontSize: 13, color: "#b1e5f2", fontWeight: 600, letterSpacing: "0.02em" }}>
          {r.title}
        </span>
        <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 12 }}>·</span>
        <span style={{ fontSize: 12, color: "#a6a6a8" }}>{r.period}</span>
      </div>
    );
  }

  return (
    <div
      style={{
        position: "relative",
        marginBottom: 24,
        paddingLeft: 20,
      }}
    >
      {/* Vertical connector line — left:9 centers the 1px line at x=9.5, matching dot centers at x≈9.5 */}
      <div
        style={{
          position: "absolute",
          left: 9,
          top: 15,
          bottom: 15,
          width: 1,
          background:
            "linear-gradient(to bottom, rgba(177,229,242,0.15), rgba(177,229,242,0.4), rgba(177,229,242,0.15))",
        }}
      />
      {roles.map((r, idx) => {
        const isLatest = idx === roles.length - 1;
        return (
          <div
            key={r.title}
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              gap: 12,
              paddingTop: idx === 0 ? 0 : 10,
              paddingBottom: idx === roles.length - 1 ? 0 : 10,
            }}
          >
            {/* Dot — left:-14 + half of 7px = -10.5, offset by paddingLeft:20 → center at x≈9.5 */}
            <div
              style={{
                position: "absolute",
                left: -14,
                width: 7,
                height: 7,
                borderRadius: "50%",
                backgroundColor: isLatest ? "#b1e5f2" : "rgba(177,229,242,0.35)",
                border: isLatest ? "1px solid rgba(177,229,242,0.6)" : "none",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontSize: 13,
                color: isLatest ? "#b1e5f2" : "#7a8a9a",
                fontWeight: isLatest ? 600 : 500,
                letterSpacing: "0.02em",
              }}
            >
              {r.title}
            </span>
            <span style={{ color: "rgba(255,255,255,0.15)", fontSize: 12 }}>·</span>
            <span style={{ fontSize: 12, color: isLatest ? "#a6a6a8" : "#5a6070" }}>
              {r.period}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function resolveDescription(description: Experience["description"], lang: string): string {
  if (typeof description === "string") return description;
  return lang === "es" ? description.es : description.en;
}

export default function ExperienceList({ lang = "en" }: { lang?: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
      {experiences.map((exp, i) => (
        <div key={exp.company}>
          {/* Experience section */}
          <div
            style={{
              paddingTop: 20,
              paddingBottom: 20,
            }}
          >
            {/* Company header */}
            {exp.model ? (
              <div style={{ marginBottom: 20 }}>
                <Suspense
                  fallback={<div style={{ width: "100%", height: 260, background: "#272635" }} />}
                >
                  <LogoModel path={exp.model} company={exp.company} />
                </Suspense>
              </div>
            ) : (
              <h2
                style={{
                  margin: 0,
                  marginBottom: 20,
                  fontSize: "clamp(3rem, 8vw, 7rem)",
                  fontWeight: 900,
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                  color: "#e8e9f3",
                }}
              >
                {exp.company}
              </h2>
            )}

            {/* Role progression */}
            <RoleProgression roles={exp.roles} />

            {/* Location / modality */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 24,
                flexWrap: "wrap",
              }}
            >
              <span style={{ fontSize: 12, color: "#a6a6a8" }}>{exp.location}</span>
              <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 12 }}>·</span>
              <span style={{ fontSize: 12, color: "#a6a6a8" }}>{exp.modality}</span>
            </div>

            {/* Description */}
            <div
              style={{
                borderRadius: 10,
                border: "1px solid rgba(255,255,255,0.08)",
                backgroundColor: "rgba(255,255,255,0.03)",
                padding: "16px 20px",
                marginBottom: 24,
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: 14,
                  color: "#c8c9d3",
                  lineHeight: 1.8,
                }}
              >
                {resolveDescription(exp.description, lang)}
              </p>
            </div>

            {/* Tech icons */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 20,
                flexWrap: "wrap",
              }}
            >
              {exp.tech.map((t) => (
                <div
                  key={t.name}
                  title={t.name}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "4px 10px",
                    borderRadius: 8,
                    border: "1px solid rgba(255,255,255,0.1)",
                    backgroundColor: "rgba(255,255,255,0.04)",
                    fontSize: 11,
                    color: t.color,
                    fontWeight: 600,
                    letterSpacing: "0.03em",
                  }}
                >
                  {t.icon && <span style={{ fontSize: 14 }}>{t.icon}</span>}
                  <span style={{ color: "#a6a6a8" }}>{t.name}</span>
                </div>
              ))}
            </div>

            {/* Project cards */}
            <div
              className={exp.projects.length === 1 ? "projects-single" : undefined}
              style={{
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
              }}
            >
              {exp.projects.map((p) => (
                <ProjectCard key={p.label} {...p} />
              ))}
            </div>
          </div>

          {/* Divider */}
          {i < experiences.length - 1 && (
            <div
              style={{
                height: 1,
                background:
                  "linear-gradient(to right, transparent, rgba(255,255,255,0.1) 20%, rgba(255,255,255,0.1) 80%, transparent)",
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
