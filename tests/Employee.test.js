const Employee = require("../lib/Employee");

test("Can create an employee object", () => {
    const emp = new Employee('name', 1, 'email');

    expect(emp.name).toBe(expect.any(String));
    expect(emp.id).toBe(expect.any(Number));
    expect(emp.email).toBe(expect.any(String));

});

// test("Can set name via constructor arguments", () => {
//     const name = "Joana";
//     const emp = new Employee(name);
//     expect(emp.name).toBe(name);
// });

// test("Can set id via constructor argument", () => {
//     const testNumber = 100;
//     const emp = new Employee("Joana", testNumber);
//     expect(emp.id).toBe(testNumber);
// });

// test("Can set email via constructor argument", () => {
//     const testEmail = "test@emailtest.com";
//     const emp = new Employee("Joana", 1, testEmail);
//     expect(emp.email).toBe(testEmail);
// });

test("Can get name via getName()", () => {
    const testName = "Joana";
    const emp = new Employee(testName);
    expect(emp.getName()).toBe(testName);
});

test("Can get id via getID()", () => {
    const testId = 100;
    const emp = new Employee("Joana", testId);
    expect(emp.getID()).toBe(testId);
});

test("Can get email via getEmail()", () => {
    const testEmail = "test@emailtest.com"
    const emp = new Employee("Joana", 1, testEmail);
    expect(emp.getEmail()).toBe(testEmail);
});

test("getPosition() should return \"Employee\"", () => {
    const testPosition = "Employee";
    const emp = new Employee("Joana", 1, "test@test.com");
    expect(emp.getRole()).toBe(testPosition);
});









// The first class is an Employee parent class with the following properties and methods:
// name
//id
//email
//getName()
//getId()
//getEmail()
//getRole()—returns 'Employee'