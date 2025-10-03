import { useNavigate } from "react-router-dom";
import Lanterns from "../components/Lanterns";
import { Sriracha, RiceBowl, CoffeeCup, RiceCooker } from "../components/VietnameseIcons";
import { Link } from "react-router-dom";
import Separator from "../components/Separator";
import logo from "../assets/princeton-vsa-logo.png";


export default function Home() {
  const navigate = useNavigate();
  return (
    <main className="home">
      {" "}
      <section className="hero">
        {" "}
        <Lanterns count={9} />{" "}


        <br />
        <div className="hero-inner">
          {" "}
          <h1 className="hero-title">Princeton Vietnamese Student Association</h1>{" "}
          <p className="hero-subtitle">Culture, Community, and Good Food — Come Join the Family.</p>{" "}
          <br />
          <div className="logo-wrap">
            {" "}
            <img
              src={logo}
              alt="Princeton VSA logo (tiger with nón lá and lotus)"
              className="logo-img"
            />{" "}
            <button
              className="lotus-hotspot"
              aria-label="Open Events"
              onClick={() => navigate("/events")}
            />{" "}
          </div>{" "}

          <br />
          <div className="hero-cta">
            {" "}
            <a
              className="btn btn-primary"
              href="https://docs.google.com/forms/d/e/1FAIpQLSfgXAMAOitG5BA1VFjbp_cFksMHUnLjhF2OBNy9PjKl4kezjw/viewform?usp=header"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Join Us{" "}
            </a>{" "}
            <button className="btn btn-outline" onClick={() => navigate("/events")}>
              Explore Events
            </button>{" "}
          </div>{" "}

          <br />
          <section className="quick-grid">
            {" "}
            <Link to="/anh-chi-em" className="card-link">
              {" "}
              <RiceCooker className="icon" /> <h3>Mentorship</h3>{" "}
              <p>Find Your ACE Family on Campus.</p>{" "}
            </Link>{" "}
            <Link to="/events" className="card-link">
              {" "}
              <Sriracha className="icon" /> <h3>Events</h3>{" "}
              <p>Food Nights, Tết, Study Breaks, and More.</p>{" "}
            </Link>{" "}
            <Link to="/contact" className="card-link">
              {" "}
              <CoffeeCup className="icon" /> <h3>About VSA</h3>{" "}
              <p>Meet the Board and Get Connected.</p>{" "}
            </Link>{" "}
          </section>{" "}
          
          <Separator />{" "}
        </div>{" "}
      </section>{" "}
    </main>
  );
}
