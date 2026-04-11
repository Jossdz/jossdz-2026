import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiGraphql,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiRemix,
} from "react-icons/si";
import LogoModel from "@/components/LogoModel";

type TechIcon = {
  name: string;
  color: string;
  icon: React.ReactNode;
};

type Experience = {
  company: string;
  role: string;
  location: string;
  modality: string;
  period: string;
  description: string;
  tech: TechIcon[];
  projects: { label: string }[];
  model?: string;
};

const experiences: Experience[] = [
  {
    model: "/TL.glb",
    company: "Team Liquid",
    role: "Senior Frontend Engineer",
    location: "Remote",
    modality: "Full-time",
    period: "2022 — Present",
    description:
      "Building web systems for millions of esports fans across team.liquid.net and related properties. Led frontend architecture decisions, introduced shared component libraries, and drove performance improvements that cut load times across key pages.",
    tech: [
      { name: "React", color: "#61DAFB", icon: <SiReact /> },
      { name: "TypeScript", color: "#3178C6", icon: <SiTypescript /> },
      { name: "GraphQL", color: "#E10098", icon: <SiGraphql /> },
      { name: "Node.js", color: "#339933", icon: <SiNodedotjs /> },
    ],
    projects: [{ label: "team.liquid.net" }, { label: "Player Hub" }, { label: "Match Center" }],
  },
  {
    model: "/IH.glb",
    company: "Ironhack",
    role: "Lead Instructor & Curriculum Designer",
    location: "Mexico City",
    modality: "Hybrid",
    period: "2018 — 2022",
    description:
      "Led fullstack engineering bootcamp cohorts, mentored 230+ developers across multiple generations. Designed and evolved curriculum covering JavaScript, React, Node.js, and modern web architecture. Shaped the learning culture and raised technical standards across the program.",
    tech: [
      { name: "JavaScript", color: "#F7DF1E", icon: <SiJavascript /> },
      { name: "React", color: "#61DAFB", icon: <SiReact /> },
      { name: "Node.js", color: "#339933", icon: <SiNodedotjs /> },
      { name: "TypeScript", color: "#3178C6", icon: <SiTypescript /> },
    ],
    projects: [
      { label: "Web Dev Bootcamp" },
      { label: "Curriculum v3" },
      { label: "Mentor Program" },
    ],
  },
  {
    company: "Patzi",
    role: "Frontend Engineer",
    location: "Mexico City",
    modality: "Full-time",
    period: "2021 — 2022",
    description:
      "Contributed to building the core product interface for a fintech startup. Worked closely with design and backend teams to deliver fast, accessible user experiences. Helped establish frontend conventions early in the product lifecycle.",
    tech: [
      { name: "React", color: "#61DAFB", icon: <SiReact /> },
      { name: "TypeScript", color: "#3178C6", icon: <SiTypescript /> },
      { name: "Next.js", color: "#ffffff", icon: <SiNextdotjs /> },
      { name: "Tailwind", color: "#38BDF8", icon: <SiTailwindcss /> },
    ],
    projects: [{ label: "Dashboard" }, { label: "Onboarding Flow" }, { label: "Mobile Web" }],
  },
  {
    company: "Freelance",
    role: "Independent Contractor",
    location: "Remote",
    modality: "Contract",
    period: "2017 — Present",
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

function DiamondPlaceholder() {
  return (
    // 3D model placeholder — replace with Three.js canvas
    <div
      aria-hidden="true"
      style={{
        width: 64,
        height: 64,
        border: "2px solid rgba(255,255,255,0.35)",
        borderRadius: 6,
        transform: "rotate(45deg)",
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    />
  );
}

function ProjectCard({ label }: { label: string }) {
  return (
    <div
      style={{
        flex: "1 1 0",
        minWidth: 120,
        height: 80,
        border: "1.5px dashed rgba(177,229,242,0.3)",
        borderRadius: 12,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(177,229,242,0.04)",
        color: "rgba(177,229,242,0.4)",
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: "0.05em",
        textTransform: "uppercase",
      }}
    >
      {label}
    </div>
  );
}

export default function ExperienceList({ lang = "en" }: { lang?: string }) {
  void lang;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
      {experiences.map((exp, i) => (
        <div key={exp.company}>
          {/* Experience section */}
          <div
            style={{
              paddingTop: 64,
              paddingBottom: 64,
            }}
          >
            {/* Company header */}
            {exp.model ? (
              <div style={{ marginBottom: 20 }}>
                <LogoModel path={exp.model} company={exp.company} />
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 28,
                  marginBottom: 20,
                }}
              >
                <DiamondPlaceholder />
                <h2
                  style={{
                    margin: 0,
                    fontSize: "clamp(3rem, 8vw, 7rem)",
                    fontWeight: 900,
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                    color: "#e8e9f3",
                  }}
                >
                  {exp.company}
                </h2>
              </div>
            )}

            {/* Role / location / period */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 24,
                flexWrap: "wrap",
              }}
            >
              <span
                style={{
                  fontSize: 13,
                  color: "#b1e5f2",
                  fontWeight: 600,
                  letterSpacing: "0.02em",
                }}
              >
                {exp.role}
              </span>
              <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 12 }}>·</span>
              <span style={{ fontSize: 12, color: "#a6a6a8" }}>{exp.location}</span>
              <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 12 }}>·</span>
              <span style={{ fontSize: 12, color: "#a6a6a8" }}>{exp.modality}</span>
              <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 12 }}>·</span>
              <span style={{ fontSize: 12, color: "#a6a6a8" }}>{exp.period}</span>
            </div>

            {/* Description */}
            <div
              style={{
                borderRadius: 10,
                border: "1px solid rgba(255,255,255,0.08)",
                backgroundColor: "rgba(255,255,255,0.03)",
                padding: "16px 20px",
                marginBottom: 24,
                maxWidth: 760,
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
                {exp.description}
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
                  <span style={{ fontSize: 14 }}>{t.icon}</span>
                  <span style={{ color: "#a6a6a8" }}>{t.name}</span>
                </div>
              ))}
            </div>

            {/* Project cards */}
            <div
              style={{
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
              }}
            >
              {exp.projects.map((p) => (
                <ProjectCard key={p.label} label={p.label} />
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
