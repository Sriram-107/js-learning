
const button = document.querySelector(".increment-btn");
const clickedTimes = document.querySelector(".btn-click");
const debouncedTimes = document.querySelector(".btn-debouncing");

let clickCount = 0;
let triggeredCount = 0;

const debounceFunction = _.debounce(() => {
    debouncedTimes.innerHTML = ++triggeredCount;
}, 250);
button.addEventListener("click", () => {

    clickedTimes.innerHTML = ++clickCount;
    // debounceFunction();
    manualDebounce();

})

const manualDebounce = myDebounce(() => {
    debouncedTimes.innerHTML = ++triggeredCount;
}, 300);

// debounce pollyfill
function myDebounce(cb, time) {
    let timer;
    return function (...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            cb(...args)
        }, time)
    }
}



