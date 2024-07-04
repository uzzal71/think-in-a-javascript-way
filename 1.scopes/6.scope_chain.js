/**
 * Lexical Scoping or Context
 */

// Global Lexical Scoping or Context
function sayName() {
    greeting();
}

// Global Lexical Scoping or Context
const x = 30;
function greeting() {
    const count = 10;

    console.log(x)
}

sayName();