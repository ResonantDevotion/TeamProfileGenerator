// variable that pulls in the parent class constructor
const Employee = require("./Employee");

// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// syntax that allows the following child class constructor to use the parent as a base.
class Engineer extends Employee {
    // constructor which houses primitive data types, and is a blueprint which data will be attributed to
    constructor(name, id, email, github) {
        // super is syntax to pull in from parent class
        super(name, id, email);
        // this is an additional assignment particular to this constructor
        this.github = github;
    };

    // similar function to the parent but is altered to display a different string anmd so is stated. Other functions are not repeated unless changed.
    getRole() {
        return 'Engineer';
    };
    // additional function to return the data that was attributed to the primative data type using the this. tag
    getGithub() {
        return this.github
    };
}
// exports the internal .js to be used externally
module.exports = Engineer;