(function () {
    const hidePassword = {
        buttonHiddenElement: document.querySelector('.showPass'),
        inputElement: document.querySelector('input'),

        init() {
            if (this.inputElement.getAttribute('type') === 'password') {
                this.inputElement.setAttribute('type', 'text');
            } else {
                this.inputElement.setAttribute('type', 'password');
            }
        },

        addEventListener() {
            this.buttonHiddenElement.addEventListener('click', () => {
                this.init();
            });
        }
    }

    hidePassword.addEventListener();
})()