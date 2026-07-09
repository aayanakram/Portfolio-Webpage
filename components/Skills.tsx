import { skillGroups } from "@/data/skills";
import { ScrollReveal } from "./ScrollReveal";
import { SectionHeader } from "./SectionHeader";

export function Skills() {
  return (
    <section className="section" id="skills">
      <SectionHeader
        eyebrow="Technical stack"
        title="Tools and concepts I&apos;m building depth in."
        copy="Grouped by the kinds of systems I want to work on: embedded control, autonomous platforms, analysis, and design."
      />
      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <ScrollReveal className="skill-card" delay={index * 0.04} key={group.title}>
            <h3>{group.title}</h3>
            <div className="tag-row">
              {group.skills.map((skill) => (
                <span className="tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
