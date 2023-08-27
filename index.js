// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    //First, ask what the project is called.
    {
        type: 'input',
        name: 'title',
        message: 'REQUIRED: What is the title of the project?',
        validate: projectTitle => {
            if (projectTitle) {
                return true;
            } else {
                console.log('You need to enter a title! A title is required!');
                return false;
            }
        }
    },
    //Next, we need a proejct description.
    {
        type: 'input',
        name: 'description',
        message: 'REQUIRED: Provide a description of the project.',
        validate: projectDescription => {
            if (projectDescription) {
                return true;
            } else {
                console.log('You need to provide a project description! A description is required!');
                return false;
            }
        }
    },
    //How do we install this thing?  
    {
        type: 'input',
        name: 'installation',
        message: 'REQUIRED: How do you install your project?',
        validate: installationInstructions => {
            if (installationInstructions) {
                return true;
            } else {
                console.log('You need to provide installation info! This is required!');
                return false;
            }
        }
    },
    //Once its installed, how do we use it?
    {
        type: 'input',
        name: 'usage',
        message: 'REQUIRED: How do you use this project',
        validate: usageInstructions => {
            if (usageInstructions) {
                return true;
            } else {
                console.log('You need to provide information on how to use project!');
                return false;
            }
        }
    },
    //How would someone contribute to this project?
    {
        type: 'input',
        name: 'contribution',
        message: 'REQUIRED: How should people contribute to this project?',
        validate: contributionInfo => {
            if (contributionInfo) {
                return true;
            } else {
                console.log('You need to provide information on how to contribute! This is required!');
                return false;
            }
        }
    },
    //How do we test the project?
    {
        type: 'input',
        name: 'testing',
        message: 'REQUIRED: How do you test this project?',
        validate: testingInput => {
            if (testingInput) {
                return true;
            } else {
                console.log('You need testing instructions! This is required!');
                return false;
            }
        }
    },
    //The user has to pick a license for this project.
    {
        type: 'checkbox',
        name: 'licensing',
        message: 'REQUIRED: Choose a license for your project.',
        choices: ['Apache', 'MIT', 'Mozilla-Public', 'GNU-General-Public', 'Common-Development-and Distribution', 'None'],
        validate: licensingSelection => {
            if (licensingSelection) {
                return true;
            } else {
                console.log('You must pick a license for the project! This is required!');
                return false;
            }
        }
    },
    //We need the user name so we know who the project belongs to.
    {
        type: 'input',
        name: 'github',
        message: 'REQUIRED: Enter your github username.',
        validate: githubUsername => {
            if (githubUsername) {
                return true;
            } else {
                console.log('Please enter your GitHub username! This is required!');
                return false;
            }
        }
    },
    // Email Address
    {
        type: 'input',
        name: 'email',
        message: 'OPTIONAL: Would you like to include your email?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (error) => {
        if (error)
            throw error;
        console.log("Readme File Successfully generated!");
    })

}

// TODO: Create a function to initialize app
function init() {
    //when we start the app, that's when we load inquirer and prompt with the questions.
    inquirer.prompt(questions)
    .then (function (userResponses) {
        console.log(userResponses);
        writeToFile("README.md", userResponses);
    });
}

// Function call to initialize app
init();
