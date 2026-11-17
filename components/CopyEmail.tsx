"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { site } from "@/data/site";

type CopyEmailProps = {
  className?: string;
  children: ReactNode;
};

/* Copies the email address and confirms it. Falls back to opening a mail app. */
export function CopyEmail({ className = "", children }: CopyEmailProps) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  };

  return (
    <button type="button" className={`copy-email ${className}`} onClick={copy} aria-label={`Copy email address ${site.email}`}>
      {children}
      <span className={`copy-email-note${copied ? " is-visible" : ""}`} role="status">
        {copied ? "Email copied" : ""}
      </span>
    </button>
  );
}
