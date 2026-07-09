import { ScrollReveal } from "./ScrollReveal";
import { SectionHeader } from "./SectionHeader";

export function About() {
  return (
    <section className="section" id="about">
      <SectionHeader
        eyebrow="About"
        title="About Me"
      />

      <div className="about-layout">
        <ScrollReveal className="about-copy">
          <p>
            I’m a second year Computer Engineering student at McMaster University focused on projects
            that connect code and electronics, within real-world constraints.
          </p>

          <p>
            My work includes embedded projects, drone tracking research, PCB design,
            accelerator science experience, among various other experiences.
          </p>
        </ScrollReveal>

        <ScrollReveal className="principles-card" delay={0.08}>
          <p className="panel-label">Focus Areas</p>
          <ul>
            <li>Embedded systems and firmware</li>
            <li>UAVs, autonomy, and robotics</li>
            <li>Signal processing and sensing</li>
          </ul>
        </ScrollReveal>
      </div>
    </section>
  );
}