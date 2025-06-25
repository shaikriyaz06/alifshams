import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import "./App.css";
import Home from "./Home";
import Solutions from "./Solutions";
import About from "./About";
import Journey from "./Journey";
import Contact from "./Contact";
import Footer from "./Footer";
import { useScrollMemory } from "./hooks/useScrollMemory";

function AppContent() {
  useScrollMemory();

  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/about" element={<About />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
