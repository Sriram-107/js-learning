// 1.Fibonacci Sequence.
// Given a number find the fibonacci sequence. Each number in the sequence is sum of previous 2 numbers.
function fibonacci(n) {
    let result = [0, 1]
    for (let num = 2; num < n; num++) {
        result[num] = result[num - 2] + result[num - 1]; // n - 2 times executed.
    }
    return result;
}

console.log(fibonacci(5));
// Time Complexity - O(n)

// -------------------------------------------------------------------------------------------------

// 2.Factorial Number
// Given an integer n find the factorial of that integer.
// 4! = 4*3*2*1 = 24

function factorial(n) {
    let result = 1;
    while (n > 1) {
        result = result * n; // 1
        n--;
    }
    return result;
}

console.log(factorial(5));
// Time Complexity - O(n)

// -------------------------------------------------------------------------------------------------

// 3.Prime number or not
// Check whether the given integer n is prime or not.

function isPrime(n) {
    if (n <= 2) {
        return false
    }
    for (let i = 2; i < n / 2; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    // for (let i = 2; i < Math.sqrt(n); i++) {
    //     if (n % i == 0) {
    //         return false;
    //     }
    // }
    return true;
}

// console.log(isPrime(10)); // false
// console.log(isPrime(5)); // true
console.log(isPrime(66)); // flase

// -------------------------------------------------------------------------------------------------
