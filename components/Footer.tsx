import Link from "next/link";
import { navLinks, site } from "@/data/site";
import { CopyEmail } from "./CopyEmail";

/* "https://www.linkedin.com/in/aayana/" becomes "linkedin/in/aayana". */
function shortLink(url: string) {
  const { hostname, pathname } = new URL(url);
  const siteName = hostname.replace(/^www\./, "").split(".")[0];
  const path = pathname.split("/").filter(Boolean).join("/");
  return `${siteName}/${path}`;
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link href="/" className="brand" aria-label="Aayan Akram home">
            {site.name}
          </Link>
        </div>

        <nav className="footer-column" aria-label="Footer navigation">
          <p className="footer-label">Site</p>
          {navLinks.map((link) =>
            link.href.endsWith(".pdf") ? (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ) : (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="footer-column">
          <p className="footer-label">Contact</p>
          <CopyEmail className="footer-email">{site.email}</CopyEmail>
          <a href={site.linkedin} target="_blank" rel="noreferrer">
            {shortLink(site.linkedin)}
          </a>
          <a href={site.github} target="_blank" rel="noreferrer">
            {shortLink(site.github)}
          </a>
        </div>
      </div>

      <div className="footer-base">
        <p>© 2026 {site.name}. Built from scratch.</p>
        <a href="#home" className="footer-top">
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  );
}
