export const brandColors = [
  {
    name: "Deep Ink",
    role: "Primary background · Night reading rooms",
    hex: "#0F1720",
    rgb: "15, 23, 32",
    usage: "Hero backgrounds, navigation, dark sections, primary text on light surfaces",
  },
  {
    name: "Library Brown",
    role: "Structural warmth · Leather bindings",
    hex: "#3E2E23",
    rgb: "62, 46, 35",
    usage: "Secondary backgrounds, card interiors, borders, wood-toned accents",
  },
  {
    name: "Aged Paper",
    role: "Primary light surface · Manuscript pages",
    hex: "#F2E9DC",
    rgb: "242, 233, 220",
    usage: "Body text backgrounds, parchment sections, light-mode reading surfaces",
  },
  {
    name: "Burnished Gold",
    role: "Accent · Foil details & illumination",
    hex: "#C89B3C",
    rgb: "200, 155, 60",
    usage: "Labels, borders, CTAs, foil text, wax seal accents, hover states",
  },
  {
    name: "Forest Ink",
    role: "Secondary accent · Botanical margins",
    hex: "#2D4D4B",
    rgb: "45, 77, 75",
    usage: "Italic emphasis, secondary headings on light surfaces, ambient glow",
  },
] as const;

export const brandTypography = {
  heading: {
    family: "Cormorant Garamond",
    source: "Google Fonts",
    weights: ["300 Light", "400 Regular", "500 Medium", "600 SemiBold", "700 Bold"],
    usage: "Headlines, pull quotes, card titles, brand wordmark",
    specimen: "Unmask the story within",
  },
  body: {
    family: "Inter",
    source: "Google Fonts",
    weights: ["400 Regular", "500 Medium"],
    usage: "Body copy, navigation, form fields, museum labels at small scale",
    specimen: "Every person is a library of untold stories.",
  },
  label: {
    family: "Inter",
    style: "0.65rem · 0.25em letter-spacing · uppercase",
    usage: "Section markers, exhibit labels, metadata, footer navigation",
    specimen: "Est. MMXXIV · A Literary Society",
  },
} as const;

export const brandVoice = {
  pillars: [
    {
      title: "Mysterious",
      description: "Reveal slowly. Leave space for curiosity. Never explain everything at once.",
    },
    {
      title: "Intelligent",
      description: "Respect the reader's intellect. Use precise language, literary references, and depth.",
    },
    {
      title: "Human",
      description: "Center connection over competition. Every touchpoint should feel like a conversation.",
    },
    {
      title: "Reverent",
      description: "Treat identity and story as sacred. Never mock, never rush, never sensationalize.",
    },
  ],
  tone: [
    "Contemplative, not cold",
    "Literary, not pretentious",
    "Intimate, not exclusive",
    "Cinematic, not theatrical",
    "Ancient, not archaic",
  ],
  vocabulary: {
    use: [
      "Archive",
      "Circle",
      "Keeper",
      "Reveal",
      "Manuscript",
      "Codex",
      "Threshold",
      "Witness",
      "Unveiling",
      "Archetype",
    ],
    avoid: [
      "Player",
      "Gameplay",
      "Score",
      "Level up",
      "Battle",
      "Deck",
      "Win",
      "Strategy",
      "Esports",
      "Fantasy quest",
    ],
  },
} as const;

export const brandImagery = [
  {
    title: "Ancient Libraries",
    references: "Oxford Bodleian, Strahov Monastery, Morgan Library reading rooms",
    mood: "Vertical shelves, ladder shadows, dust motes in candlelight",
  },
  {
    title: "Rare Books & Manuscripts",
    references: "Illuminated margins, vellum texture, handwritten annotations",
    mood: "Intimate scale, tactile paper, visible history of use",
  },
  {
    title: "Secret Societies",
    references: "Wax seals, cipher symbols, private correspondence, initiation rituals",
    mood: "Exclusivity through invitation, not gatekeeping",
  },
  {
    title: "Museum Exhibitions",
    references: "Gallery placards, vitrine lighting, curated object narratives",
    mood: "Objects as stories, labels as poetry, quiet reverence",
  },
  {
    title: "Literary Salons",
    references: "Candlelit gatherings, leather chairs, handwritten place cards",
    mood: "Conversation as art form, presence over performance",
  },
  {
    title: "Dark Academia",
    references: "Tweed, ink-stained fingers, autumn light through leaded glass",
    mood: "Intellectual romance without costume — authenticity over aesthetic cosplay",
  },
] as const;

export const brandSymbols = [
  { glyph: "◈", name: "The Archivist's Mark", meaning: "Catalogued truth" },
  { glyph: "◇", name: "The Mirror", meaning: "Reflected identity" },
  { glyph: "✦", name: "The Star", meaning: "Guidance & revelation" },
  { glyph: "☽", name: "The Crescent", meaning: "Intuition & cycles" },
  { glyph: "◎", name: "The Circle", meaning: "Community & wholeness" },
  { glyph: "⬡", name: "The Threshold", meaning: "Passage & becoming" },
  { glyph: "❧", name: "The Fleuron", meaning: "Literary ornament" },
  { glyph: "✧", name: "The Spark", meaning: "Moment of insight" },
] as const;

export const brandDonts = [
  { dont: "Neon or saturated gaming colors", do: "Deep ink, aged paper, burnished gold" },
  { dont: "Cartoon illustrations or mascots", do: "Typography, symbols, and texture" },
  { dont: "Esports UI patterns (health bars, XP)", do: "Museum labels and manuscript layout" },
  { dont: "Fantasy combat imagery", do: "Literary archetypes and portraits" },
  { dont: "Bold sans-serif gaming logos", do: "Cormorant Garamond wordmark with letterspacing" },
  { dont: "Playful rounded UI buttons", do: "Rectilinear borders with gold foil accents" },
] as const;

export const spacingScale = [
  { token: "Section", value: "clamp(5rem, 12vw, 9rem)", usage: "Major section vertical padding" },
  { token: "Content", value: "clamp(1.5rem, 5vw, 4rem)", usage: "Horizontal page margins" },
  { token: "Card", value: "2rem (32px)", usage: "Interior card padding" },
  { token: "Label gap", value: "0.25em tracking", usage: "Museum label letter-spacing" },
] as const;
