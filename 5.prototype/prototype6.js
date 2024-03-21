function Person(name, age) {
  // let this = Object.create(PersonWithNew.prototype);

  this.name = name;
  this.age = age;

  //   return this;
}

Person.prototype = {
  eat() {
    console.log(`Person is eating`);
  },
  sleep() {
    console.log(`Person is sleeping`);
  },
  play() {
    console.log(`Person is playing`);
  },
};

const sakib = new Person("Sakib", 35);
sakib.play();
const tamin = new Person("Tamin", 35);
