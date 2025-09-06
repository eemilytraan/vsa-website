import vsaImg from "../assets/eboard.png"; // your board photo

export default function About() {
  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: "24px" }}>
      <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 16 }}>About</h1>

      {/* Cards: The Board + Social */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: 24,
          marginBottom: "40px",
        }}
      >
        {/* The Board card */}
        <div style={{ padding: 16, border: "1px solid #9b312f", borderRadius: 12 }}>
          <h2 style={{ fontSize: 20, marginBottom: 8 }}>The Board</h2>
          <ul style={{ lineHeight: 1.9, margin: 0, paddingLeft: 18 }}>
            <li>President: Morgan Hoang '27</li>
            <li>Vice President: Alina Ho '26</li>
            <li>Secretary: Bryan Dam '27</li>
            <li>Treasurer: Emily Tran '28</li>
            <li>Social Chair: Sabrina Van '26 &amp; Tran Ton '27</li>
            <li>Publicity Chain: Brandon Le '26 &amp; Dan Le '27</li>
            <li>Frosh Board Chair: Ethan Do '26 &amp; Lincoln Ho '28</li>
          </ul>

          <div style={{ textAlign: "center", marginTop: 16 }}>
            <img
              src={vsaImg}
              alt="Princeton VSA Board"
              style={{
                display: "inline-block",
                maxWidth: 520,
                width: "100%",
                height: "auto",
                margin: "0 auto",
                borderRadius: 12,
                border: "1px solid #9b312f",
                objectFit: "cover",
              }}
            />
          </div>
        </div>

        {/* Social card */}
        <div style={{ padding: 16, border: "1px solid #9b312f", borderRadius: 12 }}>
          <h2 style={{ fontSize: 20, marginBottom: 8 }}>Social</h2>
          <ul style={{ lineHeight: 1.9, margin: 0, paddingLeft: 18 }}>
            <li>
              Instagram:{" "}
              <a
                href="https://www.instagram.com/vsaprinceton/?hl=en"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#fba45b" }}
              >
                @vsaprinceton
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
