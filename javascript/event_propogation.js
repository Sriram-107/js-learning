const btnElement = document.querySelector('button');
const divElement = document.querySelector('.parent-event');
const formElement = document.querySelector('.child-event');

btnElement.addEventListener('click', (event) => {
    console.log('target : ' + event.target.tagName);
    console.log('current target : ' + event.currentTarget.tagName);
    console.log(
        'btn element clicked'
    );
})
divElement.addEventListener('click', (event) => {
    console.log('target : ' + event.target.tagName);
    console.log('current target : ' + event.currentTarget.tagName);
    console.log(
        'div element clicked'
    );
})
formElement.addEventListener('click', (event) => {
    console.log('target : ' + event.target.tagName);
    console.log('current target : ' + event.currentTarget.tagName);
    console.log(
        'form element clicked'
    );
})

// Q.3 - event.target vs this.target vs event.currentTarget.



