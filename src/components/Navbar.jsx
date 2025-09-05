export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <div className="brand">Princeton VSA</div>
        <ul className="links">
          <li><a href="/">Home</a></li>
          <li><a href="/events">Past Events</a></li>
          <li><a href="mailto:princetonvsa@example.org">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
