import React from "react";

/* shared stroke color to match lanterns */
const stroke = "#3b210b";


export const Sriracha = ({ className = "", stroke = "#4a2c2a" }) => (
  <svg
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden
  >
    {/* Bottle body */}
    <rect
      x="18"
      y="16"
      width="28"
      height="38"
      rx="10"
      ry="10"
      fill="#d94a2b"
      stroke={stroke}
      strokeWidth="2"
    />

    {/* White neck band */}
    <rect x="24" y="14" width="16" height="3" fill="#fff5e9" />

    {/* Green cap base (cylinder) */}
    <rect
      x="24"
      y="8"
      width="16"
      height="6"
      fill="#38a169"
      stroke={stroke}
      strokeWidth="2"
    />

    {/* Green cone nozzle */}
    <polygon
      points="32,0 26,8 38,8"
      fill="#38a169"
      stroke={stroke}
      strokeWidth="2"
    />

    {/* Label stripes */}
    <line x1="24" y1="28" x2="40" y2="28" stroke="#fff5e9" strokeWidth="2" />
    <line x1="24" y1="32" x2="40" y2="32" stroke="#fff5e9" strokeWidth="2" />

    {/* Simple circle logo */}
    <circle cx="32" cy="42" r="6" fill="#fff5e9" stroke={stroke} strokeWidth="2" />
    <line x1="32" y1="36" x2="32" y2="48" stroke={stroke} strokeWidth="2" />
  </svg>
);

export const Hoisin = ({ className = "", stroke = "#4a2c2a" }) => (
  <svg
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden
  >
    {/* Bottle body (black tapered) */}
    <path
      d="M22 18c0-2 4-6 10-6s10 4 10 6v30c0 6-4 12-10 12s-10-6-10-12V18z"
      fill="#2d2a32"
      stroke={stroke}
      strokeWidth="2"
    />

    {/* Purple main label */}
    <rect
      x="20"
      y="28"
      width="24"
      height="12"
      rx="2"
      fill="#9b6bc2"
      stroke={stroke}
      strokeWidth="2"
    />

    {/* Gray bottom label */}
    <rect
      x="20"
      y="40"
      width="24"
      height="8"
      rx="1"
      fill="#d3d3d3"
      stroke={stroke}
      strokeWidth="2"
    />

    {/* Cap */}
    <rect
      x="26"
      y="8"
      width="12"
      height="8"
      rx="2"
      fill="#c53030"
      stroke={stroke}
      strokeWidth="2"
    />

    {/* Cap detail line */}
    <line
      x1="26"
      y1="12"
      x2="38"
      y2="12"
      stroke={stroke}
      strokeWidth="1.5"
    />
  </svg>
);


