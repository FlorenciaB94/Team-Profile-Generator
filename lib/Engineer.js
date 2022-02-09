const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(employeeName, employeeID, GitHub, employeeEmail) {

        super(employeeName, employeeID, employeeEmail);
        this.github = GitHub;
    }
    getGitHub() {
        return this.github;
    }
    getRole() {
        return this.role;
    }
}

module.exports = Engineer;