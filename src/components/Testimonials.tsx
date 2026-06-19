import { testimonials } from "@/lib/data";
import { Reveal } from "./ui/Reveal";

export function Testimonials() {
  return (
    <section className="section-padding relative parchment">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="museum-label mb-4 text-library-brown/60">VII · Testimonials</p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-library-brown">
            Words from the{" "}
            <span className="italic">inner circle</span>
          </h2>
        </Reveal>

        <div className="mt-16 space-y-12">
          {testimonials.map((item, i) => (
            <Reveal key={item.author} delay={0.15 + i * 0.12}>
              <blockquote className="relative pl-0 md:pl-12">
                <div className="hidden md:block absolute left-0 top-0 font-heading text-6xl text-burnished-gold/20 leading-none">
                  &ldquo;
                </div>
                <p className="font-heading text-2xl md:text-3xl italic text-library-brown/85 leading-snug max-w-4xl">
                  {item.quote}
                </p>
                <footer className="mt-6 flex flex-col gap-1">
                  <cite className="font-body text-sm tracking-wide text-library-brown not-italic">
                    {item.author}
                  </cite>
                  <span className="museum-label text-library-brown/45">
                    {item.role}
                  </span>
                </footer>
                {i < testimonials.length - 1 && (
                  <div className="mt-12 h-px w-full bg-gradient-to-r from-library-brown/15 via-library-brown/5 to-transparent" />
                )}
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
