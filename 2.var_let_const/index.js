var varVariable = "This is a var";

console.log(varVariable);

if (true) {
  var varVariable = "This is a var again";
}

console.log(varVariable);

if (true) {
  let letVariable = "This is a let";
  letVariable = "This is a let again";
  console.log(letVariable);
}
