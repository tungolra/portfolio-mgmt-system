let tool = "https://i.imgur.com/LFuPbmG.png";
let lab = "https://i.imgur.com/VP2HfTC.png";
let stock = "https://i.imgur.com/5gKzj9A.png";

export const skills = [
  {
    type: "Languages",
    subtype: "Markup Language",
    skill: "HTML5",
    img: "https://i.imgur.com/xMMSqAc.png",
  },
  {
    type: "Languages",
    subtype: "Styling Language",
    skill: "CSS3",
    img: "https://i.imgur.com/jTNhsgg.png",
  },
  {
    type: "Languages",
    subtype: "Styling Language",
    skill: "SCSS",
    img: "https://i.imgur.com/jkKieiK.png",
  },
  {
    type: "Technologies",
    subtype: "Styling Framework",
    skill: "Materialize",
    img: "https://i.imgur.com/kLtV7aP.png",
  },
  {
    type: "Technologies",
    subtype: "Styling Framework",
    skill: "Material UI",
    img: "https://i.imgur.com/nQneTU6.png",
  },
  {
    type: "Technologies",
    subtype: "Styling Language",
    skill: "Bootstrap",
    img: "https://i.imgur.com/NsKingN.png",
  },
  {
    type: "Technologies",
    subtype: "Framework",
    skill: "React",
    img: "https://i.imgur.com/I9A7c4b.png",
  },
  {
    type: "Technologies",
    subtype: "Framework",
    skill: "Redux",
    img: "https://i.imgur.com/B5jiJo7.png",
  },
  {
    type: "Technologies",
    subtype: "Framework",
    skill: "Node.js",
    img: "https://i.imgur.com/SqYTp68.png",
  },
  {
    type: "Languages",
    subtype: "Programming Language",
    skill: "Javascript",
    img: "https://i.imgur.com/ckfbsq5.png",
  },
  {
    type: "Languages",
    subtype: "Programming Language",
    skill: "SQL",
    img: "https://i.imgur.com/7ImtZip.png",
  },
  {
    type: "Technologies",
    subtype: "Database",
    skill: "MongoDB",
    img: "https://i.imgur.com/a0RoQoD.png",
  },
  {
    type: "Technologies",
    subtype: "Library",
    skill: "Mongoose",
    img: "https://i.imgur.com/BPb25o6.png",
  },
  {
    type: "Technologies",
    subtype: "Database",
    skill: "PostgreSQL",
    img: "https://i.imgur.com/kqTfCNX.png",
  },
  {
    type: "Technologies",
    subtype: "Cloud Platform",
    skill: "Heroku",
    img: "https://i.imgur.com/TQ5qUGp.png",
  },
  {
    type: "Technologies",
    subtype: "Version Control Software",
    skill: "Git",
    img: "https://i.imgur.com/P6KIeEm.png",
  },
  {
    type: "Technologies",
    subtype: "Database",
    skill: "AWS S3",
    img: "https://i.imgur.com/n3fTnNv.png",
  },
  {
    type: "Technologies",
    subtype: "Framework",
    skill: "Django",
    img: "https://i.imgur.com/CTDcDh6.png",
  },
  {
    type: "Languages",
    subtype: "Programming Language",
    skill: "Python",
    img: "https://i.imgur.com/ofIVvdH.png",
  },
  {
    type: "Technologies",
    subtype: "Framework",
    skill: "Express",
    img: "https://i.imgur.com/jTNhsgg.png",
  },
  {
    type: "Technologies",
    subtype: "Library",
    skill: "Socket.io",
    img: "https://i.imgur.com/oCCYHpS.png",
  },
];

export const languages = [];
skills.map((skill) => {
  if (skill.type === "Languages") {
    languages.push(skill);
  }
  return languages;
});

export const technologies = [];
skills.map((skill) => {
  if (skill.type === "Technologies") {
    technologies.push(skill);
  }
  return technologies;
});

export const frameworks = [];
skills.map((skill) => {
  if (skill.subtype === "Framework") {
    frameworks.push(skill);
  }
  return frameworks;
});

export const programmingLanguages = [];
skills.map((skill) => {
  if (skill.subtype === "Programming Language") {
    programmingLanguages.push(skill);
  }
  return programmingLanguages;
});

