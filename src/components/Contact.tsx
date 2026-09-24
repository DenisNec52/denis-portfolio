import { Mail, MapPin } from "lucide-react";
import type { ReactNode } from "react";
import { profile } from "../data/profile";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import SectionTitle from "./SectionTitle";

function ContactCard({ icon, label, value, href }: { icon: ReactNode; label: string; value: string; href?: string }) {
  const body = (
    <>
      <span className="text-skin">{icon}</span>
      <span>
        <span className="block text-sm text-text-soft">{label}</span>
        <span className="block break-all font-medium text-text-main">{value}</span>
      </span>
    </>
  );
  const cls = "flex items-center gap-4 rounded-2xl bg-bg-card p-6 shadow-sm";

  if (!href) return <div className={cls}>{body}</div>;
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className={`${cls} transition hover:-translate-y-1`}
    >
      {body}
    </a>
  );
}

const stripProtocol = (url: string) => url.replace(/^https?:\/\//, "");

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen px-6 py-16 md:px-12">
      <div className="mx-auto max-w-5xl">
        <SectionTitle>Contatti</SectionTitle>
        <p className="mb-10 text-lg text-text-soft">Cerco un ruolo come sviluppatore full-stack o frontend. Scrivimi!</p>
        <div className="grid gap-6 md:grid-cols-2">
          {profile.email && (
            <ContactCard icon={<Mail className="h-6 w-6" />} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
          )}
          {profile.github && (
            <ContactCard icon={<GithubIcon className="h-6 w-6" />} label="GitHub" value={stripProtocol(profile.github)} href={profile.github} />
          )}
          {profile.linkedin && (
            <ContactCard
              icon={<LinkedinIcon className="h-6 w-6" />}
              label="LinkedIn"
              value={stripProtocol(profile.linkedin)}
              href={profile.linkedin}
            />
          )}
          <ContactCard icon={<MapPin className="h-6 w-6" />} label="Dove" value={profile.location} />
        </div>
      </div>
    </section>
  );
}
