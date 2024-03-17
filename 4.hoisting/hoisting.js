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

function myFunc() {
  language = "javascript";
  var language;
  console.log(`${language}`);
}

myFunc();