export const projects = [
  {
    name: "Wealthy-Mi",
    img: "https://i.imgur.com/SWCYvDG.gif",
    pages: ["https://i.imgur.com/SWCYvDG.gif"],
    summary:
      "Wealthy Mi is a personal finance application created as development exercise for using a modern MERN-stack (MongoDB, ExpressJS, React, NodeJS) and implementing Agile workflow practices. Users can manage their assets and expenses, create financial goals, and forecast when they can achieve them through their dashboard with our data visualization tools.",
    responsibilities: [
      "Server and database configuration using Mongoose and MongoDB.",
      "Build out RESTful APIs and associated CRUD functions using NodeJS.",
      "Set up Redux store and slicers to make client-side API calls to retrieve user data.",
      "Utilized JSON Web Token (JWT) authorization to validate user credentials.",
      "Contribute to frontend development of UI/UX features using Bootstrap, CSS/SCSS for a responsive, modern web page.",
      "Collaborated to create sensible Agile workflows, weekly SCRUMs, and architect a CI/CD pipeline managed using Git/GitHub.",
    ],
    repo: "https://github.com/tungolra/mern-project",
    site: "https://chatterbox-sei-55.herokuapp.com/",
    skills: [
      "HTML5",
      "CSS3",
      "SCSS",
      "Bootstrap",
      "MongoDB",
      "Express",
      "React",
      "Redux",
      "Node.js",
      "Javascript",
    ],
    type: "project",
  },
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
    skills: [
      "HTML5",
      "CSS3",
      "Material UI",
      "Socket.io",
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Javascript",
      "AWS S3",
    ],
    type: "project",
  },
  {
    name: "My Portfolio Website",
    img: "https://i.imgur.com/23EDrah.gif",
    pages: [
      "https://i.imgur.com/5cktbR5.png",
      "https://i.imgur.com/Pj11u7Y.png",
      "https://i.imgur.com/aRNLMQQ.png",
    ],
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
      "Completed integration testing.",
    ],
    repo: "https://github.com/tungolra/portfolio-mgmt-system/tree/deployment",
    site: "https://ralphtungol.herokuapp.com/",
    skills: [
      "HTML5",
      "CSS3",
      "MongoDB",
      "Express",
      "React",
      "Redux",
      "Node.js",
      "Javascript",
    ],
    type: "project",
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
      "Established routing and CRUD functions to make API calls to the PostgreSQL database and TastyCO API following Django’s MVT architecture.",
      "Decided on schema design and data entity relationships for Django models.",
      "Utilized Django’s session-based authorization to validate user credentials.",
      "Populated views on web browser using Django template language and contributed to UI design using CSS and Materialize.",
      "Completed code reviews and facilitated Agile workflows through daily check-ins and team task management.",
      "Completed integration testing and co-managed CI/CD pipeline.",
    ],
    repo: "https://github.com/tungolra/project-3/tree/development",
    site: "[offline]",
    skills: ["Django", "PostgreSQL", "Python", "HTML5", "Materialize", "CSS3"],
    type: "project",
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
      "Deployed site to Heroku",
    ],
    repo: "https://github.com/tungolra/StudySmart",
    site: "[offline]",
    skills: ["MongoDB", "Javascript", "Express", "HTML5", "CSS3"],
    type: "project",
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
      "Deployed site to GitHub pages",
    ],
    repo: "https://github.com/tungolra/Othello-js-app",
    site: "https://tungolra.github.io/Othello-js-app/",
    skills: ["Javascript", "CSS3", "HTML5"],
    type: "project",
  },
  {
    name: "Book Collector",
    img: stock,
    pages: [],
    summary:
      "A personal, mini-project leveraging Django’s framework for fast and secure application builds. Users can enter form data to create a book object to add to their collection of books. Responsible for complete front- and back-end programming that follows best practices of MVT architecture.",
    responsibilities: [],
    repo: "https://github.com/tungolra/Book-Collector",
    site: "[offline]",
    skills: ["Django", "Python", "PostgreSQL"],
    type: "lab",
  },
  {
    name: "Finding Carmen Sandiego - SQL",
    img: tool,
    pages: [],
    summary: "A fun practice utilizing various SQL queries.",
    responsibilities: [],
    repo: "https://github.com/tungolra/sql-carmen-sandiego-tool",
    site: "[offline]",
    skills: ["SQL"],
    type: "tooling",
  },
  {
    name: "CSS Media Queries",
    img: tool,
    pages: [],
    summary:
      "Taking a mobile-first approach, this is a useful reference to apply media queries for desktop and tablet mode.",
    responsibilities: [],
    repo: "https://github.com/tungolra/css-responsive-design-tool",
    site: "[offline]",
    skills: ["CSS3", "HTML5"],
    type: "tooling",
  },
  {
    name: "AJAX using Fetch",
    img: tool,
    pages: [],
    summary: "Useful reference for making API calls using fetch.",
    responsibilities: [],
    repo: "https://github.com/tungolra/ajax-fetch-tool",
    site: "[offline]",
    skills: ["CSS3", "HTML5", "Javascript"],
    type: "tooling",
  },
  {
    name: "MERN Token-based Authorization Starter",
    img: tool,
    pages: [],
    summary:
      "Starter code with built in token-based authorization using JWT in a React App",
    responsibilities: [],
    repo: "https://github.com/tungolra/mern-token-auth-tool",
    site: "[offline]",
    skills: [
      "React",
      "MongoDB",
      "Express",
      "Node.js",
      "Javascript",
      "CSS3",
      "HTML5",
    ],
    type: "tooling",
  },
  {
    name: "Creating Basic Web Pages",
    img: tool,
    pages: [],
    summary:
      "A 10-part CSS/HTML tutorial that follows current CSS best practices. Useful tooling for beginning basic web design for new projects.",
    responsibilities: [],
    repo: "https://github.com/tungolra/basic-web-pages-tool",
    site: "[offline]",
    skills: ["CSS3", "HTML5"],
    type: "tooling",
  },
  {
    name: "JS Tic-Tac-Toe",
    img: stock,
    pages: [],
    summary: "A simple-stack game of Tic-Tac-Toe",
    responsibilities: [],
    repo: "https://github.com/tungolra/js-tictactoe-example",
    site: "https://tungolra.github.io/js-tictactoe-example/",
    skills: ["Javascript", "CSS3", "HTML5"],
    type: "lab",
  },
  {
    name: "Express To-Do List",
    img: lab,
    pages: [],
    summary:
      "An introductory assignment that demonstrates the use of Express middlewares and EJS. RESTful APIs are implemented to create, update, or delete Skills. Building this app demonstrates best practices using Express MVC architecture to modularize functions into routes, controllers, and models and client-side scripting into views.",
    responsibilities: [],
    repo: "https://github.com/tungolra/express-todos-example",
    site: "[offline]",
    skills: ["Javascript", "CSS3", "HTML5", "Express"],
    type: "lab",
  },
  {
    name: "Express Dev Skills",
    img: lab,
    pages: [],
    summary:
      "An introductory assignment that demonstrates the use of Express middlewares and EJS. RESTful APIs are implemented to create, update, or delete Skills. Building this app demonstrates best practices using Express MVC architecture to modularize functions into routes, controllers, and models and client-side scripting into views.",
    responsibilities: [],
    repo: "https://github.com/tungolra/express-todos-example",
    site: "[offline]",
    skills: ["Javascript", "CSS3", "HTML5", "Express"],
    type: "lab",
  },
  {
    name: "Mongoose Movies",
    img: lab,
    pages: [],
    summary:
      "A minimally-designed application demonstrating the use of Express middlewares and EJS. Users are able to create movies by inputting form data, re: title, release year, MPAA rating, and Now Showing status. Users can also create reviews for each movie which are embedded into the Movies schema, sharing a one-to-many relationship.",
    responsibilities: [],
    repo: "https://github.com/tungolra/express-mongoose-movies-example",
    site: "[offline]",
    skills: ["Javascript", "CSS3", "HTML5", "Express", "MongoDB", "Mongoose"],
    type: "lab",
  },
  {
    name: "Mongoose Flights",
    img: lab,
    pages: [],
    summary:
      "A minimally-designed application demonstrating the use of Express middlewares and EJS. Users are able to create flights by inputting form data, re: the Airline, Airport, Flight No., and departure times.",
    responsibilities: [],
    repo: "https://github.com/tungolra/express-mongoose-flights-example",
    site: "[offline]",
    skills: ["Javascript", "CSS3", "HTML5", "Express", "MongoDB", "Mongoose"],
    type: "lab",
  },
  {
    name: "Django Cat Collector",
    img: lab,
    pages: [],
    summary:
      "A single-page application using Django, Python, and PostgreSQL as a webstack. This app also features the use of Django's session-based authentication and the use of AWS S3 to upload images. Users can sign up and create their own account or log in with existing credentials.",
    responsibilities: [],
    repo: "https://github.com/tungolra/django-catcollector-example",
    site: "[offline]",
    skills: [
      "Django",
      "Python",
      "PostgreSQL",
      "HTML5",
      "CSS3",
      "Materialize",
      "AWS S3",
    ],
    type: "lab",
  },
  {
    name: "React Calendar",
    img: lab,
    pages: [],
    summary:
      "A simple React application creating a calendar view where users can assign categories to calendar days. A practice in passing props through components.",
    responsibilities: [],
    repo: "https://github.com/tungolra/react-calendar-example",
    site: "https://codesandbox.io/s/react-calendar-lab-rt-us7ig6",
    skills: ["React", "Javascript", "HTML5", "CSS3"],
    type: "lab",
  },
  {
    name: "React ToDos",
    img: lab,
    pages: [],
    summary:
      "A simple React application creating a calendar view where users can create a list of To-dos. A practice in passing props through components.",
    responsibilities: [],
    repo: "https://github.com/tungolra/react-calendar-example",
    site: "https://codesandbox.io/s/react-to-do-pzygt6",
    skills: ["React", "Javascript", "HTML5", "CSS3"],
    type: "lab",
  },
  {
    name: "React Dev Skills",
    img: lab,
    pages: [],
    summary:
      "A simple React application where users can create a list of skills. A practice in using forms with React",
    responsibilities: [],
    repo: "https://github.com/tungolra/react-dev-skills-example",
    site: "https://codesandbox.io/s/react-dev-skills-lab-rt-8u71r5",
    skills: ["React", "Javascript", "HTML5", "CSS3"],
    type: "lab",
  },
];

