const nums = [1, 2, 3, 4, 5];

// map
const mapResult = nums.map((element, index, arr) => {
    return element * 5;
})

console.log(mapResult);

// map polyfill
// Array.prototype will add my myMap function to the current javascript array file.
Array.prototype.myMap = function (cb) {
    let result = [];
    for (let index = 0; index < this.length; index++) {
        result[index] = cb(this[index], index, this);
    }
    return result;
}

console.log(nums.map((element, index, arr) => {
    return element * 2;
}));

// filter
const filterResult = nums.filter((element, index, arr) => {
    return element > 2
})

console.log(filterResult);

// filter polyfill
Array.prototype.myFilter = function (cb) {
    let result = [];
    for (let index = 0; index < this.length; index++) {
        if (cb(this[index], index, this)) {
            result.push(this[index])
        }
    }
    return result;
}

console.log(nums.myFilter((element, index, arr) => {
    return element > 4;
}));

// reduce
// If no initial value is given accumulator will be the first value.
const reduceResult = nums.reduce((acc, curr, index, arr) => {
    return acc + curr;
}, 0)

console.log(reduceResult);

// reduce polyfill

Array.prototype.myReduce = function (cb, initial) {
    let accumulator = initial
    for (let index = 0; index < this.length; index++) {
        accumulator = accumulator ? cb(accumulator, this[index], index, this) : this[index];
    }
    return accumulator;
}

console.log(nums.myReduce((acc, curr, index, arr) => {
    return acc + curr;
}, 10));

// map vs forEach
// Both are array functions to loop the items of the array.
// map returns a new array. forEach doesn't return anything - undefined.
// map cannot modify the existing array. forEach can modify the existing array.
// we can chain other methods on map like filter or reduce. We cannot chain methods on forEach.
const arr = [2, 3, 4, 5, 6];

const mapArray = arr.map((element, index) => {
    return element * 2;
}).filter((element, index) => {
    return element > 8;
});

console.log(mapArray);

const forEachArray = arr.forEach((element, index) => {
    arr[index] = element * 3;
})

console.log(forEachArray);
console.log(arr);

// Output question

let students = [
    { name: "Sriram", rollNumber: 31, age: 80 },
    { name: "Allen", rollNumber: 15, age: 69 },
    { name: "Ausing", rollNumber: 16, age: 35 },
    { name: "Pranov", rollNumber: 7, age: 55 },

];

const nameCaps = students.map((element) => {
    return element.name.toUpperCase();
})
console.log(nameCaps);

const highmarks = students.filter((element) => {
    return element.age > 60;
})

console.log(highmarks);