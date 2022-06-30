const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, managerOfficeNum) {
        super(name, id, email);
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