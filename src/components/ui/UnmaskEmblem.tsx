export function UnmaskEmblem({ size = 120, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8C872" />
          <stop offset="50%" stopColor="#C89B3C" />
          <stop offset="100%" stopColor="#8B6914" />
        </linearGradient>
        <radialGradient id="sunburst" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(200,155,60,0.15)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>

      {/* Sunburst rays */}
      {Array.from({ length: 24 }).map((_, i) => (
        <line
          key={i}
          x1="60"
          y1="60"
          x2="60"
          y2="8"
          stroke="url(#goldGrad)"
          strokeWidth="0.4"
          opacity="0.4"
          transform={`rotate(${i * 15} 60 60)`}
        />
      ))}

      <circle cx="60" cy="60" r="48" fill="url(#sunburst)" />
      <circle cx="60" cy="60" r="42" fill="none" stroke="url(#goldGrad)" strokeWidth="0.6" opacity="0.5" />
      <circle cx="60" cy="60" r="36" fill="none" stroke="url(#goldGrad)" strokeWidth="0.4" opacity="0.3" />

      {/* Crown */}
      <path
        d="M42 38 L48 28 L54 36 L60 24 L66 36 L72 28 L78 38 L78 42 L42 42 Z"
        fill="url(#goldGrad)"
        opacity="0.9"
      />

      {/* Split mask */}
      <ellipse cx="60" cy="68" rx="22" ry="26" fill="#0F1720" />
      <path
        d="M38 68 C38 52, 48 44, 60 44 C72 44, 82 52, 82 68 C82 82, 72 92, 60 92 C48 92, 38 82, 38 68 Z"
        fill="none"
        stroke="url(#goldGrad)"
        strokeWidth="1"
      />
      {/* Left half gold */}
      <clipPath id="maskLeft">
        <rect x="38" y="44" width="22" height="50" />
      </clipPath>
      <ellipse cx="60" cy="68" rx="22" ry="26" fill="url(#goldGrad)" clipPath="url(#maskLeft)" opacity="0.85" />
      {/* Eye holes */}
      <ellipse cx="52" cy="64" rx="4" ry="5" fill="#0F1720" />
      <ellipse cx="68" cy="64" rx="4" ry="5" fill="#0F1720" />
    </svg>
  );
}

export function SplitMaskIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <defs>
        <linearGradient id="maskGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8C872" />
          <stop offset="100%" stopColor="#C89B3C" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="11" fill="none" stroke="#C89B3C" strokeWidth="0.5" opacity="0.5" />
      <path d="M12 4 C16 4 19 7 19 12 C19 17 16 20 12 20 C8 20 5 17 5 12 C5 7 8 4 12 4 Z" fill="#0F1720" stroke="#C89B3C" strokeWidth="0.5" />
      <rect x="5" y="4" width="7" height="16" fill="url(#maskGold)" opacity="0.8" />
      <ellipse cx="9" cy="11" rx="1.5" ry="2" fill="#0F1720" />
      <ellipse cx="15" cy="11" rx="1.5" ry="2" fill="#0F1720" />
    </svg>
  );
}

export function AllSeeingEye({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" aria-hidden="true">
      {Array.from({ length: 8 }).map((_, i) => (
        <line
          key={i}
          x1="10"
          y1="10"
          x2="10"
          y2="2"
          stroke="#C89B3C"
          strokeWidth="0.3"
          opacity="0.5"
          transform={`rotate(${i * 45} 10 10)`}
        />
      ))}
      <ellipse cx="10" cy="10" rx="6" ry="4" fill="none" stroke="#C89B3C" strokeWidth="0.5" />
      <circle cx="10" cy="10" r="2" fill="#C89B3C" />
    </svg>
  );
}

export function CardCornerFiligree({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`absolute w-10 h-10 text-burnished-gold/40 ${className}`}
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 2 C8 2, 12 4, 14 8 C16 12, 16 16, 14 20 M2 2 C2 8, 4 12, 8 14 C12 16, 16 16, 20 14"
        stroke="currentColor"
        strokeWidth="0.6"
      />
      <path
        d="M6 6 C9 6, 11 8, 11 11 C11 14, 9 16, 6 16"
        stroke="currentColor"
        strokeWidth="0.4"
        opacity="0.6"
      />
    </svg>
  );
}
