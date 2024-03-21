function Person(name, age) {
  let person = Object.create(Person.prototype);

  person.name = name;
  person.age = age;

  return person;
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

const sakib = Person("Sakib", 35);
const tamin = Person("Tamin", 35);
tamin.play();
