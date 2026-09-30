import { ArrowRight } from "lucide-react";
import { profile } from "../data/profile";
import { onInternalLink } from "../hooks/useRoute";
import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";

export default function Projects() {
  return (
    <section id="portfolio" className="min-h-screen px-6 py-16 md:px-12">
      <div className="mx-auto max-w-5xl">
        <SectionTitle>Progetti</SectionTitle>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {profile.projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="/percorso"
            onClick={onInternalLink("/percorso")}
            className="inline-flex items-center gap-2 rounded-full bg-skin px-6 py-3 font-medium text-white transition hover:opacity-90"
          >
            Vedi tutto il mio percorso <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
