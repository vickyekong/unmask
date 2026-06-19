export const brandTagline = "Reveal · Fate · Survive";

export const archetypes = [
  {
    id: "the-narrator",
    title: "The Narrator",
    subtitle: "Archetype",
    description:
      "I hold the thread of every story told tonight. My strength is coherence, but my weakness is needing the last word.",
    passiveEffect:
      "When revealed, you may reframe the evening's events as a single opening chapter.",
    featured: false,
  },
  {
    id: "the-villain",
    title: "The Villain",
    subtitle: "Archetype",
    description:
      "I am ambitious and cunning. My strength is strategy, but my weakness is overconfidence.",
    passiveEffect:
      "Once exposed, the opposing team loses 5Xp.",
    featured: true,
  },
  {
    id: "the-witness",
    title: "The Witness",
    subtitle: "Archetype",
    description:
      "I observe without intervening. My strength is clarity, but my weakness is silence when speech is needed.",
    passiveEffect:
      "When revealed, you may recount one moment from the circle that others have forgotten.",
    featured: false,
  },
  {
    id: "the-joker",
    title: "The Joker",
    subtitle: "Archetype",
    description:
      "I dissolve tension with truth disguised as laughter. My strength is levity, but my weakness is deflection.",
    passiveEffect:
      "Once exposed, the circle must answer one question only you are allowed to ask — however absurd.",
    featured: false,
  },
  {
    id: "the-mentor",
    title: "The Mentor",
    subtitle: "Archetype",
    description:
      "I guide without commanding. My strength is wisdom, but my weakness is believing I always know the way.",
    passiveEffect:
      "When revealed, you may offer one piece of counsel that the circle must sit with before continuing.",
    featured: false,
  },
  {
    id: "the-hero",
    title: "The Hero",
    subtitle: "Archetype",
    description:
      "I rise when others hesitate. My strength is courage, but my weakness is carrying burdens that are not mine.",
    passiveEffect:
      "Once exposed, you may redirect the circle's attention to a truth that has been avoided.",
    featured: false,
  },
  {
    id: "the-outcast",
    title: "The Outcast",
    subtitle: "Archetype",
    description:
      "I stand apart by nature, not by choice. My strength is independence, but my weakness is believing belonging is impossible.",
    passiveEffect:
      "When revealed, the circle must acknowledge one thing they have left unsaid to you.",
    featured: false,
  },
  {
    id: "the-trickster",
    title: "The Trickster",
    subtitle: "Archetype",
    description:
      "I unsettle certainty to reveal what lies beneath. My strength is disruption, but my weakness is chaos for its own sake.",
    passiveEffect:
      "Once exposed, you may swap two assumptions the circle has made about tonight's identities.",
    featured: false,
  },
  {
    id: "the-magician",
    title: "The Magician",
    subtitle: "Archetype",
    description:
      "I transform the ordinary into the extraordinary. My strength is vision, but my weakness is believing the illusion is real.",
    passiveEffect:
      "When revealed, you may introduce one new question that reframes the entire circle.",
    featured: false,
  },
  {
    id: "the-lover",
    title: "The Lover",
    subtitle: "Archetype",
    description:
      "I feel deeply and without apology. My strength is devotion, but my weakness is losing myself in another's story.",
    passiveEffect:
      "Once exposed, the circle must share one thing they admire about another player — without irony.",
    featured: false,
  },
] as const;

/** @deprecated Use `archetypes` — kept as alias for card components */
export const cards = archetypes;

export const stories = [
  {
    id: 1,
    author: "Elena M.",
    location: "Prague",
    excerpt:
      "We played UNMASK on the floor of a bookshop after closing. By the third round, a stranger told me about the novel she never finished — and I finally understood why I stopped writing mine.",
    tag: "Revelation",
  },
  {
    id: 2,
    author: "James K.",
    location: "Edinburgh",
    excerpt:
      "I drew The Witness. Three people described me in ways I'd never articulated. I left feeling seen in a language I didn't know I spoke.",
    tag: "Recognition",
  },
  {
    id: 3,
    author: "Amara O.",
    location: "Lagos",
    excerpt:
      "We used UNMASK at a dinner party instead of small talk. By dessert, no one was performing anymore. Just stories, and the quiet courage of being known.",
    tag: "Connection",
  },
  {
    id: 4,
    author: "Thomas R.",
    location: "Buenos Aires",
    excerpt:
      "I've hosted literary salons for years. UNMASK did what my curated readings couldn't — it made every guest the author of the evening.",
    tag: "Gathering",
  },
];

export const testimonials = [
  {
    quote:
      "This is not a party game. It is a literary instrument — designed for the kind of conversation that changes how you see someone.",
    author: "Dr. Helena Ashford",
    role: "Professor of Narrative Psychology, Oxford",
  },
  {
    quote:
      "UNMASK belongs in the same cabinet as my first editions — not because it is precious, but because it opens something precious in people.",
    author: "Marcus Chen",
    role: "Rare Book Collector & Salon Host",
  },
  {
    quote:
      "I've never seen a game treat identity with this much reverence. Every card feels like a page torn from a journal you forgot you kept.",
    author: "Sofia Delacroix",
    role: "Editor, The Literary Review",
  },
];

export const symbols = [
  {
    name: "The Split Mask",
    meaning:
      "Half revelation, half concealment — the central emblem of UNMASK. We are never fully one thing; identity is a dialogue between what we show and what we guard.",
  },
  {
    name: "The Crown",
    meaning:
      "Authority earned through story, not status. In the circle, the one who speaks most truthfully holds the crown — regardless of who dealt the cards.",
  },
  {
    name: "The All-Seeing Eye",
    meaning:
      "Witness without judgment. The eye does not expose — it attends. In UNMASK, to be seen is the highest form of respect.",
  },
  {
    name: "The Sunburst",
    meaning:
      "The radiating moment of unmasking — when hidden identity meets the light of the circle and becomes part of the shared narrative.",
  },
  {
    name: "The Wax Seal",
    meaning:
      "Every story shared in UNMASK is sealed by consent. What is spoken in the circle remains sacred.",
  },
  {
    name: "The Corner Filigree",
    meaning:
      "Ornament as intention — the decorative borders on each card remind us that even play can be crafted with the care of a rare manuscript.",
  },
];

export const howToPlaySteps = [
  {
    step: "I",
    title: "Enter the Circle",
    description:
      "Gather three to eight seekers in a space of quiet intention — a library corner, a candlelit table, anywhere stories feel possible.",
  },
  {
    step: "II",
    title: "Receive Your Identity",
    description:
      "Each player draws an Identity Card bearing a hidden archetype. This is not who you are — it is a lens through which the circle will read you.",
  },
  {
    step: "III",
    title: "Read the Signs",
    description:
      "Through observation, questions, and intuition, players interpret one another's hidden identities — weaving narratives from gesture, word, and silence.",
  },
  {
    step: "IV",
    title: "Unmask",
    description:
      "When the circle is ready, identities are revealed. What follows is not victory, but recognition — the oldest form of human connection.",
  },
];
