// Il percorso completo, dai primi esercizi ai progetti attuali (pagina /percorso).
// Come profile.ts, è solo dati: ogni voce descrive ciò che il progetto fa davvero.
import { profile, type Project } from "./profile";

export interface JourneyEntry {
  name: string;
  period: string;
  summary: string;
  stack: string[];
  /** "card" per i progetti principali, "compact" per esercizi e progetti minori */
  kind: "card" | "compact";
  highlights?: string[];
  repoUrl?: string;
  liveUrl?: string;
}

export interface JourneyPhase {
  id: string;
  period: string;
  title: string;
  /** Contesto della fase, es. "Bootcamp Epicode" */
  context?: string;
  /** Cosa ho imparato in questa fase */
  learned?: string;
  entries: JourneyEntry[];
}

// I progetti già in home: stessi testi e link, niente duplicati da tenere allineati
function fromProfile(name: string, period: string): JourneyEntry {
  const p: Project | undefined = profile.projects.find((x) => x.name === name);
  if (!p) throw new Error(`Progetto "${name}" non trovato in profile.ts`);
  return { ...p, period, kind: "card" };
}

export const journey: JourneyPhase[] = [
  {
    id: "basi",
    period: "Novembre 2023",
    title: "Primi passi: HTML, CSS e JavaScript di base",
    context: "Bootcamp Epicode",
    learned: "Struttura delle pagine e fogli di stile, riproducendo interfacce di siti reali; le prime basi di logica in JavaScript.",
    entries: [
      { kind: "compact", name: "Algoritmi e variabili", period: "nov 2023", stack: ["HTML", "CSS"], summary: "Pagina che spiega cos'è un algoritmo e cos'è una variabile con esempi quotidiani" },
      { kind: "compact", name: "Card immagine", period: "nov 2023", stack: ["HTML", "CSS"], summary: "Scheda con una foto e una fila di pulsanti" },
      { kind: "compact", name: "Instagram clone", period: "nov 2023", stack: ["HTML", "CSS"], summary: "Layout di Instagram: barra laterale, storie, post e suggerimenti" },
      { kind: "compact", name: "Medium clone", period: "nov 2023", stack: ["HTML", "CSS"], summary: "Homepage di Medium con elenco articoli e anteprime" },
      { kind: "compact", name: "Esercizi JavaScript", period: "nov 2023", stack: ["JavaScript"], summary: "Condizioni, cicli, funzioni e metodi delle stringhe" },
    ],
  },
  {
    id: "browser",
    period: "Dicembre 2023 — Febbraio 2024",
    title: "JavaScript nel browser e Bootstrap",
    context: "Bootcamp Epicode",
    learned: "Manipolazione del DOM, eventi e Audio API; layout responsive con la griglia e i componenti di Bootstrap.",
    entries: [
      { kind: "compact", name: "Album musicali", period: "dic 2023", stack: ["HTML", "Bootstrap"], summary: "Griglia di album in card con copertina, tracce, genere e durata" },
      { kind: "compact", name: "Vetrina gaming", period: "dic 2023", stack: ["HTML", "CSS", "JavaScript"], summary: "Vetrina di notebook gaming con contenuti modificati via DOM" },
      { kind: "compact", name: "Trip to Japan", period: "gen 2024", stack: ["HTML", "Bootstrap"], summary: "Landing di un sito di viaggi con le offerte della settimana" },
      { kind: "compact", name: "Learn to code", period: "gen 2024", stack: ["HTML", "Bootstrap"], summary: "Landing di una scuola di programmazione con corsi consigliati" },
      { kind: "compact", name: "Netflix clone", period: "gen 2024", stack: ["HTML", "Bootstrap"], summary: "Pagina TV Shows con navbar e righe di copertine" },
      { kind: "compact", name: "Spotify clone", period: "feb 2024", stack: ["HTML", "CSS", "JavaScript"], summary: "Lettore con playlist, play/pausa, brano successivo e barra di avanzamento" },
      { kind: "compact", name: "Music player", period: "feb 2024", stack: ["HTML", "CSS", "JavaScript"], summary: "Player con copertina e controlli di riproduzione" },
    ],
  },
  {
    id: "backend",
    period: "Maggio 2024",
    title: "React e backend con Node.js",
    context: "Bootcamp Epicode",
    learned: "API REST con Express e MongoDB, middleware, autenticazione con JWT e Google OAuth2, upload di file su Cloudinary.",
    entries: [
      { kind: "compact", name: "API autori", period: "mag 2024", stack: ["Express", "Mongoose"], summary: "API REST per gli autori di un blog: creazione, lettura, modifica, eliminazione" },
      { kind: "compact", name: "API utenti", period: "mag 2024", stack: ["Express", "Mongoose"], summary: "Operazioni CRUD sugli utenti" },
      { kind: "compact", name: "Middleware e query", period: "mag 2024", stack: ["Express", "MongoDB"], summary: "Middleware di log, autorizzazione ed errori; filtri, paginazione e ordinamento" },
      { kind: "compact", name: "Upload avatar", period: "mag 2024", stack: ["Express", "Multer", "Cloudinary"], summary: "Caricamento dell'avatar utente su Cloudinary e invio email con Nodemailer" },
      { kind: "compact", name: "Autenticazione JWT", period: "mag 2024", stack: ["Express", "bcrypt", "JWT"], summary: "Registrazione e login con password cifrate e profilo protetto da middleware" },
      { kind: "compact", name: "Login con Google", period: "mag 2024", stack: ["React", "Passport", "OAuth2"], summary: "Accesso con Google OAuth2 ed emissione di un JWT" },
    ],
  },
  {
    id: "certificazione",
    period: "Giugno 2024",
    title: "Certificazione Epicode",
    entries: [],
  },
  {
    id: "personali",
    period: "2025",
    title: "Progetti personali",
    learned: "Un secondo linguaggio con Python, Flask e SQLite, poi un'app React + Express con autenticazione dall'inizio alla fine.",
    entries: [
      {
        kind: "card",
        name: "Gestionale soci",
        period: "gen 2025",
        summary: "Gestionale per un'associazione sportiva: anagrafica dei soci, scadenze e compleanni.",
        highlights: [
          "Ricerca per nome e filtro per attività",
          "Scadenze di visite mediche e corsi in evidenza",
          "Export dell'elenco soci in CSV",
        ],
        stack: ["Python", "Flask", "SQLite", "Jinja"],
      },
      fromProfile("Todo App", "nov 2025"),
    ],
  },
  {
    id: "produzione",
    period: "2026",
    title: "Full-stack in produzione",
    learned: "App pubblicate con deploy automatico su Vercel e Render, test automatici, TypeScript e PostgreSQL, sicurezza delle API.",
    entries: [
      fromProfile("Warehouse Pro", "apr 2026 — oggi"),
      {
        kind: "card",
        name: "Portfolio con pannello admin",
        period: "mag 2026",
        summary: "Portfolio full-stack con pannello di amministrazione per gestire i contenuti.",
        highlights: [
          "Pannello admin per progetti, competenze e articoli del blog",
          "Statistiche delle visite con gli IP salvati solo come hash",
          "Immagini su Cloudinary, email dal form contatti con MailerSend",
        ],
        stack: ["React", "Vite", "Framer Motion", "Express", "MongoDB", "JWT"],
      },
      { kind: "compact", name: "YT Downloader locale", period: "giu 2026", stack: ["React", "Express", "SSE"], summary: "Interfaccia locale per scaricare video e playlist, con avanzamento in tempo reale" },
      {
        kind: "card",
        name: "YTGrabber",
        period: "ago 2026",
        summary: "Download di video e audio dai siti supportati da yt-dlp, come app web o desktop.",
        highlights: [
          "Backend FastAPI che usa yt-dlp e ffmpeg",
          "Versione desktop con pywebview",
          "Deploy con Docker su Render e frontend su Vercel",
        ],
        stack: ["Python", "FastAPI", "yt-dlp", "Docker"],
        repoUrl: "https://github.com/DenisNec52/Youtube-downloader",
        liveUrl: "https://youtube-downloader-snowy-omega.vercel.app",
      },
      fromProfile("Gestione Spese Personali", "set 2026"),
      {
        kind: "compact",
        name: "Questo portfolio",
        period: "set 2026",
        stack: ["React 19", "TypeScript", "Tailwind v4"],
        summary: "Tema colore intercambiabile, modalità scura e contenuti in un file dati tipizzato",
        repoUrl: "https://github.com/DenisNec52/denis-portfolio",
      },
    ],
  },
];
