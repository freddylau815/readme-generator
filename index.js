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
        message: 'How would you like other developers to contribute?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What tests did you provide for your application?'
    },
    {
        type: 'list',
        name: 'license',
        choices: ['mit', 'bsl-1.0', 'agpl-3.0']

    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // Function to grab the arguments passed (file, content, err?) 
    fs.writeFile(fileName, data, err)
    if (err) return console.log(err)
}

// TODO: Create a function to initialize app
function init() {
    // Prompt questiopns then take answer objects
    inquirer.prompt(questions).then((answerObj) => {
        // answerObject is being plugged into function below that plugs data into md
        const readme = generateMarkdown(answerObj)
        // Function below creates the md and grabs above function content? 
        writeToFile('./README.md', readme)
    })
}

// Function call to initialize app
init();
