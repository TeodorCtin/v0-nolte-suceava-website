export function NolteLogo({
  className = "",
  width = 120,
  height = 50,
}: { className?: string; width?: number; height?: number }) {
  return (
    <svg viewBox="0 0 200 70" width={width} height={height} className={className} aria-label="Nolte Küchen">
      {/* Main "nolte" text */}
      <text
        x="10"
        y="38"
        fontFamily="Arial Black, Arial, sans-serif"
        fontSize="36"
        fontWeight="900"
        fill="#2a2a2a"
        letterSpacing="-1"
      >
        nolte
      </text>

      {/* Registered trademark symbol */}
      <text x="142" y="18" fontFamily="Arial, sans-serif" fontSize="12" fill="#2a2a2a">
        ®
      </text>

      {/* Yellow line */}
      <rect x="10" y="44" width="145" height="5" fill="#FFD200" />

      {/* "KÜCHEN" text */}
      <text
        x="10"
        y="62"
        fontFamily="Arial, sans-serif"
        fontSize="14"
        fontWeight="400"
        fill="#2a2a2a"
        letterSpacing="3"
      >
        KÜCHEN
      </text>
    </svg>
  )
}
