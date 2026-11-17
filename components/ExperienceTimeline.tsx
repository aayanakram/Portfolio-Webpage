import { experiences, type Experience } from "@/data/experience";
import { ScrollReveal } from "./ScrollReveal";
import { SectionHeader } from "./SectionHeader";

function ExperienceRow({ item }: { item: Experience }) {
  return (
    <details className="experience-row" name="experience-roles">
      <summary className="experience-row-summary">
        <span className="experience-row-date">{item.date}</span>
        <span className="experience-row-heading">
          <span className="experience-row-role">{item.role}</span>
          <span className="experience-row-meta">
            {item.organisationUrl ? (
              <a className="experience-row-org" href={item.organisationUrl} target="_blank" rel="noreferrer">{item.organisation}</a>
            ) : <span className="experience-row-org">{item.organisation}</span>}
            <span className="experience-row-location">{item.location}</span>
          </span>
        </span>
        <span className="experience-row-toggle" aria-hidden="true" />
      </summary>
      <div className="experience-row-details">
        {item.bullets ? (
          <ul>{item.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>
        ) : item.description ? <p>{item.description}</p> : null}
        <div className="tag-row experience-row-skills" aria-label={`Skills used at ${item.organisation}`}>
          {item.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}
        </div>
      </div>
    </details>
  );
}

export function ExperienceTimeline() {
  const recent = experiences.filter(item => !item.date.includes("2024"));
  const earlier = experiences.filter(item => item.date.includes("2024"));

  return (
    <section className="section" id="experience">
      <SectionHeader eyebrow="Experience" title="Where I've been:" />
      <ScrollReveal className="experience-list">
        {recent.map(item => <ExperienceRow key={`${item.role}-${item.organisation}`} item={item} />)}
      </ScrollReveal>
      {earlier.length > 0 && <details className="earlier-experience">
        <summary><span>Earlier experience <span className="earlier-experience-count">{earlier.length} placements · 2024</span></span><span className="experience-row-toggle" aria-hidden="true" /></summary>
        <div className="experience-list">
          {earlier.map(item => <ExperienceRow key={`${item.role}-${item.organisation}`} item={item} />)}
        </div>
      </details>}
    </section>
  );
}
