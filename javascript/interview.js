console.log(Boolean([])); // empty array - true
console.log(Boolean({})); // empty object - true
console.log(Boolean("")); // empty string - false
console.log(Boolean(0)); // zero - false

// ----------------------------------------------------------------------------------------

// Using arrow function vs normal function inside of object.
const parent1 = {
    name: "sriram",
    greet: () => {
        console.log(`my name is ${this.name}`); // When using arrow function using this keyword will get undefined.
    }
}

console.log(parent1.greet());

const parent2 = {
    name: "sriram",
    greet: function () {
        console.log(`my name is ${this.name}`); // With normal function you can access using this keyword.
    }
}

console.log(parent2.greet());