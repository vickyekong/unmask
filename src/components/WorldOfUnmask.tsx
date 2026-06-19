import { Reveal } from "./ui/Reveal";
import { SectionFrame } from "./ui/SectionFrame";

const worldElements = [
  {
    title: "The Archive",
    ref: "W-001",
    description:
      "A secret society of readers, writers, and seekers who believe identity is narrative — and narrative is sacred. Members are called Keepers.",
    icon: "◈",
  },
  {
    title: "The Circle",
    ref: "W-002",
    description:
      "The gathering itself. No moderator, no authority. The circle governs itself through attention, empathy, and the shared language of story.",
    icon: "◎",
  },
  {
    title: "The Codex",
    ref: "W-003",
    description:
      "The complete collection of UNMASK archetypes — each one a character study, a psychological portrait rendered in the language of myth.",
    icon: "❧",
  },
  {
    title: "The Unveiling",
    ref: "W-004",
    description:
      "The ritual moment when hidden identities are revealed. Not a climax, but a threshold — after which the conversation deepens immeasurably.",
    icon: "✦",
  },
];

export function WorldOfUnmask() {
  return (
    <section id="world" className="section-padding relative parchment">
      <SectionFrame catalogRef="Catalog III · The World · Folio 3" className="mx-auto max-w-6xl">
        <Reveal>
          <p className="museum-label mb-4 text-library-brown/60">III · The World of Unmask</p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-library-brown">
            A society hidden in plain{" "}
            <span className="italic text-forest-ink">sight</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-6 max-w-2xl font-body text-library-brown/70 leading-relaxed text-lg">
            Before the first card is drawn, you have already entered a world —
            one that exists in the space between a leather-bound journal and
            a candlelit confessional.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {worldElements.map((element, i) => (
            <Reveal key={element.title} delay={0.2 + i * 0.1}>
              <article className="group relative flex gap-6 border border-library-brown/10 bg-aged-paper/50 p-8 transition-all hover:border-burnished-gold/30 hover:shadow-lg hover:shadow-library-brown/5">
                <span className="absolute top-4 right-4 museum-label text-[0.45rem] text-library-brown/25">
                  Ref. {element.ref}
                </span>
                <span className="font-heading text-3xl text-burnished-gold/50 transition-colors group-hover:text-burnished-gold shrink-0">
                  {element.icon}
                </span>
                <div>
                  <h3 className="font-heading text-2xl text-library-brown">
                    {element.title}
                  </h3>
                  <p className="mt-3 font-body text-sm leading-relaxed text-library-brown/65">
                    {element.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.6} className="mt-20">
          <div className="relative overflow-hidden border border-library-brown/15 bg-library-brown/5 p-10 md:p-16">
            <div className="absolute top-4 right-4 museum-label text-library-brown/30">
              Exhibit A · Founding Document
            </div>
            <div className="absolute top-4 left-4 font-heading text-burnished-gold/15 text-6xl select-none">
              &ldquo;
            </div>
            <p className="font-heading text-xl md:text-2xl italic text-library-brown/80 leading-relaxed max-w-3xl relative z-10">
              We founded UNMASK on a single conviction: that the most
              profound human experiences cannot be bought, streamed, or
              scrolled — they must be spoken, in person, across a table,
              with cards that ask better questions than we know how to ask
              ourselves.
            </p>
            <p className="mt-6 museum-label text-library-brown/40">
              — The Keepers&apos; Manifesto, First Edition
            </p>
          </div>
        </Reveal>
      </SectionFrame>
    </section>
  );
}
