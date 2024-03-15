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

if (true) {
  const constVariable = {
    name: "Javascript",
    age: "12 years",
  };
  constVariable.name = "Sujon";
  console.log(constVariable);
}

var a = 5;
function func() {
  a = 10;
  console.log("Function = ", a);
}

console.log("A = ", a);

func();
