const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

inquirer.prompt([
    {
        type: 'input',
        message: 'What is your team managers name?',
        name: 'mName'
    },
    {
        type: 'input',
        message: 'What is your team managers employee ID?',
        name: 'mID'
    },
    {
        type: 'input',
        message: 'What is your team managers email address?',
        name: 'mEmail'
    },
    {
        type: 'input',
        message: 'What is your team managers office number?',
        name: 'mOffice'
    },

    {
        type: 'menu',
        message: 'What is your team managers email address?',
        choices: ['Add an engineer', 'Add an intern', 'Finish building the team']
    },


])
.then((response) => {
    // create a variable to pull the global scope function into this promise
    
    // if there isnt already have a file, it will create one with the following
    fs.writeFile(
        // this is the file to be created
        `team.html`,
        // this is what will be in the file (pulls the previously mentioned variable/function)
        
        // this is a validation, if there is an error it will console else, success will be consoled.
        (err) => err ? console.error(err) : console.log('Success')
    )
})


// {
//     type: 'input',
//     message: 'What is the engineers name?',
//     name: 'eName'
// },
// {
//     type: 'input',
//     message: 'What is the engineers ID?',
//     name: 'eID'
// },
// {
//     type: 'input',
//     message: 'What is the engineers email?',
//     name: 'eEmail'
// },
// {
//     type: 'input',
//     message: 'What is the engineers github username?',
//     name: 'eGithub'
// },

// // intern
// {
//     type: 'input',
//     message: 'What is the interns name?',
//     name: 'iName'
// },
// {
//     type: 'input',
//     message: 'What is the interns ID?',
//     name: 'iID'
// },
// {
//     type: 'input',
//     message: 'What is the interns email?',
//     name: 'iEmail'
// },
// {
//     type: 'input',
//     message: 'What is the interns school?',
//     name: 'iSchool'
// },


// render(

//     return HTML BLOCK
// )