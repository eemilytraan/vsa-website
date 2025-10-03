import { useState } from "react";

export default function About() {
  // add more pictures to carousel by adding more file IDs here
  const boardIds = ["1-iV9AKRezAwHMJcnoMZ8y-gPy9_8lgfi", "1VlgB28kYHm-4-sfhVpdfOwRft75wOAhO"];

  // For each file ID we’ll try 3 URL formats, falling back on error.
  const buildSrcs = (id) => [
    // 1) Most reliable for public images
    `https://drive.google.com/thumbnail?id=${id}&sz=w1600`,
    // 2) Direct download endpoint (also serves images)
    `https://drive.usercontent.google.com/uc?id=${id}&export=download`,
    // 3) Classic view endpoint
    `https://drive.google.com/uc?export=view&id=${id}`,
  ];

  const [current, setCurrent] = useState(0);
  const [srcIndexByPhoto, setSrcIndexByPhoto] = useState(boardIds.map(() => 0));

  const next = () => setCurrent((c) => (c + 1) % boardIds.length);
  const prev = () => setCurrent((c) => (c - 1 + boardIds.length) % boardIds.length);

  const handleError = (i) => {
    setSrcIndexByPhoto((prev) => {
      const copy = [...prev];
      // advance to the next fallback URL if available
      copy[i] = Math.min(copy[i] + 1, buildSrcs(boardIds[i]).length - 1);
      return copy;
    });
  };

  return (
    <main className="container">
      {" "}
      <h1 className="page-title">About</h1>{" "}
      <section className="card about-grid" style={{ marginBottom: 24 }}>
        {" "}
        <div>
          {" "}
          <h2 className="section-title">The Board</h2>{" "}
          <ul className="list-plain">
            {" "}
            <li>
              <strong>President:</strong> Morgan Hoang '27
            </li>{" "}
            <li>
              <strong>Vice President:</strong> Alina Ho '26
            </li>{" "}
            <li>
              <strong>Secretary:</strong> Bryan Dam '27
            </li>{" "}
            <li>
              <strong>Treasurer:</strong> Emily Tran '28
            </li>{" "}
            <li>
              <strong>Social Chair:</strong> Sabrina Van '26 &amp; Tran Ton '27
            </li>{" "}
            <li>
              <strong>Publicity Chair:</strong> Brandon Le '26 &amp; Dan Le '27
            </li>{" "}
            <li>
              <strong>Frosh Board Chair:</strong> Ethan Do '26 &amp; Lincoln Ho '28
            </li>{" "}
          </ul>{" "}
        </div>{" "}
        {/* Carousel */}
        <div
          style={{
            position: "relative",
            width: "100%", // take full width of the grid column
            height: "350px", // keep same height as before
            overflow: "hidden",
            display: "flex",
            justifyContent: "center", // centers image inside
            alignItems: "center",
          }}
        >
          {boardIds.map((id, i) => {
            const offset = (i - current + boardIds.length) % boardIds.length;
            const srcs = buildSrcs(id);
            const src = srcs[srcIndexByPhoto[i]];

            return (
              <img
                key={id}
                src={src}
                alt={`Board ${i}`}
                onError={() => handleError(i)}
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center", // keeps subject centered
                  borderRadius: 8,
                  boxShadow: "0 4px 8px rgba(0,0,0,0.25)",
                  transition: "transform 0.45s ease, opacity 0.45s ease",
                  transform:
                    offset === 0
                      ? "translateX(0) scale(1)"
                      : offset === 1
                        ? "translateX(20px) scale(0.95)"
                        : "translateX(-20px) scale(0.95)",
                  opacity: offset === 0 ? 1 : 0.6,
                  zIndex: offset === 0 ? 3 : 2,
                }}
              />
            );
          })}
          <button
            onClick={prev}
            style={{
              position: "absolute",
              top: "50%",
              left: 10,
              transform: "translateY(-50%)",
              background: "rgba(0,0,0,0.6)",
              color: "#fff",
              border: "none",
              borderRadius: "50%",
              width: 32,
              height: 32,
              cursor: "pointer",
              zIndex: 5,
            }}
          >
            {"<"}
          </button>{" "}
          <button
            onClick={next}
            style={{
              position: "absolute",
              top: "50%",
              right: 10,
              transform: "translateY(-50%)",
              background: "rgba(0,0,0,0.6)",
              color: "#fff",
              border: "none",
              borderRadius: "50%",
              width: 32,
              height: 32,
              cursor: "pointer",
              zIndex: 5,
            }}
          >
            {">"}
          </button>{" "}
        </div>{" "}
      </section>{" "}
      <div className="separator" />{" "}
      <section
        className="card"
        style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}
      >
        {" "}
        <h2 className="section-title" style={{ margin: 0 }}>
          Social
        </h2>{" "}
        <a
          className="icon-btn lantern-glow"
          href="https://www.instagram.com/vsaprinceton/?hl=en"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          {" "}
          <svg className="icon" viewBox="0 0 64 64" aria-hidden xmlns="http://www.w3.org/2000/svg">
            {" "}
            <defs>
              {" "}
              <linearGradient id="igGradInline" x1="0" y1="1" x2="1" y2="0">
                {" "}
                <stop offset="0%" stopColor="#f58529" /> <stop offset="50%" stopColor="#dd2a7b" />{" "}
                <stop offset="100%" stopColor="#515bd4" />{" "}
              </linearGradient>{" "}
            </defs>{" "}
            <rect x="8" y="8" width="48" height="48" rx="12" fill="url(#igGradInline)" />{" "}
            <rect
              x="16"
              y="16"
              width="32"
              height="32"
              rx="8"
              fill="none"
              stroke="#fff"
              strokeWidth="4"
            />{" "}
            <circle cx="32" cy="32" r="9" fill="none" stroke="#fff" strokeWidth="4" />{" "}
            <circle cx="42" cy="22" r="3" fill="#fff" />{" "}
          </svg>{" "}
          <span className="sr-only">Instagram</span>{" "}
        </a>{" "}
      </section>{" "}
    </main>
  );
}
