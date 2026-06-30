"use client";

import { useState } from "react";
import Image from "next/image";
import { archetypes } from "@/lib/data";
import { Reveal } from "./ui/Reveal";
import { SectionFrame } from "./ui/SectionFrame";
import {
  AllSeeingEye,
  CardCornerFiligree,
  SplitMaskIcon,
  UnmaskEmblem,
} from "./ui/UnmaskEmblem";

function CardLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-1.5 mb-1">
      <span className="text-burnished-gold/40 text-[0.4rem] leading-none">◇</span>
      <p className="font-heading text-[0.48rem] tracking-[0.22em] uppercase text-library-brown/45 leading-none">
        {children}
      </p>
      <span className="text-burnished-gold/40 text-[0.4rem] leading-none">◇</span>
    </div>
  );
}

function IdentityCard({
  id,
  title,
  subtitle,
  description,
  passiveEffect,
  isVillain = false,
}: (typeof archetypes)[number] & { isVillain?: boolean }) {
  const [flipped, setFlipped] = useState(false);
  const displayTitle = title.toUpperCase();
  const initial = title.replace(/^The /, "").charAt(0);

  return (
    <div className="mx-auto w-full max-w-[240px]">
      <div
        className="card-flip-scene aspect-[2.5/3.5] w-full cursor-pointer group"
        onClick={() => setFlipped((f) => !f)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setFlipped((f) => !f);
          }
        }}
        role="button"
        tabIndex={0}
        aria-label={`${title} identity card. ${flipped ? "Showing back" : "Showing front"}. Click to flip.`}
      >
        <div className={`card-flip-inner h-full w-full ${flipped ? "is-flipped" : ""}`}>
          {/* ── FRONT ── */}
          <div className="card-flip-face identity-card-front parchment rounded-md">
            <div className="card-inner-border" />
            <CardCornerFiligree className="top-1 left-1 w-7 h-7" />
            <CardCornerFiligree className="top-1 right-1 w-7 h-7 rotate-90" />
            <CardCornerFiligree className="bottom-1 left-1 w-7 h-7 -rotate-90" />
            <CardCornerFiligree className="bottom-1 right-1 w-7 h-7 rotate-180" />

            <div className="identity-card-body">
              {/* Header */}
              <header className="identity-card-header">
                <p className="font-heading text-[0.42rem] tracking-[0.32em] text-library-brown/40 mb-1 leading-none">
                  ✦ ✦ ✦
                </p>
                <h3 className="font-heading text-[0.95rem] font-semibold leading-tight tracking-[0.06em] text-deep-ink">
                  {displayTitle}
                </h3>
                <p className="font-heading text-[0.48rem] tracking-[0.28em] uppercase text-library-brown/50 mt-0.5 leading-none">
                  {subtitle}
                </p>
              </header>

              {/* Portrait */}
              <div className="identity-card-portrait-ring">
                <span className="absolute -left-2 text-[0.4rem] text-burnished-gold/30 leading-none">✦</span>
                <span className="absolute -right-2 text-[0.4rem] text-burnished-gold/30 leading-none">✦</span>
                {isVillain ? (
                  <div className="flex h-12 w-12 items-end justify-center overflow-hidden rounded-full bg-gradient-to-b from-library-brown/20 to-deep-ink/10">
                    <div className="h-8 w-7 rounded-t-full bg-deep-ink/50" />
                  </div>
                ) : (
                  <span className="identity-card-portrait-letter">{initial}</span>
                )}
              </div>

              {/* Description */}
              <div className="identity-card-description">
                <CardLabel>Description</CardLabel>
                <p className="identity-card-quote font-body">
                  &ldquo;{description}&rdquo;
                </p>
              </div>

              {/* Passive effect — centered stack, separated from quote */}
              <div className="identity-card-effect">
                <div className="identity-card-effect-icon">
                  <SplitMaskIcon size={16} uid={id} />
                </div>
                <p className="identity-card-effect-label">Passive Effect</p>
                <p className="identity-card-effect-text font-body">{passiveEffect}</p>
              </div>

              <div className="identity-card-footer">
                <AllSeeingEye size={11} />
              </div>
            </div>
          </div>

          {/* ── BACK ── */}
          <div className="card-flip-face card-flip-face-back identity-card-back rounded-md">
            <div className="card-inner-border" />
            <CardCornerFiligree className="top-1 left-1 w-7 h-7 text-burnished-gold/25" />
            <CardCornerFiligree className="top-1 right-1 w-7 h-7 rotate-90 text-burnished-gold/25" />
            <CardCornerFiligree className="bottom-1 left-1 w-7 h-7 -rotate-90 text-burnished-gold/25" />
            <CardCornerFiligree className="bottom-1 right-1 w-7 h-7 rotate-180 text-burnished-gold/25" />

            <div className="relative z-10 flex h-full flex-col items-center justify-between px-5 py-5">
              <p className="font-heading text-[0.42rem] tracking-[0.32em] text-burnished-gold/30 leading-none">
                ✦ ✦ ✦
              </p>

              <div className="flex flex-col items-center justify-center flex-1 py-1">
                <UnmaskEmblem size={68} uid={id} className="opacity-90" />
                <h3 className="font-heading text-[1.35rem] tracking-[0.1em] gold-foil uppercase mt-2.5 leading-none">
                  Unmask
                </h3>
                <p className="font-heading text-[0.44rem] tracking-[0.24em] text-burnished-gold/60 mt-1.5 uppercase text-center leading-relaxed">
                  Reveal · Fate · Survive
                </p>
              </div>

              <div className="flex flex-col items-center gap-1">
                <div className="h-px w-10 bg-burnished-gold/25" />
                <p className="font-heading text-[0.42rem] tracking-[0.32em] text-burnished-gold/25 leading-none">
                  ✦ ✦ ✦
                </p>
                <div className="h-px w-10 bg-burnished-gold/25" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-2.5 text-center font-body text-[0.55rem] tracking-[0.2em] uppercase text-library-brown/35 group-hover:text-library-brown/55 transition-colors">
        Tap to flip
      </p>
    </div>
  );
}

