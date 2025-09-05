import React from "react";

/* shared stroke color to match lanterns */
const stroke = "#3b210b";

/* === requested icons === */

export const Sriracha = ({ className = "" }) => (
  <svg viewBox="0 0 64 64" className={className} aria-hidden>
    <path d="M28 8h8l3 8v28a11 11 0 0 1-11 11A11 11 0 0 1 17 44V16z"
          fill="#d94a2b" stroke={stroke} strokeWidth="2"/>
    <path d="M28 16h14" stroke="#fff5e9" strokeWidth="2"/>
    <path d="M33 8l2-4 2 4" fill="#38a169" stroke={stroke} strokeWidth="2"/>
    <rect x="30" y="26" width="8" height="10" rx="2" fill="#fff5e9" stroke={stroke} strokeWidth="2"/>
  </svg>
);

export const Hoisin = ({ className = "" }) => (
  <svg viewBox="0 0 64 64" className={className} aria-hidden>
    <path d="M22 10h20l3 8v28a12 12 0 0 1-12 12A12 12 0 0 1 19 46V18z"
          fill="#2d2a32" stroke={stroke} strokeWidth="2"/>
    <rect x="24" y="26" width="16" height="12" rx="2" fill="#b69ad6" stroke={stroke} strokeWidth="2"/>
    <rect x="30" y="6" width="8" height="6" rx="2" fill="#c53030" stroke={stroke} strokeWidth="2"/>
  </svg>
);

export const CoffeeCup = ({ className = "" }) => (
  <svg viewBox="0 0 64 64" className={className} aria-hidden>
    <path d="M14 20h36v20a12 12 0 0 1-12 12H26A12 12 0 0 1 14 40V20z"
          fill="#efe9dd" stroke={stroke} strokeWidth="2"/>
    <rect x="20" y="16" width="24" height="6" rx="2" fill="#efe9dd" stroke={stroke} strokeWidth="2"/>
    <path d="M50 24h6a6 6 0 0 1 0 12h-6" fill="none" stroke={stroke} strokeWidth="2"/>
    <circle cx="32" cy="34" r="6" fill="#b98b57" stroke={stroke} strokeWidth="2"/>
  </svg>
);

export const PandanJelly = ({ className = "" }) => (
  <svg viewBox="0 0 64 64" className={className} aria-hidden>
    <rect x="14" y="28" width="36" height="14" rx="3" fill="#eaf4e7" stroke={stroke} strokeWidth="2"/>
    <rect x="14" y="22" width="36" height="8"  rx="3" fill="#79c98e" stroke={stroke} strokeWidth="2"/>
    <rect x="14" y="16" width="36" height="8"  rx="3" fill="#eaf4e7" stroke={stroke} strokeWidth="2"/>
  </svg>
);

export const PlayingCard = ({ className = "" }) => (
  <svg viewBox="0 0 64 64" className={className} aria-hidden>
    <rect x="16" y="8" width="32" height="48" rx="6" fill="#fffdf6" stroke={stroke} strokeWidth="2"/>
    <path d="M24 18l8 8 8-8M24 46l8-8 8 8" fill="none" stroke="#b85728" strokeWidth="2"/>
  </svg>
);

/* === keep from before (simplified to match style) === */

export const RiceBowl = ({ className = "" }) => (
  <svg viewBox="0 0 64 64" className={className} aria-hidden>
    <path d="M16 36c1 8 8 14 16 14s15-6 16-14H16z" fill="#f2efe2" stroke={stroke} strokeWidth="2"/>
    <path d="M18 36c0-7 6-12 14-12s14 5 14 12" fill="#fff8e6" stroke={stroke} strokeWidth="2"/>
  </svg>
);

export const GuavaCandy = ({ className = "" }) => (
  <svg viewBox="0 0 64 64" className={className} aria-hidden>
    <rect x="16" y="24" width="32" height="16" rx="4" fill="#6bc16e" stroke={stroke} strokeWidth="2"/>
    <path d="M16 32l-8-4m8 4l-8 4M48 32l8-4m-8 4l8 4" stroke={stroke} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const IncenseBowl = ({ className = "" }) => (
  <svg viewBox="0 0 64 64" className={className} aria-hidden>
    <path d="M18 40c0 8 7 14 14 14s14-6 14-14H18z" fill="#f4e1b6" stroke={stroke} strokeWidth="2"/>
    <path d="M26 22v14M32 20v16M38 24v12" stroke={stroke} strokeWidth="2"/>
    <path d="M26 18c0-2 2-4 4-4M32 16c0-2 2-4 4-4M38 20c0-2 2-4 4-4"
          stroke="#b85728" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const FishSauce = ({ className = "" }) => (
  <svg viewBox="0 0 64 64" className={className} aria-hidden>
    <path d="M24 10h16l3 8v26a11 11 0 0 1-11 11A11 11 0 0 1 21 44V18z"
          fill="#c98b2e" stroke={stroke} strokeWidth="2"/>
    <rect x="28" y="26" width="8" height="8" rx="2" fill="#fff5e9" stroke={stroke} strokeWidth="2"/>
  </svg>
);

export const RiceCooker = ({ className = "" }) => (
  <svg viewBox="0 0 64 64" className={className} aria-hidden>
    <rect x="12" y="22" width="40" height="24" rx="6" fill="#eeeaf0" stroke={stroke} strokeWidth="2"/>
    <rect x="20" y="18" width="24" height="6" rx="2" fill="#eeeaf0" stroke={stroke} strokeWidth="2"/>
    <circle cx="32" cy="34" r="5" fill="#fff5e9" stroke={stroke} strokeWidth="2"/>
  </svg>
);

export const Chopsticks = ({ className = "" }) => (
  <svg viewBox="0 0 64 64" className={className} aria-hidden>
    <path d="M18 10l28 44M26 10l28 44" stroke={stroke} strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

export const BanhMi = ({ className = "" }) => (
  <svg viewBox="0 0 64 64" className={className} aria-hidden>
    <rect x="10" y="28" width="44" height="12" rx="6" fill="#f6cf85" stroke={stroke} strokeWidth="2"/>
    <path d="M14 28c8 6 28 6 36 0" stroke={stroke} strokeWidth="2"/>
    <path d="M14 34h36" stroke="#b85728" strokeWidth="2"/>
  </svg>
);
