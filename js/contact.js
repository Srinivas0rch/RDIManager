document.getElementById('subject').addEventListener('change', function () {
    const inputOther = document.querySelector('.inputOther');
    if (this.value == 'other') {
        inputOther.classList.add('visible');
    } else {
        inputOther.classList.remove('visible');
    }
});

const name = document.getElementById('name');
const lastname = document.getElementById('lastname');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
    let messages = []
    if (name.value === '' || name.value == null) {
        messages.push('Merci de noter votre nom')
    }

    if (lastname.value === '' || lastname.value == null) {
        messages.push('Merci de noter votre prénom')
    }
    if (name.value.lenght <= 2 ) {
        messages.push('Veuillez entrer un nom avec plus de 2 caractères.')
    }

    if (messages.lenght > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
})