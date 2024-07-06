let a = {};
let b = {};

console.log(a === b); // false

a = b;
console.log(a === b); // true

a.name = "uzzal";
console.log(a);
console.log(b);

console.log(Object.is(a, b)); // true

Object.seal(a);
a.address = "Dhaka Bangladesh"; // seal not allowed
console.log(a);

delete a.name; // seal not allowed

a.name = "Tapas"; // seal update allowed
console.log(a);