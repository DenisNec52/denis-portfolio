import { useEffect } from "react";

const SITE = "Denis Necula";

/** Titolo della scheda del browser per ogni pagina. */
export default function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} — ${SITE}` : `${SITE} — Full-Stack Developer`;
  }, [title]);
}
