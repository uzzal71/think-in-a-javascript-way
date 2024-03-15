var x = 23;

// parent world
function myFunc() {
  // function/child world
  var x = 10;
  console.log(`${x} from myFunc()`);
}

myFunc();

console.log(x);
