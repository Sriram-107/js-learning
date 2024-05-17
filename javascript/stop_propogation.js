const btnElement = document.querySelector('button');
const divElement = document.querySelector('.parent-event');
const formElement = document.querySelector('.child-event');
divElement.addEventListener('click', (event) => {
    event.stopPropagation();
    alert(
        'div element clicked'
    );
})
formElement.addEventListener('click', (event) => {
    event.stopPropagation();
    alert(
        'form element clicked'
    );
})
btnElement.addEventListener('click', (event) => {
    alert(
        'btn element clicked'
    );
})



// Q.3 - event.target vs this.target vs event.currentTarget.



