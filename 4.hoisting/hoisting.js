/**
 * Hoisting
 * var vs let (and const)
 * function
 */

let LANGUAGE = "Java";
let language = "javaScript";

function getLanguage() {
  if (!language) {
    let language = LANGUAGE;
  }
  return language;
}

// console.log(`I love ${getLanguage()}`);

myFunc();
function myFunc() {
  var language;
  language = "javascript";
  console.log(`${language}`);
}

// const myFunc

myFunc2();

const myFunc2 = () => {
  // undefined then function assign
  var language;
  language = "javascript";
  console.log(`${language}`);
};
