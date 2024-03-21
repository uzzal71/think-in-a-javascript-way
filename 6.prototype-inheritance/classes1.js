function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype = {
  eat: function () {
    console.log(`${this.name} is eating`);
  },
};

const sakib = new Person("Sakib", 35);
console.log(sakib);
const tamim = new Person("Tamin", 35);
console.log(tamim);
