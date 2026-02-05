export default function Logo({
  size = 32,
  showText = false,
  className = "",
}: {
  size?: number;
  showText?: boolean;
  className?: string;
}) {
  const leafWidth = size;
  const leafHeight = size * 1.3;
  const textWidth = showText ? size * 3 : 0;

  return (
    <svg
      width={leafWidth + textWidth}
      height={leafHeight}
      viewBox={`0 0 ${showText ? 200 : 60} 78`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Leaf shape */}
      <path
        d="M30 2C30 2 58 20 58 48C58 68 46 76 30 76C14 76 2 68 2 48C2 20 30 2 30 2Z"
        fill="url(#leaf-gradient)"
      />

      {/* Central vein line */}
      <path
        d="M30 72V20"
        stroke="url(#vein-gradient)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Circuit board pattern - left side branches */}
      {/* Branch 1 - top */}
      <path
        d="M30 24H18"
        stroke="#1a5c3a"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <circle cx="18" cy="24" r="2.5" fill="#1a5c3a" />
      <circle cx="18" cy="24" r="1.2" fill="#2d8a5e" />

      {/* Branch 2 */}
      <path
        d="M30 32H22L16 38"
        stroke="#1a5c3a"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="38" r="2.5" fill="#1a5c3a" />
      <circle cx="16" cy="38" r="1.2" fill="#2d8a5e" />

      {/* Branch 3 */}
      <path
        d="M30 40H20"
        stroke="#1a5c3a"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <circle cx="20" cy="40" r="2" fill="#1a5c3a" />
      <circle cx="20" cy="40" r="1" fill="#2d8a5e" />

      {/* Branch 4 */}
      <path
        d="M30 48H24L18 54"
        stroke="#1a5c3a"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="18" cy="54" r="2.5" fill="#1a5c3a" />
      <circle cx="18" cy="54" r="1.2" fill="#2d8a5e" />

      {/* Branch 5 - lower */}
      <path
        d="M30 56H22"
        stroke="#1a5c3a"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <circle cx="22" cy="56" r="2" fill="#1a5c3a" />
      <circle cx="22" cy="56" r="1" fill="#2d8a5e" />

      {/* Branch 6 - bottom */}
      <path
        d="M30 64H26"
        stroke="#1a5c3a"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <circle cx="26" cy="64" r="1.8" fill="#1a5c3a" />
      <circle cx="26" cy="64" r="0.9" fill="#2d8a5e" />

      {/* Right side smaller nodes */}
      <circle cx="38" cy="32" r="1.5" fill="#1a5c3a" opacity="0.6" />
      <circle cx="42" cy="44" r="1.8" fill="#1a5c3a" opacity="0.5" />
      <circle cx="36" cy="52" r="1.3" fill="#1a5c3a" opacity="0.6" />

      {/* Text "ESGIO" if showText is true */}
      {showText && (
        <text
          x="75"
          y="52"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="700"
          fontSize="32"
          fill="url(#text-gradient)"
          letterSpacing="-0.5"
        >
          ESGIO
        </text>
      )}

      <defs>
        {/* Leaf gradient - dark green to light green */}
        <linearGradient
          id="leaf-gradient"
          x1="10"
          y1="70"
          x2="50"
          y2="10"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1a5c3a" />
          <stop offset="0.5" stopColor="#2d8a5e" />
          <stop offset="1" stopColor="#7dd87d" />
        </linearGradient>

        {/* Vein gradient */}
        <linearGradient
          id="vein-gradient"
          x1="30"
          y1="72"
          x2="30"
          y2="20"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1a5c3a" />
          <stop offset="1" stopColor="#1a5c3a" stopOpacity="0.3" />
        </linearGradient>

        {/* Text gradient */}
        <linearGradient
          id="text-gradient"
          x1="75"
          y1="52"
          x2="190"
          y2="52"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1a5c3a" />
          <stop offset="0.6" stopColor="#2d8a5e" />
          <stop offset="1" stopColor="#7dd87d" />
        </linearGradient>
      </defs>
    </svg>
  );
}
