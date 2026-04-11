import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/jossdz",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/jossdz",
    icon: FaLinkedin,
  },
  {
    label: "X / Twitter",
    href: "https://x.com/jossdz",
    icon: FaXTwitter,
  },
  // {
  //   label: "YouTube",
  //   href: "https://youtube.com/@jossdz",
  //   icon: FaYoutube,
  // },
];

export function Footer() {
  return (
    <footer className="w-full bg-shadow-grey border-t border-white/5 pt-16 pb-28">
      <div className="container mx-auto px-6 flex flex-col items-center gap-6">
        <ul className="flex items-center gap-6">
          {socials.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="group flex flex-col items-center gap-1.5 transition-colors duration-200"
              >
                <Icon
                  size={22}
                  className="text-pale-slate group-hover:text-frosted-blue transition-colors duration-200"
                />
                <span className="text-xs font-medium text-pale-slate group-hover:text-ghost-white transition-colors duration-200">
                  {label}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <p className="text-xs text-pale-slate/60 tracking-wide">
          © {new Date().getFullYear()} Jose Carlos Correa
        </p>
      </div>
    </footer>
  );
}
