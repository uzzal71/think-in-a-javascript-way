// Parent class
class Person {
  constructor(name, age) {
    this.name = name; // property
    this.age = age;
  }

  eat() {
    // method
    console.log(`${this.name} is eating`);
  }

  static isEqualAge() {
    return this.name;
  }
}

let sakib = new Person("Sakib", 35);

console.log(Person.isEqualAge());
