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

export default function App() {
  function RoutesWithTransition() {
    const location = useLocation();
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, [location.pathname]);
    return (
      <div key={location.pathname} className="route-fade-in">
        <Routes>
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
