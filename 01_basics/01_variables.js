// let, var and const


// var: Declares variables with function or global scope and allows re-declaration and updates within the same scope.
// let: Declares variables with block scope, allowing updates but not re-declaration within the same block.
// const: Declares block-scoped variables that cannot be reassigned after their initial assignment.


//declaration var a
//assigned eg a=4
//initialized var a=4

// variable hoisting
// - moving the declaration of function or variables to the top of their scopes
//              ^^^^^^^^^^^
/*i.e 
    var x
    console.log(x) Output:undefined
    x=2
--------is same as--------
    console.log(x) Output:undefined
    var x=2
*/

console.log(varhosting); //var is hoisted but gives undefined
var varhosting=4
//but for let and const it gives ReferenceError as it cannot access before initialization
// console.log(lethosting);
// let lethosting=4

// console.log(consthosting);
// const consthosting=4






const accountId=234
let accountEmail="rajatya713@gmail.com"
var accountPassword="2405"
accountCity="Jaunpur"
let accountState

// accountId=2  //not allowed

accountEmail="payal@gmail.com"
accountPassword="0309"


console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/


// var declarations are globally scoped or function scoped while let and const are block scoped.
// var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared; const variables can neither be updated nor re-declared.
// They are all hoisted to the top of their scope. But while var variables are initialized with undefined, let and const variables are not initialized.
// While var and let can be declared without being initialized, const must be initialized during declaration.
