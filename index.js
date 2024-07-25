// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter your Project Title:",
  },
  {
    type: "input",
    name: "description",
    message: "Enter your Project Description:",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project?:",
  },
  {
    type: "input",
    name: "usage",
    message: "Provide instructions and examples for use:",
  },
  {
    type: "input",
    name: "credits",
    message:
      "List your collaborators or if you used any third-party assets that require attribution or if you followed tutorials:",
  },
  {
    type: "list",
    name: "license",
    message: "Enter the license information for your project:",
    choices: [
      "MIT",
      "GNU GPLv3",
      "Apache 2.0",
      "ISC",
      "Mozilla Public License 2.0",
      "Unlicense",
    ],
  },
  {
    type: "input",
    name: "githubUsername",
    message: "Enter your Githib username:",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address:",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log("error") : console.log("success")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    writeToFile("README.md", generateMarkdown(answers), (err) =>
      err ? console.log(err) : console.log("Success")
    );
  });
}

// Function call to initialize app
init();
