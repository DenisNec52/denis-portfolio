import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import Sidebar from "./Sidebar";
import StyleSwitcher from "./StyleSwitcher";

// A ogni cambio pagina: in cima, oppure alla sezione indicata dall'ancora (es. /#contact)
function ScrollManager() {
  // key cambia a ogni navigazione: ricliccare "Contatti" riporta alla sezione anche se l'URL è lo stesso
  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    if (hash) {
      requestAnimationFrame(() => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" }));
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [pathname, hash, key]);
  return null;
}

export default function Layout() {
  return (
    <>
      <ScrollManager />
      <Sidebar />
      <StyleSwitcher />
      <main className="lg:pl-[270px]">
        <Outlet />
      </main>
    </>
  );
}
