"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/data/site";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  /* Underline the link for whichever section is in the middle of the screen. */
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main section[id]"));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="nav-shell">
      <nav className="nav" aria-label="Main navigation">
        <Link href="/" className="brand" aria-label="Aayan Akram home">
          <span>{site.name}</span>
        </Link>

        <div className={`nav-links${open ? " is-open" : ""}`} id="nav-links">
          {navLinks.map((link) =>
            link.href.endsWith(".pdf") ? (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={active === link.href.split("#")[1] ? "is-active" : undefined}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        <div className="nav-actions">
          <ThemeToggle />
          <button
            className={`nav-menu-button${open ? " is-open" : ""}`}
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="nav-links"
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
          </button>
        </div>
      </nav>
    </header>
  );
}
