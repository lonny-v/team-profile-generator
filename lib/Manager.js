const Employee = require('./Employee');

class Manager extends Employee {
    constructor(managerName, managerId, managerEmail, managerOfficeNum) {
        super(managerName, managerId, managerEmail);
        this.managerOfficeNum = managerOfficeNum;
    };

    getOfficeNumber() {
        return this.managerOfficeNum;
    };

    getRole() {
        return 'Manager';
    };
};

module.exports = Manager;