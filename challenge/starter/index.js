const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

const team = [];

// const addTeamMember =
// {
//     type: 'list',
//     name: 'more',
//     message: 'Do you want to:',
//     choices: ['Add an engineer', 'Add an intern', 'Finish building the team']
// };

function addIntern() {
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
            // addTeamMember
        ])
        .then((response) => {
            const intern = new Intern(response.iName, response.iID, response.iEmail, response.iSchool);
            team.push(intern);
            teamMemberChoice();
        });
}

function addEngineer() {
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
            const engineer = new Engineer(response.eName, response.eID, response.eEmail, response.eGithub);
            team.push(engineer);
            teamMemberChoice;
    })
    
};

function finaliseTeamProfiles() {
    console.log(team);
    // fs.writeFile(
    //     // this is the file to be created
    //     // outputPath,
    //     // this is what will be in the file (pulls the previously mentioned variable/function)
    //     // render(team),
    //     // this is a validation, if there is an error it will console else, success will be consoled.
    //     (err) => err ? console.error(err) : console.log('Success'))
}

const teamMemberChoice = () => {
    const choice = ['Add an engineer', 'Add an intern', 'Finish building the team'];
    inquirer.prompt(
        {
            type: 'list',
            name: 'more',
            message: 'Do you want to:',
            choices: ['Add an engineer', 'Add an intern', 'Finish building the team']
        }
    )
        .then((response) => {
            if (response.more === choice[0]) {
                console.log("Adding engineer");
                addEngineer();
            }
            else if (response.more === choice[1]) {
                console.log("Adding intern");
                addIntern();
            }
            else () => {
                console.log("Finalising team profile");
                finaliseTeamProfiles()
            }
            // console.log(response);
        })
};

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
        // {
        //     type: 'list',
        //     name: 'more',
        //     message: 'Do you want to:',
        //     choices: ['Add an engineer', 'Add an intern', 'Finish building the team']
        // }
        // addTeamMember
    ])
        .then((response) => {
            const manager = new Manager(response.mName, response.mID, response.mEmail, response.mOffice);
            team.push(manager);
            teamMemberChoice();
        })
};

startQuestions();