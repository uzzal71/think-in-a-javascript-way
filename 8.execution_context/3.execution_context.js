console.log("Inside global execution context");
var a = 5;
function testMe() {
    console.log("Inside testMe execution context");
    var b = 10;

    var user = {
        name: "uzzal roy",
        country: "Bangladesh"
    }

    function testAgain() {
        console.log("Inside testAgain execution context");
        console.log("Exiting testAgain execution context");
    }
    testAgain();
    console.log("Exiting testMe execution context");
}
testMe();
console.log("Exiting global execution context");

/*
GEC
    Creation Phase:
        a: undefined
        testMe: f() in memory
    Execution Phase:
        a: 5
        testMe: Execute
        FEC(for testMe())
            Creation Phase:
                b: undefined
                user: undefined
                testAgain: f() in memory
            Execution Phase:
                b: 10
                user: { name: "uzzal roy", country: "Bangladesh" }
                testAgain: Execute
                    FEC(for testAgain())
                        Creation Phase:
                        Execution Phase:
*/

// Function Execution Stack or Call Stack