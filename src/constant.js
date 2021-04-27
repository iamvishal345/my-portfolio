// import profileImage from './img/profile-img.jpg'
export const PROFILE = {
  name: "Vishal Sharma",
  short_desc: `I'm a INDIA based Full Stack Engineer who loves to work with Java Script technologies, specailising in repid end to end development of custom web application.`,
  long_desc: `I'm a INDIA based Full Stack Engineer who loves to work
    with Java Script Technologies. I have been working as a Full Stack 
    Software Engineer since 2018. My ultimate passion is building software
    and tackling new problems. From Technical Perspective
    while writing code I always try to follow DRY Principle.
    While I have a preferred technology stack, I can always switch to other
    technologies according to requirements.
    I am always keen to get involved at all stages of a project or application lifecycle.`,
  age: "24",
  phone: "+919816120038",
  email: "vishalagnihotri345@gmail.com",
  address: "Chandigarh, INDIA",
  //   image: profileImage
}

export const NAVLIST = [
  {
    name: "Skills",
    key: "skills",
  },
  {
    name: "Projects",
    key: "projects",
  },
  {
    name: "About Me",
    key: "about",
  },
  {
    name: "Contact Me",
    key: "contact",
  },
]

export const SKILLS = {
  markup_styling: [
    {
      name: "HTML5",
      level: "100",
    },
    {
      name: "CSS3",
      level: "90",
    },
    {
      name: "SCSS",
      level: "90",
    },
    {
      name: "Flex Box",
      level: "90",
    },
    {
      name: "CSS Grid",
      level: "70",
    },
  ],
  languages: [
    {
      name: "JavaScript",
      level: "97",
    },
    {
      name: "Python",
      level: "60",
    },
    {
      name: "MongoDB",
      level: "85",
    },
    {
      name: "MYSql",
      level: "70",
    },
  ],
  technologies: [
    {
      name: "React",
      level: "90",
    },
    {
      name: "Redux",
      level: "90",
    },
    {
      name: "Node",
      level: "85",
    },
    {
      name: "Express",
      level: "95",
    },
    {
      name: "Gatsby",
      level: "70",
    },
    {
      name: "Jquery",
      level: "70",
    },
    {
      name: "Web Components (Lit Element)",
      level: "95",
    },
    {
      name: "Webpack",
      level: "80",
    },
    {
      name: "Mongoose",
      level: "85",
    },
    {
      name: "Angular",
      level: "75",
    },
  ],
  testing: [
    {
      name: "Karma",
      level: "80",
    },
    {
      name: "Jest",
      level: "80",
    },
    {
      name: "Enzyme",
      level: "70",
    },
  ],
  infrastructure: [
    {
      name: "Git",
      level: 90,
    },
    {
      name: "Jenkins",
      level: "60",
    },
    {
      name: "Netlify",
      level: "80",
    },
    {
      name: "Azure",
      level: "70",
    },
    {
      name: "Heroku",
      level: "70",
    },
    {
      name: "Docker",
      level: "60",
    },
  ],
}

export const EXPERIENCELIST = [
  // {
  //     jobTitle : ""
  // },
  {
    jobTitle: "System Engineer",
    timeSpan: "December 2018 - Present",
    company: "Infosys Ltd.",
  },
  {
    jobTitle: "Engineer II (Contractor)",
    timeSpan: "June 2019 - May 2020",
    company: "American Express",
  },
]

export const EDUCATION = [
  {
    type: "B.Tech. (Information Technology)",
    institute: "University Institute Of Information Technology Shimla",
    session: "2013-17",
  },
  {
    type: "Secondary Education",
    institute: "Minerva Public School Ghumarwin",
    session: "2012-13",
  },
  {
    type: "High School Education",
    institute: "Om Shanti Public School",
    session: "2010-11",
  },
]

export const PROJECTS = [
  {
    name: "React Commerce",
    technologies: ["React.js", "Redux", "Node.js", "Express.js", "Firebase"],
    description:
      "E-Commerce application with login and sign up functionality using google auth and complete cart management and order placing using stripe payment gateway.",
    id: "react-commerce",
    github: "https://github.com/iamvishal345/clothing_app_react",
    live: "https://react-ecommerce-clothing-live.herokuapp.com/",
  },
  {
    name: "Fire Quiz",
    technologies: ["React.js", "Firebase", "OpenDB Questions API"],
    description:
      "A simple quiz application which also saves final score and name in firestore. currently working on some more features for application like adding timer and recording total response time and choosing different categories.",
    id: "fire-quiz",
    github: "https://github.com/iamvishal345/react-firebase-quiz",
    live: "https://fire-quiz.netlify.app/",
  },
  {
    name: "Namaste Himachal",
    technologies: ["React.js", "Redux", "Node.js", "Express.js"],
    description:
      "Namaste Himachal is a travel booking website where user can browser through various tour packages, submit queries and read various travel blogs",
    id: "namaste-himachal",
    github: "",
    live: "http://namastehimachaltours.com/",
  },
  {
    name: "Code Entity",
    technologies: ["React.js", "Gatsby", "Markdown"],
    description:
      "Simple Personal technology blog where one can write blogs in .md format which then converted into html and autogenerate a blog page",
    id: "code-entity",
    github: "https://github.com/iamvishal345/code-entity-blog",
    live: "https://www.codeentity.tech/",
  },
]
