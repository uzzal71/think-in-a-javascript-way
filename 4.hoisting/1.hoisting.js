console.log('name is ' + name) // name is undefined
var name;
name = "tom"
console.log('name is ' + name) // name is tom

/*
GEC
  Creation Phase:
    name: undefined
    log: f() is memory
    log: f() is memory
  Execution Phase:
    name: "tom"
    log: execution
    FEC(for console.log()):
      Creation Phase:
      Execution Phase:
    log: execution
    FEC(for console.log()):
      Creation Phase:
      Execution Phase:
*/