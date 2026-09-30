import { Link } from "react-router";
import usePageTitle from "../hooks/usePageTitle";

export default function NotFoundPage() {
  usePageTitle("Pagina non trovata");
  return (
    <section className="flex min-h-screen items-center px-6 py-16 md:px-12">
      <div className="mx-auto w-full max-w-5xl">
        <p className="text-6xl font-bold text-skin">404</p>
        <h1 className="mt-4 text-3xl font-bold text-text-main">Pagina non trovata</h1>
        <p className="mt-4 text-lg text-text-soft">L'indirizzo non corrisponde a nessuna pagina del portfolio.</p>
        <Link to="/" className="mt-8 inline-block rounded-full bg-skin px-6 py-3 font-medium text-white transition hover:opacity-90">
          Torna alla home
        </Link>
      </div>
    </section>
  );
}
