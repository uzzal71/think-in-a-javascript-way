function jerry() {
    console.log(name);
}

function tom() {
    var name = 'Tom';
    jerry();
}

var name = 'cartoon';
tom();