// TODO: Write code to define and export the Employee class
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getId() {
      return this.id
  }

  getEmail() {
      return this.email

  }

  getRole() {
      return "Employee";
  }
}

const alice = new Employee("Alice", 100, "test@test.com");

console.log(alice);

module.exports = Employee;

// xcode-select --install 