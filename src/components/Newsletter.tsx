"use client";

import { useState, type FormEvent } from "react";
import { Reveal } from "./ui/Reveal";
import { UnmaskEmblem } from "./ui/UnmaskEmblem";
import { SectionFrame } from "./ui/SectionFrame";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  }

  return (
    <section
      id="circle"
      className="section-padding relative ink-surface border-t border-burnished-gold/10"
    >
      <SectionFrame catalogRef="Catalog VIII · Initiation · Folio 8" className="mx-auto max-w-2xl">
        <div className="sealed-letter p-10 md:p-14 text-center relative">
          {/* Wax seal decoration */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#6B1D00] border-2 border-[#8B2500] shadow-lg flex items-center justify-center">
            <span className="font-heading text-burnished-gold/80 text-sm">U</span>
          </div>

          <Reveal>
            <div className="flex justify-center mb-6 mt-4">
              <UnmaskEmblem size={56} />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="museum-label mb-4">VIII · Join The Circle</p>
          </Reveal>

          <Reveal delay={0.15}>
            <h2 className="font-heading text-3xl md:text-4xl font-light text-aged-paper">
              Request entry to the{" "}
              <span className="gold-foil italic">archive</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 font-body text-aged-paper/55 leading-relaxed max-w-md mx-auto text-sm">
              You are cordially invited to receive sealed dispatches from the
              Keepers — invitations to private gatherings, new archetypes, and
              entries from the literary journal.
            </p>
          </Reveal>

          <Reveal delay={0.3} className="mt-10">
            {submitted ? (
              <div className="border border-burnished-gold/30 bg-burnished-gold/5 px-8 py-10">
                <p className="font-heading text-2xl italic text-burnished-gold">
                  Your name has been inscribed in the ledger.
                </p>
                <p className="mt-3 font-body text-sm text-aged-paper/50">
                  Watch for a sealed letter in your inbox.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              >
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="archive-input flex-1 px-5 py-4 font-body text-sm"
                />
                <button
                  type="submit"
                  className="border border-burnished-gold/50 bg-burnished-gold/10 px-8 py-4 font-body text-xs tracking-[0.2em] uppercase text-burnished-gold transition-all hover:bg-burnished-gold/20 hover:border-burnished-gold hover:shadow-[0_0_20px_rgba(200,155,60,0.1)] whitespace-nowrap"
                >
                  Seal & Send
                </button>
              </form>
            )}
          </Reveal>

          <Reveal delay={0.4} className="mt-8">
            <p className="museum-label text-aged-paper/25">
              No spam. Only sealed dispatches. Unsubscribe at any time.
            </p>
          </Reveal>
        </div>
      </SectionFrame>
    </section>
  );
}
