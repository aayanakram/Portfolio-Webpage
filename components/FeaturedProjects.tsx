import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { SectionHeader } from "./SectionHeader";
import { ScrollReveal } from "./ScrollReveal";

export function FeaturedProjects() {
  return (
    <section className="section" id="projects">
      <SectionHeader
        eyebrow="Featured Projects"
        title="What I've built:"
      />

      <ScrollReveal>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}