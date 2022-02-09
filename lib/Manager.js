const Employee = require("./Employee")

class Manager extends Employee {
    constructor(managerName, managerID, managerEmail, officeNum) {
        super(managerName, managerID, managerEmail, officeNum)
        this.officeNum = officeNum
        this.title = "Manager"
    }
    getRole() {
        return this.title;
    }
    getOfficeNum() {
        return this.officeNum;
    }
}

module.exports = Manager