import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PastEvents from "./pages/PastEvents";
import Contact from "./pages/About";
import AnhChiEm from "./pages/AnhChiEm"; 

import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Navbar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<PastEvents />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/anh-chi-em" element={<AnhChiEm />} /> {/* ✅ new page */}
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
