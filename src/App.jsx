import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PastEvents from "./pages/PastEvents";
import Contact from "./pages/About";
import AnhChiEm from "./pages/AnhChiEm";
import NotFound from "./pages/NotFound";

import "./App.css";

// Global scroll reset component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // prevent browser from restoring old scroll positions
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // always reset scroll to top on route change
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  return null;
}

export default function App() {
  function RoutesWithTransition() {
    const location = useLocation();

    return (
      <div key={location.pathname} className="route-fade-in">
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<PastEvents />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/anh-chi-em" element={<AnhChiEm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app-shell">
        <Navbar />
        <main className="content">
          <RoutesWithTransition />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
