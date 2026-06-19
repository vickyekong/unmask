type SectionDividerProps = {
  variant?: "ink" | "parchment";
};

export function SectionDivider({ variant = "ink" }: SectionDividerProps) {
  const lineColor =
    variant === "ink"
      ? "from-transparent via-burnished-gold/25 to-transparent"
      : "from-transparent via-library-brown/20 to-transparent";

  return (
    <div className="relative py-6 flex items-center justify-center" aria-hidden="true">
      <div className={`h-px w-full max-w-4xl mx-auto bg-gradient-to-r ${lineColor}`} />
      <span className="absolute font-heading text-burnished-gold/30 text-sm tracking-[0.5em]">
        ✦
      </span>
    </div>
  );
}
