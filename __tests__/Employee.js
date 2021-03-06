const Employee = require('../lib/Employee');

test('Can create the Employee object', () => {
    const test = new Employee();
    expect(typeof (test)).toBe('object');
});

test('Can set the name', () => {
    const testName = 'Artem';
    const test = new Employee(testName);
    expect(test.name).toBe(testName);
});

test('Can set the ID number', () => {
    const testId = 5;
    const test = new Employee('Artem', testId);
    expect(test.id).toBe(testId);
});

test('Can set the email address', () => {
    const testEmail = 'artem@gmail.com';
    const test = new Employee('Artem', 5, testEmail);
    expect(test.email).toBe(testEmail);
});

test('Can use getName() to return the name', () => {
    const testName = 'Artem';
    const test = new Employee(testName);
    expect(test.getName()).toBe(testName);
});

test('Can use getId() to return the ID', () => {
    const testId = 5;
    const test = new Employee('Artem', testId);
    expect(test.getId()).toBe(testId);
});

test('Can use getEmail() to return the email address', () => {
    const testEmail = 'artem@gmail.com';
    const test = new Employee('Artem', 5, testEmail);
    expect(test.getEmail()).toBe(testEmail);
});

test(`Can use getRole() to return 'Employee'`, () => {
    const role = 'Employee';
    const test = new Employee('Artem', 5, 'artem@gmail.com');
    expect(test.getRole()).toBe(role);
});