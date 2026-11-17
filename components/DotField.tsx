"use client";

import { useEffect, useRef } from "react";

const SPACING = 30;
const REACH = 150;

/*
 * Quiet dot grid behind the hero. A slow wave drifts across it, and the dots
 * near the cursor swell and lean away from it.
 */
export function DotField() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    /* Read from the canvas itself so a section with its own colours is respected. */
    let color = "#365b45";
    const readColor = () => {
      color = getComputedStyle(canvas).getPropertyValue("--accent").trim() || color;
    };
    readColor();
    const pointer = { x: -9999, y: -9999, strength: 0, inside: false };
    let width = 0;
    let height = 0;
    let frame = 0;
    let visible = true;

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      draw(performance.now());
    };

    const draw = (now: number) => {
      const time = now / 1000;
      context.clearRect(0, 0, width, height);
      context.fillStyle = color;
      const offsetX = (width % SPACING) / 2;
      const offsetY = (height % SPACING) / 2;

      for (let gx = offsetX; gx < width; gx += SPACING) {
        for (let gy = offsetY; gy < height; gy += SPACING) {
          const wave = still ? 0 : (Math.sin(gx * 0.012 + gy * 0.008 - time * 0.7) + 1) / 2;
          const dx = gx - pointer.x;
          const dy = gy - pointer.y;
          const distance = Math.hypot(dx, dy);
          const pull = distance < REACH ? (1 - distance / REACH) ** 2 * pointer.strength : 0;
          const push = pull * 9;
          const x = gx + (distance ? (dx / distance) * push : 0);
          const y = gy + (distance ? (dy / distance) * push : 0);

          context.globalAlpha = 0.1 + wave * 0.1 + pull * 0.6;
          context.beginPath();
          context.arc(x, y, 1 + wave * 0.35 + pull * 1.9, 0, Math.PI * 2);
          context.fill();
        }
      }
      context.globalAlpha = 1;
    };

    const loop = (now: number) => {
      frame = requestAnimationFrame(loop);
      if (!visible || document.hidden) return;
      /* Ease the cursor effect in and out so it never pops. */
      pointer.strength += ((pointer.inside ? 1 : 0) - pointer.strength) * 0.08;
      draw(now);
    };

    const onMove = (event: PointerEvent) => {
      const bounds = canvas.getBoundingClientRect();
      pointer.x = event.clientX - bounds.left;
      pointer.y = event.clientY - bounds.top;
      pointer.inside = event.pointerType === "mouse" && pointer.y >= 0 && pointer.y <= bounds.height;
    };
    const onLeave = () => {
      pointer.inside = false;
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    const visibility = new IntersectionObserver((entries) => {
      visible = entries[0]?.isIntersecting ?? true;
    });
    visibility.observe(canvas);

    const onTheme = () => {
      readColor();
      draw(performance.now());
    };
    window.addEventListener("themechange", onTheme);

    resize();
    if (!still) {
      frame = requestAnimationFrame(loop);
      window.addEventListener("pointermove", onMove, { passive: true });
      document.documentElement.addEventListener("pointerleave", onLeave);
    }

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      visibility.disconnect();
      window.removeEventListener("themechange", onTheme);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <canvas ref={ref} className="dot-field" aria-hidden="true" />;
}
