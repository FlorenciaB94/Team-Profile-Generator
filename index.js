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
const createManager = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: 'manager name',
            message: "Who is this team's Manager?",
            validate: val => /[a-z1-9]/.test(val),
        }
    ])
        .then(val => {
            const managerName = this.name(val);
            if (managerName) {
                console.log("Manager name created");
            } else {
                console.log("Please use letters only for Manager's name");
            }

        })


        .prompt([

            {
                type: "input",
                name: "ID",
                message: "What is the manager's ID?",
                validate: val => /^[0-9]+$/.test(val),
            }
        ])
        .then(val => {
            const managerID = this.ID(val);
            if (managerID) {
                console.log("Manager ID created");
            } else {
                console.log("Please enter a valid number");
            }
        })
        .prompt([
            {
                type: "input",
                name: "email",
                message: "What is the manager's email?",
                validate: val => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val),
            }
        ])
        .then(val => {
            const managerEmail = this.email(val);
            if (managerEmail) {
                console.log("Manager email created");
            } else {
                console.log("Please enter a valid email address");
            }
        })
        .prompt([
            {
                type: "input",
                name: "office number",
                message: "What is the manager's office number?",
                validate: val => /^[0-9]+$/.test(val),

            }
        ])
        .then(val => {
            const officeNum = this.officeNum(val);
            if (managerOfficeNum) {
                console.log("Manager office number created");
            } else {
                console.log("Please enter a valid office number");
            }
        })
        .prompt([
            {
                type: "message",
                name: "success message",
                message: "Manager successfully created",
            }
        ])
        .then(managerInfo => {
            const { name, ID, email, officeNum } = managerInfo;
            const manager = new Manager(name, id, email, officeNum);
            newTeam.push(manager);
            console.log(manager);
        }
        );

}
createManager();

//Adding employees to team
const createEmployee = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: 'newEmployee',
            message: "Do you want to add a new employee for the team?",
            choices: ["yes", "no"],
        }
    ])
        .then(answers => {
            console.info("Answer:", answers.newEmployee);

        });

}
createEmployee();