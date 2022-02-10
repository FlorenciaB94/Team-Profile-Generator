const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./src/generateHTML.js');

// Library modules
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// New team array
const newTeam = [];


// Initialize app + Inquirer
function createManager() {
    return inquirer.prompt([
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

        .then(addNewEmployees => {
            const { managerName, managerID, managerEmail, officeNum } = addNewEmployees;
            const mgmt = new Manager(managerName, managerID, managerEmail, officeNum)
            newTeam.push(mgmt)
            // addNewEmployees();
            console.log(mgmt);

        })
};
// createManager();
createManager()
    .then(createEmployee)


console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!")
console.log(newTeam);

// Adding employees to team
function createEmployee() {
    return inquirer.prompt([
        {
            type: "list",
            name: 'employeeRole',
            message: "Please select a role",
            choices: ["Intern", "Engineer"]
        },
        {
            type: "input",
            name: 'employeeName',
            message: "What is the employee's name?",
            validate: employeeName => /[a-z1-9]/.test(employeeName)
        },
        {
            type: "input",
            name: "employeeID",
            message: "What is the employee's ID?",
            validate: employeeID => /^[0-9]+$/.test(employeeID)

        },
        {
            type: "input",
            name: "GitHub",
            message: "What is this employee's GitHub username?",
            when: (input) => input.employeeRole === "Engineer",
            validate: GitHub => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(GitHub)
        },
        {
            type: "input",
            name: "education",
            message: "What school is this intern attending?",
            when: (input) => input.employeeRole === "Intern",
            validate: education => /[a-z1-9]/.test(education)
        },
        {
            type: "input",
            name: "employeeEmail",
            message: "What is the employee's email?",
            validate: employeeEmail => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(employeeEmail)
        },
        // {
        //     type: "list",
        //     name: "yesAdd",
        //     message: "Would you like to add a new employee?",
        //     default: "false",

        // },
        // {
        //     type: "input",
        //     name: "GitHub",
        //     message: "What is this employee's GitHub username?",
        //     when: (input) => input.employeeRole === "Engineer",
        //     validate: GitHub => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(GitHub)
        // },
        // {
        //     type: "input",
        //     name: "education",
        //     message: "What school is this intern attending?",
        //     when: (input) => input.employeeRole === "Intern",
        //     validate: education => /[a-z1-9]/.test(education)
        // },
        {
            type: "confirm",
            name: "yesAdd",
            message: "Would you like to add a new employee?",
            default: true,

        },
    ])
        .then(addNewEmployees => {
            var { employeeName, employeeID, GitHub, education, employeeEmail } = addNewEmployees;
            var employee;
            if (role === "Engineer") {
                var employee = new Engineer(employeeName, employeeID, GitHub, employeeEmail)
                newTeam.push(employee)

            } else if (role === "Intern") {
                var employee = new Intern(employeeName, employeeID, education, employeeEmail)
                newTeam.push(employee)
            } if (yesAdd) {
                return createEmployee(newTeam);
            } else {
                return newTeam;
            }

        })
    console.log(employee);
};
addNewEmployees();
// createEmployee();

// const writeFile = data => {
//     fs.writeFile("./dist/index.html", data, error => {
//         if (error) {
//             console.log(error);
//         } else {
//             console.log("Your new team has been created")
//         }
//     })
// };

// createManager()
//     .then(createEmployee)
    // .then(newTeam => {
    //     return generateHTML(newTeam);
    // })
    // .then(displayHTML => {
    //     return writeFile(displayHTML);
    // })
    // .catch(error => {
    //     console.log(error);
    // });