import { ArrowLeft, Award } from "lucide-react";
import { journey, type JourneyEntry, type JourneyPhase } from "../data/journey";
import { Link } from "react-router";
import usePageTitle from "../hooks/usePageTitle";
import ProjectCard, { ProjectLinks } from "./ProjectCard";
import SectionTitle from "./SectionTitle";

// Riga compatta per esercizi e progetti minori
function CompactEntry({ entry }: { entry: JourneyEntry }) {
  return (
    <li className="flex flex-col gap-2 border-b border-bg-soft py-3 last:border-b-0 sm:flex-row sm:items-center sm:gap-4">
      <div className="min-w-0 flex-1">
        <p className="font-medium text-text-main">
          {entry.name}
          <span className="ml-2 text-sm font-normal text-skin">{entry.period}</span>
        </p>
        <p className="text-sm text-text-soft">{entry.summary}</p>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        {entry.stack.map((tech) => (
          <span key={tech} className="rounded-full bg-bg-soft px-2.5 py-0.5 text-xs text-text-main">
            {tech}
          </span>
        ))}
        <ProjectLinks project={entry} className="ml-1" />
      </div>
    </li>
  );
}

// Raggruppa le voci consecutive dello stesso tipo, così l'ordine cronologico resta intatto
function groupByKind(entries: JourneyEntry[]) {
  const groups: { kind: JourneyEntry["kind"]; entries: JourneyEntry[] }[] = [];
  for (const entry of entries) {
    const last = groups[groups.length - 1];
    if (last && last.kind === entry.kind) last.entries.push(entry);
    else groups.push({ kind: entry.kind, entries: [entry] });
  }
  return groups;
}

function Phase({ phase }: { phase: JourneyPhase }) {
  const milestone = phase.entries.length === 0;

  return (
    <section id={phase.id} aria-labelledby={`${phase.id}-title`} className="relative mb-14 last:mb-0">
      <span
        className={`absolute -left-[33px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-skin ${milestone ? "ring-4 ring-skin/30" : ""}`}
      />
      <p className="text-sm text-skin">{phase.period}</p>
      <h2 id={`${phase.id}-title`} className="mt-1 flex items-center gap-2 text-2xl font-semibold text-text-main">
        {milestone && <Award className="h-6 w-6 text-skin" aria-hidden />}
        {phase.title}
      </h2>
      {phase.context && (
        <span className="mt-2 inline-block rounded-full bg-bg-soft px-3 py-0.5 text-xs text-text-main">{phase.context}</span>
      )}
      {phase.learned && <p className="mt-3 max-w-3xl text-text-soft">{phase.learned}</p>}

      {groupByKind(phase.entries).map((group) =>
        group.kind === "card" ? (
          <div key={group.entries[0].name} className="mt-6 grid gap-6 md:grid-cols-2">
            {group.entries.map((entry) => (
              <ProjectCard key={entry.name} project={entry} />
            ))}
          </div>
        ) : (
          <ul key={group.entries[0].name} className="mt-6 rounded-2xl bg-bg-card px-5 py-2 shadow-sm">
            {group.entries.map((entry) => (
              <CompactEntry key={entry.name} entry={entry} />
            ))}
          </ul>
        ),
      )}
    </section>
  );
}

export default function Journey() {
  usePageTitle("Percorso");
  return (
    <div className="min-h-screen px-6 py-16 md:px-12">
      <div className="mx-auto max-w-5xl">
        <Link to="/progetti" className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-skin hover:underline">
          <ArrowLeft className="h-4 w-4" /> Torna ai progetti
        </Link>
        <SectionTitle>Il mio percorso</SectionTitle>
        <p className="-mt-6 mb-12 max-w-3xl text-lg text-text-soft">
          Tutti i lavori in ordine cronologico, dai primi esercizi del bootcamp ai progetti di oggi.
        </p>
        <div className="border-l-2 border-skin pl-6">
          {journey.map((phase) => (
            <Phase key={phase.id} phase={phase} />
          ))}
        </div>
      </div>
    </div>
  );
}
