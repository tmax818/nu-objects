class Person {
    constructor(name = 'Joe', age){
        this.name = name;
        this.age = age;
    }

    sayHello(){
        return `Hello, my name is Joe!`

    }
}

class Employee extends Person {}

// Don't change code below this line!!!
export { Person, Employee };
