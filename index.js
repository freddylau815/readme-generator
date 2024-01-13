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
        message: 'What is the title of your project called?',

        validate: function (title) {
            if (title === ''){
                return 'Please enter a title name for your project'
            } else {
                return true
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description of your project',
        
        validate: function (description) {
            if (description === ''){
                return 'Please enter a short description for your project'
            } else {
                return true
            }
        }
    },
    {
        type: 'input',
        name: 'installInstruct',
        message: 'What are the steps required to install your project?',

        validate: function (installInstruct) {
            if (installInstruct === ''){
                return 'Please enter steps to install your application'
            } else {
                return true
            }
        }
    },
    {
        type: 'input',
        name: 'usageInfo',
        message: 'Provide instructions for use of your applicion',

        validate: function (usageInfo) {
            if (usageInfo === ''){
                return 'Please provide instructions for use'
            } else {
                return true
            }
        }
    },
    {
        type: 'input',
        name: 'contributionGuide',
        message: 'How would you like other developers to contribute?',

        validate: function (contributionGuide) {
            if (contributionGuide === ''){
                return 'Please enter ways to contribute'
            } else {
                return true
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What tests did you provide for your application?',

        validate: function (tests) {
            if (tests === ''){
                return 'Please provide tests for your application'
            } else {
                return true
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        choices: ['mit', 'bsl-1.0', 'agpl-3.0']

    },
    {
        type: 'input',
        name: 'userGit',
        message: 'Enter your GitHub username',

    },
    {
        type: 'input',
        name: 'userEmail',
        message: 'Enter your email'

    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // Function to grab the arguments passed (file, content, err?) 
    fs.writeFile(fileName, data, (err) => {
    if (err) 
     return console.log(err)
    })
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
