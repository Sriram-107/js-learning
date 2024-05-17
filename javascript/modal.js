// Q - Create a modal which closes on clicking negative space.

const modalButtonElement = document.querySelector('.modal-btn');
const modalContainer = document.querySelector('.modal-container');
modalButtonElement.addEventListener('click', () => {
    toggleDisplay(true);
})

function toggleDisplay(toggle) {
    modalContainer.style.display = toggle ? "flex" : "none";
}

modalContainer.addEventListener('click', (e) => {
    console.log(e.target.className);
    if (e.target.className == 'modal-container') {
        toggleDisplay(false);
    }

})