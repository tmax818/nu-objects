import { Person, Employee } from "../src/classes";
import { expect } from "chai";

describe("Classes - change code in src/classes.js to get tests to pass!", () => {
  describe("A Person should", () => {
    it("exist.", () => {
      const person = new Person();
      expect(person).to.exist;
    });

    it("have a name property.", () => {
      const person = new Person();
      expect(person).to.have.own.property("name");
    });

    it("have a default name of 'Joe'.", () => {
      const person = new Person();
      expect(person.name).to.equal("Joe");
    });

    it("have an age property.", () => {
      const person = new Person();
      expect(person).to.have.own.property("age");
    });

    it("have a sayHello method.", () => {
      const person = new Person();
      expect(person).to.respondTo("sayHello");
    });
    it("have a sayHello method that introduces itself.", () => {
      const person = new Person();
      expect(person.sayHello()).to.equal("Hello, my name is Joe!");
    });
  });

  describe("An Employee should", () => {
    it("exist.", () => {
      const employee = new Employee();
      expect(employee).to.exist;
    });

    it("should inherit its name property from Person", () => {
      const employee = new Employee();
      expect(employee).to.be.an.instanceof(Person);
    });

    it("have a default name of 'Joe'.", () => {
      const employee = new Employee();
      expect(employee.name).to.equal("Joe");
    });
  });
});
