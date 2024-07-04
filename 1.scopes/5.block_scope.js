{
    let x = 10;
}
// console.log(x); // error

if (true) {
    let y = 20;
    console.log(y); // 20
}

if (true) {
    let y = 20;
}

// console.log(y); // error

if (true) {
    var y = 20;
}

console.log(y); // 20

for(var i = 0; i < 3; i++) {
    console.log(i);
}