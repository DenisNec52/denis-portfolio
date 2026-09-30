import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Journey from "./components/Journey";
import Projects from "./components/Projects";
import Sidebar from "./components/Sidebar";
import StyleSwitcher from "./components/StyleSwitcher";
import { profile } from "./data/profile";
import { usePathname, useRouteEffects } from "./hooks/useRoute";

export default function App() {
  const pathname = usePathname();
  const isJourney = pathname.replace(/\/$/, "") === "/percorso";
  useRouteEffects(pathname, isJourney ? `Percorso — ${profile.shortName} Necula` : "Denis Necula — Full-Stack Developer");

  return (
    <>
      <Sidebar pathname={pathname} />
      <StyleSwitcher />
      <main className="lg:pl-[270px]">
        {isJourney ? (
          <Journey />
        ) : (
          <>
            <Home />
            <About />
            <Projects />
            <Contact />
          </>
        )}
      </main>
    </>
  );
}
