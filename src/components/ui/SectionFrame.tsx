type SectionFrameProps = {
  children: React.ReactNode;
  catalogRef: string;
  className?: string;
};

export function SectionFrame({ children, catalogRef, className = "" }: SectionFrameProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute -top-2 right-0 museum-label text-[0.5rem] opacity-40 hidden md:block">
        {catalogRef}
      </div>
      {children}
    </div>
  );
}

export function Marginalia({
  children,
  side = "right",
}: {
  children: React.ReactNode;
  side?: "left" | "right";
}) {
  return (
    <aside
      className={`hidden lg:block absolute ${side === "right" ? "-right-4 translate-x-full" : "-left-4 -translate-x-full"} top-1/4 w-28`}
    >
      <p className="font-heading text-[0.65rem] italic leading-relaxed text-burnished-gold/25 rotate-0">
        {children}
      </p>
    </aside>
  );
}
