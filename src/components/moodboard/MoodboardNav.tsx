"use client";

import { useEffect, useState } from "react";

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
  const [menuOpen, setMenuOpen] = useState(false);

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
    <div className="sticky top-[57px] lg:top-[57px] z-40 border-b border-burnished-gold/10 bg-deep-ink/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 lg:px-8">
        <span className="museum-label text-[0.5rem] text-aged-paper/30 shrink-0 hidden sm:block">
          Brand Presentation · v1.0
        </span>

        {/* Desktop section tabs */}
        <nav className="hidden lg:flex items-center gap-0.5 overflow-x-auto flex-1 justify-center">
          {sections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`px-3 py-2 font-body text-[0.55rem] tracking-[0.15em] uppercase whitespace-nowrap transition-colors ${
                active === id
                  ? "text-burnished-gold border-b-2 border-burnished-gold/60"
                  : "text-aged-paper/40 hover:text-aged-paper/70"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Mobile section picker */}
        <div className="lg:hidden flex-1 relative">
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex w-full items-center justify-between border border-burnished-gold/20 px-4 py-2 font-body text-[0.6rem] tracking-[0.15em] uppercase text-aged-paper/70"
          >
            <span>{sections.find((s) => s.id === active)?.label ?? "Sections"}</span>
            <span className="text-burnished-gold/50">{menuOpen ? "▲" : "▼"}</span>
          </button>
          {menuOpen && (
            <div className="absolute left-0 right-0 mt-0 border-b border-burnished-gold/10 bg-deep-ink/98 backdrop-blur-md shadow-lg">
              <ul className="px-4 py-3 grid grid-cols-2 gap-2">
                {sections.map(({ id, label }) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      onClick={() => setMenuOpen(false)}
                      className={`block px-3 py-2 font-body text-[0.55rem] tracking-[0.12em] uppercase transition-colors ${
                        active === id
                          ? "text-burnished-gold bg-burnished-gold/10"
                          : "text-aged-paper/50 hover:text-aged-paper"
                      }`}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
