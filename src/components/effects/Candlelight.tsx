"use client";

export function Candlelight() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* Left candle — salmon warmth */}
      <div
        className="candle-glow absolute -left-20 top-1/4 h-[500px] w-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(250,154,144,0.14) 0%, rgba(250,154,144,0.05) 40%, transparent 70%)",
        }}
      />
      {/* Right candle — teal glow */}
      <div
        className="candle-glow absolute -right-32 top-1/3 h-[600px] w-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(28,108,97,0.12) 0%, rgba(28,108,97,0.04) 45%, transparent 70%)",
          animationDelay: "2s",
        }}
      />
      {/* Central ambient — forest depth */}
      <div
        className="absolute left-1/2 top-0 h-[800px] w-[800px] -translate-x-1/2 rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(ellipse, rgba(25,58,49,0.2) 0%, transparent 60%)",
        }}
      />
      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(15,39,68,0.65) 100%)",
        }}
      />
    </div>
  );
}
