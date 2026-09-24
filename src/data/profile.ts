// Single source of truth for all portfolio content.
// Components only render this data — a future admin CMS can replace this
// module with an API fetch returning the same `Profile` shape.

export interface TimelineItem {
  period: string;
  title: string;
  description: string;
}

export interface SkillGroup {
  area: string;
  items: string[];
}

export interface Project {
  name: string;
  summary: string;
  highlights: string[];
  stack: string[];
  repoUrl?: string;
  liveUrl?: string;
}

export interface Profile {
  name: string;
  shortName: string;
  role: string;
  roles: string[];
  tagline: string;
  about: string[];
  location: string;
  email?: string;
  github?: string;
  linkedin?: string;
  skills: SkillGroup[];
  education: TimelineItem[];
  experience: TimelineItem[];
  projects: Project[];
}

export const profile: Profile = {
  name: "Denis Alexandru Necula",
  shortName: "Denis",
  role: "Full-Stack Developer",
  roles: ["Full-Stack Developer", "React & TypeScript", "Node.js & Express", "Ex saldatore TIG"],
  tagline: "Dalla saldatura di precisione al codice: stessa cura per i dettagli, nuovi strumenti.",
  about: [
    "Ho lavorato per anni come saldatore TIG, un mestiere dove un errore di un millimetro si vede e non si nasconde. Ho portato quella precisione nello sviluppo software.",
    "Nel 2024 ho completato il percorso Full-Stack Web Development di Epicode e da allora costruisco applicazioni complete: frontend React tipizzato, API REST con Node.js ed Express, database MongoDB e PostgreSQL, autenticazione sicura e deploy containerizzato.",
  ],
  location: "Torino, Italia",
  // TODO(Denis): email pubblica e profilo LinkedIn
  email: undefined,
  github: "https://github.com/DenisNec52",
  linkedin: undefined,
  skills: [
    { area: "Frontend", items: ["React", "TypeScript", "Vite", "Tailwind CSS", "Zustand", "React Query"] },
    { area: "Backend", items: ["Node.js", "Express.js", "REST API", "JWT + httpOnly cookies", "RBAC"] },
    { area: "Database", items: ["MongoDB", "Mongoose", "PostgreSQL", "Drizzle ORM"] },
    { area: "DevOps", items: ["Docker", "Vercel", "Render", "Git & GitHub"] },
  ],
  education: [
    {
      period: "2023 — 2024",
      title: "Epicode — Full-Stack Web Developer (WDPT0523IT)",
      description:
        "Certificazione conseguita a giugno 2024. HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, con progetto capstone full-stack.",
    },
  ],
  experience: [
    {
      period: "2024 — oggi",
      title: "Full-Stack Developer",
      description:
        "Sviluppo di applicazioni web complete: gestionale di magazzino con ruoli utente, app con autenticazione JWT, clone di Pinterest con upload immagini.",
    },
    {
      period: "Prima del 2024",
      title: "Saldatore TIG",
      description:
        "Saldatura di precisione su acciaio e alluminio. Lettura di disegni tecnici, controllo qualità, rispetto di tolleranze strette.",
    },
  ],
  projects: [
    {
      name: "Warehouse Pro",
      summary: "Gestionale di magazzino full-stack con dashboard, grafici e gestione ruoli.",
      highlights: [
        "Autenticazione JWT con cookie httpOnly e controllo accessi per ruolo (RBAC)",
        "Hardening API: helmet, rate limiting, sanitizzazione input",
        "Dashboard con grafici Recharts e stato globale con Zustand + React Query",
      ],
      stack: ["React", "Vite", "Tailwind", "Zustand", "React Query", "Node.js", "Express", "MongoDB"],
      repoUrl: "https://github.com/DenisNec52/warehouse-manager",
      liveUrl: "https://warehouse-manager-ruby.vercel.app",
    },
    {
      name: "Gestione Spese Personali",
      summary: "Entrate e uscite con grafici mensili, spese per categoria e riepilogo per periodo.",
      highlights: [
        "Monorepo pnpm con contratto OpenAPI: schemi Zod e hook React Query generati con Orval",
        "PostgreSQL + Drizzle ORM, importi esatti al centesimo con aggregazioni SQL",
        "Grafici Recharts caricati in lazy: bundle iniziale ridotto del 63%",
      ],
      stack: ["React", "TypeScript", "React Query", "Tailwind", "Express 5", "PostgreSQL", "Drizzle", "OpenAPI", "Docker"],
      repoUrl: "https://github.com/DenisNec52/money-tracker",
      liveUrl: "https://money-tracker-eight-delta.vercel.app",
    },
    {
      name: "Todo App",
      summary: "Gestione attività con registrazione e login, API REST protetta.",
      highlights: [
        "CRUD completo delle attività per utente autenticato",
        "Password hashate con bcrypt, validazione con express-validator",
      ],
      stack: ["React", "React Bootstrap", "Node.js", "Express", "MongoDB", "JWT"],
      repoUrl: "https://github.com/DenisNec52/todo-app",
    },
    {
      name: "Pinterest Capstone",
      summary: "Clone di Pinterest: progetto finale del percorso Epicode.",
      highlights: [
        "Griglia masonry di pin con upload immagini",
        "Autenticazione con Passport JWT, stato gestito con Redux",
        "Email transazionali con MailerSend",
      ],
      stack: ["React", "Redux", "Material UI", "Node.js", "Express", "MongoDB", "Passport"],
    },
  ],
};
