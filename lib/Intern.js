const Employee = require("./Employee");

class Intern extends Employee {
    constructor(employeeName, employeeID, education, employeeEmail) {

        super(employeeName, employeeID, education, employeeEmail);
        this.education = education;
    }
    getEducation() {
        return this.education;
    }
    getRole() {
        return this.role;
    }
}
module.exports = Intern;