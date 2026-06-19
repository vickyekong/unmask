"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UnmaskEmblem } from "./ui/UnmaskEmblem";

const navLinks = [
  { href: "#premise", label: "The Premise", short: "Premise" },
  { href: "#how-to-play", label: "How To Play", short: "Play" },
  { href: "#world", label: "The World", short: "World" },
  { href: "#symbolism", label: "Symbolism", short: "Symbols" },
  { href: "#cards", label: "The Cards", short: "Cards" },
  { href: "#stories", label: "Stories", short: "Stories" },
  { href: "#circle", label: "Join The Circle", short: "Circle" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isMoodboard = pathname === "/moodboard";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || isMoodboard
          ? "bg-deep-ink/92 backdrop-blur-md border-b border-burnished-gold/10 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 lg:px-6">
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <UnmaskEmblem size={24} className="opacity-70 group-hover:opacity-100 transition-opacity hidden md:block" />
          <span className="font-heading text-lg lg:text-xl tracking-[0.25em] text-aged-paper uppercase">
            Unmask
          </span>
        </Link>

        {!isMoodboard && (
          <ul className="hidden lg:flex items-center gap-3 xl:gap-4 flex-1 justify-center min-w-0">
            {navLinks.map((link) => (
              <li key={link.href} className="shrink-0">
                <a
                  href={link.href}
                  className="nav-link text-aged-paper/50 transition-colors hover:text-burnished-gold whitespace-nowrap"
                  title={link.label}
                >
                  {link.short}
                </a>
              </li>
            ))}
            <li className="shrink-0">
              <Link
                href="/moodboard"
                className="nav-link text-burnished-gold/70 transition-colors hover:text-burnished-gold border border-burnished-gold/25 px-2 py-1 whitespace-nowrap"
              >
                Mood
              </Link>
            </li>
          </ul>
        )}

        {isMoodboard && (
          <div className="hidden lg:flex items-center gap-3 flex-1 justify-center">
            <Link
              href="/"
              className="nav-link text-aged-paper/40 transition-colors hover:text-burnished-gold whitespace-nowrap"
            >
              ← Archive
            </Link>
            <span className="nav-link text-burnished-gold/60 whitespace-nowrap">
              Mood Board
            </span>
          </div>
        )}

        <div className="hidden lg:flex items-center shrink-0">
          {!isMoodboard ? (
            <a
              href="#circle"
              className="inline-flex items-center border border-burnished-gold/40 px-3 py-1.5 font-body text-[0.6rem] tracking-[0.15em] uppercase text-burnished-gold transition-all hover:bg-burnished-gold/10 hover:border-burnished-gold/70 whitespace-nowrap"
            >
              Enter
            </a>
          ) : (
            <Link
              href="/"
              className="inline-flex items-center border border-burnished-gold/40 px-3 py-1.5 font-body text-[0.6rem] tracking-[0.15em] uppercase text-burnished-gold transition-all hover:bg-burnished-gold/10 hover:border-burnished-gold/70 whitespace-nowrap"
            >
              Return
            </Link>
          )}
        </div>

        <button
          type="button"
          className="lg:hidden flex flex-col gap-1.5 p-2 shrink-0"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-px w-6 bg-aged-paper transition-transform ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span
            className={`block h-px w-6 bg-aged-paper transition-opacity ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-px w-6 bg-aged-paper transition-transform ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {menuOpen && (
        <div className="lg:hidden border-t border-burnished-gold/10 bg-deep-ink/95 backdrop-blur-md">
          <ul className="flex flex-col gap-4 px-6 py-6">
            {!isMoodboard &&
              navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="museum-label text-aged-paper/70 hover:text-burnished-gold"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            <li>
              <Link
                href="/moodboard"
                className={`museum-label ${isMoodboard ? "text-burnished-gold" : "text-aged-paper/70 hover:text-burnished-gold"}`}
                onClick={() => setMenuOpen(false)}
              >
                Mood Board
              </Link>
            </li>
            {isMoodboard && (
              <li>
                <Link
                  href="/"
                  className="museum-label text-aged-paper/70 hover:text-burnished-gold"
                  onClick={() => setMenuOpen(false)}
                >
                  ← Return to Site
                </Link>
              </li>
            )}
          </ul>
        </div>
      )}
    </header>
  );
}
