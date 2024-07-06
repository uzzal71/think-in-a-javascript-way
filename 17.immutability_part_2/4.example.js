let a = {};
let b = {};

console.log(a === b); // false

a = b;
console.log(a === b); // true

a.name = "uzzal";
console.log(a);
console.log(b);