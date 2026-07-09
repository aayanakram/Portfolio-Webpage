import { ScrollReveal } from "./ScrollReveal";

export function Contact() {
  return (
    <section className="section contact" id="contact">
      <ScrollReveal>
        <p className="eyebrow">Contact</p>
        <h2>Open to coop/internship, research, and other engineering opportunities.</h2>

        <div className="hero-actions contact-actions">
          <a href="/resume.pdf" className="button button-primary" target="_blank">
            Resume
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}