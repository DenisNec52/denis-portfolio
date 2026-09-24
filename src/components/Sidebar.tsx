import { FolderGit2, Home, Mail, Menu, User, X, type LucideIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { profile } from "../data/profile";

const LINKS: { id: string; label: string; icon: LucideIcon }[] = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "Chi sono", icon: User },
  { id: "portfolio", label: "Progetti", icon: FolderGit2 },
  { id: "contact", label: "Contatti", icon: Mail },
];

// Highlights the section currently in view.
function useActiveSection() {
  const [active, setActive] = useState("home");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  return active;
}

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection();

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Chiudi menu" : "Apri menu"}
        className="fixed right-4 top-4 z-50 rounded-lg bg-skin p-2 text-white lg:hidden"
      >
        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-[270px] flex-col items-center justify-center border-r border-bg-soft bg-bg-card transition-transform duration-300 lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <a href="#home" onClick={() => setOpen(false)} className="mb-12 text-center text-3xl font-bold text-text-main">
          <span className="text-skin">D</span>enis
          <span className="mt-1 block text-sm font-normal text-text-soft">{profile.role}</span>
        </a>
        <nav>
          <ul className="space-y-2">
            {LINKS.map(({ id, label, icon: Icon }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 border-b border-bg-soft px-4 py-2 font-medium transition hover:text-skin ${
                    active === id ? "text-skin" : "text-text-main"
                  }`}
                >
                  <Icon className="h-5 w-5" /> {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}
