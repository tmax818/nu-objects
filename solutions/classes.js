export class Person {
  constructor(name = "Joe", age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return `Hello, my name is ${this.name}!`;
  }
}

export class Employee extends Person {}
