const user1 = {
    name: "sriram",
    age: 23
}

delete user1.age; // Deleting a property inside of an object.

console.log(user1.name);
console.log(user1);

// Q.1 Delete keyword with a variable.

(function func(a) {
    delete a; // Delete cannot delete a variable. delete can only delete property inside of an object.
    console.log(a); // 5 is printed.
})(5)

// -----------------------------------------------------------------------------------------
// Q.2 key with spaces inside of object. How to access key with spaces.

const user2 = {
    name: "allen",
    age: 22,
    "like the video": true // Represent the key in string if contains spaces.
};

// use square brackets to access key with spaces
console.log(user2["like the video"]);

delete user2["like the video"]; // deletes the property inside of object.

console.log(user2);

// -----------------------------------------------------------------------------------
// Q.3 Add custom property to object.

const keyData = "firstName";
const valueData = "Arun";

const user3 = {
    [keyData]: valueData // Use square brackets to access key variable.
};

console.log(user3);

// ------------------------------------------------------------------------------------
// Q.4 Loop through objects. Use for in loop

const user4 = {
    name: "sriram",
    age: 24,
    isVerified: true
};

for (key in user4) {
    console.log(key); // Accessing each key in an object
    console.log(user4[key]); // Accessing each value in an object
}

// ------------------------------------------------------------------------------------
// Q.4 - 2 keys with same name. Last key value will be taken.

const obj = {
    a: "one",
    b: "two",
    a: "three"
};
console.log(obj);

// Q.5 - Multiply all the property value with 2 whose type is num

const obj1 = {
    a: 100,
    b: 200,
    data: "String data"
};

function multiplyNumber(obj) {
    for (key in obj) {
        if (typeof obj[key] === "number") {
            obj[key] *= 2;

        }
    }
}

multiplyNumber(obj1)
console.log(obj1);

// Q.6 What is the output of the following code

const a = {};
const b = { key: "a" };
const c = { key: "a" };

a[b] = 123; // a["object Object"] = 123
a[c] = 456; // a["object Object"] = 456 // This data will be taken as output.
console.log(a);// {'["object Object"]' : 456}

// Q.7 JSON.stringify / JSON.parse

const obj2 = {
    name: "allen",
    age: 21
};

const objString = JSON.stringify(obj2);
console.log(objString);
const objParsed = JSON.parse(objString);
console.log(objParsed);

// Q.8 Why do we convert object to string? => To store it in the local storage. Inside localstorage we cannot store object directly. We need to convert object to string.

localStorage.setItem('test', objString);
console.log(JSON.parse(localStorage.getItem('test')));

console.log([..."allen"]);
console.log(...["arun"]);
console.log({ ...obj2, isTrue: true, }); // All the properties of obj2 is spreaded inside this property.
console.log(JSON.stringify(obj2, ["age"])); // Only age property is extracted from the object and stringified.

// Q.9 What is output

const shape = {
    radius: 20,
    diameter() {
        return this.radius * 2
    }
    ,
    perimeter: () => 2 * Math.PI * this.radius
};

console.log(shape.diameter()); // normal function this is referenced to current object.
console.log(shape.perimeter()); // arrow function this is referenced to window object, so NaN.

// Q.10 What is destructuring of an object?
// Destructuring object means taking sepcific properties from an object.

const obj3 = {
    name: "shankar",
    age: 61
};

const { age } = obj3;
console.log(age);

// Q.11 How to rename destructured property from object.

const name = "allen"; // Variable name
const { name: myName } = obj3; // Destructured property name is converted to myName.
console.log(myName);

// Q.12 Nested Destructuring.

const obj4 = {
    name: 'ravi',
    age: 23,
    fullName: {
        firstName: 'Ravi',
        lastName: 'Sankar'
    }
}

const { fullName: { firstName } } = obj4;
console.log(firstName);

// Q.13 Rest parameters are always at the last parameter

function getItems(item1, item2, ...args) {
    return [...item1, item2, ...args]
}

console.log(getItems(['banana, apple'], 'mango', 'papaya'));

// Q.14 Object Reference

let o1 = { name: 'sriram' };
let o2;

o2 = o1;
o2.name = "allen";
console.log(o1);

// Q.15 Objects are created in different memory locations. No 2 objects are equal

console.log({ a: 1 } == { a: 1 }); // false
// console.log({ a: 1 } === { a: 1 }); // false

// Q.16 Output of following.

let person = { name: "lynda" };
const members = [person]; // members[0] = {name :"lynda"}
person = null; // person refers to null now.
// members[0] refers to object.
console.log(members);

// Q.17 Output of following.

const obj5 = { num: 10 };

const multiply = (x = { ...obj5 }) => {
    console.log(x.num *= 2);
}

multiply(); // 20 -  new obj created
multiply(); // 20 - new obj created
multiply(obj5); // 20 - x refers to obj5
multiply(obj5); // 40 - x refers to obj5

// Q.18 ChangeRefAge

function changeAgeRef(person) {
    person.age = 25;

    person = {
        name: "Sriram",
        age: 50
    }
    return person;
}

const person1Obj = {
    name: "Allen",
    age: 20
};

const person2Obj = changeAgeRef(person1Obj)
console.log(person1Obj);
console.log(person2Obj);

// Q.19 What is shallow copy and deep copy?
// Shallow copy - Copy an object to another object atleast some of the properties of original object.
// Deep copy - When we completely clone an object to another variable that is called deep copy.

const user = {
    name: "sriram",
    age: 21
};

// const cloneObj = Object.assign({}, user); // deepcopy using Object.assign
// const cloneObj = JSON.parse(JSON.stringify(user)); // deepcopy using JSON.stringify and JSON.parse.
const cloneObj = { ...user }; // deepcopy using spread operator.
user.age = 22; // This will not affect original object
console.log(cloneObj, user);