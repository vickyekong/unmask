"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "overview", label: "Overview", short: "Overview" },
  { id: "colors", label: "Color", short: "Color" },
  { id: "typography", label: "Type", short: "Type" },
  { id: "textures", label: "Texture", short: "Texture" },
  { id: "symbols", label: "Symbols", short: "Symbols" },
  { id: "voice", label: "Voice", short: "Voice" },
  { id: "imagery", label: "Imagery", short: "Images" },
  { id: "components", label: "Components", short: "UI" },
  { id: "applications", label: "Applications", short: "Apps" },
  { id: "guidelines", label: "Guidelines", short: "Guide" },
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
    <div className="sticky top-[49px] z-40 border-b border-burnished-gold/10 bg-deep-ink/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center px-3 py-1.5 lg:px-6">
        <nav className="hidden lg:flex items-center gap-1 w-full justify-center flex-nowrap">
          {sections.map(({ id, label, short }) => (
            <a
              key={id}
              href={`#${id}`}
              title={label}
              className={`px-2 py-1.5 nav-link whitespace-nowrap transition-colors ${
                active === id
                  ? "text-burnished-gold border-b border-burnished-gold/60"
                  : "text-aged-paper/40 hover:text-aged-paper/70"
              }`}
            >
              {short}
            </a>
          ))}
        </nav>

        <div className="lg:hidden w-full relative">
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex w-full items-center justify-between border border-burnished-gold/20 px-4 py-2 font-body text-[0.6rem] tracking-[0.15em] uppercase text-aged-paper/70"
          >
            <span>{sections.find((s) => s.id === active)?.label ?? "Sections"}</span>
            <span className="text-burnished-gold/50">{menuOpen ? "▲" : "▼"}</span>
          </button>
          {menuOpen && (
            <div className="absolute left-0 right-0 mt-0 border-b border-burnished-gold/10 bg-deep-ink/98 backdrop-blur-md shadow-lg z-50">
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
