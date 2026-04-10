import { VscHome, VscMegaphone, VscBriefcase, VscSettingsGear } from "react-icons/vsc";
import Dock from "./Dock";

const LayoutDock = () => {
  const currentPath = typeof window !== "undefined" ? window.location.pathname : "";

  const items = [
    { icon: <VscHome size={20} />, label: "Home", href: "/" },
    { icon: <VscMegaphone size={20} />, label: "Talks", href: "/talks" },
    { icon: <VscBriefcase size={20} />, label: "Experience", href: "/experience" },
    { icon: <VscSettingsGear size={20} />, label: "Settings", href: "/settings" },
  ];

  return <Dock items={items} currentPath={currentPath} />;
};

export { LayoutDock };
