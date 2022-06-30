const Engineer = require('../lib/Engineer');

test('Can set GitHub', () => {
    const testGithub = 'artem';
    const test = new Engineer('Artem', 5, 'artem@gmail.com', testGithub);
    expect(test.github).toBe(testGithub);
});

test('Can use getGithub() to return the GitHub username', () => {
    const testGithub = 'artem';
    const test = new Engineer('Artem', 5, 'artem@gmail.com', testGithub);
    expect(test.getGithub()).toBe(testGithub);
});

test(`Can use getRole() to return 'Engineer'`, () => {
    const role = 'Engineer';
    const test = new Engineer('Artem', 5, 'artem@gmail.com', 'artem');
    expect(test.getRole()).toBe(role);
});