// Invoke a function, chase()
chase();

// Declare a function, chase()
function chase() {
  console.log("Tom chases Jerry");
  // Invoke a function, caught
  caught()
}

// Declare a function, caught()
function caught() {
  console.log("Tom caught Jerry:(");
}

/*
GEC
    Creation Phase:
        chase: f() in memory
        caught: f() in memory
    Execution Phase:
        chase: Execute
            FEC(for chase())
                Creation Phase:
                    caught: f() in memory
                Execution Phase:
                    caught: Execute
*/