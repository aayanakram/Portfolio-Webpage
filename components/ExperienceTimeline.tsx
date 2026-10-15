import { experiences } from "@/data/experience";
import { ScrollReveal } from "./ScrollReveal";
import { SectionHeader } from "./SectionHeader";

export function ExperienceTimeline() {
  return (
    <section className="section" id="experience">
      <SectionHeader eyebrow="Experience" title="Where I've been:" />
      <div className="timeline">
        {experiences.map((item, index) => (
          <ScrollReveal
            className={`timeline-item experience-card ${item.compact ? "timeline-item-compact" : ""}`}
            delay={index * 0.05}
            key={`${item.role}-${item.organisation}`}
          >
            <div className="timeline-date">{item.date}</div>
            <div className="timeline-title-row timeline-body experience-heading">
              <div>
                <h3>{item.role}</h3>
                {item.organisationUrl ? (
                  <a className="timeline-org" href={item.organisationUrl} target="_blank" rel="noreferrer">
                    {item.organisation}
                  </a>
                ) : (
                  <p className="timeline-org">{item.organisation}</p>
                )}
              </div>
              <span>{item.location}</span>
            </div>
            <div className="tag-row timeline-skills" aria-label={`Skills used at ${item.organisation}`}>
              {item.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
            </div>
            <div className="experience-details">
              {item.bullets ? (
                <ul className="experience-bullets">
                  {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
              ) : item.description ? (
                <p className="experience-description">{item.description}</p>
              ) : null}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
