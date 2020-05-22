var fs = require("fs");
var inquirer = require("inquirer");//inquirer package
var generate = require("./utils/generateMarkdown.js") //

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
        choices: ["GIT", "Apache 2.0", "MIT", "BSD"]
    },
    {
        type: "input",
        message: "Who contributed to this project?",
        name: "contributer"
    }, 
     {
         type: "input",
         message: "Command to run test?",
         name: "test",
         default: "npm test"
     },
    {
        type: "input",
        message: "Anything the user needs to know abou running this repo?",
        name: "misc"
    }
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if (err) {
            return console.log(err);
        }
    })
}

function init() {
    //launches questions prompt, then use feedback to pass to writetoFile function
    inquirer.prompt(questions).then(function(answers) {
    //passing to utils folder to prevent overwriting this Repo README.md
        writeToFile("./utils/README.md", generate(answers));
    });
}

init();
