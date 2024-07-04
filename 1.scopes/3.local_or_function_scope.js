function doSomething() {
    var count = 10;
    console.log(count);
}
//console.log(count); // undefined

doSomething();

var count = 20;
let greeting = 'Hello';

function doSomething2() {
    console.log(greeting); // Hello
    console.log(count);
    let items = 10;
    console.log(items); // 10
}
doSomething2();
// console.log(items); // undefined

// stict mode
// non stict mode