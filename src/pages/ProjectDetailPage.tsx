import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import type { ReactNode } from "react";
import { Link, useParams } from "react-router";
import { GithubIcon } from "../components/BrandIcons";
import SectionTitle from "../components/SectionTitle";
import { profile } from "../data/profile";
import { getProjectDetail } from "../data/projectDetails";
import usePageTitle from "../hooks/usePageTitle";
import NotFoundPage from "./NotFoundPage";

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="mb-4 text-2xl font-semibold text-text-main">{title}</h2>
      {children}
    </section>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-text-soft">
          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-skin" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function ProjectDetailPage() {
  const { slug = "" } = useParams();
  const project = profile.projects.find((p) => p.slug === slug);
  const detail = getProjectDetail(slug);
  usePageTitle(project?.name);

  if (!project || !detail) return <NotFoundPage />;

  const others = profile.projects.filter((p) => p.slug !== slug);

  return (
    <article className="min-h-screen px-6 py-16 md:px-12">
      <div className="mx-auto max-w-5xl">
        <Link to="/progetti" className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-skin hover:underline">
          <ArrowLeft className="h-4 w-4" /> Tutti i progetti
        </Link>
        <p className="mb-2 text-sm text-skin">{detail.period}</p>
        <SectionTitle>{project.name}</SectionTitle>
        <p className="-mt-6 max-w-3xl text-xl text-text-main">{project.summary}</p>

        {(project.liveUrl || project.repoUrl) && (
          <div className="mt-8 flex flex-wrap gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-skin px-6 py-3 font-medium text-white transition hover:opacity-90"
              >
                <ExternalLink className="h-5 w-5" /> Demo live
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-skin px-6 py-3 font-medium text-skin transition hover:bg-skin hover:text-white"
              >
                <GithubIcon className="h-5 w-5" /> Codice su GitHub
              </a>
            )}
          </div>
        )}

        <Block title="Il progetto">
          {detail.intro.map((p) => (
            <p key={p.slice(0, 24)} className="mb-4 max-w-3xl text-lg text-text-soft">
              {p}
            </p>
          ))}
        </Block>

        <Block title="Funzionalità">
          <Bullets items={detail.features} />
        </Block>

        <Block title="Stack">
          <div className="grid gap-6 md:grid-cols-2">
            {detail.stack.map((group) => (
              <div key={group.area} className="rounded-2xl bg-bg-card p-6 shadow-sm">
                <h3 className="mb-4 font-semibold text-skin">{group.area}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full bg-bg-soft px-3 py-1 text-sm text-text-main">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Block>

        <Block title="Cosa ho imparato">
          <Bullets items={detail.learned} />
        </Block>

        <nav aria-label="Altri progetti" className="mt-16 grid gap-4 border-t border-bg-soft pt-8 sm:grid-cols-2">
          {others.map((p) => (
            <Link
              key={p.slug}
              to={`/progetti/${p.slug}`}
              className="flex items-center justify-between gap-4 rounded-2xl bg-bg-card p-5 shadow-sm transition hover:-translate-y-1"
            >
              <span>
                <span className="block text-sm text-text-soft">Altro progetto</span>
                <span className="font-semibold text-text-main">{p.name}</span>
              </span>
              <ArrowRight className="h-5 w-5 shrink-0 text-skin" />
            </Link>
          ))}
        </nav>
      </div>
    </article>
  );
}
