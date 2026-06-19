"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "colors", label: "Color" },
  { id: "typography", label: "Type" },
  { id: "textures", label: "Texture" },
  { id: "symbols", label: "Symbols" },
  { id: "voice", label: "Voice" },
  { id: "imagery", label: "Imagery" },
  { id: "components", label: "Components" },
  { id: "applications", label: "Applications" },
  { id: "guidelines", label: "Guidelines" },
];

export function MoodboardNav() {
  const [active, setActive] = useState("overview");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-20% 0px -70% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-burnished-gold/10 bg-deep-ink/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 lg:px-8">
        <div className="flex items-center gap-4 shrink-0">
          <Link
            href="/"
            className="font-body text-[0.6rem] tracking-[0.2em] uppercase text-aged-paper/40 transition-colors hover:text-burnished-gold"
          >
            ← Site
          </Link>
          <span className="font-heading text-lg tracking-[0.2em] uppercase text-aged-paper">
            Mood Board
          </span>
        </div>

        <nav className="hidden xl:flex items-center gap-1 overflow-x-auto">
          {sections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`px-3 py-1.5 font-body text-[0.55rem] tracking-[0.15em] uppercase whitespace-nowrap transition-colors ${
                active === id
                  ? "text-burnished-gold border-b border-burnished-gold/50"
                  : "text-aged-paper/40 hover:text-aged-paper/70"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        <span className="museum-label text-[0.55rem] text-aged-paper/30 shrink-0 hidden sm:block">
          Brand Presentation · v1.0
        </span>
      </div>
    </header>
  );
}
