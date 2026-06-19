"use client";

import { useState, type FormEvent } from "react";
import { Reveal } from "./ui/Reveal";
import { WaxSeal } from "./ui/WaxSeal";

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
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <div className="flex justify-center mb-8">
            <WaxSeal size={64} />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="museum-label mb-4">VIII · Join The Circle</p>
        </Reveal>

        <Reveal delay={0.15}>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-aged-paper">
            Enter the{" "}
            <span className="gold-foil italic">archive</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-6 font-body text-aged-paper/55 leading-relaxed max-w-lg mx-auto">
            Receive invitations to private gatherings, early access to new
            archetypes, and dispatches from the Keepers — a literary journal
            for those who believe stories are the truest maps we have.
          </p>
        </Reveal>

        <Reveal delay={0.3} className="mt-10">
          {submitted ? (
            <div className="border border-burnished-gold/30 bg-burnished-gold/5 px-8 py-10">
              <p className="font-heading text-2xl italic text-burnished-gold">
                Your name has been inscribed.
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
                className="border border-burnished-gold/50 bg-burnished-gold/10 px-8 py-4 font-body text-xs tracking-[0.2em] uppercase text-burnished-gold transition-all hover:bg-burnished-gold/20 hover:border-burnished-gold whitespace-nowrap"
              >
                Request Entry
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
    </section>
  );
}
