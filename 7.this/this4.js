// implicit binding
// explicit binding
// new binding
// window binding

var sakip = {
  name: "Sakip",
  age: 35,
  printName: function () {
    console.log(this.name);
  },
};

sakip.printName();
