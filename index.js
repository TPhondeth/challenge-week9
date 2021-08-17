// External packages needed for application
const fs = require('fs');
const inquirer = require('inquirer');
const { title } = require('process');

// Internal module
const generateMarkdown = require('./utils/generateMarkdown.js');

// Array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your Project Title? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter your Project Title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please write a description of your project (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please write a description of your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide installation instructions if any:'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide some usage information about your Project:'
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Who are the contributors to this project?'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'How do you test your project? (Required)',
            validate: testsInput => {
                if (testsInput) {
                    return true;
                } else {
                    console.log('Please describe how to test your project!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please choose a license for your Project',
            choices: ['apache', 'gnu', 'mit', 'bsd', 'boost software', 'ccz', 'eclipse']
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your Github Username (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your Github Username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email:'
        }
    ]);
};

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('Success! README has been created!');
    });
};

// Function to initialize app
function init() {
    promptUser()
    .then(answers => {
        console.log(answers)
        writeToFile('README.md', generateMarkdown(answers));
    });
};

// Function call to initialize app
init();