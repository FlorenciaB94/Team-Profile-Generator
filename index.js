const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./src/generateHTML.js');

// Library modules
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// Answers to questions
const newTeam = [];


// Initialize app + Inquirer
function createManager() {
    inquirer.prompt([
        {
            type: "input",
            name: 'managerName',
            message: "Please add a team manager",
            validate: managerName => /[a-z1-9]/.test(managerName)

        },
        {
            type: "input",
            name: "managerID",
            message: "What is the manager's ID?",
            validate: managerID => /^[0-9]+$/.test(managerID)

        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the manager's email?",
            validate: managerEmail => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(managerEmail)

        },
        {
            type: "input",
            name: "officeNum",
            message: "What is the manager's office number?",
            validate: officeNum => /^[0-9]+$/.test(officeNum)

        },

    ])
        .then(function (data) {
            const managerName = data.name
            const managerID = data.ID
            const managerEmail = data.email
            const officeNum = data.officeNumber
            const newEmployee = new Manager(managerName, managerID, managerEmail, officeNum)
            newTeam.push(newEmployee)
            addNewEmployee();

        });
    console.log(newTeam);
}
createManager();
// Adding employees to team
// const createEmployee = () => {
//     return inquirer.prompt([
//         {
//             type: "list",
//             name: 'newEmployee',
//             message: "Do you want to add a new employee for the team?",
//             choices: ["yes", "no"],
//         }
//     ])
//         .then(answers => {
//             console.info("Answer:", answers.newEmployee);

//         });


