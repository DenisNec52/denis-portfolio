import Contact from "../components/Contact";
import Home from "../components/Home";
import Projects from "../components/Projects";
import usePageTitle from "../hooks/usePageTitle";

// Home breve: presentazione, progetti in evidenza e contatti
export default function HomePage() {
  usePageTitle();
  return (
    <>
      <Home />
      <Projects variant="home" />
      <Contact />
    </>
  );
}
