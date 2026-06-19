import { howToPlaySteps } from "@/lib/data";
import { Reveal } from "./ui/Reveal";
import { SectionFrame } from "./ui/SectionFrame";

export function HowToPlay() {
  return (
    <section
      id="how-to-play"
      className="section-padding relative ink-surface border-t border-burnished-gold/10"
    >
      <SectionFrame catalogRef="Catalog II · Instructions · Folio 2" className="mx-auto max-w-6xl">
        <Reveal>
          <p className="museum-label mb-4">II · How To Play</p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-aged-paper max-w-2xl">
            Four movements of{" "}
            <span className="gold-foil italic">revelation</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-6 max-w-xl font-body text-aged-paper/60 leading-relaxed">
            UNMASK unfolds like a piece of chamber music — structured, intimate,
            and best experienced without hurry. Follow the path through the archive.
          </p>
        </Reveal>

        {/* Vertical exhibition timeline */}
        <div className="archive-timeline mt-16 space-y-0">
          {howToPlaySteps.map((step, i) => (
            <Reveal key={step.step} delay={0.2 + i * 0.12}>
              <article
                className={`relative flex flex-col lg:flex-row gap-8 pb-16 ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Timeline node */}
                <div className="absolute left-5 lg:left-1/2 lg:-translate-x-1/2 top-0 w-3 h-3 rounded-full border border-burnished-gold/50 bg-deep-ink z-10">
                  <div className="absolute inset-0.5 rounded-full bg-burnished-gold/40" />
                </div>

                <div className={`lg:w-1/2 ${i % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:pl-16"} pl-12 lg:pl-0`}>
                  <span className="font-heading text-4xl font-light text-burnished-gold/25">
                    {step.step}
                  </span>
                </div>

                <div className={`lg:w-1/2 pl-12 lg:pl-0 ${i % 2 === 0 ? "lg:pl-16" : "lg:pr-16"}`}>
                  <div className="exhibit-placard p-8 transition-colors hover:border-burnished-gold/30">
                    <p className="museum-label text-[0.5rem] mb-3 opacity-50">
                      Exhibit {step.step} · Chamber {i + 1}
                    </p>
                    <h3 className="font-heading text-2xl text-aged-paper">
                      {step.title}
                    </h3>
                    <p className="mt-4 font-body text-sm leading-relaxed text-aged-paper/55">
                      {step.description}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.6} className="mt-4 text-center">
          <p className="font-heading text-lg italic text-aged-paper/40">
            A single session lasts 45 to 90 minutes. The conversation may last a lifetime.
          </p>
        </Reveal>
      </SectionFrame>
    </section>
  );
}
