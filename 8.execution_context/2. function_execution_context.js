/**
Tokenization
AST (Abstract Syntax Tree)
Machine Code 
+++++++++++++++
node evn
browser
+++++++++++++++

/*
Lexical position

*/

var name = "Tom"

function sayName() {
    console.log(this.name)
}

/* Global Execution Context (GEC) -> window & this
Creation Phase                              Execution Phase
1. window: global object                    - Assign the value 'Tom' to name variable
2. this: window
3. name & sayName(): memory assign
4. name: undefined
5. sayName(): memory(XO985)
*/

var name = "John"

function john() {
    console.log(this.name + ' Runs')
}

john()

/*
Function Execution Context (FEC)
Creation Phase                              Execution Phase

GEC
    Creation Phase:
        name: undefined
    Execution Phase:
        name: "John"
        tom: Execute
        FEC (For john())
            Create Phase:
            Execution Phase log() from console()
                FEC(from console.log())
                    Creation Phase:
                    Execution Phase:
        
*/
// Function Execution Stack or Call Stack