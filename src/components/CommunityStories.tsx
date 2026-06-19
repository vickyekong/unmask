import { stories } from "@/lib/data";
import { Reveal } from "./ui/Reveal";

export function CommunityStories() {
  return (
    <section
      id="stories"
      className="section-padding relative ink-surface border-t border-burnished-gold/10"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="museum-label mb-4">VI · Community Stories</p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-aged-paper">
            Voices from{" "}
            <span className="gold-foil italic">the circle</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-6 max-w-xl font-body text-aged-paper/55 leading-relaxed">
            UNMASK has been played in bookshops, university common rooms,
            dinner parties, and quiet apartments across four continents.
            These are some of the stories that returned to us.
          </p>
        </Reveal>

        <div className="mt-16 columns-1 md:columns-2 gap-8 space-y-8">
          {stories.map((story, i) => (
            <Reveal key={story.id} delay={0.2 + i * 0.1}>
              <article className="break-inside-avoid border border-burnished-gold/15 bg-deep-ink/50 p-8 transition-colors hover:border-burnished-gold/30">
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
                <footer className="mt-6 font-body text-xs tracking-wider text-aged-paper/40">
                  — {story.author}
                </footer>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
