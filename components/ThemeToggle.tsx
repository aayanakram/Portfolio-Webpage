"use client";

/*
 * Light and dark switch. The theme lives on <html data-theme>, set before the
 * first paint by the small script in app/layout.tsx, so this button only has
 * to flip it and remember the choice.
 */
export function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    const apply = () => {
      root.dataset.theme = next;
      window.dispatchEvent(new Event("themechange"));
    };
    try {
      localStorage.setItem("theme", next);
    } catch {}

    /* Cross-fade the whole page where the browser can; otherwise just switch. */
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!still && "startViewTransition" in document) {
      document.startViewTransition(apply);
    } else {
      apply();
    }
  };

  return (
    <button type="button" className="theme-toggle" aria-label="Switch between light and dark mode" onClick={toggle}>
      <svg className="theme-icon-moon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
      <svg className="theme-icon-sun" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M12 2.5v2.5M12 19v2.5M2.5 12H5M19 12h2.5M5.3 5.3l1.8 1.8M16.9 16.9l1.8 1.8M5.3 18.7l1.8-1.8M16.9 7.1l1.8-1.8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
}
