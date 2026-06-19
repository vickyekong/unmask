import { stories } from "@/lib/data";
import { Reveal } from "./ui/Reveal";
import { SectionFrame } from "./ui/SectionFrame";

export function CommunityStories() {
  return (
    <section
      id="stories"
      className="section-padding relative ink-surface border-t border-burnished-gold/10"
    >
      <SectionFrame catalogRef="Catalog VI · Correspondence · Folio 6" className="mx-auto max-w-6xl">
        <Reveal>
          <p className="museum-label mb-4">VI · Community Stories</p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-aged-paper">
            Letters from{" "}
            <span className="gold-foil italic">the circle</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-6 max-w-xl font-body text-aged-paper/55 leading-relaxed">
            After each gathering, stories find their way back to the archive —
            handwritten accounts from bookshops, salons, and candlelit tables
            across four continents.
          </p>
        </Reveal>

        <div className="mt-16 columns-1 md:columns-2 gap-8 space-y-8">
          {stories.map((story, i) => (
            <Reveal key={story.id} delay={0.2 + i * 0.1}>
              <article className="break-inside-avoid journal-entry p-8 transition-colors hover:border-burnished-gold/30">
                <div className="flex items-center justify-between mb-4">
                  <span className="museum-label text-burnished-gold/60">
                    {story.tag}
                  </span>
                  <span className="font-body text-xs text-aged-paper/30">
                    {story.location}
                  </span>
                </div>
                <p className="font-heading text-lg italic text-aged-paper/80 leading-relaxed">
                  &ldquo;{story.excerpt}&rdquo;
                </p>
                <footer className="mt-6 flex items-center justify-between">
                  <span className="font-body text-xs tracking-wider text-aged-paper/40">
                    — {story.author}
                  </span>
                  <span className="font-heading text-burnished-gold/20 text-lg">❧</span>
                </footer>
              </article>
            </Reveal>
          ))}
        </div>
      </SectionFrame>
    </section>
  );
}
