const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")
const Engineer = require("./lib/Engineer")
const inquirer = require("inquirer");
const { pageGen, writeFile } = require('./src/pageTemplate');

const employees = []

const init = () => {
    function createManager() {
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is the team manager's name?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character.";
                }
            },
            {
                type: "input",
                name: "managerId",
                message: "What is the team manager's id?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character.";
                }
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What is the team manager's email?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character.";
                }
            },
            {
                type: "input",
                name: "managerOfficeNum",
                message: "What is the team manager's office number?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character.";
                }
            },
        ]).then(manager => {
            const generated = new Manager(
                manager.managerName,
                manager.managerId,
                manager.managerEmail,
                manager.managerOfficeNum
            );
            employees.push(generated);
            teamGen();
        });
    };
    const teamGen = () => {
        inquirer.prompt([
            {
                type: 'list',
                name: 'role',
                message: `What employee role do you want to add?`,
                choices: ['Engineer', 'Intern', 'Finish building my team']
            },
        ]).then(input => {
            switch (input.role) {
                case 'Engineer':
                    engineerGen();
                    break;
                case 'Intern':
                    internGen();
                    break;
                default:
                    writeFile(pageGen(employees));
            };
        });
    };

    const engineerGen = () => {
        inquirer.prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: `What is the engineer's name?`,
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log(`Please enter the engineer's name`);
                        return false;
                    };
                }
            },
            {
                type: 'input',
                name: 'engineerId',
                message: 'Engineer ID:',
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log(`Please enter the engineer's ID`)
                        return false;
                    };
                }
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: `What is the engineer's email address?`,
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log(`Please enter the engineer's email address`);
                        return false;
                    };
                }
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is their GitHub username?',
                validate: githubInput => {
                    if (githubInput) {
                        return true;
                    } else {
                        console.log(`Please enter the Engineer's GitHub username`);
                        return false;
                    };
                }
            }
        ]).then(engineer => {
            const generated = new Engineer(
                engineer.engineerName,
                engineer.engineerId,
                engineer.engineerEmail,
                engineer.github
            );
            employees.push(generated);
            teamGen();
        });
    };

    const internGen = () => {
        inquirer.prompt([
            {
                type: 'input',
                name: 'internName',
                message: `What is the intern's name?`,
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log(`Please enter the intern's name`);
                        return false;
                    };
                }
            },
            {
                type: 'input',
                name: 'internId',
                message: 'Intern ID:',
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log(`Please enter the intern's ID`)
                        return false;
                    };
                }
            },
            {
                type: 'input',
                name: 'internEmail',
                message: `What is the intern's email address?`,
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log(`Please enter the intern's email address`);
                        return false;
                    };
                }
            },
            {
                type: 'input',
                name: 'school',
                message: 'What school do they attend?',
                validate: githubInput => {
                    if (githubInput) {
                        return true;
                    } else {
                        console.log(`Please enter the Intern's school`);
                        return false;
                    };
                }
            }
        ]).then(intern => {
            const generated = new Intern(
                intern.internName,
                intern.internId,
                intern.internEmail,
                intern.school
            );
            employees.push(generated);
            teamGen();
        });
    };
    createManager();
};



init();