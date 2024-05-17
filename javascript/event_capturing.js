const divElement = document.querySelector('.parent-event')
const formElement = document.querySelector('.child-event');
const btnElement = document.querySelector('button');

divElement.addEventListener('click', (event) => {
    alert('Div');

}, {
    capture: true
})
formElement.addEventListener('click', (event) => {
    alert('Form');

}, {
    capture: true
})
btnElement.addEventListener('click', (event) => {
    alert('Button');

}, {
    capture: true
})