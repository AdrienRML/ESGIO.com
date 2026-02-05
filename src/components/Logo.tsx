export default function Logo({ size = 32, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Rounded square base */}
      <rect width="40" height="40" rx="10" fill="url(#logo-gradient)" />

      {/* Abstract "E" formed by three horizontal bars with a data-flow curve */}
      {/* Top bar */}
      <rect x="11" y="10" width="18" height="3.5" rx="1.75" fill="white" opacity="0.95" />
      {/* Middle bar */}
      <rect x="11" y="18.25" width="14" height="3.5" rx="1.75" fill="white" opacity="0.8" />
      {/* Bottom bar */}
      <rect x="11" y="26.5" width="18" height="3.5" rx="1.75" fill="white" opacity="0.95" />

      {/* Vertical connector on left */}
      <rect x="11" y="10" width="3.5" height="20" rx="1.75" fill="white" opacity="0.95" />

      {/* Data point / node accent - represents IO / data output */}
      <circle cx="31" cy="20" r="3" fill="white" opacity="0.6" />
      <circle cx="31" cy="20" r="1.5" fill="white" />

      <defs>
        <linearGradient id="logo-gradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0d9488" />
          <stop offset="0.5" stopColor="#0f766e" />
          <stop offset="1" stopColor="#115e59" />
        </linearGradient>
      </defs>
    </svg>
  );
}
