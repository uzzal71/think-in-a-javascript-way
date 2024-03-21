class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log(`${this.name} is eating`);
  }
}

class Criketer extends Person {
  constructor(name, age, type, country) {
    super(name, age);
    this.type = type;
    this.country = country;
  }

  play() {
    console.log(`${this.name} is playing`);
  }
}

const sakib = new Criketer("Sakib", 35, "All rounder", "Bangladesh");
sakib.play();
