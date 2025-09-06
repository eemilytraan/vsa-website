// src/pages/AnhChiEmPage.jsx
import React from "react";
import anhchiem from "../assets/anhchiem.png"; // ✅ import your image

export default function AnhChiEmPage() {
  return (
    <main style={{ maxWidth: 1120, margin: "0 auto", padding: "24px" }}>
      <h1 className="page-title">Anh Chi Em Program</h1>
      <p>
        Our Anh Chi Em program is designed to foster mentorship,
        friendship, and community within VSA. Members are paired into sibling
        groups that create lasting bonds through shared activities, traditions,
        and support.
      </p>

      <section>
        <h2>How It Works</h2>
        <ul style={{ paddingLeft: "24px", lineHeight: "1.8em" }}>
          <li>
            Littles (general members) are paired with Bigs (Eboard) into a little family. 🎎
          </li>
          <li>
            We have little study breaks throughout the semester, like boba from
            MTea! 🧋
          </li>
        </ul>
      </section>

      <section>
        <h2>Why Join?</h2>
        <p>
          Whether you’re looking for guidance, new friends, or just a fun way to
          practice Viet, Anh Chi Em helps create a welcoming family atmosphere
          at VSA.
        </p>
      </section>

    {/* photo at bottom, styled like board photo */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "40px",
          marginBottom: "40px", 
        }}
      >
        <img
          src={anhchiem}
          alt="Anh Chi Em Program"
          style={{
            maxWidth: "100%",
            width: "800px",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
          }}
        />
      </div>

    </main>
  );
}
