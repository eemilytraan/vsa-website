import { useNavigate } from "react-router-dom";
import Lanterns from "../components/Lanterns";
import logo from "../assets/princeton-vsa-logo.png";

export default function Home() {
  const navigate = useNavigate();

  return (
    <main className="home">
      <section className="hero">
        {/* Lanterns hang from the top edge of the hero (under navbar) */}
        <Lanterns count={9} />

        <div className="logo-wrap">
          <img
            src={logo}
            alt="Princeton VSA logo (tiger with nón lá and lotus)"
            className="logo-img"
          />
          <button
            className="lotus-hotspot"
            aria-label="Open Past Events"
            onClick={() => navigate("/events")}
          />
        </div>
      </section>
    </main>
  );
}
