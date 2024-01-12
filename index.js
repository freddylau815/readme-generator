// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const markdownFile = require('./utils/generateMarkdown')
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project called?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description of your project'
    },
    {
        type: 'input',
        name: 'installInstruct',
        message: 'What are the steps required to install your project?'
    },
    {
        type: 'input',
        name: 'usageInfo',
        message: 'Provide instructions for use of your applicion'
    },
    {
        type: 'input',
        name: 'contributionGuide',
        message: 'Provide a short description of your project'
    },
    {
        type: 'input',
        name: 'testInstruct',
        message: 'Provide a short description of your project'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('./README.md', markdownFile, (err) => {
        
    }

    
    
    )
}

// TODO: Create a function to initialize app
function init() {
    //Prompt questiopns then take answer objects
    inquirer.prompt(questions).then(answerObj => {
        const readme = generateMarkdown(answerObj)
        writeToFile('./README.md', readme)
    })
}

// Function call to initialize app
init();
