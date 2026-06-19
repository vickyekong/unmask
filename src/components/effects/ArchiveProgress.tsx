"use client";

import { useEffect, useState } from "react";

const chapters = [
  { id: "premise", num: "I", label: "Premise" },
  { id: "how-to-play", num: "II", label: "How To Play" },
  { id: "world", num: "III", label: "The World" },
  { id: "symbolism", num: "IV", label: "Symbolism" },
  { id: "cards", num: "V", label: "The Cards" },
  { id: "stories", num: "VI", label: "Stories" },
  { id: "testimonials", num: "VII", label: "Testimonials" },
  { id: "circle", num: "VIII", label: "The Circle" },
];

export function ArchiveProgress() {
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    chapters.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-30% 0px -60% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      {/* Top progress — manuscript reading line */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-px bg-burnished-gold/10">
        <div
          className="h-full bg-gradient-to-r from-burnished-gold/20 via-burnished-gold/60 to-burnished-gold/20 transition-all duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Side chapter index — desktop only */}
      <aside
        className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden xl:block"
        aria-label="Archive chapter index"
      >
        <nav className="flex flex-col gap-3">
          {chapters.map(({ id, num, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`group flex items-center gap-2 transition-all duration-300 ${
                active === id ? "opacity-100" : "opacity-25 hover:opacity-60"
              }`}
              title={label}
            >
              <span
                className={`font-heading text-xs transition-colors ${
                  active === id ? "text-burnished-gold" : "text-aged-paper"
                }`}
              >
                {num}
              </span>
              <span
                className={`h-px transition-all duration-300 ${
                  active === id
                    ? "w-6 bg-burnished-gold/60"
                    : "w-3 bg-aged-paper/30 group-hover:w-5"
                }`}
              />
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
}
