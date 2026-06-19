"use client";

export function DustMotes() {
  const motes = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    left: `${5 + (i * 5.2) % 90}%`,
    top: `${10 + (i * 7.3) % 80}%`,
    size: 1 + (i % 3),
    delay: `${i * 0.7}s`,
    duration: `${8 + (i % 5) * 2}s`,
  }));

  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden" aria-hidden="true">
      {motes.map((m) => (
        <span
          key={m.id}
          className="dust-mote absolute rounded-full bg-burnished-gold"
          style={{
            left: m.left,
            top: m.top,
            width: m.size,
            height: m.size,
            animationDelay: m.delay,
            animationDuration: m.duration,
          }}
        />
      ))}
    </div>
  );
}
