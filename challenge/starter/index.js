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

const addTeamMember =
{
    type: 'list',
    name: 'more',
    message: 'Do you want to:',
    choices: ['Add an engineer', 'Add an intern', 'Finish building the team']
};

const addEngineer = [{
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
}, addTeamMember]
// .then((response) => {const engineer = new Engineer (response.eName, response.eID, response.eEmail, response.eGithub); team.push(engineer);});

const addIntern = [{
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
}, addTeamMember]
// .then((response) => {const intern = new Intern (response.iName, response.iID, response.iEmail, response.iSchool); team.push(intern)});

// const finaliseTeamProfiles = () => {
//     fs.writeFile(
//         // this is the file to be created
//         // outputPath,
//         // this is what will be in the file (pulls the previously mentioned variable/function)
//         // render(team),
//         // this is a validation, if there is an error it will console else, success will be consoled.
//         (err) => err ? console.error(err) : console.log('Success')
//     )
}

const teamMemberChoice = (response) => {
    const choices = ['Add an engineer', 'Add an intern', 'Finish building the team'];
    if (response.more === choices[0]) {
        return inquirer.prompt(addEngineer).then((response) => {
            teamMemberChoice(response);
        });
    } else if (response.more === choices[1]) {
        return inquirer.prompt(addIntern).then((response) => {
            teamMemberChoice(response);
        });
        // .then((response) => {const intern = new Intern (response.iName, response.iID, response.iEmail, response.iSchool); team.push(intern)})
        .then((response) => {
            teamMemberChoice(response);
        });
    } else {
        finaliseTeamProfiles()
    }
};



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
    addTeamMember
])
    .then((response) => {
        // const manager = new Manager (response.mName, response.mID, response.mEmail, response.mOffice);
        // team.push(manager);
        teamMemberChoice(response);
    })
