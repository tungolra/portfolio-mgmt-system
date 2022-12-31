import React from "react";
import Header from "../../components/Header/Header";
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/Skills/Skills";
import Footer from "../../components/Footer/Footer";
import About from "../../components/About/About";
import * as seed from "../../seed.js";

import "./Home.css";

export default function Home({user}) {
  return (
    <>
      <div className="bg-image">
        <div className="home-container">
          <Header />
          <About />
          <Projects seed={seed}/>
          <Skills user={user} seed={seed} />
          <Footer />
        </div>
      </div>
    </>
  );
}
