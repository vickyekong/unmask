import { howToPlaySteps } from "@/lib/data";
import { Reveal } from "./ui/Reveal";

export function HowToPlay() {
  return (
    <section
      id="how-to-play"
      className="section-padding relative ink-surface border-t border-burnished-gold/10"
    >
      <div className="mx-auto max-w-6xl">
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
            and best experienced without hurry.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {howToPlaySteps.map((step, i) => (
            <Reveal key={step.step} delay={0.2 + i * 0.1}>
              <article className="group relative h-full gold-border bg-deep-ink/40 p-8 transition-colors hover:bg-deep-ink/60">
                <span className="font-heading text-5xl font-light text-burnished-gold/30 transition-colors group-hover:text-burnished-gold/50">
                  {step.step}
                </span>
                <h3 className="mt-4 font-heading text-xl text-aged-paper">
                  {step.title}
                </h3>
                <p className="mt-4 font-body text-sm leading-relaxed text-aged-paper/55">
                  {step.description}
                </p>
                <div className="absolute bottom-0 left-0 h-px w-0 bg-burnished-gold/50 transition-all duration-500 group-hover:w-full" />
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.6} className="mt-16 text-center">
          <p className="font-heading text-lg italic text-aged-paper/40">
            A single session lasts 45 to 90 minutes. The conversation may last a lifetime.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
