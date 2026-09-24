import { useEffect, useState } from "react";

const TYPE_MS = 80;
const DELETE_MS = 40;
const HOLD_MS = 1500;

// Typewriter effect: one timeout per render step, derived from (text, deleting),
// so there is never more than one pending timer.
export default function useTypedRoles(roles: string[]): string {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = roles[roleIndex] ?? "";
    let delay = deleting ? DELETE_MS : TYPE_MS;

    if (!deleting && text === full) {
      delay = HOLD_MS;
    }

    const id = window.setTimeout(() => {
      if (!deleting && text === full) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setRoleIndex((i) => (i + 1) % roles.length);
      } else {
        setText(deleting ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1));
      }
    }, delay);

    return () => window.clearTimeout(id);
  }, [roles, roleIndex, text, deleting]);

  return text;
}
