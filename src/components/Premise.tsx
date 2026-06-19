import { Reveal } from "./ui/Reveal";
import { SectionFrame, Marginalia } from "./ui/SectionFrame";

export function Premise() {
  return (
    <section id="premise" className="section-padding relative parchment overflow-hidden">
      {/* Subtle manuscript watermark */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] flex items-center justify-center"
        aria-hidden="true"
      >
        <span className="font-heading text-[20rem] text-library-brown select-none">❧</span>
      </div>

      <SectionFrame catalogRef="Catalog I · The Premise · Folio 1" className="mx-auto max-w-6xl relative">
        <Marginalia side="left">
          &ldquo;Every mask tells a story. Not every story asks to be told.&rdquo;
        </Marginalia>

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
              <p className="text-lg first-letter:font-heading first-letter:text-5xl first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-burnished-gold">
                UNMASK is not a game of deception. It is an act of literary
                archaeology — an invitation to read the living manuscript
                of another human being, one careful question at a time.
              </p>
              <p>
                Each seeker receives a hidden identity: an archetype drawn from
                the deep vocabulary of story — The Villain, The Mirror, The
                Wanderer. These are not costumes. They are lenses, offered by
                chance, interpreted by the circle.
              </p>
              <p>
                Around a candlelit table, among friends or strangers becoming
                friends, the circle observes, questions, and narrates one
                another into being. When the moment arrives, identities are
                revealed — and what emerges is never what you expect.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.35} direction="right">
            <blockquote className="relative border border-library-brown/10 bg-aged-paper/60 p-8 md:p-10 shadow-lg shadow-library-brown/5">
              <div className="absolute top-4 right-4 museum-label text-library-brown/25">
                Founding Charter · Excerpt
              </div>
              <p className="font-heading text-2xl md:text-3xl italic text-library-brown/90 leading-snug">
                &ldquo;We do not gather to win. We gather to be witnessed — to discover
                that the story we&apos;ve been telling ourselves is only one
                chapter of a far richer book.&rdquo;
              </p>
              <footer className="mt-6 museum-label text-library-brown/50">
                — The Keepers&apos; Manifesto, First Edition
              </footer>
              <div className="absolute -top-2 -left-1 text-burnished-gold/40 text-2xl font-heading">
                ❧
              </div>
            </blockquote>
          </Reveal>
        </div>
      </SectionFrame>
    </section>
  );
}
