// let and const were intorduced in ES-6 of javascript. To overcome the limitations of var.
// Scope - Scope is a certain region of a program where your variable is recognized.
// 1.Global Scope
// 2.Function Scope
// 3.Block Scope
// var is gloabal scope, let and const are block scope.

// Global scope.
var a = 5;
console.log(a);

{
    // block scope
    console.log(a);
    var blockVar = 10;
    let letVar = 20;
    const constVar = 30;
}
// console.log(letVar); // let variable cannot be accessed outside of the block scope.
// console.log(constVar); // const variable cannot be accessed outside of the block scope.

function getName() {
    // function scope
    console.log(a);
    console.log(blockVar);
}
getName()

console.log(blockVar);

// variable shadowing - A variable outside of a block is shadowed by variable inside of the block.
function varShadowing() {
    let a = "Hello";
    if (true) {
        let a = "Hi";
        console.log(a);
    }
    console.log(a);
}
varShadowing();

// We can shadow var variable using let but cannot shadow let variable using var.
function varLetShadowing() {
    var a = "var";
    if (true) {
        let a = "let";
        console.log(a);
    }
    console.log(a);
}
varLetShadowing();

// Illegal shadowing - If we shadow let variable using var variable it is called illegal shadowing.
// function letVarShadowing() {
//     let b = "letb";
//     if (true) {
//         var b = "varb"; // Error : b is already declared.
//         console.log(b);
//     }
//     console.log(b);
// }

// var can be re-declared as many times you want in same scope.
// let and const cannot be re-declared in same scope.

var c;
var c;

let d;
// let d; // cannot re-declare

// const e;
// const e; //const must be initialized.

// ------------------------------------------------------------------------------------------------------------------

// Hoisting - During creation phase all your variables and functions are moved to the top of the code.
// How Javascript Execution Context works.
//  2 phases - Creation phase, Execution phase.
// Creation phase
//  1. First Window object is created.
//  2. Variables are stored with undefined value.
//  3. Functions are stored as a whole
// Execution phase
//  1.During execution phase all variables are assigned with the value.
//  2.Functions are pushed into the callstack and then executed.

console.log(g); // undefined in the creation phase.
var g = 10;

// let and const cannot be accessed before initialization. Since they are present in tempral dead zone.
// console.log(count); // cannot access count
// console.log(count1); // cannot access count
let count = 11;
const count1 = 23;