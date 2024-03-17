var num1 = 2;

var sum = function (x) {
  var num2 = 5;

  return function () {
    return num1 + num2;
  };
};

var myFunc = sum();
console.dir(myFunc);