export const featured = [];
projects.map((project) => {
  if (project.type === "project") {
    featured.push(project);
  }
  return featured;
});

export const tooling = [];
projects.map((project) => {
  if (project.type === "tooling") {
    tooling.push(project);
  }
  return tooling;
});

export const labs = [];
projects.map((project) => {
  if (project.type === "lab") {
    labs.push(project);
  }
  return labs;
});

export const countBySubtype = {};
projects.forEach((project) => {
  project.skills.forEach((skill) => {
    let subtype;

    for (let i = 0; i < skills.length; i++) {
      if (skills[i].skill === skill) {
        subtype = skills[i].subtype.replace(/\s+/g, "");
        break;
      }
    }

    if (!countBySubtype[subtype]) {
      countBySubtype[subtype] = {};
    }

    if (!countBySubtype[subtype][skill]) {
      countBySubtype[subtype][skill] = 1;
    } else {
      countBySubtype[subtype][skill]++;
    }
  });
});

export const education = [
  {
    school: "University of Toronto",
    subj: "Anthropology",
    date: "Apr 2023",
    img: "https://i.imgur.com/gr5FNay.png",
  },
  {
    school: "SkillUp by Simplilearn",
    subj: "Getting started with DevOps",
    date: "Dec 2022",
    img: "https://i.imgur.com/WMHr9HP.jpg",
  },
  {
    school: "General Assembly",
    subj: "Software Engineering Immersive",
    date: "Dec 2022",
    img: "https://i.imgur.com/BGc1dXK.png",
  },
  {
    school: "Investment Funds Institute of Canada",
    subj: "Canadian Investment Funds Operations",
    date: "Mar 2014",
    img: "https://i.imgur.com/gAHjwfc.png",
  },
  {
    school: "Sheridan College",
    subj: "Exercise Science",
    date: "Apr 2013",
    img: "https://i.imgur.com/V0hxU8s.png",
  },
];
