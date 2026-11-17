"use client";

import { useEffect, useRef, useState } from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { SectionHeader } from "./SectionHeader";
import { ScrollReveal } from "./ScrollReveal";
import { Spotlight } from "./Spotlight";

/*
 * Grows the popup out of a project card (or shrinks it back in). The dialog is
 * laid out at its final size and animated from the card's position and size.
 */
function growFromCard(dialog: HTMLDialogElement, card: Element | null | undefined, opening: boolean) {
  if (!card || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return null;
  const to = dialog.getBoundingClientRect();
  const from = card.getBoundingClientRect();
  if (!to.width || !to.height || from.bottom < 0 || from.top > window.innerHeight) return null;
  const small = {
    transform: `translate(${from.left - to.left}px, ${from.top - to.top}px) scale(${from.width / to.width}, ${from.height / to.height})`,
    opacity: 0.35,
  };
  const full = { transform: "none", opacity: 1 };
  return dialog.animate(opening ? [small, full] : [full, small], {
    duration: opening ? 360 : 240,
    easing: opening ? "cubic-bezier(0.2, 0.8, 0.2, 1)" : "cubic-bezier(0.4, 0, 0.7, 0.2)",
  });
}

export function FeaturedProjects() {
  const [active, setActive] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const closing = useRef(false);
  const isOpen = active !== null;
  const project = active === null ? null : projects[active];

  /* Open the native dialog, lock page scroll, and hand focus back on close. */
  useEffect(() => {
    if (!isOpen) return;
    const element = dialog.current;
    const previousOverflow = document.body.style.overflow;
    element?.showModal();
    if (element) growFromCard(element, trigger.current?.closest(".project-card"), true);
    document.body.style.overflow = "hidden";
    return () => {
      element?.close();
      document.body.style.overflow = previousOverflow;
      trigger.current?.focus({ preventScroll: true });
    };
  }, [isOpen]);

  /* Shrink back into the card for the project on screen, then close. */
  const close = () => {
    const element = dialog.current;
    if (!element || closing.current) return;
    const card = active === null ? null : document.querySelectorAll(".project-card")[active];
    const animation = growFromCard(element, card, false);
    if (!animation) return setActive(null);
    closing.current = true;
    element.classList.add("is-closing");
    animation.onfinish = animation.oncancel = () => {
      closing.current = false;
      element.classList.remove("is-closing");
      setActive(null);
    };
  };

  const move = (direction: number) => {
    setActive((current) => (current === null ? null : (current + direction + projects.length) % projects.length));
    dialog.current?.scrollTo({ top: 0 });
  };

  return (
    <section className="section" id="projects">
      <SectionHeader eyebrow="Featured Projects" title="What I've built:" />

      <ScrollReveal>
        <Spotlight className="projects-grid">
          {projects.map((item, index) => (
            <ProjectCard
              key={item.slug}
              project={item}
              onOpen={(button) => {
                trigger.current = button;
                setActive(index);
              }}
            />
          ))}
        </Spotlight>
      </ScrollReveal>

      <dialog
        ref={dialog}
        className="project-lightbox"
        aria-labelledby="lightbox-title"
        onCancel={(event) => {
          event.preventDefault();
          close();
        }}
        onClose={() => setActive(null)}
        onClick={(event) => {
          /* A click that lands on the dialog element itself is on the backdrop. */
          if (event.target === event.currentTarget) close();
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") {
            event.preventDefault();
            move(1);
          }
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            move(-1);
          }
        }}
      >
        {project && active !== null && (
          <div className="lightbox-panel">
            <div className="lightbox-toolbar">
              <span>
                Project {String(active + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
              </span>
              <button autoFocus type="button" onClick={close} aria-label="Close project">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6 6l12 12M18 6 6 18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <div className="lightbox-content" key={project.slug} aria-live="polite">
              <p className="eyebrow">{project.timeframe}</p>
              <h2 id="lightbox-title">{project.title}</h2>
              <p className="lightbox-description">{project.summary}</p>
              <div className="tag-row">
                {project.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              {(project.githubUrl || project.liveUrl) && (
                <div className="lightbox-links">
                  {project.githubUrl && (
                    <a className="button button-primary" href={project.githubUrl} target="_blank" rel="noreferrer">
                      View on GitHub <span className="button-arrow-out" aria-hidden="true">↗</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a className="button button-primary" href={project.liveUrl} target="_blank" rel="noreferrer">
                      Visit website <span className="button-arrow-out" aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              )}
            </div>

            <div className="lightbox-navigation">
              <button type="button" onClick={() => move(-1)}>
                ← Previous
              </button>
              <span>Use ← → to explore</span>
              <button type="button" onClick={() => move(1)}>
                Next →
              </button>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
