import React from "react";
import Header from "../../components/Header/Header";
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/Skills/Skills";
import Footer from "../../components/Footer/Footer";
import About from "../../components/About/About";

import "./Home.css"

export default function Home() {
  return (
    <div className="home-container">
      <Header />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}
