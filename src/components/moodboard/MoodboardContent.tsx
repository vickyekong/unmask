"use client";

import Image from "next/image";
import { WaxSeal } from "@/components/ui/WaxSeal";
import { UnmaskEmblem } from "@/components/ui/UnmaskEmblem";
import { CopyButton } from "./CopyButton";
import {
  brandColors,
  brandDonts,
  brandImagery,
  brandSymbols,
  brandTypography,
  brandVoice,
  spacingScale,
} from "@/lib/brand";

function SectionHeader({
  number,
  title,
  subtitle,
}: {
  number: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-10">
      <p className="museum-label mb-3">{number}</p>
      <h2 className="font-heading text-3xl md:text-4xl font-light text-aged-paper">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-2xl font-body text-sm text-aged-paper/50 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

function MoodboardTile({
  children,
  className = "",
  label,
  dark = true,
}: {
  children: React.ReactNode;
  className?: string;
  label?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden border border-burnished-gold/15 ${dark ? "bg-deep-ink/60" : "parchment"} ${className}`}
    >
      {label && (
        <span className="absolute top-3 left-3 z-10 museum-label text-[0.55rem] opacity-60">
          {label}
        </span>
      )}
      {children}
    </div>
  );
}

export function MoodboardContent() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
      {/* ── OVERVIEW ── */}
      <section id="overview" className="mb-24 scroll-mt-20">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="museum-label mb-4">Brand Mood Board</p>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-light text-aged-paper leading-tight">
              UNMASK
              <span className="block text-2xl md:text-3xl italic gold-foil mt-2">
                Visual Identity System
              </span>
            </h1>
            <p className="mt-6 max-w-xl font-body text-aged-paper/60 leading-relaxed">
              A working reference for brand presentations, design reviews, and
              creative alignment. Every token on this page is live — colors copy
              to clipboard, typography is rendered in production fonts, and
              components reflect the actual site build.
            </p>
          </div>
          <WaxSeal size={100} />
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Category", value: "Literary Experience" },
            { label: "Aesthetic", value: "Dark Academia" },
            { label: "Audience", value: "Readers, Writers, Seekers" },
            { label: "Feeling", value: "Mystery · Intelligence · Connection" },
          ].map((item) => (
            <MoodboardTile key={item.label} className="p-5">
              <p className="museum-label text-[0.55rem] mb-2">{item.label}</p>
              <p className="font-heading text-lg text-aged-paper">{item.value}</p>
            </MoodboardTile>
          ))}
        </div>

        <MoodboardTile className="mt-6 p-8 md:p-12" label="Brand Essence">
          <blockquote className="font-heading text-2xl md:text-3xl italic text-aged-paper/90 leading-snug max-w-3xl">
            &ldquo;Less like a game store. More like discovering a rare literary
            artifact hidden inside an old library.&rdquo;
          </blockquote>
        </MoodboardTile>
      </section>

      {/* ── COLORS ── */}
      <section id="colors" className="mb-24 scroll-mt-20">
        <SectionHeader
          number="01 · Color Palette"
          title="Six colors. One atmosphere."
          subtitle="Click any hex value to copy. Each color carries a narrative role — never used decoratively."
        />

        <MoodboardTile className="mb-6 overflow-hidden p-0" label="Color Story">
          <Image
            src="/assets/unmask-color-story.png"
            alt="UNMASK brand color palette — Dark Navy, Dark Forest, Deep Burgundy, Pine Teal, Salmon Glow, Sky Mist"
            width={1200}
            height={800}
            className="w-full h-auto object-cover"
            priority
          />
        </MoodboardTile>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {brandColors.map((color) => (
            <MoodboardTile key={color.hex} className="overflow-hidden">
              <div
                className="h-32 w-full"
                style={{ backgroundColor: color.hex }}
              />
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-heading text-xl text-aged-paper">
                      {color.name}
                    </h3>
                    <p className="mt-1 font-body text-xs text-aged-paper/45">
                      {color.role}
                    </p>
                  </div>
                  <CopyButton value={color.hex} />
                </div>
                <p className="mt-4 font-body text-xs text-aged-paper/50 leading-relaxed">
                  {color.usage}
                </p>
                <div className="mt-3 flex gap-4">
                  <CopyButton value={color.hex} label={`HEX ${color.hex}`} />
                  <CopyButton value={color.rgb} label={`RGB ${color.rgb}`} />
                </div>
              </div>
            </MoodboardTile>
          ))}

          {/* Gradient specimen */}
          <MoodboardTile label="Teal & Salmon Foil" className="p-5 flex flex-col justify-between min-h-[280px]">
            <p className="font-heading text-4xl gold-foil mt-6">Illuminated</p>
            <div className="space-y-2 mt-auto">
              <CopyButton value="#FA9A90" label="#FA9A90 · Salmon" />
              <CopyButton value="#1C6C61" label="#1C6C61 · Pine Teal" />
              <CopyButton value="#B9D0DF" label="#B9D0DF · Sky Mist" />
              <CopyButton value="#193A31" label="#193A31 · Forest" />
            </div>
          </MoodboardTile>
        </div>

        {/* Color combinations */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <MoodboardTile label="Primary Pairing" className="p-6 ink-surface min-h-[140px] flex flex-col justify-end">
            <p className="font-heading text-2xl text-aged-paper">Dark Navy + Sky Mist</p>
            <p className="font-body text-xs text-aged-paper/40 mt-1">Default reading environment</p>
          </MoodboardTile>
          <MoodboardTile label="Accent Pairing" dark={false} className="p-6 min-h-[140px] flex flex-col justify-end">
            <p className="font-heading text-2xl text-library-brown">Sky Mist + Deep Burgundy</p>
            <p className="font-body text-xs text-library-brown/50 mt-1">Manuscript sections &amp; card fronts</p>
          </MoodboardTile>
          <MoodboardTile label="Highlight Pairing" className="p-6 bg-library-brown min-h-[140px] flex flex-col justify-end">
            <p className="font-heading text-2xl text-salmon">Burgundy + Salmon Glow</p>
            <p className="font-body text-xs text-aged-paper/40 mt-1">Revelation moments &amp; wax seals</p>
          </MoodboardTile>
        </div>
      </section>

      {/* ── TYPOGRAPHY ── */}
      <section id="typography" className="mb-24 scroll-mt-20">
        <SectionHeader
          number="02 · Typography"
          title="Two voices, one story"
          subtitle="Cormorant Garamond speaks in poetry. Inter speaks in clarity."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <MoodboardTile className="p-8">
            <p className="museum-label mb-6">Heading · Cormorant Garamond</p>
            <p className="font-heading text-5xl font-light text-aged-paper leading-tight">
              {brandTypography.heading.specimen}
            </p>
            <div className="mt-8 space-y-3 border-t border-burnished-gold/10 pt-6">
              {brandTypography.heading.weights.map((w) => (
                <p key={w} className="font-heading text-xl text-aged-paper/70">
                  <span className="museum-label text-[0.5rem] mr-4 opacity-50">{w.split(" ")[0]}</span>
                  {w}
                </p>
              ))}
            </div>
            <p className="mt-6 font-body text-xs text-aged-paper/40">
              {brandTypography.heading.usage}
            </p>
          </MoodboardTile>

          <MoodboardTile className="p-8">
            <p className="museum-label mb-6">Body · Inter</p>
            <p className="font-body text-lg text-aged-paper/80 leading-relaxed">
              {brandTypography.body.specimen}
            </p>
            <p className="mt-6 font-body text-base text-aged-paper/60 leading-relaxed">
              UNMASK is a literary-inspired card experience where hidden identities
              become portals to deeper conversation. The body typeface must remain
              invisible — readable at length, never competing with the narrative voice.
            </p>
            <div className="mt-8 border-t border-burnished-gold/10 pt-6">
              <p className="museum-label mb-3">Museum Label Style</p>
              <p className="museum-label">{brandTypography.label.specimen}</p>
              <p className="mt-2 font-body text-xs text-aged-paper/35">
                {brandTypography.label.style}
              </p>
            </div>
          </MoodboardTile>
        </div>

        {/* Type scale */}
        <MoodboardTile className="mt-6 p-8" label="Type Scale">
          <div className="space-y-6">
            {[
              { size: "text-7xl", label: "Display", sample: "Unmask", class: "font-heading text-5xl md:text-7xl font-light" },
              { size: "text-4xl", label: "H2 Section", sample: "The Premise", class: "font-heading text-3xl md:text-4xl font-light" },
              { size: "text-2xl", label: "H3 Card", sample: "The Narrator", class: "font-heading text-2xl" },
              { size: "text-lg", label: "Body Large", sample: "Every person wears a mask.", class: "font-body text-lg" },
              { size: "text-sm", label: "Body", sample: "Gather three to eight seekers in a space of quiet intention.", class: "font-body text-sm text-aged-paper/70" },
              { size: "text-xs", label: "Caption", sample: "Est. MMXXIV · A Literary Society", class: "museum-label" },
            ].map((row) => (
              <div key={row.label} className="grid grid-cols-[100px_1fr] gap-4 items-baseline border-b border-burnished-gold/5 pb-4">
                <span className="museum-label text-[0.5rem]">{row.label}</span>
                <p className={`${row.class} text-aged-paper`}>{row.sample}</p>
              </div>
            ))}
          </div>
        </MoodboardTile>
      </section>

      {/* ── TEXTURES ── */}
      <section id="textures" className="mb-24 scroll-mt-20">
        <SectionHeader
          number="03 · Textures & Surfaces"
          title="Tactile atmospheres"
          subtitle="CSS-generated textures used across the site — no stock photography required."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <MoodboardTile label=".parchment" dark={false} className="h-48 flex items-end p-5">
            <p className="font-body text-xs text-library-brown/60">Aged paper with fractal noise overlay</p>
          </MoodboardTile>
          <MoodboardTile label=".ink-surface" className="h-48 ink-surface flex items-end p-5">
            <p className="font-body text-xs text-aged-paper/50">Deep ink with radial forest &amp; gold glows</p>
          </MoodboardTile>
          <MoodboardTile label=".gold-border" className="h-48 gold-border flex items-end p-5">
            <p className="font-body text-xs text-aged-paper/50">Inset gold highlight with ambient shadow</p>
          </MoodboardTile>
          <MoodboardTile label="Candlelight" className="h-48 relative overflow-hidden">
            <div
              className="candle-glow absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 30% 50%, rgba(200,155,60,0.2) 0%, transparent 60%)",
              }}
            />
            <p className="absolute bottom-5 left-5 font-body text-xs text-aged-paper/50">
              Flickering radial gradient · 4s loop
            </p>
          </MoodboardTile>
          <MoodboardTile label="Vignette" className="h-48 relative">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at center, transparent 30%, rgba(15,23,32,0.8) 100%)",
              }}
            />
            <p className="absolute bottom-5 left-5 font-body text-xs text-aged-paper/50">
              Edge darkening for cinematic depth
            </p>
          </MoodboardTile>
          <MoodboardTile label="Gold Foil Text" className="h-48 flex items-center justify-center">
            <span className="font-heading text-5xl gold-foil italic">Revelation</span>
          </MoodboardTile>
        </div>

        {/* Spacing tokens */}
        <MoodboardTile className="mt-6 p-6" label="Spacing Tokens">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {spacingScale.map((s) => (
              <div key={s.token} className="border border-burnished-gold/10 p-4">
                <p className="museum-label text-[0.5rem] mb-1">{s.token}</p>
                <CopyButton value={s.value} label={s.value} />
                <p className="mt-2 font-body text-xs text-aged-paper/40">{s.usage}</p>
              </div>
            ))}
          </div>
        </MoodboardTile>
      </section>

      {/* ── SYMBOLS ── */}
      <section id="symbols" className="mb-24 scroll-mt-20">
        <SectionHeader
          number="04 · Symbol System"
          title="Glyphs of meaning"
          subtitle="Drawn from illuminated manuscripts and secret society regalia. Used sparingly, always with purpose."
        />

        <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
          {brandSymbols.map((sym) => (
            <MoodboardTile key={sym.glyph} className="p-6 text-center group hover:border-burnished-gold/40 transition-colors">
              <span className="font-heading text-4xl text-burnished-gold/60 group-hover:text-burnished-gold transition-colors">
                {sym.glyph}
              </span>
              <p className="mt-4 font-heading text-sm text-aged-paper">{sym.name}</p>
              <p className="mt-1 font-body text-xs text-aged-paper/40">{sym.meaning}</p>
            </MoodboardTile>
          ))}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <MoodboardTile className="p-8 flex items-center justify-center min-h-[200px]" label="Ornament Rule">
            <div className="ornament-rule w-full max-w-xs text-burnished-gold">
              <span className="text-xl">✦</span>
            </div>
          </MoodboardTile>
          <MoodboardTile className="p-8 flex items-center justify-center min-h-[200px]" label="Wax Seal">
            <WaxSeal size={90} />
          </MoodboardTile>
        </div>
      </section>

      {/* ── VOICE ── */}
      <section id="voice" className="mb-24 scroll-mt-20">
        <SectionHeader
          number="05 · Voice & Tone"
          title="How UNMASK speaks"
          subtitle="The language of a secret literary society — never a game publisher."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
          {brandVoice.pillars.map((pillar) => (
            <MoodboardTile key={pillar.title} className="p-6">
              <h3 className="font-heading text-xl text-burnished-gold">{pillar.title}</h3>
              <p className="mt-3 font-body text-sm text-aged-paper/55 leading-relaxed">
                {pillar.description}
              </p>
            </MoodboardTile>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <MoodboardTile className="p-6" label="Use These Words">
            <div className="flex flex-wrap gap-2 mt-4">
              {brandVoice.vocabulary.use.map((word) => (
                <span
                  key={word}
                  className="border border-forest-ink/40 bg-forest-ink/10 px-3 py-1.5 font-body text-xs text-aged-paper/70"
                >
                  {word}
                </span>
              ))}
            </div>
          </MoodboardTile>
          <MoodboardTile className="p-6" label="Avoid These Words">
            <div className="flex flex-wrap gap-2 mt-4">
              {brandVoice.vocabulary.avoid.map((word) => (
                <span
                  key={word}
                  className="border border-red-900/30 bg-red-950/20 px-3 py-1.5 font-body text-xs text-aged-paper/40 line-through decoration-red-900/50"
                >
                  {word}
                </span>
              ))}
            </div>
          </MoodboardTile>
        </div>

        <MoodboardTile className="mt-6 p-6" label="Tone Spectrum">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 mt-2">
            {brandVoice.tone.map((t) => (
              <p key={t} className="font-heading text-lg italic text-aged-paper/70">
                {t}
              </p>
            ))}
          </div>
        </MoodboardTile>
      </section>

      {/* ── IMAGERY ── */}
      <section id="imagery" className="mb-24 scroll-mt-20">
        <SectionHeader
          number="06 · Imagery Direction"
          title="Visual references"
          subtitle="Mood anchors for photography, art direction, and environmental design."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {brandImagery.map((ref, i) => (
            <MoodboardTile
              key={ref.title}
              className="min-h-[220px] p-6 flex flex-col justify-between"
              label={`Ref 0${i + 1}`}
            >
              <div>
                <h3 className="font-heading text-xl text-aged-paper">{ref.title}</h3>
                <p className="mt-2 font-body text-xs text-burnished-gold/60">
                  {ref.references}
                </p>
              </div>
              <p className="mt-4 font-body text-sm text-aged-paper/50 italic leading-relaxed">
                {ref.mood}
              </p>
            </MoodboardTile>
          ))}
        </div>

        {/* Visual mood strips */}
        <div className="mt-6 grid gap-2 grid-cols-6 h-24">
          {[
            "#0F2744", "#193A31", "#391023",
            "#1C6C61", "#FA9A90", "#B9D0DF",
          ].map((hex) => (
            <div
              key={hex}
              className="relative group cursor-pointer"
              style={{ backgroundColor: hex }}
              title={hex}
            >
              <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 font-mono text-[0.55rem] text-white">
                {hex}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── COMPONENTS ── */}
      <section id="components" className="mb-24 scroll-mt-20">
        <SectionHeader
          number="07 · UI Components"
          title="Live component specimens"
          subtitle="Production components from the site — use as reference for consistency."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <MoodboardTile className="p-8" label="Primary CTA">
            <a
              href="#"
              className="inline-flex items-center gap-3 border border-burnished-gold/50 bg-burnished-gold/5 px-8 py-4 font-body text-xs tracking-[0.25em] uppercase text-burnished-gold"
            >
              Open The Archive →
            </a>
          </MoodboardTile>

          <MoodboardTile className="p-8" label="Secondary Link">
            <a
              href="#"
              className="font-body text-xs tracking-[0.2em] uppercase text-aged-paper/50"
            >
              Discover How It Works
            </a>
          </MoodboardTile>

          <MoodboardTile className="p-8" label="Form Input">
            <input
              type="email"
              placeholder="your@email.com"
              className="archive-input w-full px-5 py-4 font-body text-sm"
              readOnly
            />
            <button
              type="button"
              className="mt-3 border border-burnished-gold/50 bg-burnished-gold/10 px-8 py-4 font-body text-xs tracking-[0.2em] uppercase text-burnished-gold"
            >
              Request Entry
            </button>
          </MoodboardTile>

          <MoodboardTile className="p-8" label="Card Frame">
            <div className="relative border border-burnished-gold/30 bg-gradient-to-br from-library-brown to-deep-ink p-8 aspect-[3/4] max-w-[200px] mx-auto">
              <div className="absolute inset-3 border border-burnished-gold/15" />
              <div className="absolute inset-5 border border-burnished-gold/8" />
              <span className="font-heading text-3xl text-burnished-gold/60 block text-center mt-8">◈</span>
              <p className="font-heading text-lg text-aged-paper text-center mt-4">The Villain</p>
            </div>
          </MoodboardTile>

          <MoodboardTile className="p-8 lg:col-span-2" label="Pull Quote">
            <blockquote className="border-l-2 border-burnished-gold/40 pl-8">
              <p className="font-heading text-2xl italic text-aged-paper/85 leading-snug">
                &ldquo;We do not play to win. We play to be witnessed.&rdquo;
              </p>
              <footer className="mt-4 museum-label text-aged-paper/40">
                — From the Founding Charter
              </footer>
            </blockquote>
          </MoodboardTile>
        </div>
      </section>

      {/* ── APPLICATIONS ── */}
      <section id="applications" className="mb-24 scroll-mt-20">
        <SectionHeader
          number="08 · Brand Applications"
          title="In context"
          subtitle="Mockups showing how the system applies across touchpoints."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Letterhead */}
          <MoodboardTile dark={false} className="p-8 min-h-[320px] flex flex-col" label="Stationery">
            <div className="flex justify-between items-start">
              <p className="font-heading text-sm tracking-[0.3em] uppercase text-library-brown">
                Unmask
              </p>
              <WaxSeal size={36} />
            </div>
            <div className="mt-8 flex-1">
              <p className="museum-label text-library-brown/50 mb-4">Private Correspondence</p>
              <p className="font-heading text-lg italic text-library-brown/80 leading-relaxed">
                You are cordially invited to join the Circle for an evening of
                revelation and literary discovery.
              </p>
            </div>
            <p className="museum-label text-library-brown/30 mt-4">The Keepers · Archive Ref. UNM-001</p>
          </MoodboardTile>

          {/* Exhibition placard */}
          <MoodboardTile className="p-8 min-h-[320px] flex flex-col justify-center" label="Exhibition Placard">
            <p className="museum-label mb-2">Exhibit VII · Archetype Series</p>
            <h3 className="font-heading text-2xl text-aged-paper">The Witness</h3>
            <p className="mt-1 font-body text-xs text-burnished-gold/60">Observer of Hidden Truths</p>
            <p className="mt-4 font-body text-sm text-aged-paper/55 leading-relaxed">
              I observe without intervening. My strength is clarity,
              but my weakness is silence when speech is needed.
            </p>
          </MoodboardTile>

          {/* Social card */}
          <MoodboardTile className="p-0 overflow-hidden min-h-[320px]" label="Social / Share Card">
            <div className="ink-surface p-8 h-full flex flex-col justify-between">
              <p className="museum-label">Reveal · Fate · Survive</p>
              <div>
                <UnmaskEmblem size={56} className="mx-auto mb-3" />
                <p className="font-heading text-4xl font-light text-aged-paper text-center">
                  Un<span className="gold-foil italic">mask</span>
                </p>
                <p className="mt-3 font-body text-xs text-aged-paper/50 max-w-[200px] mx-auto text-center">
                  Every person is a library of untold stories.
                </p>
              </div>
              <p className="museum-label text-aged-paper/25 text-center">unmask.game</p>
            </div>
          </MoodboardTile>
        </div>

        <MoodboardTile className="mt-6 p-6" label="Identity Card · Design Reference">
          <Image
            src="/assets/identity-card-reference.png"
            alt="UNMASK Identity Card — The Villain front and UNMASK emblem back"
            width={1200}
            height={800}
            className="w-full h-auto rounded-sm"
          />
          <p className="mt-4 font-body text-xs text-aged-paper/40 text-center">
            Primary product artifact · Aged parchment front · Deep ink back with split mask emblem
          </p>
        </MoodboardTile>
      </section>

      {/* ── GUIDELINES ── */}
      <section id="guidelines" className="mb-16 scroll-mt-20">
        <SectionHeader
          number="09 · Do & Don't"
          title="Creative guardrails"
          subtitle="Non-negotiable boundaries that protect the brand from gaming aesthetics."
        />

        <div className="space-y-3">
          {brandDonts.map((row) => (
            <MoodboardTile key={row.dont} className="p-5">
              <div className="grid gap-4 md:grid-cols-2 items-center">
                <div className="flex items-center gap-3">
                  <span className="text-red-900/60 text-lg">✕</span>
                  <p className="font-body text-sm text-aged-paper/40 line-through decoration-red-900/30">
                    {row.dont}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-forest-ink text-lg">✓</span>
                  <p className="font-body text-sm text-aged-paper/70">{row.do}</p>
                </div>
              </div>
            </MoodboardTile>
          ))}
        </div>

        <MoodboardTile className="mt-8 p-8 text-center" label="Closing Principle">
          <p className="font-heading text-2xl md:text-3xl italic text-aged-paper/80 max-w-2xl mx-auto leading-snug">
            Read carefully. Speak truthfully. Unmask gently.
          </p>
          <p className="mt-6 museum-label text-aged-paper/30">
            UNMASK Brand Guidelines · Version 1.0 · {new Date().getFullYear()}
          </p>
        </MoodboardTile>
      </section>
    </main>
  );
}
