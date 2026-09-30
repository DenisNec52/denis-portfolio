import About from "../components/About";
import usePageTitle from "../hooks/usePageTitle";

export default function AboutPage() {
  usePageTitle("Chi sono");
  return <About />;
}