export function CardShowcase() {
  return (
    <section id="cards" className="section-padding relative parchment">
      <SectionFrame catalogRef="Catalog V · Identity Cards · Folio 5" className="mx-auto max-w-7xl">
        <Reveal>
          <p className="museum-label mb-4 text-library-brown/60">V · The Cards</p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-library-brown">
            The Identity{" "}
            <span className="italic text-forest-ink">Card</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-6 max-w-xl font-body text-library-brown/65 leading-relaxed">
            Each card is a portrait in absentia — an archetype waiting to be
            recognized in the face of a friend. Printed on heavyweight stock
            with gold foil accents, they feel less like game pieces and more
            like pages from a forbidden codex.
          </p>
        </Reveal>

        <Reveal delay={0.2} className="mt-16">
          <div className="relative border border-library-brown/15 bg-deep-ink/5 p-6 md:p-10">
            <p className="museum-label mb-6 text-library-brown/50">
              Design Reference · The Identity Card
            </p>
            <div className="relative mx-auto max-w-4xl">
              <Image
                src="/assets/identity-card-reference.png"
                alt="UNMASK Identity Card design — front showing The Villain archetype and back showing the UNMASK emblem with Reveal, Fate, Survive tagline"
                width={1200}
                height={800}
                className="w-full h-auto rounded-sm shadow-2xl shadow-library-brown/20"
                priority
              />
            </div>
            <p className="mt-6 text-center font-heading text-sm italic text-library-brown/50">
              Front: The Villain archetype on aged parchment · Back: The UNMASK emblem
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.3} className="mt-20">
          <p className="museum-label mb-10 text-center text-library-brown/50">
            Interactive Specimens · Click to Flip
          </p>
        </Reveal>

        <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {archetypes.map((card, i) => (
            <Reveal key={card.id} delay={0.05 + i * 0.04} direction="none">
              <IdentityCard {...card} isVillain={card.id === "the-villain"} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.5} className="mt-16 text-center">
          <p className="font-heading text-lg italic text-library-brown/50">
            The Codex holds ten founding archetypes — each a portrait waiting to be recognized.
          </p>
        </Reveal>
      </SectionFrame>
    </section>
  );
}
