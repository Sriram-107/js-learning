// const fetch = require("node-fetch");

// Promises in javascript
// Synchronous vs Asynchronous.

// Synchronous code - code is executed line by line.
// console.log("start");
// console.log("Middle");
// console.log("End");

// ------------------------------------------------------------------------------------------

// Asynchronous code - JS is single threaded language it cannot execute setTimout parallel when our code is being executed. First executes a synchronous code then asynchronous code. Based on event loop.

// console.log("start");
// setTimeout(() => {
//     console.log("Middle");
// }, 0);
// console.log("End");

// // --------------------------------------------------------------------------

// console.log("start");
// function getUserName1(username) {
//     setTimeout(() => {
//         return username;
//     }, 1000);
// }

// const message1 = getUserName1("Sriram");
// console.log(message1); // undefined at the point of execution.
// console.log("End");

// ----------------------------------------------------------------------------

// console.log("start");
// function getUserName2(username, callback) {
//     setTimeout(() => {
//         callback(username);
//     }, 1000);
// }

// const message2 = getUserName2("Sriram", function (username) {
//     console.log(username);
// });
// console.log(message2); // undefined at the point of execution.
// console.log("End");

// ------------------------------------------------------------------------------------------

// Callback Hell - Nesting of callback. Fix using promises.

// console.log("start");

// function importantAction(username, cb) {
//     setTimeout(() => {
//         cb(`Username is ${username}`);
//     }, 1000)
// }

// function likeTheVideo(video, cb) {
//     setTimeout(() => {
//         cb(`Video is ${video}`)
//     }, 1000)
// }

// const message3 = importantAction("Sriram", (username) => {
//     console.log(username);
//     likeTheVideo("JS Questions", (video) => {
//         console.log(video);
//     })
// })

// console.log("end");

// --------------------------------------------------------------------------

// Promise - use new keyword, callback is used inside of promise. If promise is resolved then promise is fullfiled. If promise if rejected then promise is failed.

// console.log("start");
// const sub = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const result = false;
//         if (result) resolve("Promise fulfilled");
//         else reject(new Error("Promise rejected"));
//     }, 2000)

// })

// console.log(sub); // promise will be pending at the runtime.
// // After promise is completed if resolved then goes to then callback. if rejected then goes to catch callback.

// sub.then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// })
// console.log("stop");

// --------------------------------------------------------------------------

// Fix callback hell using promises.

// console.log("start");

function importantAction(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(`Error`);
        }, 1000)
    });

}

function likeTheVideo(video) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Video is ${video}`)
        }, 2000)
    })
}

function subscribeTheVideo(video) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Video is ${video}`)
        }, 3000)
    })
}

// importantAction("Sriram").then((res) => {
//     console.log(res);
//     likeTheVideo("Liked").then((res) => {
//         console.log(res);
//         subscribeTheVideo("Subscribed").then((res) => {
//             console.log(res);
//         })
//     })
// }).catch((err) => { console.log(err); });

// Fix above promises code using promises chaining.
// Promieses Chaining.
// importantAction("Sriram").then((res) => {
//     console.log(res);
//     return likeTheVideo("Liked")
// }).then((res) => {
//     console.log(res);
//     return subscribeTheVideo("Subscribed")
// }).then((res) => { console.log(res); }).catch((err) => { console.log(err); })

// Fix the above promises chaining using promises combinators.
// Promises Combinators - 4 promise combinators.

// 1.Promise.all - Returs all of the promises in an array. If one of the promises fail then all promises fail.
// console.log(Promise.all([importantAction("Sriram"), likeTheVideo("Liked"), subscribeTheVideo("Subscribed")]).then((res) => { console.log(res); }).catch((err) => console.log(err)))

// 2.Promise.race - Returns the first promise which get resolved or rejected.
// console.log(Promise.race([importantAction("Sriram"), likeTheVideo("Liked"), subscribeTheVideo("Subscribed")]).then((res) => { console.log(res); }).catch((err) => console.log(err)));

// 3.Promise.allSelected - Returns all the promises whether resolved or rejected.
// console.log(Promise.allSettled([importantAction("Sriram"), likeTheVideo("Liked"), subscribeTheVideo("Subscribed")]).then((res) => { console.log(res); }).catch((err) => console.log(err)));

// 4.Promise.any - Returns only one of the resolved promises.
// console.log(Promise.any([importantAction("Sriram"), likeTheVideo("Liked"), subscribeTheVideo("Subscribed")]).then((res) => { console.log(res); }).catch((err) => console.log(err)));

