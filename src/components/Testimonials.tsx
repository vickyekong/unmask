import { testimonials } from "@/lib/data";
import { Reveal } from "./ui/Reveal";
import { SectionFrame } from "./ui/SectionFrame";

export function Testimonials() {
  return (
    <section id="testimonials" className="section-padding relative parchment">
      <SectionFrame catalogRef="Catalog VII · Endorsements · Folio 7" className="mx-auto max-w-6xl">
        <Reveal>
          <p className="museum-label mb-4 text-library-brown/60">VII · Testimonials</p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-library-brown">
            Clippings from the{" "}
            <span className="italic text-forest-ink">literary press</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-4 max-w-lg font-body text-sm text-library-brown/50">
            As reviewed in journals, salons, and private correspondence.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-1 lg:gap-12">
          {testimonials.map((item, i) => (
            <Reveal key={item.author} delay={0.15 + i * 0.12}>
              <blockquote className="review-clipping relative bg-aged-paper/80 border border-library-brown/10 p-8 md:p-10">
                <div className="absolute -top-3 left-8 bg-aged-paper px-3">
                  <span className="museum-label text-[0.45rem] text-library-brown/40">
                    The Literary Review · Vol. {i + 1}
                  </span>
                </div>
                <p className="font-heading text-xl md:text-2xl italic text-library-brown/85 leading-snug">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer className="mt-6 flex flex-col gap-1 border-t border-library-brown/10 pt-4">
                  <cite className="font-body text-sm tracking-wide text-library-brown not-italic">
                    {item.author}
                  </cite>
                  <span className="museum-label text-library-brown/45">
                    {item.role}
                  </span>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </SectionFrame>
    </section>
  );
}
