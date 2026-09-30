// Pagine di dettaglio (/progetti/:slug) dei progetti in evidenza.
// Ogni punto corrisponde a qualcosa che il codice del progetto fa davvero:
// niente funzionalità "in arrivo" o descritte a memoria.
import type { SkillGroup } from "./profile";

export interface ProjectDetail {
  slug: string;
  period: string;
  /** Paragrafi introduttivi: cos'è e a cosa serve */
  intro: string[];
  features: string[];
  stack: SkillGroup[];
  learned: string[];
}

export const projectDetails: ProjectDetail[] = [
  {
    slug: "warehouse-pro",
    period: "Aprile 2026 — oggi",
    intro: [
      "Gestionale di magazzino e produzione pensato per un reparto di saldatura: prodotti, entrate e uscite di materiale, tempi di lavorazione e pulizia 5S, con permessi diversi per admin, supervisori e operatori.",
      "Parte delle funzioni nasce dai moduli cartacei usati in reparto, come la tabella dei tempi standard e il foglio Andon Board.",
    ],
    features: [
      "Tre ruoli (admin, supervisore, operatore) controllati dal server su ogni rotta, reparti con visibilità per gruppi di utenti",
      "Login con JWT in cookie httpOnly e, in alternativa, con badge QR o NFC",
      "Entrate e uscite salvate in transazioni MongoDB: la giacenza resta coerente anche quando l'admin corregge un movimento",
      "Andon Board per reparto: tempo atteso dalla tabella dei tempi standard confrontato con il tempo impiegato",
      "Checklist 5S per turno e reparto con punteggio",
      "Migrazioni del database eseguite in automatico all'avvio del server",
    ],
    stack: [
      { area: "Frontend", items: ["React", "Vite", "Tailwind CSS", "React Query", "Zustand", "Recharts"] },
      { area: "Backend", items: ["Node.js", "Express", "Mongoose", "JWT", "express-validator"] },
      { area: "Sicurezza", items: ["helmet", "rate limiting", "express-mongo-sanitize", "bcrypt"] },
      { area: "Qualità e deploy", items: ["Jest", "Supertest", "GitHub Actions", "Vercel", "Render"] },
    ],
    learned: [
      "Applicare i permessi per ruolo sul server, senza affidarsi solo a ciò che il frontend nasconde",
      "Usare le transazioni per tenere allineati movimenti e giacenze",
      "Modificare lo schema di un database già in produzione con migrazioni automatiche e testate",
      "Scrivere test di integrazione (82 test su MongoDB in memoria) e farli girare in CI a ogni push",
    ],
  },
  {
    slug: "gestione-spese",
    period: "Settembre 2026",
    intro: [
      "App per registrare entrate e uscite personali e vedere dove vanno i soldi: riepilogo del periodo, andamento mese per mese e spese divise per categoria.",
      "Il contratto delle API è scritto una volta sola in OpenAPI; da lì vengono generati sia i controlli sugli input sia il codice che il frontend usa per chiamare il server.",
    ],
    features: [
      "Inserimento ed eliminazione di entrate e uscite con categoria e data",
      "Riepilogo di entrate, uscite e saldo per il periodo scelto, con filtro per mese e anno",
      "Grafico a barre mensile e grafico a torta delle spese per categoria",
      "Importi salvati come numeric(12,2) in PostgreSQL, somme e raggruppamenti calcolati in SQL",
      "Input non validi rifiutati con errore 400, ad esempio importi a zero o negativi",
    ],
    stack: [
      { area: "Frontend", items: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "React Query", "Recharts"] },
      { area: "Backend", items: ["Express 5", "Zod", "OpenAPI 3.1", "Orval"] },
      { area: "Database", items: ["PostgreSQL", "Drizzle ORM"] },
      { area: "Infrastruttura", items: ["pnpm workspace", "Docker Compose", "Vercel", "Render"] },
    ],
    learned: [
      "Partire dal contratto OpenAPI e generare da lì schemi Zod e hook React Query",
      "Organizzare database, API e frontend in un monorepo pnpm con pacchetti condivisi",
      "Trattare gli importi con tipi decimali e far fare le aggregazioni al database",
      "Caricare i grafici solo quando servono: bundle iniziale da 637 kB a 237 kB",
    ],
  },
  {
    slug: "todo-app",
    period: "Novembre 2025",
    intro: [
      "Gestione delle attività personali: ogni utente si registra, accede e vede solo le proprie attività, con scadenze e tag per organizzarle.",
    ],
    features: [
      "Registrazione, login e profilo utente con token JWT",
      "Attività con titolo, descrizione, scadenza, tag e stato completata",
      "Ricerca per titolo, descrizione o tag e filtri per stato e per tag",
      "Recupero password via email: il token casuale viene salvato nel database solo come hash SHA-256",
      "Il server non parte se manca il segreto JWT, invece di usare un valore di riserva",
    ],
    stack: [
      { area: "Frontend", items: ["React", "Vite", "React Bootstrap", "React Router", "Axios"] },
      { area: "Backend", items: ["Node.js", "Express", "express-validator", "Nodemailer"] },
      { area: "Database e sicurezza", items: ["MongoDB", "Mongoose", "bcrypt", "JWT"] },
      { area: "Deploy", items: ["Vercel", "Render"] },
    ],
    learned: [
      "Costruire un flusso di autenticazione completo: registrazione, login, rotte protette e recupero password",
      "Validare ogni input sul server con express-validator",
      "Non salvare mai in chiaro i token di recupero password e non usare segreti di riserva nel codice",
    ],
  },
];

export const getProjectDetail = (slug: string) => projectDetails.find((d) => d.slug === slug);
