// variables to pull constructor functions from different .js pages
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// given variables that link to different paths i.e the output folder, and joining an html to it
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// to render the data using the given template
const render = require("./src/page-template.js");

// empty team array to store the gathered team data
const team = [];

// function to gather any intern data
function addIntern() {
    // using node inquirer to ask the questions
    inquirer.prompt(
        [{
            type: 'input',
            message: 'What is the interns name?',
            name: 'iName'
        },
        {
            type: 'input',
            message: 'What is the interns ID?',
            name: 'iID'
        },
        {
            type: 'input',
            message: 'What is the interns email?',
            name: 'iEmail'
        },
        {
            type: 'input',
            message: 'What is the interns school?',
            name: 'iSchool'
        },
        ])
        .then((response) => {
            console.log("Adding intern...");
            // then w the response, assigning the data to a variable then pushing it up to the team array
            const intern = new Intern(response.iName, response.iID, response.iEmail, response.iSchool);
            team.push(intern);
            // running the function to add another team member choice
            teamMemberChoice();
        });
}

// function to gather any engineer data
function addEngineer() {
    // using node inquirer to ask the questions
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the engineers name?',
            name: 'eName'
        },
        {
            type: 'input',
            message: 'What is the engineers ID?',
            name: 'eID'
        },
        {
            type: 'input',
            message: 'What is the engineers email?',
            name: 'eEmail'
        },
        {
            type: 'input',
            message: 'What is the engineers github username?',
            name: 'eGithub'
        },
    ])
        .then((response) => {
            console.log("Adding engineer...");
            // then w the response, assigning the data to a variable then pushing it up to the team array
            const engineer = new Engineer(response.eName, response.eID, response.eEmail, response.eGithub);
            team.push(engineer);
            // running the function to add another team member choice
            teamMemberChoice();
    })
    
};

// function to finalise the team profiles by creating a file with the collected data
function finaliseTeamProfiles() {
    console.log("This is your team: ", '\n',  team);
    // writes/creates the file
    fs.writeFile(
        // this is the file to be created (pulls the previously mentioned variable/function line 10-11)
        outputPath,
        // this is what will be in the file (pulls the previously mentioned variable/function line 14 + 17)
        render(team),
        // this is a validation, if there is an error it will console else, a suggested action will be consoled.
        (err) => err ? console.error(err) : console.log("Open the html file in live server to see the deployed application."))
}

// function to choose an additional member of the team
function teamMemberChoice () {
    // a variable of an array matching inquirer response options
    const choice = ['Add an engineer', 'Add an intern', 'Finish building the team'];

    // node inquirer used to ask the question, using type: list to provide response options
    inquirer.prompt(
        {
            type: 'list',
            name: 'more',
            message: 'Do you want to:',
            choices: ['Add an engineer', 'Add an intern', 'Finish building the team']
        }
    )
        .then((response) => {
            // if else statement, if the response is equal to the first item in the choice array then run the function to add engineer info
            if (response.more === choice[0]) {
                addEngineer();
            }
            //if the response is equal to the second item in the choice arraythen run the function to add intern info
            else if (response.more === choice[1]) {
                addIntern();
            }
            //else, log comment and then run the function to finalise the team profiles.
            else {
                console.log("Finalising team profile...");
                finaliseTeamProfiles()
        }
            })
};

//start questions to add team manager info
function startQuestions() {
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
    ])
        .then((response) => {
            console.log('Adding the manager...');
            // then w the response, assigning the data to a variable then pushing it up to the team array
            const manager = new Manager(response.mName, response.mID, response.mEmail, response.mOffice);
            team.push(manager);
            // running the function to add another team member choice
            teamMemberChoice();
        })
};

// running the function that initiates all of the rest of the functions and renders the info provided into a new html document
startQuestions();