import { useEffect, useSyncExternalStore, type MouseEvent } from "react";

// Router minimo per due pagine ("/" e "/percorso") basato sulla History API:
// non serve una libreria di routing per così poche rotte.
const EVENT = "routechange";

function subscribe(onChange: () => void) {
  window.addEventListener("popstate", onChange);
  window.addEventListener(EVENT, onChange);
  return () => {
    window.removeEventListener("popstate", onChange);
    window.removeEventListener(EVENT, onChange);
  };
}

export function usePathname() {
  return useSyncExternalStore(subscribe, () => window.location.pathname);
}

/** Naviga senza ricaricare la pagina. `to` può includere un'ancora, es. "/#about". */
export function navigate(to: string) {
  const url = new URL(to, window.location.origin);
  if (url.pathname === window.location.pathname && url.hash) {
    // Stessa pagina: basta scorrere alla sezione
    history.pushState(null, "", url.hash);
    scrollToHash(url.hash);
    return;
  }
  history.pushState(null, "", url.pathname + url.hash);
  window.dispatchEvent(new Event(EVENT));
}

function scrollToHash(hash: string) {
  document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" });
}

/** Dopo un cambio pagina: va all'ancora richiesta oppure in cima, e aggiorna il titolo. */
export function useRouteEffects(pathname: string, title: string) {
  useEffect(() => {
    document.title = title;
    const { hash } = window.location;
    if (hash) requestAnimationFrame(() => scrollToHash(hash));
    else window.scrollTo({ top: 0 });
  }, [pathname, title]);
}

/** onClick per i link interni: lascia al browser i click con Ctrl/Cmd/centrale (nuova scheda). */
export function onInternalLink(to: string, after?: () => void) {
  return (e: MouseEvent<HTMLAnchorElement>) => {
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    navigate(to);
    after?.();
  };
}
