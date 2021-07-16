const inquirer = require("inquirer");
const fs = require('fs');
const util = require("util");

const readMeGenerator = util.promisify(fs.writeFile);

//ReadMe Info Questions.

const questions = () =>  {
    return inquirer.prompt([
    {
        type: "input",
        message: "Project title?",
        name: "title"

    }, {
        type: "input",
        message: "What is this project about? Detailed description",
        name: "Description"

    }, {
        type: "input",
        message: "Table Of contents",
        name: "Table of contents"

    }, {
        type: "input",
        message: "Project What does the user need to install to run this app?",
        name: "Installation"

    }, {
        type: "input",
        message: "How is the app used? Give instructions",
        name: "Usage"

    }, {
        type: "input",
        message: "What type of license this project uses?",
        name: "License"

    }, {
        type: "input",
        message: "What commands are needed to test this app?",
        name: "Test"

    }, {
        type: "input",
        message: "Contact info for inquiries",
        name: "Questions"

    }, {
        type: "input",
        message: "What is your Github username?",
        name: "Username"

    }, {
        type: "input",
        message: "What is your email address?",
        name: "Email"

    },
    
]);
};

//This is the function to write the MD file.
function writeMdFile(fileName, data) {
    
    fs.writeFile(fileName, data, function(err) {
    console.log(fileName)
    console.log(data)
    if (err) {
        return console.log(err)
    }else {
        console.log("success")
    }
});

//Function to initialize program.
function init() {
    inquirer.prompt(questions)
    .then(function(data){
        writeMdFile("README.md", readMeGenerator(data));
        console.log(data)
    })

}

init();