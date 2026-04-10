import { VscLinkExternal } from "react-icons/vsc";
import { MdLocationOn } from "react-icons/md";

type Talk = {
  title: string;
  place: string;
  date: string;
  description: string;
  slides: string | null;
};

const talks: Talk[] = [
  {
    title: "Remix and the User Experience",
    place: "Wizeline CDMX",
    date: "2022-05-25",
    description:
      "Tools that Remix puts at our disposal to offer users an amazing experience and developers the easiest way to achieve great UX without much effort.",
    slides: "https://remix-gm8fezpok-joss.vercel.app",
  },
  {
    title: "Sanity and Remix",
    place: "Remix Mexico",
    date: "2022-04-20",
    description: "Intro to Sanity as a headless CMS and how it pairs with Remix for full-stack development.",
    slides: "https://sanity-mix.vercel.app/",
  },
  {
    title: "Programming in Pandemic Times",
    place: "AwesomeFest",
    date: "2020-12-10",
    description: "Why programming is cool — and more relevant than ever — during pandemic times.",
    slides:
      "https://www.canva.com/design/DAEPy1bRvhc/wF-o8w-y_Szw8lfxqsJXUA/view?utm_content=DAEPy1bRvhc&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton",
  },
  {
    title: "Javascript Intro",
    place: "Talent Land",
    date: "2020-05-25",
    description:
      "Introduction to JavaScript as a programming language — what can you do with JS in 2020?",
    slides: "https://introjs.now.sh/#0",
  },
  {
    title: "React Intro",
    place: "Bedu",
    date: "2019-04-01",
    description:
      "React is the JavaScript library eating the web. Learn how to build your first single page application with this powerful tool.",
    slides: "https://ireact.now.sh/#0",
  },
  {
    title: "Programming as a Professional Career",
    place: "Cecytem",
    date: "2019-04-01",
    description:
      "Vocational guidance talk for high school students on what it is like to take programming as a professional career.",
    slides: "https://progprofesional.now.sh/#0",
  },
  {
    title: "Learn to Code",
    place: "Ironhack Mex",
    date: "2019-02-17",
    description:
      "Breaking the incorrect perception that programming is complex or only for prodigies. Programming is for everyone.",
    slides: "https://programacion-ih.now.sh/#0",
  },
  {
    title: "Redux Intro",
    place: "Bedu",
    date: "2018-12-23",
    description:
      "Friendly introduction to the main state management tool for complex JavaScript apps — Redux teaches a lot on its own.",
    slides: "https://intro-a-redux-bfkjqoawjs.now.sh/#0",
  },
  {
    title: "State Management in Web Apps",
    place: "Bedu",
    date: "2018-12-01",
    description:
      "Native and external tools for managing state in React applications, with their benefits and use cases.",
    slides: "https://dist-akaozitoxf.now.sh/#0",
  },
  {
    title: "Apps with Netlify, Apollo & GraphQL",
    place: "Facebook Dev. Circles",
    date: "2018-11-11",
    description:
      "GraphQL proposes a new scheme for web apps. Netlify is the most accessible way to enter this world.",
    slides: "https://apollonetlify.now.sh/",
  },
  {
    title: "How to Get Started in React",
    place: "Ironhack Mex",
    date: "2018-11-03",
    description:
      "People expect too much from React. React is not a magic tool — it is a simple JavaScript library, and that is its strength.",
    slides: "https://iniciar-con-react.now.sh/",
  },
  {
    title: "React Intro",
    place: "Ironhack Mex",
    date: "2018-04-01",
    description:
      "First intro talk to React, the Facebook library for building UI components. Reactive, modern, and super useful for your next project.",
    slides: "https://slides.com/jossdz/ihreact",
  },
];

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    timeZone: "UTC",
  });
}

export default function TalksGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {talks.map((talk, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            flexDirection: "column",
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.1)",
            backgroundColor: "rgba(255,255,255,0.05)",
            transition: "border-color 0.2s, background-color 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(177,229,242,0.35)";
            (e.currentTarget as HTMLDivElement).style.backgroundColor = "rgba(255,255,255,0.08)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.1)";
            (e.currentTarget as HTMLDivElement).style.backgroundColor = "rgba(255,255,255,0.05)";
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: "16px 20px 14px",
              borderBottom: "1px solid rgba(255,255,255,0.07)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "12px",
            }}
          >
            <span
              style={{
                fontSize: "10px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "#b1e5f2",
                backgroundColor: "rgba(177,229,242,0.1)",
                border: "1px solid rgba(177,229,242,0.2)",
                padding: "3px 10px",
                borderRadius: "999px",
                maxWidth: "60%",
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
                minWidth: 0,
              }}
            >
              <MdLocationOn size={11} style={{ flexShrink: 0 }} />
              <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {talk.place}
              </span>
            </span>
            <span
              style={{
                fontSize: "11px",
                color: "#a6a6a8",
                flexShrink: 0,
              }}
            >
              {formatDate(talk.date)}
            </span>
          </div>

          {/* Body */}
          <div
            style={{
              padding: "16px 20px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              flex: 1,
            }}
          >
            <h3
              style={{
                margin: 0,
                fontSize: "14px",
                fontWeight: 600,
                color: "#e8e9f3",
                lineHeight: 1.4,
              }}
            >
              {talk.title}
            </h3>
            <p
              style={{
                margin: 0,
                fontSize: "12px",
                color: "#a6a6a8",
                lineHeight: 1.7,
                flex: 1,
              }}
            >
              {talk.description}
            </p>
          </div>

          {/* Footer */}
          {talk.slides && (
            <div style={{ padding: "0 20px 18px" }}>
              <a
                href={talk.slides}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#272635",
                  backgroundColor: "#b1e5f2",
                  padding: "6px 14px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  transition: "background-color 0.15s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#d6f3fb";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#b1e5f2";
                }}
              >
                <VscLinkExternal size={11} />
                View Slides
              </a>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
