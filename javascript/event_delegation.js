const accessoriesElement = document.querySelector('.accessories');

accessoriesElement.addEventListener('click', (event) => {
    console.log(event.target.closest('SPAN'));
    if (event.target.nodeName == 'SPAN') {
        window.location.href += '/' + event.target.innerText;
    }
})

// Q- alert form, div, 

const divElement = document.querySelector('button');
const formElement = document.querySelector('.parent-event');
const buttonElement = document.querySelector('.child-event');

divElement.addEventListener('click', (event) => {
    alert('Div');

})
formElement.addEventListener('click', (event) => {
    alert('Form');

})
buttonElement.addEventListener('click', (event) => {
    alert('Button');
})