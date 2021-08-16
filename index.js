// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your Project Title?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please write a description of your Project:',
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
            name: 'contributors',
            message: 'Who are the contributors to this project?'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please provide test instructions if any:'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please choose a license for your Project',
            choices: ['Apache License', 'GNU General Public License', 'MIT License', 'BSD License', 'Boost Software License', 'Creative Commons Zero', 'Eclipse Public License', 'GNU General Public License']
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your Github Username:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email:'
        }
    ]);
};

// // TODO: Create a function to write README file
// function writeToFile('./README.md', data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
promptUser()
    .then(answers => {
        const pageREADME = generateMarkdown(answers);
        fs.writeFile('./README.me', pageREADME, err => {
            if (err) throw err;
            console.log('Success! Checkout README.me to see output!');
        });
    });