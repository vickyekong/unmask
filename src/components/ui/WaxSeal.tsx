export function WaxSeal({ size = 80 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className="wax-seal"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="wax" cx="40%" cy="35%">
          <stop offset="0%" stopColor="#5A1838" />
          <stop offset="50%" stopColor="#391023" />
          <stop offset="100%" stopColor="#2A0B1A" />
        </radialGradient>
        <radialGradient id="waxHighlight" cx="30%" cy="25%">
          <stop offset="0%" stopColor="rgba(250,154,144,0.35)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      {/* Irregular wax shape */}
      <path
        d="M50 5 C65 3, 80 10, 90 25 C98 40, 95 60, 88 75 C80 90, 65 97, 50 95 C35 97, 18 90, 10 75 C3 58, 5 38, 12 22 C20 8, 35 3, 50 5Z"
        fill="url(#wax)"
      />
      <path
        d="M50 5 C65 3, 80 10, 90 25 C98 40, 95 60, 88 75 C80 90, 65 97, 50 95 C35 97, 18 90, 10 75 C3 58, 5 38, 12 22 C20 8, 35 3, 50 5Z"
        fill="url(#waxHighlight)"
      />
      {/* Inner ring */}
      <circle
        cx="50"
        cy="50"
        r="28"
        fill="none"
        stroke="rgba(28,108,97,0.6)"
        strokeWidth="0.8"
      />
      {/* Symbol */}
      <text
        x="50"
        y="56"
        textAnchor="middle"
        fill="rgba(250,154,144,0.9)"
        fontSize="22"
        fontFamily="serif"
      >
        U
      </text>
    </svg>
  );
}
