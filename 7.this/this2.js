// implicit binding
// explicit binding
// new binding
// window binding

var printPlayerNameFunction = function (obj) {
  obj.printPlayerName = function () {
    console.log(this.name);
  };
};

var sakip = {
  name: "Sakip",
  age: 35,
};

var tamin = {
  name: "Tamin",
  age: 35,
};

printPlayerNameFunction(sakip);
printPlayerNameFunction(tamin);

sakip.printPlayerName();
tamin.printPlayerName();
