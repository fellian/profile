import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import "./App.css";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <div className="app-container">
        <header className="header">
          <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
            My<span>Profile</span>
          </Link>

          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>

          <nav className={`nav ${menuOpen ? "open" : ""}`}>
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
          </nav>
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
