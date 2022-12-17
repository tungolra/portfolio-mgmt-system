import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about-container">
      <section className="about">
        <h3 className="about-title">Building this portfolio</h3>
        <p>
          &nbsp;What started out as a simple portfolio evolved into a full
          MERN-project. I included an admin portal through which I can enter new
          projects, new technologies I've applied, and even a personal blog
          where I can create journal entries that visitors can peruse. My
          ambitions usually climb high when starting on a new project, as it did
          with creating this portfolio. Before building any application, I ask
          myself, "would I want to use it?"
        </p>

        <p>
          &nbsp;A portfolio is great for my employment prospects, but from the
          point of view of the employer. I could have just used a simple stack,
          i.e., JS, CSS, & HTML, but why stop there? This portfolio leverages
          React's component-based, state-driven framework. Organizing and
          creating readable code is crucial regardless of context - personal or
          professional.
        </p>
        <p>
          &nbsp;I am meticulous when it comes to the overall front-end design
          and user experience, of course, within given time constraints. Same
          goes for programming CRUD functions used for journal entries, new
          projects, and new technologies I've used.
        </p>
        <p>
          &nbsp;I've created a responsive webpage by taking a mobile-first
          approach. I aimed to showcase my CSS knowledge instead of relying on
          styling frameworks such as Material UI.
        </p>
        <p>
          &nbsp; IDEs and CLI are a programmer's bread and butter. That's how I
          decided on the theme for this portfolio. If you're viewing this on
          desktop, you'll have noticed the Matrix-esque background on the edges
          of the page. Running binaries to signal the fact that this is a
          "programmer's website" may be oh-so-cliche, but it just fit so well
          with the theme! How can I resist?
        </p>
        <p>
          &nbsp;This portfolio project - turned portfolio management system -
          turned blog - let me continue practicing test-driven development and
          best practices for writing clean code.
        </p>
        <p>
          &nbsp;I also saw this project as an opportunity to create another
          React project. I will say this, by the way: I LOVE React. Equally, I
          thrive in Express' backend playground. That said, I am pulled towards
          any opportunity involving MERN as a tech stack. But that won't stop me
          from learning new technologies! For me, part of the appeal of
          programming is it's continuous evolution. Developing proficencies is
          the game. Becoming proficient is development is the goal.
        </p>
        <p>
          &nbsp;Whenever I put down one project, I'm immediately eager to get my
          feet wet in another. I'd love to know what you'll be building next!
          Please get in touch, let's talk! Anyways, feel free to have a look
          around. Check out the repo for this project. And thanks for visiting!
          Look forward to hearing from you. 
        </p>
        <p>- Ralph</p>
      </section>
    </div>
  );
}
