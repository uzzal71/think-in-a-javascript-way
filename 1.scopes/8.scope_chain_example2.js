
var count = 10;

function outer() {
    var count = 20;

    function inner() {
        var count = 30;
        console.log(count);
    }

    inner();
    console.log(count);
}

outer();
console.log(count);