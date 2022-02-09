class Employee {
    constructor(employeeName, employeeID, employeeEmail, employeeRole) {
        this.name = employeeName;
        this.ID = employeeID;
        this.email = employeeEmail;
        this.role = employeeRole;
    }
    getName() {
        return this.name
    }

    getId() {
        return this.ID
    }

    getEmail() {
        return this.email
    }
    getRole() {
        return "Employee";
    }
}

module.exports = Employee;