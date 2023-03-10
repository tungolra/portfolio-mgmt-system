require("dotenv").config();
require("./config/database");
const Skill = require("./models/skill");
const Project = require("./models/project");

const skills = [
  {
    type: "Languages",
    subtype: "Markup Language",
    skill: "HTML5",
    img: "https://i.imgur.com/xMMSqAc.png",
    projectIds: [],
  },
  {
    type: "Languages",
    subtype: "Styling Language",
    skill: "CSS3",
    img: "https://i.imgur.com/jTNhsgg.png",
    projectIds: [],
  },
  {
    type: "Languages",
    subtype: "Styling Language",
    skill: "Materialize",
    img: "https://i.imgur.com/kLtV7aP.png",
    projectIds: [],
  },
  {
    type: "Languages",
    subtype: "Styling Language",
    skill: "Material UI",
    img: "https://i.imgur.com/nQneTU6.png",
    projectIds: [],
  },
  {
    type: "Languages",
    subtype: "Styling Language",
    skill: "Bootstrap",
    img: "https://i.imgur.com/NsKingN.png",
    projectIds: [],
  },
  {
    type: "Technologies",
    subtype: "Framework",
    skill: "React",
    img: "https://i.imgur.com/I9A7c4b.png",
    projectIds: [],
  },
  {
    type: "Technologies",
    subtype: "Framework",
    skill: "Redux",
    img: "https://i.imgur.com/B5jiJo7.png",
    projectIds: [],
  },
  {
    type: "Technologies",
    subtype: "Framework",
    skill: "Node.js",
    img: "https://i.imgur.com/SqYTp68.png",
    projectIds: [],
  },
  {
    type: "Languages",
    subtype: "Programming Language",
    skill: "Javascript",
    img: "https://i.imgur.com/ckfbsq5.png",
    projectIds: [],
  },
  {
    type: "Languages",
    subtype: "Programming Language",
    skill: "SQL",
    img: "https://i.imgur.com/7ImtZip.png",
    projectIds: [],
  },
  {
    type: "Technologies",
    subtype: "Database",
    skill: "MongoDB",
    img: "https://i.imgur.com/a0RoQoD.png",
    projectIds: [],
  },
  {
    type: "Technologies",
    subtype: "Library",
    skill: "Mongoose ODM",
    img: "https://i.imgur.com/BPb25o6.png",
    projectIds: [],
  },
  {
    type: "Technologies",
    subtype: "Library",
    skill: "PostgreSQL",
    img: "https://i.imgur.com/kqTfCNX.png",
    projectIds: [],
  },
  {
    type: "Technologies",
    subtype: "Cloud Platform",
    skill: "Heroku",
    img: "https://i.imgur.com/TQ5qUGp.png",
    projectIds: [],
  },
  {
    type: "Technologies",
    subtype: "Version Control Software",
    skill: "Git",
    img: "https://i.imgur.com/P6KIeEm.png",
    projectIds: [],
  },
  {
    type: "Technologies",
    subtype: "Database",
    skill: "AWS S3",
    img: "https://i.imgur.com/n3fTnNv.png",
    projectIds: [],
  },
  {
    type: "Technologies",
    subtype: "Framework",
    skill: "Django",
    img: "https://i.imgur.com/CTDcDh6.png",
    projectIds: [],
  },
  {
    type: "Languages",
    subtype: "Programming Language",
    skill: "Python",
    img: "https://i.imgur.com/ofIVvdH.png",
    projectIds: [],
  },
  {
    type: "Technologies",
    subtype: "Framework",
    skill: "Express",
    img: "https://i.imgur.com/jTNhsgg.png",
    projectIds: [],
  },
  {
    type: "Technologies",
    subtype: "Library",
    skill: "Socket.io",
    img: "https://i.imgur.com/lofEt98.png",
    projectIds: [],
  },
];

// (async function () {
//   try {
//     await Skill.create(skills);
//     console.log("skills inserted");
//   } catch (error) {
//     console.log(error.message);
//   }
// })();

