"use client";

const symbols = ["✦", "◇", "◈", "☽", "◎", "⬡", "❧", "✧"];

export function FloatingSymbols() {
  return (
    <div
      className="pointer-events-none fixed inset-0 overflow-hidden z-0"
      aria-hidden="true"
    >
      {symbols.map((symbol, i) => (
        <span
          key={symbol}
          className="float-symbol absolute font-heading text-burnished-gold select-none"
          style={{
            left: `${8 + i * 11}%`,
            top: `${12 + (i % 4) * 22}%`,
            fontSize: `${14 + (i % 3) * 6}px`,
            animationDelay: `${i * 1.4}s`,
            animationDuration: `${10 + i * 2}s`,
            opacity: 0.12,
          }}
        >
          {symbol}
        </span>
      ))}
    </div>
  );
}
