// TODO: Write code to define and export the Employee class
//class constructor function called employee this is the parent class
class Employee {
    // constructor which houses primitive data types, and is a blueprint which data will be attributed to
    constructor(name, id, email) {
        // assigning the primative data type blueprint to a this.
        this.name = name;
        this.id = id;
        this.email = email;
    };
    // function to return the data that was attributed to the primative data type using the this. tag
    getName() {
        return this.name;
    };
    // function to return the data that was attributed to the primative data type using the this. tag
    getId() {
        return this.id;
    };
    // function to return the data that was attributed to the primative data type using the this. tag
    getEmail() {
        return this.email
    };
    // function to return a string
    getRole() {
        return 'Employee'
    };
};

// exports the internal .js to be used externally
module.exports = Employee;