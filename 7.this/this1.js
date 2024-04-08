// implicit binding
// explicit binding
// new binding
// window binding

var sakip = {
  name: "Sakip",
  age: 35,
  printPlayerName: function () {
    console.log(this.name);
  },
};

sakip.printPlayerName();
