import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./BrandIcons";

export interface ProjectCardData {
  name: string;
  summary: string;
  highlights?: string[];
  stack: string[];
  repoUrl?: string;
  liveUrl?: string;
  period?: string;
}

// Card condivisa tra la sezione Progetti della home e la pagina /percorso
export default function ProjectCard({ project }: { project: ProjectCardData }) {
  return (
    <article className="flex flex-col rounded-2xl border-t-4 border-skin bg-bg-card p-6 shadow-sm transition hover:-translate-y-1">
      {project.period && <p className="mb-1 text-sm text-skin">{project.period}</p>}
      <h3 className="text-xl font-semibold text-text-main">{project.name}</h3>
      <p className="mt-2 text-text-soft">{project.summary}</p>
      {project.highlights && (
        <ul className="mt-4 space-y-2">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-2 text-sm text-text-soft">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-skin" />
              {h}
            </li>
          ))}
        </ul>
      )}
      <div className="mt-auto flex flex-wrap gap-2 pt-6">
        {project.stack.map((tech) => (
          <span key={tech} className="rounded-full bg-bg-soft px-3 py-1 text-xs text-text-main">
            {tech}
          </span>
        ))}
      </div>
      <ProjectLinks project={project} className="mt-4" />
    </article>
  );
}

export function ProjectLinks({ project, className = "" }: { project: ProjectCardData; className?: string }) {
  if (!project.repoUrl && !project.liveUrl) return null;
  return (
    <div className={`flex gap-4 text-skin ${className}`}>
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
  );
}
