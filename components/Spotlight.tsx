"use client";

import type { PointerEvent, ReactNode } from "react";

/* Tells the card under the cursor where the cursor is, so CSS can light it. */
export function Spotlight({ children, className }: { children: ReactNode; className?: string }) {
  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const card = (event.target as HTMLElement).closest<HTMLElement>(".project-card");
    if (!card) return;
    const bounds = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${event.clientX - bounds.left}px`);
    card.style.setProperty("--my", `${event.clientY - bounds.top}px`);
  };

  return (
    <div className={className} onPointerMove={onPointerMove}>
      {children}
    </div>
  );
}
