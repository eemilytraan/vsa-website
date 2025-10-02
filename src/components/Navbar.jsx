import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);
  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link to="/" className="brand" aria-label="Princeton VSA Home" onClick={close}>
          Princeton VSA
        </Link>
        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          aria-controls="primary-navigation"
          aria-expanded={open ? "true" : "false"}
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden>☰</span>
        </button>
        <ul id="primary-navigation" className={`links ${open ? "open" : ""}`}>
          <li>
            <NavLink to="/events" className={({ isActive }) => (isActive ? "active" : undefined)} onClick={close}>
              Past Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/anh-chi-em"
              className={({ isActive }) => (isActive ? "active" : undefined)}
              onClick={close}
            >
              Anh Chi Em
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : undefined)} onClick={close}>
              About
            </NavLink>
          </li>
          <li className="nav-cta">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfgXAMAOitG5BA1VFjbp_cFksMHUnLjhF2OBNy9PjKl4kezjw/viewform?usp=header"
              target="_blank" rel="noreferrer"
              onClick={close}
            >
              Join Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
