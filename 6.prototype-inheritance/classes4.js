// Parent class
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// child class
function Criketer(name, age, type, country) {
  Person.call(this);
  this.name = name;
  this.age = age;
  this.type = type;
  this.country = country;
}

Person.prototype = {
  eat: function () {
    console.log(`${this.name} is eating`);
  },
};

Criketer.prototype = Object.create(Person.prototype);
Criketer.prototype.constructor = Criketer;
Criketer.prototype.play = function () {
  console.log(`${this.name} is playing`);
};

const sakib = new Criketer("Sakib", 35, "All rounder", "Bangladesh");
console.log(sakib.play());
