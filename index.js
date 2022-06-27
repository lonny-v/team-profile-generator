const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")
const Engineer = require("./lib/Engineer")
const Employee = require("./lib/Employee")
const inquirer = require("inquirer");

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
}


init();