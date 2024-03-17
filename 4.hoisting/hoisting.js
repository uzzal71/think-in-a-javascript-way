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
  console.log(`I love JavaScript`);
}
