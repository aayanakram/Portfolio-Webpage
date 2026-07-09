import Link from "next/link";
import { navLinks, site } from "@/data/site";

export function Navbar() {
  return (
    <header className="nav-shell">
      <nav className="nav">
        <Link href="/" className="brand" aria-label="Aayan Akram home">
          <span className="brand-mark">{site.initials}</span>
          <span>{site.name}</span>
        </Link>

        <div className="nav-links" aria-label="Main navigation">
          {navLinks.map((link) =>
            link.href.endsWith(".pdf") ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </a>
            ) : (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            )
          )}
        </div>
      </nav>
    </header>
  );
}