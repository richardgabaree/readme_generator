// array of questions for user
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");

// const questions = [];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), (err) => {
    if (err)
      console.log(err); 
    else {
      console.log("File written successfully\n");
    }
  })
}

// function to initialize program

function init() {
   inquirer.prompt([
      
      {
        type: "input",
        name: "email",
        message: "What is your email address?",
      },
      {
        type: "input",
        name: "title",
        message: "What is the name of your project/readme?",
      },
      {
        type: "input",
        name: "description",
        message: "Write a short description of this project.",
      },
      {
        type: "input",
        name: "installation",
        message: "Describe the installation steps, dependencies, or commands."
      },
      {
        type: "input",
        name: "use",
        message: "How is this meant to be used for?"
      },
      {
        type: "input",
        name: "contributors",
        message: "Name of contributors?",
      },
      {
        type: "input",
        name: "tests",
        message: "What testing was completed?",
      },
      {
        type: "list",
        name: "license",
        message: "Select a license for your README file.",
        choices: ["Mozilla", "CCO", "BSD", "MIT", "No License"],
      },
      {
        type: "input",
        name: "github",
        message: "What is your username for GitHub?",
      },
      {
        type: "input",
        name: "git",
        message: "What is your GitHub link?",
      },

      {
        type: "input",
        name: "projectemail",
        message: "What is your GitHub project link?",
      },
      
    ]).then((answers) => 
    writeToFile('README.md', answers));
    
}

// function call to initialize program
init();
