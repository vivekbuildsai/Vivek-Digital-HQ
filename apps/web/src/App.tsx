import { BrowserRouter, Routes, Route } from "react-router-dom";

import Background from "./components/ui/Background";
import Navbar from "./components/layout/Navbar";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Background />
      <Navbar />

      <main className="relative min-h-screen text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