export const CoffeeCup = ({ className = "", stroke = "#4a2c2a" }) => (
  <svg
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden
  >
    {/* Mug body */}
    <rect
      x="16"
      y="20"
      width="28"
      height="28"
      rx="4"
      ry="4"
      fill="#f7e9c0"
      stroke={stroke}
      strokeWidth="2"
    />

    {/* Coffee surface (ellipse at top) */}
    <ellipse
      cx="30"
      cy="20"
      rx="14"
      ry="5"
      fill="#6b3a2e"
      stroke={stroke}
      strokeWidth="2"
    />

    {/* Coffee rim (ellipse outline) */}
    <ellipse
      cx="30"
      cy="20"
      rx="14"
      ry="5"
      fill="none"
      stroke={stroke}
      strokeWidth="2"
    />

    {/* Mug handle */}
    <path
      d="M44 24c6 0 10 4 10 10s-4 10-10 10"
      fill="none"
      stroke={stroke}
      strokeWidth="2.5"
    />

    {/* Coffee bean on the mug */}
    <ellipse
      cx="30"
      cy="36"
      rx="6"
      ry="9"
      fill="#6b3a2e"
      stroke={stroke}
      strokeWidth="1.5"
    />
    <path
      d="M30 27c2 6-2 12 0 18"
      fill="none"
      stroke="#efe9dd"
      strokeWidth="1.5"
      strokeLinecap="round"
    />

    {/* Steam lines */}
    <path
      d="M24 8c-2 4 2 6 0 10"
      fill="none"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M30 6c-2 4 2 6 0 10"
      fill="none"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M36 8c-2 4 2 6 0 10"
      fill="none"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export const Che = ({ className = "", stroke = "#4a2c2a" }) => (
  <svg
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden
  >
    {/* Glass outline */}
    <rect
      x="20"
      y="10"
      width="24"
      height="44"
      rx="5"
      fill="#ffffff"
      stroke={stroke}
      strokeWidth="2"
    />

    {/* Top coconut milk (wavy edge) */}
    <path
      d="M22 20c2 2 6 2 10 0s8-2 10 0v8H22z"
      fill="#f9f9f4"
    />

    {/* Yellow jackfruit/ice pieces */}
    <path
      d="M24 14c1 2 3 2 4 0M32 14c1 2 3 2 4 0"
      stroke="#f6c344"
      strokeWidth="2"
      strokeLinecap="round"
    />

    {/* Green pandan jelly (flowy strip) */}
    <path
      d="M22 34c2-2 6-2 10 0s8 2 10 0v6H22z"
      fill="#2f9d57"
    />

    {/* Red rubies (scattered circles) */}
    <circle cx="26" cy="44" r="2" fill="#e63946" />
    <circle cx="30" cy="46" r="2" fill="#e63946" />
    <circle cx="34" cy="44" r="2" fill="#e63946" />
    <circle cx="38" cy="46" r="2" fill="#e63946" />
  </svg>
);

export const PlayingCard = ({ className = "", stroke = "#4a2c2a" }) => (
  <svg
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden
  >
    {/* Card outline */}
    <rect
      x="12"
      y="6"
      width="40"
      height="52"
      rx="6"
      fill="#fffdf6"
      stroke={stroke}
      strokeWidth="2"
    />

    {/* Top-left number */}
    <text
      x="16"
      y="16"
      fontSize="8"
      fill="red"
      fontFamily="sans-serif"
    >
      2
    </text>

    {/* Bottom-right number (rotated) */}
    <text
      x="48"
      y="50"
      fontSize="8"
      fill="red"
      fontFamily="sans-serif"
      transform="rotate(180, 48, 50)"
    >
      2
    </text>

    {/* Center top heart */}
    <path
      d="M32 20c-3-3-6-6-9 0 0 3 3 6 9 9 6-3 9-6 9-9-3-6-6-3-9 0z"
      fill="red"
    />

    {/* Center bottom heart (reversed) */}
    <path
      d="M32 44c-3-3-6-6-9 0 0 3 3 6 9 9 6-3 9-6 9-9-3-6-6-3-9 0z"
      fill="red"
      transform="rotate(180, 32, 44)"
    />
  </svg>
);

export const RiceBowl = ({ className = "", stroke = "#4a2c2a" }) => (
  <svg
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden
  >
    {/* Bowl */}
    <path
      d="M16 32c0 10 8 18 16 18s16-8 16-18H16z"
      fill="#cfd6f6"
      stroke={stroke}
      strokeWidth="2"
    />

    {/* Bowl base */}
    <rect
      x="28"
      y="50"
      width="8"
      height="4"
      rx="2"
      fill={stroke}
    />

    {/* Rice dome (semicircle) */}
    <path
      d="M18 32a14 8 0 0 1 28 0z"
      fill="#fffef9"
      stroke={stroke}
      strokeWidth="2"
    />

    {/* Optional rice scallops for detail */}
    <path
      d="M24 28c2-2 4-2 6 0M32 26c2-2 4-2 6 0M40 28c2-2 4-2 6 0"
      fill="none"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
    />

    {/* Cherry blossom decoration */}
    <circle cx="22" cy="40" r="1.5" fill="#f9c9d6" />
    <circle cx="20" cy="42" r="1" fill="#f9c9d6" />
    <circle cx="24" cy="42" r="1" fill="#f9c9d6" />
    <circle cx="22" cy="44" r="1" fill="#f9c9d6" />
  </svg>
);

export const GuavaCandy = ({ className = "", stroke = "#4a2c2a" }) => (
  <svg
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden
  >
    {/* Wrapper body */}
    <rect
      x="14"
      y="22"
      width="36"
      height="20"
      rx="4"
      fill="#6bc16e"
      stroke={stroke}
      strokeWidth="2"
    />

    {/* Zig-zag edges (top and bottom) */}
    <path
      d="M14 22l2 2 2-2 2 2 2-2 2 2 2-2M14 42l2-2 2 2 2-2 2 2 2-2 2 2"
      stroke={stroke}
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M50 22l-2 2-2-2-2 2-2-2-2 2-2-2M50 42l-2-2-2 2-2-2-2 2-2-2-2 2"
      stroke={stroke}
      strokeWidth="1.5"
      fill="none"
    />

    {/* Side ties */}
    <path
      d="M14 32l-6-4m6 4l-6 4M50 32l6-4m-6 4l6 4"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
    />

    {/* Guava circle in middle */}
    <circle
      cx="32"
      cy="32"
      r="6"
      fill="#f9e4a8"
      stroke={stroke}
      strokeWidth="2"
    />

    {/* Guava seeds */}
    <circle cx="30" cy="32" r="0.8" fill={stroke} />
    <circle cx="32" cy="30" r="0.8" fill={stroke} />
    <circle cx="34" cy="32" r="0.8" fill={stroke} />
    <circle cx="32" cy="34" r="0.8" fill={stroke} />
  </svg>
);

export const IncenseBowl = ({ className = "", stroke = "#4a2c2a" }) => (
  <svg
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden
  >
    {/* Pot body */}
    <ellipse
      cx="32"
      cy="44"
      rx="16"
      ry="10"
      fill="#f4e1b6"
      stroke={stroke}
      strokeWidth="2"
    />
    {/* Pot rim */}
    <ellipse
      cx="32"
      cy="38"
      rx="18"
      ry="4"
      fill="#f4e1b6"
      stroke={stroke}
      strokeWidth="2"
    />

    {/* Incense sticks */}
    <line x1="26" y1="20" x2="26" y2="36" stroke={stroke} strokeWidth="2" />
    <line x1="32" y1="16" x2="32" y2="36" stroke={stroke} strokeWidth="2" />
    <line x1="38" y1="20" x2="38" y2="36" stroke={stroke} strokeWidth="2" />

    {/* Smoke (curved lines) */}
    <path
      d="M26 16c-2-2 2-4 0-6"
      stroke="#b85728"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M32 12c-2-2 2-4 0-6"
      stroke="#b85728"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M38 16c-2-2 2-4 0-6"
      stroke="#b85728"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

export const FishSauce = ({ className = "", stroke = "#4a2c2a" }) => (
  <svg
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden
  >
    {/* Bottle body */}
    <path
      d="M24 14h16l3 10v24c0 6-5 12-11 12s-11-6-11-12V24z"
      fill="#b45b28"
      stroke={stroke}
      strokeWidth="2"
    />

    {/* Green collar */}
    <rect
      x="26"
      y="10"
      width="12"
      height="6"
      fill="#3aa657"
      stroke={stroke}
      strokeWidth="2"
    />

    {/* Green cap (cone) */}
    <polygon
      points="32,2 26,10 38,10"
      fill="#3aa657"
      stroke={stroke}
      strokeWidth="2"
    />

    {/* White label */}
    <rect
      x="22"
      y="30"
      width="20"
      height="14"
      rx="2"
      fill="#fff5e9"
      stroke={stroke}
      strokeWidth="2"
    />

    {/* Fish graphic - oval body */}
    <ellipse
      cx="32"
      cy="37"
      rx="7"
      ry="4"
      fill="none"
      stroke={stroke}
      strokeWidth="1.5"
    />

    {/* Fish tail */}
    <path
      d="M25 37l-4-3M25 37l-4 3"
      fill="none"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
    />

    {/* Fish eye */}
    <circle cx="34" cy="36.5" r="0.8" fill={stroke} />
  </svg>
);

export const RiceCooker = ({ className = "", stroke = "#4a2c2a" }) => (
  <svg
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden
  >
    {/* Cooker body */}
    <rect
      x="12"
      y="20"
      width="40"
      height="26"
      rx="10"
      fill="#eeeaf0"
      stroke={stroke}
      strokeWidth="2"
    />

    {/* Lid */}
    <rect
      x="16"
      y="14"
      width="32"
      height="8"
      rx="4"
      fill="#eeeaf0"
      stroke={stroke}
      strokeWidth="2"
    />

    {/* Handle on top */}
    <rect
      x="24"
      y="10"
      width="16"
      height="4"
      rx="2"
      fill="#eeeaf0"
      stroke={stroke}
      strokeWidth="2"
    />

    {/* Control panel base */}
    <rect
      x="26"
      y="32"
      width="12"
      height="10"
      rx="2"
      fill="#fff5e9"
      stroke={stroke}
      strokeWidth="1.5"
    />

    {/* Control lights */}
    <circle cx="29" cy="35" r="1.5" fill="#e63946" />
    <circle cx="35" cy="35" r="1.5" fill="#f4a261" />

    {/* Switch */}
    <rect
      x="29"
      y="38"
      width="6"
      height="3"
      rx="1"
      fill={stroke}
    />
  </svg>
);

export const Chopsticks = ({ className = "" }) => (
  <svg viewBox="0 0 64 64" className={className} aria-hidden>
    <path d="M18 10l28 44M26 10l28 44" stroke={stroke} strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

export const BanhMi = ({ className = "", stroke = "#4a2c2a" }) => (
  <svg
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden
  >
    {/* Bottom bread */}
    <rect
      x="8"
      y="32"
      width="48"
      height="14"
      rx="7"
      fill="#f6cf85"
      stroke={stroke}
      strokeWidth="2"
    />

    {/* Top bread (curved dome) */}
    <path
      d="M8 32c6-6 36-6 48 0"
      fill="#f6cf85"
      stroke={stroke}
      strokeWidth="2"
    />

    {/* Meat layer */}
    <rect
      x="10"
      y="36"
      width="44"
      height="4"
      rx="2"
      fill="#b85728"
    />

    {/* Pickled carrot layer */}
    <rect
      x="10"
      y="40"
      width="44"
      height="3"
      rx="1.5"
      fill="#e67a3c"
    />

    {/* Cucumber layer */}
    <rect
      x="10"
      y="33"
      width="44"
      height="3"
      rx="1.5"
      fill="#2f9d57"
    />

    {/* Cilantro scallops */}
    <path
      d="M14 32c1-2 3-2 4 0M20 32c1-2 3-2 4 0M26 32c1-2 3-2 4 0M32 32c1-2 3-2 4 0M38 32c1-2 3-2 4 0M44 32c1-2 3-2 4 0"
      fill="none"
      stroke="#2f9d57"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export const BanhTet = ({ className = "", stroke = "#4a2c2a" }) => (
  <svg
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden
  >
    {/* Body of the cake */}
    <rect
      x="12"
      y="22"
      width="40"
      height="20"
      rx="10"
      ry="10"
      fill="#4caf50"
      stroke={stroke}
      strokeWidth="2"
    />

    {/* Vertical strings */}
    <line x1="18" y1="22" x2="18" y2="42" stroke="#f9e79f" strokeWidth="2" />
    <line x1="26" y1="22" x2="26" y2="42" stroke="#f9e79f" strokeWidth="2" />
    <line x1="34" y1="22" x2="34" y2="42" stroke="#f9e79f" strokeWidth="2" />
    <line x1="42" y1="22" x2="42" y2="42" stroke="#f9e79f" strokeWidth="2" />

    {/* Horizontal strings */}
    <line x1="12" y1="26" x2="52" y2="26" stroke="#f9e79f" strokeWidth="2" />
    <line x1="12" y1="34" x2="52" y2="34" stroke="#f9e79f" strokeWidth="2" />
    <line x1="12" y1="42" x2="52" y2="42" stroke="#f9e79f" strokeWidth="2" />
  </svg>
);

export const BanhRan = ({ className = "", stroke = "#4a2c2a" }) => (
  <svg
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden
  >
    {/* Main ball */}
    <circle
      cx="32"
      cy="32"
      r="14"
      fill="#e29c45"
      stroke={stroke}
      strokeWidth="2"
    />

    {/* Sesame seeds (scattered dots) */}
    <circle cx="28" cy="24" r="1.2" fill="#fdf6e3" />
    <circle cx="36" cy="26" r="1.2" fill="#fdf6e3" />
    <circle cx="32" cy="32" r="1.2" fill="#fdf6e3" />
    <circle cx="38" cy="34" r="1.2" fill="#fdf6e3" />
    <circle cx="26" cy="34" r="1.2" fill="#fdf6e3" />
    <circle cx="30" cy="40" r="1.2" fill="#fdf6e3" />
    <circle cx="34" cy="42" r="1.2" fill="#fdf6e3" />
  </svg>
);

