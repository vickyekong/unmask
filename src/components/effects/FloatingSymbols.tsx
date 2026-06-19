"use client";

const symbols = ["✦", "◇", "◈", "☽", "◎", "⬡", "❧", "✧", "☾", "❖"];

export function FloatingSymbols() {
  return (
    <div
      className="pointer-events-none fixed inset-0 overflow-hidden z-[1]"
      aria-hidden="true"
    >
      {symbols.map((symbol, i) => (
        <span
          key={`${symbol}-${i}`}
          className="float-symbol absolute font-heading text-burnished-gold select-none"
          style={{
            left: `${4 + i * 9.5}%`,
            top: `${8 + (i % 5) * 18}%`,
            fontSize: `${12 + (i % 4) * 5}px`,
            animationDelay: `${i * 1.2}s`,
            animationDuration: `${11 + i * 1.8}s`,
            opacity: 0.08 + (i % 3) * 0.04,
          }}
        >
          {symbol}
        </span>
      ))}
    </div>
  );
}
