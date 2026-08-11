import { experiences } from "@/data/experience";
import { ScrollReveal } from "./ScrollReveal";
import { SectionHeader } from "./SectionHeader";

export function ExperienceTimeline() {
  return (
    <section className="section" id="experience">
      <SectionHeader
        eyebrow="Experience"
        title="Where I've been:"
      />
      <div className="timeline">
        {experiences.map((item, index) => (
          <ScrollReveal
            className={`timeline-item ${item.compact ? "timeline-item-compact" : ""}`}
            delay={index * 0.05}
            key={`${item.role}-${item.organisation}`}
          >
            <div className="timeline-date">{item.date}</div>
            <div className="timeline-body">
            <div className="timeline-title-row">
              <div>
                <h3>{item.role}</h3>

                {item.organisationUrl ? (
                  <a
                    className="timeline-org"
                    href={item.organisationUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.organisation}
                  </a>
                ) : (
                  <p className="timeline-org">{item.organisation}</p>
                )}
              </div>

              <span>{item.location}</span>
            </div>
              {item.description ? (
                <p className="experience-description">{item.description}</p>
              ) : item.bullets ? (
                <ul className="experience-bullets">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
              <div className="tag-row">
                {item.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
