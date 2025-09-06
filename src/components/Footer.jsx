import InstagramIcon from "./icons/Instagram";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner container" style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
          <a
            className="chip"
            href="https://docs.google.com/forms/d/e/1FAIpQLSdKnZPdUozY9lAx18F2NVsxCfm-mtMU8_XZZcw_3Ktgn8y8mw/viewform"
            target="_blank" rel="noreferrer"
          >Join Us</a>
          <a className="icon-btn lantern-glow" href="https://www.instagram.com/vsaprinceton/?hl=en" target="_blank" rel="noreferrer" aria-label="Instagram">
            <InstagramIcon className="icon" />
          </a>
        </div>
        <p style={{ margin: 0 }}>© {new Date().getFullYear()} Princeton Vietnamese Student Association</p>
      </div>
    </footer>
  );
}
