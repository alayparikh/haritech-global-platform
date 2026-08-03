import { useEffect, useRef } from "react";

/**
 * Reveals an element once it scrolls into view.
 *
 * The hidden state is applied from JS on mount rather than in the markup, so a
 * visitor without JS — or a crawler — always sees fully rendered content.
 * Reduced-motion users are opted out in styles.css.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    el.dataset["reveal"] = "hidden";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        el.dataset["reveal"] = "shown";
        observer.disconnect();
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 },
    );

    observer.observe(el);

    // Insurance: if the observer never fires — a headless capture that doesn't
    // scroll, a print, a browser that throttles callbacks — the content still
    // becomes visible rather than being stranded at opacity 0.
    const failsafe = window.setTimeout(() => {
      el.dataset["reveal"] = "shown";
      observer.disconnect();
    }, 2500);

    return () => {
      window.clearTimeout(failsafe);
      observer.disconnect();
    };
  }, []);

  return ref;
}
