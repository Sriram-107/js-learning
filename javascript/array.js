const shopping = ['soap', 'apple', 'banana', 'icecream'];
const numbers = [1, 2, 3, 4, 5];
const random = ["sriram", 10, [1, 2, 3]]; // We can store different type of data inside the same array.
console.log(random);
console.log(random.length);
console.log(random[0]);
random[1] = 5;
console.log(random);
// Accessing multidimensional array
console.log(random[2][1]);
// Accessing index of the element
console.log(random.indexOf('sriram'));
// push new element end of the array
console.log(random.push('susheel')); // returns the length of the array.
console.log(random);
// push new element start of the array
console.log(random.unshift('kavin')); // returns the length of the array.
console.log(random);

// pop new element end of the array
console.log(random.pop()); // returns the removed element from the array.
console.log(random);
// pop new element start of the array
console.log(random.shift());
console.log(random);
// splice is used to remove multiple elements from the array. Performs operation on the same array.
console.log(numbers.splice(1, 3)); // returns the removed element from the array.
console.log(numbers);

// Accessing every items in the array.
// for of loop - Does not affect the existing array.
for (item of shopping) {
    item += "a"
    console.log(item);
}
console.log(shopping);

// map function - Does not affect the existing array. Do same operation each item of the array.
const newShopping = shopping.map(addB);
function addB(item) {
    return item += "b";
}
console.log(newShopping);

// filter function - To filter out the list of items based on our condition.
const filterShopping = (item) => {
    return item.length <= 5;
}
const filteredShopping = shopping.filter(filterShopping)
console.log(filteredShopping);

// Converting string and arrays.
const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
// split() - converts string to array based on the string parameter.
const splitArray = data.split(',')
console.log(splitArray);
// join() - converts array to string with joining string parameter.
const joinArray = splitArray.join('||');
console.log(joinArray);
// toString() - converts array to string with coma as seperator. toString() does not take any parameter.
const toStringArray = splitArray.toString();
console.log(toStringArray);

// Printing the products
const products = ['Underpants:6.99',
    'Socks:5.99',
    'T-shirt:14.99',
    'Trousers:31.99',
    'Shoes:23.99'];
let total = 0;
for (item of products) {
    let subArray = item.split(':');
    let name = subArray[0];
    let price = Number(subArray[1]);
    total += price;
    let itemText = `${name} - $${price}`
    console.log(itemText);
    console.log(total);
}

// print each element of the array.
const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11]]];

function printArr() {

}

arr.forEach((element) => {
    if (typeof element) {

    }
})