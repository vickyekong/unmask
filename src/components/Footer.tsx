import { WaxSeal } from "./ui/WaxSeal";

const footerLinks = [
  { href: "#premise", label: "The Premise" },
  { href: "#how-to-play", label: "How To Play" },
  { href: "#world", label: "The World" },
  { href: "#cards", label: "The Cards" },
  { href: "#stories", label: "Stories" },
  { href: "#circle", label: "Join The Circle" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-burnished-gold/10 bg-deep-ink py-16 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <div className="flex items-center gap-5">
            <WaxSeal size={48} />
            <div>
              <p className="font-heading text-xl tracking-[0.3em] uppercase text-aged-paper">
                Unmask
              </p>
              <p className="mt-1 museum-label text-aged-paper/30">
                A Literary Game of Hidden Identity
              </p>
            </div>
          </div>

          <nav>
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="museum-label text-[0.6rem] text-aged-paper/40 transition-colors hover:text-burnished-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 pt-8 border-t border-burnished-gold/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-aged-paper/25">
            &copy; {new Date().getFullYear()} UNMASK. All stories reserved.
          </p>
          <a
            href="/moodboard"
            className="museum-label text-[0.55rem] text-aged-paper/25 transition-colors hover:text-burnished-gold"
          >
            Brand Mood Board
          </a>
          <p className="font-heading text-sm italic text-aged-paper/20">
            Read carefully. Speak truthfully. Unmask gently.
          </p>
        </div>
      </div>
    </footer>
  );
}
