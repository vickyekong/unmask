export function LibrarySilhouette() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.07]"
      aria-hidden="true"
    >
      {/* Left shelves */}
      <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={`l-${i}`}
            className="absolute left-4 w-20 md:w-28 bg-aged-paper"
            style={{
              top: `${i * 8.5}%`,
              height: `${4 + (i % 3) * 1.5}%`,
            }}
          />
        ))}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-burnished-gold/30" />
      </div>
      {/* Right shelves */}
      <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={`r-${i}`}
            className="absolute right-4 w-20 md:w-28 bg-aged-paper"
            style={{
              top: `${5 + i * 8.5}%`,
              height: `${3 + (i % 4) * 1.2}%`,
            }}
          />
        ))}
        <div className="absolute right-0 top-0 bottom-0 w-1 bg-burnished-gold/30" />
      </div>
    </div>
  );
}
