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

function IdentityCard({
  title,
  subtitle,
  description,
  passiveEffect,
  index,
  isVillain = false,
}: (typeof archetypes)[number] & { index: number; isVillain?: boolean }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <Reveal delay={0.1 + index * 0.08}>
      <div
        className="group cursor-pointer perspective-[1200px] mx-auto max-w-[280px]"
        onClick={() => setFlipped(!flipped)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setFlipped(!flipped);
          }
        }}
        role="button"
        tabIndex={0}
        aria-label={`${title} identity card. Click to flip.`}
      >
        <div
          className="relative aspect-[2.5/3.5] w-full transition-transform duration-700"
          style={{
            transformStyle: "preserve-3d",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* ── FRONT: Aged paper identity face ── */}
          <div
            className="identity-card-front absolute inset-0 flex flex-col parchment rounded-lg overflow-hidden shadow-xl shadow-library-brown/20"
            style={{ backfaceVisibility: "hidden" }}
          >
            <CardCornerFiligree className="top-2 left-2" />
            <CardCornerFiligree className="top-2 right-2 rotate-90" />
            <CardCornerFiligree className="bottom-2 left-2 -rotate-90" />
            <CardCornerFiligree className="bottom-2 right-2 rotate-180" />

            <div className="relative z-10 flex flex-col h-full p-5 pt-6">
              {/* Header */}
              <div className="text-center">
                <p className="font-heading text-[0.55rem] tracking-[0.3em] text-library-brown/50 mb-2">
                  ✦ ✦ ✦
                </p>
                <h3 className="font-heading text-xl md:text-2xl font-semibold tracking-wide text-deep-ink uppercase">
                  {title}
                </h3>
                <p className="font-heading text-[0.6rem] tracking-[0.35em] uppercase text-library-brown/60 mt-1">
                  {subtitle}
                </p>
              </div>

              {/* Portrait circle */}
              <div className="mx-auto my-4 relative">
                <div className="w-24 h-24 rounded-full border border-burnished-gold/50 flex items-center justify-center bg-deep-ink/5 relative">
                  <div className="absolute -left-3 top-1/2 -translate-y-1/2 text-burnished-gold/40 text-xs">✦</div>
                  <div className="absolute -right-3 top-1/2 -translate-y-1/2 text-burnished-gold/40 text-xs">✦</div>
                  {isVillain ? (
                    <div className="w-20 h-20 rounded-full bg-gradient-to-b from-library-brown/30 to-deep-ink/20 flex items-end justify-center overflow-hidden">
                      <div className="w-14 h-16 bg-deep-ink/60 rounded-t-full" />
                    </div>
                  ) : (
                    <span className="font-heading text-3xl text-burnished-gold/40">
                      {title.charAt(4)}
                    </span>
                  )}
                </div>
              </div>

              {/* Description */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-burnished-gold/50 text-[0.5rem]">◇</span>
                  <p className="museum-label text-[0.5rem] text-library-brown/50">Description</p>
                  <span className="text-burnished-gold/50 text-[0.5rem]">◇</span>
                </div>
                <p className="font-body text-[0.7rem] leading-relaxed text-library-brown/80 italic">
                  &ldquo;{description}&rdquo;
                </p>
              </div>

              {/* Passive effect */}
              <div className="mt-3 pt-3 border-t border-library-brown/15">
                <div className="flex gap-3 items-start">
                  <SplitMaskIcon size={28} />
                  <div>
                    <p className="font-heading text-[0.55rem] tracking-[0.2em] uppercase text-burnished-gold mb-1">
                      Passive Effect
                    </p>
                    <p className="font-body text-[0.65rem] leading-relaxed text-library-brown/70">
                      {passiveEffect}
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer eye */}
              <div className="flex justify-center mt-3">
                <AllSeeingEye size={18} />
              </div>
            </div>
          </div>

          {/* ── BACK: Deep ink with emblem ── */}
          <div
            className="identity-card-back absolute inset-0 flex flex-col items-center justify-between bg-deep-ink rounded-lg overflow-hidden shadow-xl"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <CardCornerFiligree className="top-2 left-2 text-burnished-gold/30" />
            <CardCornerFiligree className="top-2 right-2 rotate-90 text-burnished-gold/30" />
            <CardCornerFiligree className="bottom-2 left-2 -rotate-90 text-burnished-gold/30" />
            <CardCornerFiligree className="bottom-2 right-2 rotate-180 text-burnished-gold/30" />

            <div className="flex flex-col items-center justify-center flex-1 p-6 relative z-10">
              <UnmaskEmblem size={100} />
              <h3 className="font-heading text-3xl tracking-[0.15em] gold-foil uppercase mt-4">
                Unmask
              </h3>
              <p className="font-heading text-[0.55rem] tracking-[0.35em] text-burnished-gold/70 mt-2 uppercase">
                Reveal · Fate · Survive
              </p>
            </div>

            <div className="pb-5 flex flex-col items-center gap-2">
              <div className="w-16 h-px bg-burnished-gold/30" />
              <p className="font-heading text-[0.5rem] tracking-[0.4em] text-burnished-gold/40">
                ✦ ✦ ✦
              </p>
              <div className="w-16 h-px bg-burnished-gold/30" />
            </div>
          </div>
        </div>

        <p className="text-center mt-3 font-body text-[0.6rem] tracking-widest uppercase text-library-brown/40">
          Tap to flip
        </p>
      </div>
    </Reveal>
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

        {/* Featured reference from design document */}
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

        {/* Interactive card grid */}
        <Reveal delay={0.3} className="mt-20">
          <p className="museum-label mb-8 text-center text-library-brown/50">
            Interactive Specimens · Click to Flip
          </p>
        </Reveal>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {archetypes.map((card, i) => (
            <IdentityCard
              key={card.id}
              {...card}
              index={i}
              isVillain={card.id === "the-villain"}
            />
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
