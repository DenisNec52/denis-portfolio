import { useEffect, useState } from "react";

export const SKIN_COLORS = ["#ec1839", "#fa5b0f", "#37b182", "#1854b4", "#f021b2"] as const;

export type Mode = "light" | "dark";

export interface ThemeState {
  mode: Mode;
  skin: string;
}

const STORAGE_KEY = "portfolio-theme";

/**
 * Decides the theme on first load.
 * Available inputs:
 *  - a previously saved choice: localStorage.getItem(STORAGE_KEY) -> JSON string of ThemeState, or null
 *    (access can throw in private mode / blocked storage)
 *  - the OS preference: window.matchMedia("(prefers-color-scheme: dark)").matches
 *  - the defaults: mode "light", skin SKIN_COLORS[0]
 */
function getInitialTheme(): ThemeState {
  // TODO(Denis): implement the priority between saved choice, OS preference and defaults.
  return { mode: "light", skin: SKIN_COLORS[0] };
}

export default function useTheme() {
  const [theme, setTheme] = useState<ThemeState>(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme.mode === "dark");
    root.style.setProperty("--skin-color", theme.skin);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(theme));
    } catch {
      // storage unavailable: theme still works for this visit
    }
  }, [theme]);

  return {
    theme,
    toggleMode: () => setTheme((t) => ({ ...t, mode: t.mode === "dark" ? "light" : "dark" })),
    setSkin: (skin: string) => setTheme((t) => ({ ...t, skin })),
  };
}
