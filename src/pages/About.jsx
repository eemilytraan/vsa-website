import vsaImg from "../assets/eboard.png";

export default function About() {
  return (
    <main className="container">
      <h1 className="page-title">About</h1>

      <section className="card about-grid" style={{ marginBottom: 24 }}>
        <div>
          <h2 className="section-title">The Board</h2>
          <ul className="list-plain">
            <li>President: Morgan Hoang '27</li>
            <li>Vice President: Alina Ho '26</li>
            <li>Secretary: Bryan Dam '27</li>
            <li>Treasurer: Emily Tran '28</li>
            <li>Social Chair: Sabrina Van '26 &amp; Tran Ton '27</li>
            <li>Publicity Chain: Brandon Le '26 &amp; Dan Le '27</li>
            <li>Frosh Board Chair: Ethan Do '26 &amp; Lincoln Ho '28</li>
          </ul>
        </div>
        <div>
          <img className="about-photo" src={vsaImg} alt="Princeton VSA Board" />
        </div>
      </section>

      <div className="separator" />

      <section className="card" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
        <h2 className="section-title" style={{ margin: 0 }}>Social</h2>
        <a className="icon-btn lantern-glow" href="https://www.instagram.com/vsaprinceton/?hl=en" target="_blank" rel="noreferrer" aria-label="Instagram">
          <svg className="icon" viewBox="0 0 64 64" aria-hidden xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="igGradInline" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0%" stopColor="#f58529" />
                <stop offset="50%" stopColor="#dd2a7b" />
                <stop offset="100%" stopColor="#515bd4" />
              </linearGradient>
            </defs>
            <rect x="8" y="8" width="48" height="48" rx="12" fill="url(#igGradInline)" />
            <rect x="16" y="16" width="32" height="32" rx="8" fill="none" stroke="#fff" strokeWidth="4" />
            <circle cx="32" cy="32" r="9" fill="none" stroke="#fff" strokeWidth="4" />
            <circle cx="42" cy="22" r="3" fill="#fff" />
          </svg>
          <span className="sr-only">Instagram</span>
        </a>
      </section>
    </main>
  );
}
