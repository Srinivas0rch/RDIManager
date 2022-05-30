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
    
    let myRegex = /^[a-zA-Z0-9áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ._'&', '+', '=', '/', '!', '\', '(', ')', '?', '*', '.'\s]+$/;
    let regexPhoneNumber = /^((\+)33|0)[1-9](\d{2}){4}$/;

    let myError = document.getElementById('error');

    if (myMessage.value.trim() === '' || myMessage.value == null) {
        myError.append = "<p>Merci de rédiger votre message.</p>";
        e.preventDefault();
    } else if (myRegex.test(message.value) == false) {
        myError.append = "Le message ne doit pas contenir de caractères spéciaux.";
        e.preventDefault();
    }
    
    if (mySubject.value.trim() === '' || mySubject.value == null) {
        myError.append = "Merci de préciser le sujet de votre message.";
        e.preventDefault();
    } else if (myRegex.test(mySubject.value) == false) {
        myError.append = "Le sujet ne doit pas comporter de caractères spéciaux.";
        e.preventDefault();
    }

    if (myEmail.value.trim() === '' || myEmail.value == null) {
        myError.append = "Merci d'indiquer votre adresse email.'";
        e.preventDefault();
    }

    if (myPhone.value.trim() === '' || myPhone.value == null) {
        myError.append = "Merci d'indiquer votre numéro de téléphone.";
        e.preventDefault();
    } else if (regexPhoneNumber.test(myPhone.value) == false) {
        myError.append = "Le numéro de téléphone ne peut comporter que des chiffres.";
        e.preventDefault();
    }
    
    if (myLastname.value.trim() === '' || myLastname.value == null) {
        myError.append = "Merci de compléter votre prénom.";
        e.preventDefault();
    } else if (myRegex.test(myLastname.value) == false) {
        myError.append = "Le prénom ne doit comporter que des lettres ou tirets.";
        e.preventDefault();
    }

    if (myName.value.trim() === '' || myName.value == null) {
        myError.append = "Merci de compléter votre nom.";
        e.preventDefault();
    } else if (myRegex.test(myName.value) == false) {
        myError.append = "Le nom ne doit comporter que des lettres ou tirets.";
        e.preventDefault();
    }

    myError.scrollIntoView();
})