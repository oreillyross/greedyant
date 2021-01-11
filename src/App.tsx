import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { About, Home, Recipe, NotFound } from "./pages";
export default function App() {
  return (
    <div>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/recipe" element={<Recipe />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}
