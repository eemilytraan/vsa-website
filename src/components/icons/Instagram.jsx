export default function InstagramIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="igGrad" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#f58529" />
          <stop offset="50%" stopColor="#dd2a7b" />
          <stop offset="100%" stopColor="#515bd4" />
        </linearGradient>
      </defs>
      <rect x="8" y="8" width="48" height="48" rx="12" fill="url(#igGrad)" />
      <rect x="16" y="16" width="32" height="32" rx="8" fill="none" stroke="#fff" strokeWidth="4" />
      <circle cx="32" cy="32" r="9" fill="none" stroke="#fff" strokeWidth="4" />
      <circle cx="42" cy="22" r="3" fill="#fff" />
    </svg>
  );
}

