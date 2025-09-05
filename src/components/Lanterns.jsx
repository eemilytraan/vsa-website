import { useMemo } from "react";

export default function Lanterns({ count = 9 }) {
  const lanterns = useMemo(() => {
    const arr = [];
    for (let i = 0; i < count; i++) {
      const stringLen = Math.round(35 + Math.random() * 40); // 35–75px
      const delay = (Math.random() * 0.3).toFixed(2);
      const scale = (0.9 + Math.random() * 0.25).toFixed(2);
      const type = Math.random() > 0.5 ? "round" : "ellipse"; // 50/50 mix
      arr.push({ stringLen, delay, scale, type });
    }
    return arr;
  }, [count]);

  return (
    <div className="lanterns">
      {lanterns.map((l, idx) => (
        <div
          key={idx}
          className="lantern"
          style={{
            "--string-len": `${l.stringLen}px`,
            "--delay": `${l.delay}s`,
            "--scale": l.scale,
          }}
        >
          <div className="lantern-string" />

          {l.type === "round" && (
            <svg className="lantern-body" viewBox="0 0 64 64" aria-hidden="true">
              {/* body */}
              <circle cx="32" cy="32" r="20" />
              {/* caps */}
              <rect x="24" y="10" width="16" height="6" rx="3" />
              <rect x="24" y="48" width="16" height="6" rx="3" />
              {/* ribs */}
              <line x1="14" y1="22" x2="50" y2="22" className="lantern-rib" />
              <line x1="14" y1="32" x2="50" y2="32" className="lantern-rib" />
              <line x1="14" y1="42" x2="50" y2="42" className="lantern-rib" />
              {/* tassels */}
              <line x1="32" y1="54" x2="32" y2="62" className="lantern-tassel" />
              <line x1="28" y1="54" x2="28" y2="60" className="lantern-tassel" />
              <line x1="36" y1="54" x2="36" y2="60" className="lantern-tassel" />
            </svg>
          )}

          {l.type === "ellipse" && (
            <svg
              className="lantern-body"
              viewBox="0 0 64 64"
              aria-hidden="true"
              focusable="false"
            >
              <ellipse cx="32" cy="30" rx="20" ry="16" />
              <ellipse cx="32" cy="30" rx="16" ry="12" className="lantern-rib" />
              <ellipse cx="32" cy="30" rx="12" ry="9" className="lantern-rib" />
              <rect x="26" y="12" width="12" height="4" rx="2" />
              <rect x="26" y="46" width="12" height="4" rx="2" />
              <line x1="32" y1="50" x2="32" y2="60" className="lantern-tassel" />
              <line x1="28" y1="50" x2="28" y2="58" className="lantern-tassel" />
              <line x1="36" y1="50" x2="36" y2="58" className="lantern-tassel" />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}
