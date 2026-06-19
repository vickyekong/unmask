import { symbols } from "@/lib/data";
import { Reveal } from "./ui/Reveal";

export function Symbolism() {
  return (
    <section className="section-padding relative ink-surface border-t border-burnished-gold/10">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="museum-label mb-4">IV · Symbolism & Meaning</p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-aged-paper">
            Every mark carries{" "}
            <span className="gold-foil italic">intention</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-6 max-w-xl font-body text-aged-paper/55 leading-relaxed">
            UNMASK draws its visual language from the traditions of illuminated
            manuscripts, secret society regalia, and the quiet iconography of
            private libraries.
          </p>
        </Reveal>

        <div className="mt-16 space-y-0 divide-y divide-burnished-gold/10">
          {symbols.map((symbol, i) => (
            <Reveal key={symbol.name} delay={0.2 + i * 0.08}>
              <article className="grid gap-4 py-10 md:grid-cols-[200px_1fr] md:gap-12 items-start group">
                <h3 className="font-heading text-xl text-burnished-gold/80 group-hover:text-burnished-gold transition-colors">
                  {symbol.name}
                </h3>
                <p className="font-body text-aged-paper/60 leading-relaxed">
                  {symbol.meaning}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.5} className="mt-12 flex justify-center">
          <div className="ornament-rule max-w-xs text-burnished-gold/40">
            <span className="text-2xl">☽ ✦ ☾</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
