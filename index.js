//
var fs = require("fs");
var path = require("path");


//question prompts to user that generates the README
const questions = [
    {
        type : "input",
        message:"What is your username?",
        name: username
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
        message: "Label your table of contents",
        name:"tableContents"
    },
    {
        type: "input",
        message: "Explain the installation process",
        name: "install"
    }, 
    {
        type: "input",
        message: "What license should this project have?",
        name: "license"
    },
    {
        type: "input",
        message: "Who contributed to this project?",
        name: "contributer"
    }, 
    {
        type: "input",
        message: "Provide examples on how to run this project.",
        name: "test"
    }
];

function writeToFile(fileName, data) {

}

function init() {

}

init();
