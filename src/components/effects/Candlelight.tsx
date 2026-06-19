"use client";

export function Candlelight() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* Left candle */}
      <div
        className="candle-glow absolute -left-20 top-1/4 h-[500px] w-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(200,155,60,0.12) 0%, rgba(200,155,60,0.04) 40%, transparent 70%)",
        }}
      />
      {/* Right candle */}
      <div
        className="candle-glow absolute -right-32 top-1/3 h-[600px] w-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(200,155,60,0.08) 0%, rgba(200,155,60,0.03) 45%, transparent 70%)",
          animationDelay: "2s",
        }}
      />
      {/* Central ambient */}
      <div
        className="absolute left-1/2 top-0 h-[800px] w-[800px] -translate-x-1/2 rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(ellipse, rgba(45,77,75,0.15) 0%, transparent 60%)",
        }}
      />
      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(15,23,32,0.6) 100%)",
        }}
      />
    </div>
  );
}
