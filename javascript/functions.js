// Functions in js
// Q1 . What is function declaration/function defenition/function statement.

function square(num) {
    return num * num;
}

// --------------------------------------------------------------------------------------------

// Q2 . What is Function Expression?
// When you store a function inside of a variable it is called Function Expression.

const add = function (num) {
    return num + num;
}

// Anonymous function - A function which has no name is called Anonymous function.
// Anonymous function can be assigned to a variable or can be passed as callback function.

// --------------------------------------------------------------------------------------------

// Q.1 What is a First class functions.
// Function can be treated like variable. passed to another function manipulated.  These functions are called First class functions.

function cube(num) {
    return num * num * num;
}

function displayCube(fn) {
    console.log(fn(3));
}

console.log(displayCube(cube)); // undefined

// --------------------------------------------------------------------------------------------

// Q.4 What is IIFE(Immediately Invoked function Expression)

(function (num) {
    console.log(num);
})(4);

(function (x) {
    return (function (y) {
        console.log(x); // 1 is the output. checks x in the inner scope and then in outer scope.
    })(2);
})(1);


// --------------------------------------------------------------------------------------------

// closures - The ability of a function to access variables outside of its scope are called closures.

// Q.5 Function Scope
// The following variables are defined in the global scope
const num1 = 20;
const num2 = 3;
const name = "Chamakh";

// This function is defined in the global scope
function multiply() {
    return num1 * num2;
}

console.log(multiply()); // 60

// A nested function example
function getScore() {
    const num1 = 2;
    const num2 = 3;

    function add() {
        return `${name} scored ${num1 + num2}`;
    }

    return add();
}

console.log(getScore()); // "Chamakh scored 5"

// --------------------------------------------------------------------------------------------

// Q.6 - Function scope
// let creates block scope for each i= 0,1,2,3,4 => 5 times.
// for (let i = 0; i < 5; i++) {
//     setTimeout(() => {
//         console.log(i); // 0,1,2,3,4
//     }, i * 1000);
// }

// // var doesn't have a block scope

// for (var i = 0; i < 5; i++) {
//     setTimeout(() => {
//         console.log(i); // 5 - 5times
//     }, i * 1000);
// }

// --------------------------------------------------------------------------------------------

// Function Hoisting - Functions are hoisted completely at the top.

hoistNum(10);

function hoistNum(num) {
    console.log(y); // undefined
    var y = 11;
    console.log(num);
}

console.log(x); // undefined
var x = 100;

// --------------------------------------------------------------------------------------------

// Q.7 - O/P based

var z = 12;

function fun() {
    console.log(z); // undefined in local scope.
    var z = 22;
}

fun();

// --------------------------------------------------------------------------------------------

// Q.8 - Params vs arguments

function check(num1, num2) { // parameters
    console.log(num1 + num2);
}

check(10, 30); // arguments

// --------------------------------------------------------------------------------------------

// spread vs rest operators
const num3 = [1, 5, 6];
function fun1(...num) {// rest operator which takes in the spreaded array as array.
    console.log(num[0] + num[1]);
}

fun1(...num3); // spread operator which spreads the array.

function fun2(n1, ...n) { // rest operator can be only used as a last parameter.
    console.log(n1 + n[0] + n[1] + n[2] + n[3]);
}

fun2(0, 1, 2, 3, 4);

// Arrow functions

// implicit return
const mul = (num1, num2) => num1 * num2;
// Explicit return
const sub = (num1, num2) => {
    return num1 - num2;
}

// arguments keyword
// It is not allowed in arrow function only used in normal function.
// normal function.
function fun2() {
    console.log(arguments);
}

fun2(1, 2, 3);

// arrow function
const fun3 = () => {
    console.log(arguments);
}
fun3(5, 6, 7);

// this keyword
let username = {
    name: "Sriram",
    rc1: () => {
        console.log("Arrow Function" + this.name); // this keyword p
    },
    rc2() {
        console.log("Normal Function" +
            this.name);
    }
}

username.rc1();
username.rc2();





