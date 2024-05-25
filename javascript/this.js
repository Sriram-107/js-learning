// Object binding in javascript
// 1. Implicit binding
// Implicit binding happens in an object when you invoke a function using dot(.) notation.
// 2. Explicit binding
// Explicit binding can be happened using call, bind and apply.

// Q.1 Explain this keyword.
// this keyword is used to refer an object.

this.a = 5;
console.log(this); // Here this refers to global object / window object.

function normalFn() {
    console.log(this.a);
}
normalFn();

const arrowFn = () => {
    console.log(this.a);
}
arrowFn();