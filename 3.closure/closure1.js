let num1 = 2;

var sum = function (x) {
  var num2 = 5;
  var num = 6;

  return function () {
    return num;
  };
};

var myFunc = sum();
console.dir(myFunc);
