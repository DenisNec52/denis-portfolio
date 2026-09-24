import { Moon, Palette, Sun } from "lucide-react";
import { useState } from "react";
import useTheme, { SKIN_COLORS } from "../hooks/useTheme";

export default function StyleSwitcher() {
  const { theme, toggleMode, setSkin } = useTheme();
  const [open, setOpen] = useState(false);

  const btn = "flex h-10 w-10 items-center justify-center rounded-full bg-bg-card text-text-main shadow-md";

  return (
    <div className="fixed right-4 top-20 z-30 flex flex-col items-end gap-2 lg:top-6">
      <button onClick={() => setOpen((o) => !o)} aria-label="Colori tema" aria-expanded={open} className={btn}>
        <Palette className="h-5 w-5" />
      </button>
      <button onClick={toggleMode} aria-label={theme.mode === "dark" ? "Tema chiaro" : "Tema scuro"} className={btn}>
        {theme.mode === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </button>
      {open && (
        <div className="flex gap-2 rounded-xl bg-bg-card p-3 shadow-md">
          {SKIN_COLORS.map((color) => (
            <button
              key={color}
              onClick={() => setSkin(color)}
              aria-label={`Colore ${color}`}
              style={{ backgroundColor: color }}
              className={`h-7 w-7 rounded-full transition ${theme.skin === color ? "ring-2 ring-text-main ring-offset-2 ring-offset-bg-card" : ""}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
