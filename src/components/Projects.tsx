import { ExternalLink } from "lucide-react";
import { profile } from "../data/profile";
import { GithubIcon } from "./BrandIcons";
import SectionTitle from "./SectionTitle";

export default function Projects() {
  return (
    <section id="portfolio" className="min-h-screen px-6 py-16 md:px-12">
      <div className="mx-auto max-w-5xl">
        <SectionTitle>Progetti</SectionTitle>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {profile.projects.map((project) => (
            <article
              key={project.name}
              className="flex flex-col rounded-2xl border-t-4 border-skin bg-bg-card p-6 shadow-sm transition hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold text-text-main">{project.name}</h3>
              <p className="mt-2 text-text-soft">{project.summary}</p>
              <ul className="mt-4 space-y-2">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-sm text-text-soft">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-skin" />
                    {h}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap gap-2 pt-6">
                {project.stack.map((tech) => (
                  <span key={tech} className="rounded-full bg-bg-soft px-3 py-1 text-xs text-text-main">
                    {tech}
                  </span>
                ))}
              </div>
              {(project.repoUrl || project.liveUrl) && (
                <div className="mt-4 flex gap-4 text-skin">
                  {project.repoUrl && (
                    <a href={project.repoUrl} target="_blank" rel="noreferrer" aria-label={`Codice di ${project.name}`}>
                      <GithubIcon className="h-5 w-5" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" aria-label={`Demo di ${project.name}`}>
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
