const Intern = require('../lib/Intern');

test('Can set the school', () => {
    const testSchool = 'U of U';
    const test = new Intern('Artem', 5, 'artem@gmail.com', testSchool);
    expect(test.school).toBe(testSchool);
});

test('Can use getSchool() to return the school', () => {
    const testSchool = 'U of U';
    const test = new Intern('Artem', 5, 'artem@gmail.com', testSchool);
    expect(test.getSchool()).toBe(testSchool);
});

test(`Can use getRole() to return 'Intern'`, () => {
    const role = 'Intern';
    const test = new Intern('Artem', 5, 'artem@gmail.com', 'U of U');
    expect(test.getRole()).toBe(role);
});