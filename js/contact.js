document.getElementById('subject').addEventListener('change', function () {
    const inputOther = document.querySelector('.inputOther');
    if (this.value == 'other') {
        inputOther.classList.add('visible');
    } else {
        inputOther.classList.remove('visible');
    }
});

let myForm = document.getElementById('myForm');

myForm.addEventListener('submit', function(e) {
    let myMessage   = document.getElementById('message');
    let myName   = document.getElementById('name');
    let myLastname   = document.getElementById('lastname');
    let myPhone   = document.getElementById('telephone');
    let myEmail   = document.getElementById('email');
    let mySubject   = document.getElementById('subject');
    
    let myRegex = /^[a-zA-Z-\s]+$/;
    let regexPhoneNumber = /^((\+)33|0)[1-9](\d{2}){4}$/;


    if (myMessage.value.trim() === '' || myMessage.value == null) {
        let myError = document.getElementById('error');
        myError.innerHTML = "Merci de rédiger votre message.";
        e.preventDefault();
    }
    
    if (mySubject.value.trim() === '' || mySubject.value == null) {
        let myError = document.getElementById('error');
        myError.innerHTML = "Merci de préciser le sujet de votre message.";
        e.preventDefault();
    }

    if (myEmail.value.trim() === '' || myEmail.value == null) {
        let myError = document.getElementById('error');
        myError.innerHTML = "Merci d'indiquer votre adresse email.'";
        e.preventDefault();
    }

    if (myPhone.value.trim() === '' || myPhone.value == null) {
        let myError = document.getElementById('error');
        myError.innerHTML = "Merci d'indiquer votre numéro de téléphone.";
        e.preventDefault();
    } else if (regexPhoneNumber.test(myPhone.value) == false) {
        let myError = document.getElementById('error');
        myError.innerHTML = "Le numéro de téléphone ne peut comporter que des chiffres.";
        e.preventDefault();
    }
    
    if (myLastname.value.trim() === '' || myLastname.value == null) {
        let myError = document.getElementById('error');
        myError.innerHTML = "Merci de compléter votre prénom.";
        e.preventDefault();
    } else if (myRegex.test(myLastname.value) == false) {
        let myError = document.getElementById('error');
        myError.innerHTML = "Le prénom ne doit comporter que des lettres ou tirets.";
        e.preventDefault();
    }

    if (myName.value.trim() === '' || myName.value == null) {
        let myError = document.getElementById('error');
        myError.innerHTML = "Merci de compléter votre nom.";
        e.preventDefault();
    } else if (myRegex.test(myName.value) == false) {
        let myError = document.getElementById('error');
        myError.innerHTML = "Le nom ne doit comporter que des lettres ou tirets.";
        e.preventDefault();
    }
})