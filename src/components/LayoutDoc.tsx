import { VscHome, VscMegaphone, VscBriefcase, VscSettingsGear } from "react-icons/vsc";
import Dock from "./Dock";

type Props = { lang?: string };

const LayoutDock = ({ lang = "en" }: Props) => {
  const currentPath = typeof window !== "undefined" ? window.location.pathname : "";

  const items = [
    { icon: <VscHome size={20} />, label: "Home", href: `/${lang}/` },
    { icon: <VscMegaphone size={20} />, label: "Talks", href: `/${lang}/talks` },
    { icon: <VscBriefcase size={20} />, label: "Experience", href: `/${lang}/experience` },
    { icon: <VscSettingsGear size={20} />, label: "Settings", href: `/${lang}/settings` },
  ];

  return <Dock items={items} currentPath={currentPath} />;
};

export { LayoutDock };
