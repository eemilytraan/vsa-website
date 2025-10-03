// src/pages/AnhChiEmPage.jsx
import React from "react";
import anhchiem from "../assets/anhchiem.png";

export default function AnhChiEmPage() {
  return (
    <main className="container">
      <h1 className="page-title">Anh Chi Em Program</h1>
      <div className="card" style={{ marginBottom: 24 }}>
        <p>
          Our Anh Chi Em program fosters mentorship, friendship, and community within VSA. Members
          are paired into sibling groups that create lasting bonds through shared activities,
          traditions, and support. Make sure to join the ACE competition!!
          {/*} nước sôi, nước sôi, nước sôi; adopted; koalas; */}
        </p>
      </div>

      <div className="card" style={{ marginBottom: 24 }}>
        <h2 className="section-title">How It Works</h2>
        <ul style={{ paddingLeft: 24, lineHeight: "1.8em", margin: 0 }}>
          <li>Littles ('28s and '29s') are paired with Bigs ('27s and '26s) into a little family.</li>
          <li>We host small study breaks throughout the semester, and YOU rack up competition points for your family by attending events!</li>
        </ul>
      </div>

      <div className="card" style={{ marginBottom: 32 }}>
        <h2 className="section-title">Why Join?</h2>
        <p>
          Whether you’re looking for guidance, new friends, or just a fun way to practice Viet,
          Anh Chi Em helps create a welcoming family atmosphere at VSA.
        </p>
      </div>

      <div style={{ display: "flex", justifyContent: "center", margin: "40px 0" }}>
        <img
          src={anhchiem}
          alt="Anh Chi Em Program"
          style={{ maxWidth: "100%", width: 800, borderRadius: 12, boxShadow: "0 4px 12px rgba(0,0,0,.2)" }}
        />
      </div>
    </main>
  );
}
