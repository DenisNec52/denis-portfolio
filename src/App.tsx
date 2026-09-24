import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Sidebar from "./components/Sidebar";
import StyleSwitcher from "./components/StyleSwitcher";

export default function App() {
  return (
    <>
      <Sidebar />
      <StyleSwitcher />
      <main className="lg:pl-[270px]">
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
