import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "haritech-theme";

/**
 * Dark-mode state persisted across navigations and reloads.
 * Applies the `dark` class to <html>, which is what styles.css keys off.
 */
export function useTheme() {
  // Must start `false` so the first client render matches the server HTML —
  // seeding from the DOM class instead makes the toggle icon a hydration
  // mismatch. The `ready` flag below is what protects the pre-paint class.
  const [dark, setDark] = useState(false);
  const [ready, setReady] = useState(false);

  // Read the stored preference once on mount (never during SSR).
  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    const preferred =
      stored === "dark" || stored === "light"
        ? stored === "dark"
        : window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(preferred);
    setReady(true);
  }, []);

  useEffect(() => {
    // Before the preference is read, `dark` is still the SSR placeholder —
    // writing it would strip the class the inline script set and flash white.
    if (!ready) return;
    document.documentElement.classList.toggle("dark", dark);
  }, [dark, ready]);

  const toggle = useCallback(() => {
    setDark((v) => {
      window.localStorage.setItem(STORAGE_KEY, v ? "light" : "dark");
      return !v;
    });
  }, []);

  return { dark, toggle };
}