const projects = [
  {
    name: "Chatter[Box]",
    img: "https://i.imgur.com/rnFmcto.gif",
    pages: [
      "https://i.imgur.com/tn2KTog.gif",
      "https://i.imgur.com/aXjkvsn.png",
      "https://i.imgur.com/Y0UKqRK.png",
      "https://i.imgur.com/GMz55U4.png",
    ],
    summary:
      "An instant messaging single-page application that features real-time communication between users. Developed using MongoDB, ExpressJS, ReactJS, and NodeJS (MERN) by our team of 4 developers. Taking a mobile-first approach, we utilized HTML, JSX, CSS, and Material UI to create a modern and user-friendly UI/UX.", 
    responsibilities: [
      "As project lead, I organized team tasks using a Notion board, established and managed CI/CD pipeline using Github.", 
      "Connected websockets using Socket.io and established routing and CRUD function to make API calls to MongoDB.",
      "Decided on schema design and data entity relationships for Mongoose models.",
      "Utilized JSON Web Token (JWT) authorization to validate user credentials.",
      "Handled client-side scripting using React hooks and API calls to populate browser views.",
      "Deployed site to Heroku.",
    ],
    repo: "https://github.com/tungolra/mern-project",
    site: "https://chatterbox-sei-55.herokuapp.com/",
    skillIds: [],
  },
  {
    name: "My Portfolio Website",
    img: "",
    pages: [],
    skills: [],
    summary:
      "A portfolio website that highlights my featured projects, technologies used, and contact information. For personal-use, users can create new Projects and Skills, or add Skill to Projects. This was an independent project developed using MongoDB, ExpressJS, ReactJS/Redux, and NodeJS. Taking a mobile-first approach, I used pure CSS to create a user-friendly and unique UI/UX.",
    responsibilities: [
      "Organized project tasks using Notion and version control using GitHub to establish CI/CD pipeline.", 
      "Established routing and CRUD functions to make API calls to MongoDB.",
      "Decided on schema design and data entity relationships for Mongoose models.", 
      "Optimized application performance using React Redux for management of state, server data, and user authentication.",
      "Utilized JSON Web Token (JWT) authorization to validate user credentials.", 
      "Handled client-side scripting using React hooks and Redux to populate browser views.", 
      "Styled webpage using pure CSS.",
      "Completed integration testing."
    ],
    repo: "https://github.com/tungolra/portfolio-mgmt-system/tree/deployment",
    site: "https://ralphtungol.herokuapp.com/",
  },
  {
    name: "Culinarian",
    img: "https://i.imgur.com/Wzykr4U.gif",
    pages: [
      "https://i.imgur.com/bu8ZXid.gif",
      "https://i.imgur.com/OOrGzJ0.png",
      "https://i.imgur.com/gmJyfdy.gif",
      "https://i.imgur.com/eE7p9Ul.gif",
      "https://i.imgur.com/9PMo94f.png",
      "https://i.imgur.com/Wzykr4U.gif",
      "https://i.imgur.com/qgkhZ1C.png",
      "https://i.imgur.com/oTplFje.gif",
      "https://i.imgur.com/hVQQQzV.png",
    ],
    summary:
      "A recipe website that streamlines decision-making in the kitchen and mitigates food waste. Users can access recipe suggestions from a large database, create meal plans, and generate grocery lists from their collections. Developed with Django, Python, and PostgreSQL by our team of four developers and a 2-person team of UX Designers who built our wireframe. Taking a mobile-first approach, we utilized HTML, CSS, and the Materialize styling framework to create an intuitive UI/UX.",
    responsibilities: [
      "Established routing and CRUD functions to make API calls to the PostgreSQL database and TastyCO API following Django???s MVT architecture.",
      "Decided on schema design and data entity relationships for Django models.",
      "Utilized Django???s session-based authorization to validate user credentials.",
      "Populated views on web browser using Django template language and contributed to UI design using CSS and Materialize.",
      "Completed code reviews and facilitated Agile workflows through daily check-ins and team task management.",
      "Completed integration testing and co-managed CI/CD pipeline.",
      
    ],
    repo: "https://github.com/tungolra/project-3/tree/development",
    site: "[offline]",
    skillIds: [],
  },
  {
    name: "StudySmart",
    img: "https://i.imgur.com/7zzCl4k.gif",
    pages: [
      "https://i.imgur.com/qlTOdFG.png",
      "https://i.imgur.com/gYS7ySQ.png",
      "https://i.imgur.com/XyFQc7I.png",
      "https://i.imgur.com/eFMEuMT.png",
      "https://i.imgur.com/PHEGXl1.png",
      "https://i.imgur.com/FjwcwzV.png",
      "https://i.imgur.com/oPXKffZ.png",
      "https://i.imgur.com/C0WK9S1.png",
    ],
    summary:
      "An automated flashcard system to provide an online study tool that leverages the power of spaced repetition learning. A personal favourite that combines my interest in game-based learning and programming. Users can create collections of flashcards that automates the intervals for which a card is to be reviewed. Individually developed using MongoDB, ExpressJS, and NodeJS. Taking a mobile-first approach, I utilized HTML and CSS to create a simple and intuitive UI/UX.",
    responsibilities: [
      "Established routing and CRUD functions to make API calls to MongoDB.",
      "Utilized Google OAuth 2.0 to validate user credentials.", 
      "Handled client-side scripting to manipulate DOM using Vanilla JavaScript and make API calls to server.", 
      "Styled webpage using HTML and CSS.",
      "Configured database and server.",
      "Deployed site to Heroku"
    ],
    repo: "https://github.com/tungolra/StudySmart",
    site: "[offline]",
    skillIds: [],
  },
  {
    name: "Othello",
    img: "https://i.imgur.com/FEbqK0L.gif",
    pages: ["https://i.imgur.com/FEbqK0L.gif"],
    summary:
      "Othello, AKA Reversi, is a multiplayer, strategy board game where players aim to have the most pieces on the board before it is filled. My app features a random-bot that single-player users can play against. Developed using Vanilla JavaScript, this independent project showcases DOM manipulation, functional programming, modularization, and complex game logic. Utilized HTML and pure CSS to style a modern-classic UI/UX.",
    responsibilities: [
      "Established client-side scripting for all event listeners, event handlers, dynamically creating HTML elements, and functional game logic.", 
      "Styled webpage using HTML and pure CSS to create a responsive webpage.",
      "Deployed site to GitHub pages"
    ],
    repo: "https://github.com/tungolra/Othello-js-app",
    site: "https://tungolra.github.io/Othello-js-app/",
    skillIds: [],
  },
  // {
  //   name: "Book Collector",
  //   img: "",
  //   pages: [],
  //   skills: ["Django", "Python", "PostgreSQL"],
  //   summary:
  //     "A personal, mini-project leveraging Django???s framework for fast and secure application builds. Users can enter form data to create a book object to add to their collection of books. Responsible for complete front- and back-end programming that follows best practices of MVT architecture.",
  //   responsibilities: [{ client_side: "" }, { server_side: "" }],
  //   site: "https://github.com/tungolra/Book-Collector",
  // },
];

(async function () {
  try {
    await Project.create(projects);
    console.log("projects inserted");
  } catch (error) {
    console.log(error.message);
  }
})();
