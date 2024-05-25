const arr = [1, 2, 3, 4, 5];

// polyfill for map function

Array.prototype.myMap = function (cb) {
    let resultarr = [];
    for (let index = 0; index < this.length; index++) {
        resultarr.push(cb(this[index], index, this));
    }
    return resultarr;
}

const mapResult = arr.myMap((element, index, arr) => {
    return element * 5;
});

console.log(mapResult);

// pollyfill for filter function

Array.prototype.myFilter = function (cb) {
    let resultarr = [];
    for (let index = 0; index < this.length; index++) {
        if (cb(this[index], index, this)) {
            resultarr.push(this[index]);
        }
    }
    return resultarr;
}

const filterResult = arr.myFilter((element, index, arr) => {
    return element > 3;
})

console.log(filterResult);

// polyfill for reduce function



Array.prototype.myReduce = function (cb, initialValue) {

    let previousValue = initialValue;
    for (let index = 0; index < this.length; index++) {
        previousValue = previousValue ? cb(previousValue, this[index], this) : this[index];
    }
    return previousValue;
}


const reduceResult = arr.myReduce((prevVal, curVal, arr) => {
    return prevVal + curVal;
})

console.log(reduceResult);

// polyfill for promise

const myPromise = function (cb) {

}

const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('success');
    }
    reject('error')
})

promise.then((res) => console.log(res)).catch((rej) => console.log(rej))




