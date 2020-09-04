import { Person } from "../src/objects";
import { expect } from "chai";

describe("Objects - change code in src/objects.js to get tests to pass!", () => {
  describe("A Person should.", () => {
    it("be an object", () => {
      expect(Person).to.be.a("object");
    });

    it("have a name property.", () => {
      expect(Person).to.have.own.property("name");
    });

    it("have an age property.", () => {
      expect(Person).to.have.own.property("age");
    });

    it("have a sayHello method.", () => {
      const message = Person.sayHello();
      expect(message).to.equal("Hi");
    });
  });
});
