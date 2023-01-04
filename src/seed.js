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
    skill: "Materialize",
    img: "https://i.imgur.com/kLtV7aP.png",
  },
  {
    type: "Languages",
    subtype: "Styling Language",
    skill: "Material UI",
    img: "https://i.imgur.com/nQneTU6.png",
  },
  {
    type: "Languages",
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
    skill: "Mongoose ODM",
    img: "https://i.imgur.com/BPb25o6.png",
  },
  {
    type: "Technologies",
    subtype: "Library",
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
    img: "https://i.imgur.com/lofEt98.png",
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
  return languages;
});


export const projects = [
  {
    name: "Chatter[Box]",
    img: "https://i.imgur.com/rnFmcto.gif",
    pages: [
      "https://i.imgur.com/tn2KTog.gif",
      "https://i.imgur.com/aXjkvsn.png",
      "https://i.imgur.com/Y0UKqRK.png",
      "https://i.imgur.com/GMz55U4.png",
    ],
    skills: [],
    summary:
      "From inception to deployment to Heroku, I built a MERN-stack instant messaging single page application (SPA), leveraging Socket.io to facilitate real-time communication between browsers. As a pseudo-social media application, I integrated AWS S3 for users to upload photos and coded functionality to edit their profile’s details. Chatterbox is featured as an instant messaging template that can be integrated and adapted across B2B, C2C, or B2C platforms.",
    responsibilities: [
      {
        client_side:
          "Leveraged AJAX calls to retrieve data from MongoDB and built a modern UI/UX platform where users can start conversations and communicate with other users in real-time. Styled webpage using CSS, in-line JSX, and React Material UI.",
      },
      {
        server_side:
          "Used MVC architecture to build the Express backend, along with building socket routes to create real-time communication between the database and React frontend. Utilized token-based authorization to validate user credentials. ",
      },
    ],
    repo: "https://github.com/tungolra/mern-project",
    site: "https://chatterbox-sei-55.herokuapp.com/",
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
    skills: [],
    summary:
      "Using a Django, Python, and PostgreSQL solutions stack, our team of 4 software developers launched a recipe-based website that aims to streamline decision-making in the kitchen and mitigate food waste.  Users have access to a large database of recipes that suggests popular recipes and exact portions of ingredients for their next grocery run!",
    responsibilities: [
      {
        client_side:
          "Taking a mobile-first approach, we utilized HTML, CSS, and Materialize’s styling framework to create an intuitive UI/UX webpage design. Users can collect recipes, create meal plans, and generate grocery lists from their collections.",
      },
      {
        server_side:
          "Following Django’s MVT architecture, I established the routing and CRUD functions to make API calls to the app’s PostgreSQL database and TastyCO’s API. Utilized Django’s session-based authorization to validate user credentials. ",
      },
    ],
    repo: "https://github.com/tungolra/project-3/tree/development",
    site: "https://github.com/tungolra/project-3/tree/development",
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
    skills: ["Express", "Node.js", "Mongoose", "JavaScript", "OAuth 2.0"],
    summary:
      "An automated flashcard system to provide an online study tool that leverages the power of spaced repetition learning. A personal favourite that combines my interest in game-based learning and programming. Responsible for the entire build of front- and back-end and implementation of Google OAuth 2.0 for user authentication.",
    responsibilities: [{ client_side: "Responsible for the entire build of front- and back-end and implementation of Google OAuth 2.0 for user authentication.  " }, { server_side: "" }],
    repo: "https://github.com/tungolra/StudySmart",
    site: "https://github.com/tungolra/StudySmart",
  },
  {
    name: "Othello",
    img: "https://i.imgur.com/FEbqK0L.gif",
    pages: ["https://i.imgur.com/FEbqK0L.gif"],
    skills: ["JavaScript", "HTML", "CSS"],
    summary:
      "A self-made, starter web stack project that showcases DOM interactions, complex game logic, and pure-CSS styling. Othello, AKA Reversi, is a multiplayer, strategy board game where players aim to have the most pieces on the board before it is filled. My app features a random-bot that single-player users can play against.",
    responsibilities: [{ client_side: "Responsible for complete front- and back-end programming that follows best practices of MVT architecture." }, { server_side: "" }],
    repo: "https://tungolra.github.io/Othello/",
    site: "https://tungolra.github.io/Othello/",
  },
  // {
  //   name: "Book Collector",
  //   img: "",
  //   pages: [],
  //   skills: ["Django", "Python", "PostgreSQL"],
  //   summary:
  //     "A personal, mini-project leveraging Django’s framework for fast and secure application builds. Users can enter form data to create a book object to add to their collection of books. Responsible for complete front- and back-end programming that follows best practices of MVT architecture.",
  //   responsibilities: [{ client_side: "" }, { server_side: "" }],
  //   site: "https://github.com/tungolra/Book-Collector",
  // },
];