// console.log("end");

// Async await

// async function result() {
//     try {
//         const action = await importantAction("Sriram");
//         console.log(action);
//         const like = await likeTheVideo("Liked");
//         console.log(like);
//         const subscribe = await subscribeTheVideo("Subscribed");
//         console.log(subscribe);
//     } catch (err) {
//         console.log(err);
//     }
// }

// result();

// IQ.1 - Resolves all the synchronous code first. Then runs the asynchronous code.

// console.log("start");
// const promise1 = new Promise((resolve, reject) => {
//     console.log(1);
//     resolve(3); // There can be no resolve or reject in a promise.
//     console.log(2);
// })

// promise1.then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

// console.log("end");

// ----------------------------------------------------------------------------------------

// IQ.2 - Function to confuse promises

// console.log("start"); // 1

// const fn = () => new Promise((resolve, reject) => {
//     console.log(1); // 2
//     resolve(2); // 6
//     console.log(3); // 3
// })


// fn().then((res) => {
//     console.log(res);
// }); // when the fn is called only promise object is created.

// console.log("middle"); // 4

// console.log("end"); // 5

// ---------------------------------------------------------------------------------

// IQ.3 - After the promise is rejected the then block is also executed.

// const fn = () => new Promise((resolve, reject) => {

//     reject(2);
// })

// fn().then((res) => { console.log("Success1"); }).then((res) => { console.log("Success1"); }).catch((rej) => { console.log("Rejected"); }).then((res) => { console.log("Success1"); })

// Result - Rejected, Success1

// ----------------------------------------------------------------------------------------

// IQ.4 - String value returned is taken as a resolved promise.

// function jobState(state) {
//     return new Promise((resolve, reject) => {
//         if (state) {
//             resolve("Success");
//         }
//         else {
//             reject("Rejected");
//         }
//     })
// }

// const promise2 = jobState(true);

// promise2.then(
//     function (res) {
//         console.log(res);
//         return jobState(false);
//     }
// ).catch(function (err) {
//     console.log(err);
//     return "Error Occured" // Since this is returning a string it will be a resolved state.
// }).then(function (res) {
//     console.log(res);
//     return jobState(true);
// }).catch(function (err) {
//     console.log(err);
// });

// Throw error will be taken as rejected promise. String will be taken as resolved promise. new Error("Error") will be taken as String resolved promise.

// --------------------------------------------------------------------------------------

// IQ.5

// const firstPromise = new Promise((resolve, reject) => {
//     resolve("Success");
// })

// const secondPromise = new Promise((resolve, reject) => {
//     resolve(firstPromise);
// })

// secondPromise.then((res) => {
//     return res;
// }).then((res) => {
//     console.log(res);
// })

// --------------------------------------------------------------------------------------------

// IQ.6 convert fetch to async/await

// function loadJSON() {
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//         .then(response => {
//             if (response.status == 200) {
//                 return response.json()
//             }

//         })
//         .then(json => console.log(json)).catch((err) => {
//             console.log(err);
//         })
// }

// loadJSON();

async function loadJSON(url) {
    const response = await fetch(url);
    if (response.status == 200) {
        let json = await response.json();

        return json;
    }
    throw new Error("Response error")

}

// loadJSON('https://jsonplaceholder.typicode.com/todos/1').then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// })

// ------------------------------------------------------------------

function promiseResolver(arr) {
    if (arr.length === 0) return;
    const currPromise = arr.shift();
    console.log(currPromise);
    currPromise.then((res) => console.log(res)).catch((err) => {
        console.log(err);
    });
    promiseResolver(arr);
}

// promiseResolver([
//     importantAction("sriram"),
//     subscribeTheVideo("subscribe"),
//     likeTheVideo("like")
// ])

// ------------------------------------------------------------------------------------------

// I.Q - 7 Pollyfill for promise.

function promisePollyFill(executor) {
    let onResolve, onReject, isFullfilled = false, isCalled = false;
    function resolve(value) {
        isFullfilled = true;
        value = val;
        if (typeof onResolve == 'function') {
            onResolve(value)
            isCalled = true;
        }

    }
    function reject(value) {
        onReject(value)
    }

    this.then = function (callback) {
        onResolve = callback;
        return this;
    }
    this.catch = function (callback) {
        onReject = callback;
        return this;
    }
    executor(resolve, reject)
}

const examplePromise = new promisePollyFill((resolve, reject) => {

    resolve(2);


})

examplePromise.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})


