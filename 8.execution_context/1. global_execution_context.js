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