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

  get setName() {
    return this.name;
  }

  set setName(name) {
    this.name = name;
  }
}

let sakib = new Person("Sakib", 35);
sakib.setName = "Tamim";
console.log(sakib.name);
