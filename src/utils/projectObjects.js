import React from "react";
import budget from "../images/budget.png";
import pallet from "../images/pallete.png";
import ecommerce from "../images/ecommerce.png";
import techblog from "../images/techblog.png";
import employee from "../images/employee.png";

const projectsObj = [
  {
    title: "Tech-Blog",
    image: techblog,
    description:
      "This is a tech blog. Create an account. Write and view blogs and comment on them!",
    skills: "MYSQL,Sequelize, Bcrypt, Express.js,Node.js",
    github: "https://github.com/josejrrosas/Tech-Blog/blob/main/README.md",
    deployedSite: "https://afternoon-waters-30602.herokuapp.com/",
  },
  {
    title: "Palette-Cleanser",
    image: pallet,
    description:
      "Group Project: made a palette cleanser app in order to fulfill a need for variaous font colors and font types in projects.",
    skills:
      "Heroku, node, express, Javascript, Bootstrap, bCrypt, Sequelize, HTML, & handlebars",
    github: "https://github.com/josejrrosas/Palette-Cleanser",
    deployedSite: "https://palette-cleanser.herokuapp.com/",
  },
  {
    title: "Progressive Budget",
    image: budget,
    description:
      "This application is used to keep track of your budget. This budget tracker can be used offline as well!",
    skills: "Morgan, Mongoose, Express.js, Node.js",
    github: "https://github.com/josejrrosas/Progressive-Budget",
    deployedSite: "https://hidden-atoll-46530.herokuapp.com/",
  },
  {
    title: "E-commerce Website",
    image: ecommerce,
    description:
      "My task was to build the back end for an e-commerce site by modifying starter code. I configured a working Express.js API that uses Sequelize to interact with a MySQL database.",
    skills: "Javascript, Node.JS, MySQL, Insomnia",
    github: "https://github.com/josejrrosas/ecommerce-website",
    deployedSite:
      "https://drive.google.com/file/d/1maxNXMnOu_svBv1A0fA9IDVFurzy0C2K/view",
  },
  {
    title: "Employee Tracker",
    image: employee,
    description:
      "This application is a command-line application used to manage a company's employee database, using Node.js, Inquirer, and MySQL.",
    skills: "Javascript, Node.JS, Inquirer, MySQL",
    github: "https://github.com/josejrrosas/Employee-Tracker",
  },
];

export default projectsObj;
