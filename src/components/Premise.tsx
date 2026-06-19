import { Reveal } from "./ui/Reveal";

export function Premise() {
  return (
    <section id="premise" className="section-padding relative parchment">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="museum-label mb-4 text-library-brown/60">I · The Premise</p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-library-brown leading-tight max-w-3xl">
            Every person wears a mask.
            <br />
            <span className="italic text-forest-ink">Not all are meant to be removed.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal delay={0.2}>
            <div className="space-y-6 font-body text-library-brown/80 leading-relaxed">
              <p className="text-lg">
                UNMASK is not a game of deception. It is an act of literary
                archaeology — an invitation to read the living manuscript
                of another human being, one careful question at a time.
              </p>
              <p>
                Each player receives a hidden identity: an archetype drawn from
                the deep vocabulary of story — The Archivist, The Mirror, The
                Wanderer. These are not costumes. They are lenses, offered by
                chance, interpreted by community.
              </p>
              <p>
                Around a table, in a quiet room, among friends or strangers
                becoming friends, players observe, question, and narrate one
                another into being. When the moment arrives, identities are
                revealed — and what emerges is never what you expect.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.35} direction="right">
            <blockquote className="relative border-l-2 border-burnished-gold/40 pl-8 py-4">
              <p className="font-heading text-2xl md:text-3xl italic text-library-brown/90 leading-snug">
                &ldquo;We do not play to win. We play to be witnessed — to discover
                that the story we&apos;ve been telling ourselves is only one
                chapter of a far richer book.&rdquo;
              </p>
              <footer className="mt-6 museum-label text-library-brown/50">
                — From the Founding Charter
              </footer>
              {/* Decorative corner */}
              <div className="absolute -top-2 -left-1 text-burnished-gold/40 text-2xl font-heading">
                ❧
              </div>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
