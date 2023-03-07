const Employee = require("./Employee");

// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer extends Employee {
    constructor(name, id, email, github){
        // pulls in from parent class
        super(name, id, email);
        this.github = github;
    };

    // only need to alter these if they are going to be different
    getRole(){
        return 'Engineer';
    };

    getGithub(){
        return this.github
    };
}


module.exports = Engineer;