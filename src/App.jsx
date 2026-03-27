import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Course from "./pages/Course";
import About from "./pages/About";
import Docs from "./pages/Docs";
import Examples from "./pages/Examples";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Course />} />
            <Route path="/about" element={<About />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/examples" element={<Examples />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
