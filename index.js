// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
    {
        type : "input",
        name : "title",
        message : "What is your title for your project?",
    },
    {
        type : "input",
        name : "description",
        message : "Describe your project",
    },
    {
        type : "input",
        name : "installation",
        message : "What is your installation process?",
    },
    {
        type : "list",
        name : "license",
        message : "Choose a license for your project",
        choices : ["MIT","Aladdin","Apache"]
    },
    {
        type : "input",
        name : "usage",
        message : "What do use the project for?",
    },
    {
        type : "input",
        name : "contribution",
        message : "Who worked on the project with you?",
    },
    {
        type : "input",
        name : "githubUsername",
        message : "What is your gitHub username?",
    },
    {
        type : "input",
        name : "githubRepo",
        message : "What is the name of your gitHub repository?",
    },
    {
        type : "input",
        name : "email",
        message : "What is your email address?",
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {} 

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(data=>{
        console.log(data);
    })    
}

// Function call to initialize app
init();