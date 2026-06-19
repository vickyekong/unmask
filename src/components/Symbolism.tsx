import { symbols } from "@/lib/data";
import { Reveal } from "./ui/Reveal";
import { UnmaskEmblem } from "./ui/UnmaskEmblem";
import { SectionFrame } from "./ui/SectionFrame";

export function Symbolism() {
  return (
    <section
      id="symbolism"
      className="section-padding relative ink-surface border-t border-burnished-gold/10"
    >
      <SectionFrame catalogRef="Catalog IV · Symbolism · Folio 4" className="mx-auto max-w-6xl">
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
            UNMASK draws its visual language from illuminated manuscripts,
            secret society regalia, and the quiet iconography of private libraries.
            Each symbol is catalogued here as in a museum exhibition.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {symbols.map((symbol, i) => (
            <Reveal key={symbol.name} delay={0.2 + i * 0.08}>
              <article className="exhibit-placard p-8 h-full group hover:border-burnished-gold/25 transition-colors">
                <p className="museum-label text-[0.45rem] mb-4 opacity-40">
                  Symbol {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-heading text-xl text-burnished-gold/80 group-hover:text-burnished-gold transition-colors">
                  {symbol.name}
                </h3>
                <p className="mt-4 font-body text-sm text-aged-paper/55 leading-relaxed">
                  {symbol.meaning}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.5} className="mt-16 flex flex-col items-center gap-6">
          <UnmaskEmblem size={72} className="opacity-70" />
          <div className="ornament-rule max-w-xs text-burnished-gold/40">
            <span className="text-sm tracking-[0.3em]">☽ ✦ ☾</span>
          </div>
        </Reveal>
      </SectionFrame>
    </section>
  );
}
