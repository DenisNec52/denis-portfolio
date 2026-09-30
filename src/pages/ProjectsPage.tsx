import Projects from "../components/Projects";
import usePageTitle from "../hooks/usePageTitle";

export default function ProjectsPage() {
  usePageTitle("Progetti");
  return <Projects variant="page" />;
}
