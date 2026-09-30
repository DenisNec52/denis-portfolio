import { FolderGit2, Home, Mail, Menu, Route, User, X, type LucideIcon } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router";
import { profile } from "../data/profile";

const LINKS: { to: string; label: string; icon: LucideIcon; isActive: (path: string, hash: string) => boolean }[] = [
  { to: "/", label: "Home", icon: Home, isActive: (p, h) => p === "/" && h !== "#contact" },
  { to: "/chi-sono", label: "Chi sono", icon: User, isActive: (p) => p === "/chi-sono" },
  { to: "/progetti", label: "Progetti", icon: FolderGit2, isActive: (p) => p.startsWith("/progetti") },
  { to: "/percorso", label: "Percorso", icon: Route, isActive: (p) => p === "/percorso" },
  { to: "/#contact", label: "Contatti", icon: Mail, isActive: (p, h) => p === "/" && h === "#contact" },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const { pathname, hash } = useLocation();
  const path = pathname.replace(/(.)\/$/, "$1");

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
        <Link to="/" onClick={() => setOpen(false)} className="mb-12 text-center text-3xl font-bold text-text-main">
          <span className="text-skin">D</span>enis
          <span className="mt-1 block text-sm font-normal text-text-soft">{profile.role}</span>
        </Link>
        <nav aria-label="Menu principale">
          <ul className="space-y-2">
            {LINKS.map(({ to, label, icon: Icon, isActive }) => {
              const active = isActive(path, hash);
              return (
                <li key={to}>
                  <Link
                    to={to}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-center gap-3 border-b border-bg-soft px-4 py-2 font-medium transition hover:text-skin ${
                      active ? "text-skin" : "text-text-main"
                    }`}
                  >
                    <Icon className="h-5 w-5" /> {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
}
