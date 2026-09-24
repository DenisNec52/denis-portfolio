import { profile } from "../data/profile";
import useTypedRoles from "../hooks/useTypedRoles";

export default function Home() {
  const role = useTypedRoles(profile.roles);

  return (
    <section id="home" className="flex min-h-screen items-center px-6 py-16 md:px-12">
      <div className="mx-auto w-full max-w-5xl">
        <h1 className="text-4xl font-bold text-text-main md:text-6xl">
          Ciao, sono <span className="text-skin">{profile.name}</span>
        </h1>
        <p className="mt-6 h-10 text-2xl font-semibold text-text-main md:text-3xl">
          {role}
          <span className="animate-pulse text-skin">|</span>
        </p>
        <p className="mt-6 max-w-2xl text-lg text-text-soft">{profile.tagline}</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a href="#portfolio" className="rounded-full bg-skin px-6 py-3 font-medium text-white transition hover:opacity-90">
            Vedi i progetti
          </a>
          <a
            href="#contact"
            className="rounded-full border-2 border-skin px-6 py-3 font-medium text-skin transition hover:bg-skin hover:text-white"
          >
            Contattami
          </a>
        </div>
      </div>
    </section>
  );
}
