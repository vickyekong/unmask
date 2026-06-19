"use client";

import { useState } from "react";
import { cards } from "@/lib/data";
import { Reveal } from "./ui/Reveal";

function GameCard({
  title,
  archetype,
  frontSymbol,
  description,
  prompt,
  index,
}: (typeof cards)[0] & { index: number }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <Reveal delay={0.1 + index * 0.08}>
      <div
        className="group cursor-pointer perspective-[1000px]"
        onClick={() => setFlipped(!flipped)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setFlipped(!flipped);
          }
        }}
        role="button"
        tabIndex={0}
        aria-label={`${title} card. Click to ${flipped ? "hide" : "reveal"} details.`}
      >
        <div
          className="relative h-[420px] w-full transition-transform duration-700 preserve-3d"
          style={{
            transformStyle: "preserve-3d",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* Front */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center border border-burnished-gold/30 bg-gradient-to-br from-library-brown to-deep-ink p-8 backface-hidden"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="absolute inset-3 border border-burnished-gold/15" />
            <div className="absolute inset-5 border border-burnished-gold/8" />
            <span className="font-heading text-5xl text-burnished-gold/60 mb-6">
              {frontSymbol}
            </span>
            <p className="museum-label text-burnished-gold/50 mb-2">Archetype</p>
            <h3 className="font-heading text-2xl text-aged-paper text-center">
              {title}
            </h3>
            <p className="mt-3 font-body text-xs tracking-widest uppercase text-aged-paper/40">
              Tap to reveal
            </p>
          </div>

          {/* Back */}
          <div
            className="absolute inset-0 flex flex-col justify-between border border-burnished-gold/30 bg-aged-paper p-8 backface-hidden"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <div>
              <p className="museum-label text-library-brown/50 mb-2">
                {archetype}
              </p>
              <h3 className="font-heading text-2xl text-library-brown">
                {title}
              </h3>
              <p className="mt-4 font-body text-sm leading-relaxed text-library-brown/70">
                {description}
              </p>
            </div>
            <div className="border-t border-library-brown/15 pt-4">
              <p className="museum-label text-library-brown/40 mb-2">
                Reflection Prompt
              </p>
              <p className="font-heading text-base italic text-forest-ink">
                &ldquo;{prompt}&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function CardShowcase() {
  return (
    <section id="cards" className="section-padding relative parchment">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="museum-label mb-4 text-library-brown/60">V · The Cards</p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-library-brown">
            Artifacts of{" "}
            <span className="italic text-forest-ink">identity</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-6 max-w-xl font-body text-library-brown/65 leading-relaxed">
            Each card is a portrait in absentia — an archetype waiting to be
            recognized in the face of a friend. Printed on heavyweight stock
            with foil accents, they feel less like game pieces and more like
            pages from a forbidden codex.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <GameCard key={card.id} {...card} index={i} />
          ))}
        </div>

        <Reveal delay={0.5} className="mt-16 text-center">
          <p className="font-heading text-lg italic text-library-brown/50">
            The complete Codex contains 52 archetypes. These six are yours to discover first.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
