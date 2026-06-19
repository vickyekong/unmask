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
          <stop offset="0%" stopColor="#8B2500" />
          <stop offset="50%" stopColor="#6B1D00" />
          <stop offset="100%" stopColor="#4A1200" />
        </radialGradient>
        <radialGradient id="waxHighlight" cx="30%" cy="25%">
          <stop offset="0%" stopColor="rgba(255,200,150,0.3)" />
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
        stroke="rgba(200,155,60,0.5)"
        strokeWidth="0.8"
      />
      {/* Symbol */}
      <text
        x="50"
        y="56"
        textAnchor="middle"
        fill="rgba(200,155,60,0.8)"
        fontSize="22"
        fontFamily="serif"
      >
        U
      </text>
    </svg>
  );
}
