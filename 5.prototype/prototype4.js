const personMethods = {
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

function Person(name, age) {
  let person = Object.create(personMethods);

  person.name = name;
  person.age = age;

  return person;
}

const sakib = Person("Sakib", 35);
const tamin = Person("Tamin", 35);
tamin.play();
