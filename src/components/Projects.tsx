import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { profile } from "../data/profile";
import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";

// Progetti in evidenza: anteprima in home e contenuto della pagina /progetti
export default function Projects({ variant }: { variant: "home" | "page" }) {
  const isHome = variant === "home";
  return (
    <section id="portfolio" className={`px-6 py-16 md:px-12 ${isHome ? "" : "min-h-screen"}`}>
      <div className="mx-auto max-w-5xl">
        <SectionTitle>{isHome ? "Progetti in evidenza" : "Progetti"}</SectionTitle>
        {!isHome && (
          <p className="-mt-6 mb-12 max-w-3xl text-lg text-text-soft">
            I progetti più completi, pubblicati online con codice su GitHub. Apri i dettagli per stack, funzionalità e cosa ho imparato.
          </p>
        )}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {profile.projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {isHome && (
            <Link
              to="/progetti"
              className="rounded-full border-2 border-skin px-6 py-3 font-medium text-skin transition hover:bg-skin hover:text-white"
            >
              Tutti i progetti
            </Link>
          )}
          <Link
            to="/percorso"
            className="inline-flex items-center gap-2 rounded-full bg-skin px-6 py-3 font-medium text-white transition hover:opacity-90"
          >
            Vedi tutto il mio percorso <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
