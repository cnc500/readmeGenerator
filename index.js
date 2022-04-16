// These packages are needed for this application including my created generateMarkdown 
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")

// Array of questions for user to input or select
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
        choices : ["MIT","Aladdin","Apache2","GPL3","BSD2Clause","BSD3Clause","BSD4Clause"]
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

// This function initializes application
function init() {
    inquirer.prompt(questions)
    .then(data=>{
        console.log(data);
        const generatedData = generateMarkdown(data);
        fs.writeFileSync("./destination/readme.md",generatedData)
    })    
}

// Calls function init to initialize app
init();