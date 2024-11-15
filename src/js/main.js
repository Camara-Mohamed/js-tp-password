const clicElement = document.querySelector('.showPass');
const element = document.querySelector('input');

function changerInput() {
    if (element.getAttribute('type') === 'password') {
        element.setAttribute('type', 'text');
    } else {
        element.setAttribute('type', 'password');
    }
}

clicElement.addEventListener('click', function () {
    changerInput();
});