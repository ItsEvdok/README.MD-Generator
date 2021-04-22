// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input

const promptUser = () => {

    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is your projects name?'
        },
        {
            type: 'input',
            name: 'desc',
            message: 'Please write a short description of your project.'
        },
        {
            type: 'list',
            name: 'license',
            message: 'What kind of license should your project have? (Use arrow keys)',
            choices: ['MIT', 'APACHE 2.0', 'GPL-3.0', 'BSD-3-clause', 'None']
        },
        {
            type: 'input',
            name: 'install',
            message: 'What command should be run to install dependencies?',
            default: 'npm i'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What command should be run to run tests?',
            default: 'npm tests'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What does the user need to know about using the repo?'
        },
        {
            type: 'input',
            name: 'contr',
            message: 'What does the user need to know about contributing to the repo?'
        },
    ])
    .then(data => {
        console.log(data);
        return generateMarkdown(data);
    })
    .then(pageRead => {
        console.log(pageRead);
        console.log('Making readme');
        return writeToFile('.README.md',pageRead);
    });
};



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeToFile(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
    promptUser()
};

// Function call to initialize app
init();
