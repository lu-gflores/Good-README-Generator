//
var fs = require("fs");
var path = require("path");
var inquirer = require("inquirer");//inquirer package
var generate = require("./utils/generateMarkdown.js")

//question prompts to user that generates the README
const questions = [
    {
        type : "input",
        message:"What is your username?",
        name: "username"
    }, 
    {
        type: "input",
        message:"What is your email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is your project name?",
        name: 'project'
    }, 
    {
        type: "input",
        message: "What is this project about?",
        name: "description"
    }, 
    {
        type: "input",
        message: "Command to run this project:",
        name: "install",
        default: "npm i"
    }, 
    {
        type:"input",
        message: "How to use this repo?",
        name: "usage"
    },
    {
        type: "list",
        message: "What license should this project have?",
        name: "license",
        choices: ["GIT", "Apache 2.0", "GPL", "BSD"]
    },
    {
        type: "input",
        message: "Who contributed to this project?",
        name: "contributer"
    }, 
     {
         type: "input",
         message: "Command to run test?",
         name: "test"
     }
    {
        type: "input",
        message: "Antyhing the user needs to know abou running this repo?",
        name: "misc"
    }
];

function writeToFile(fileName, data) {
    return fs.writeFile(fileName.path(process.cwd(data)));
}

function init() {
    //launches questions prompt, then use feedback to pass to writetoFile function
    inquirer.prompt(questions).then(function(answers) {
        writeToFile("README.md", JSON.stringify(answers))
    });
}

init();
