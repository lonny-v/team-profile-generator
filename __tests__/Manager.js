const Manager = require('../lib/Manager');

test('Can set the office number', () => {
    const managerOfficeNum = 2;
    const test = new Manager('Artem', 5, 'artem@gmail.com', managerOfficeNum);
    expect(test.managerOfficeNum).toBe(managerOfficeNum);
});

test('Can use getOfficeNumber() to return the office number', () => {
    const managerOfficeNum = 2;
    const test = new Manager('Artem', 5, 'artem@gmail.com', managerOfficeNum);
    expect(test.getOfficeNumber()).toBe(managerOfficeNum);
});

test(`Can use getRole() to return 'Manager'`, () => {
    const role = 'Manager';
    const test = new Manager('Artem', 5, 'artem@gmail.com', 2);
    expect(test.getRole()).toBe(role);
});