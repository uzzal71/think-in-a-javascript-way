(function () {
  let num1 = 2;
  var num2 = 3;

  var sum = function (x) {
    return num1 + num2;
  };

  console.log(sum());
  console.dir(sum);

  num1 = 6;
  num2 = 7;

  console.log(sum());
  console.dir(sum);
})();
