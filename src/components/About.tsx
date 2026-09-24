import { Briefcase, GraduationCap, MapPin, type LucideIcon } from "lucide-react";
import { profile, type TimelineItem } from "../data/profile";
import SectionTitle from "./SectionTitle";

function Timeline({ title, icon: Icon, items }: { title: string; icon: LucideIcon; items: TimelineItem[] }) {
  return (
    <div>
      <h3 className="mb-6 flex items-center gap-2 text-xl font-semibold text-text-main">
        <Icon className="h-5 w-5 text-skin" /> {title}
      </h3>
      <div className="border-l-2 border-skin pl-6">
        {items.map((item) => (
          <div key={item.title} className="relative mb-8 last:mb-0">
            <span className="absolute -left-[33px] top-1 h-4 w-4 rounded-full bg-skin" />
            <p className="text-sm text-skin">{item.period}</p>
            <h4 className="mt-1 font-semibold text-text-main">{item.title}</h4>
            <p className="mt-1 text-text-soft">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="min-h-screen px-6 py-16 md:px-12">
      <div className="mx-auto max-w-5xl">
        <SectionTitle>Chi sono</SectionTitle>
        {profile.about.map((p) => (
          <p key={p.slice(0, 24)} className="mb-4 text-lg text-text-soft">
            {p}
          </p>
        ))}
        <p className="mt-6 flex items-center gap-2 text-text-soft">
          <MapPin className="h-5 w-5 text-skin" /> {profile.location}
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {profile.skills.map((group) => (
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

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <Timeline title="Formazione" icon={GraduationCap} items={profile.education} />
          <Timeline title="Esperienza" icon={Briefcase} items={profile.experience} />
        </div>
      </div>
    </section>
  );
}
