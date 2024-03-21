// Parent class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  play() {
    console.log(`${this.name} is playing`);
  }
}

// Child class
class Criketer extends Person {
  constructor(name, age, type, country) {
    super(name, age);
    this.type = type;
    this.country = country;
  }

  play() {
    super.play();
    console.log(`${this.name} is playing criket`);
  }
}

const sakib = new Criketer("Sakib", 35, "All rounder", "Bangladesh");
sakib.play();
