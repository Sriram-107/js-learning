const button = document.querySelector('.increment-btn');
const clickField = document.querySelector('.btn-click');
const eventField = document.querySelector('.btn-debouncing');

let clickCount = 0;
let throttleCount = 0;

const start = new Date().getTime();

const throttleFunction = _.throttle(() => {
    eventField.innerHTML = ++throttleCount;
}, 800)

button.addEventListener("click", () => {
    const now = new Date().getTime();
    const seconds = (now - start) / 1000;
    console.log(seconds.toFixed());
    clickField.innerHTML = ++clickCount;
    // throttleFunction();
    myThrottle();
})

// throttle pollyfill
function myThrottle(cb, delay) {
    let last = 0;

    return function (...args) {
        let now = new Date().getTime();
        if (now - last < delay) return;
        last = now;
        console.log("now : " + now);
        console.log("last : " + last);
        return cb(...args);
    }
}