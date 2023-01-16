let myForm = document.getElementById('myForm');

myForm.addEventListener('submit', function (e) {
    e.preventDefault();

    let myMessage = document.getElementById('message');
    let myName = document.getElementById('name');
    let myPhone = document.getElementById('telephone');
    let myEmail = document.getElementById('email');
    let mySubject = document.getElementById('subject');
    let contactMention = document.getElementById('case');

    let myRegex = /^[a-zA-Z0-9áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ._'&', '+', '=', '/', '!', '\', '(', ')', '?', '*', '.'\s]+$/;
    let regexPhoneNumber = /^((\+)33|0)[1-9](\d{2}){4}$/;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    let myError = document.getElementById('error');
    myError.innerHTML = "";

    if (myName.value.trim() === '' || myName.value == null) {
        myError.append("Merci de compléter votre nom.", document.createElement("p"));
    } else if (myRegex.test(myName.value) == false) {
        myError.append("Le nom ne doit comporter que des lettres ou tirets.", document.createElement("p"));
    }

    if (myPhone.value.trim()) {

        if (regexPhoneNumber.test(myPhone.value) == false) {

            myError.append("Le numéro de téléphone ne peut comporter que des chiffres.", document.createElement("p"));
        }
    }

    if (myEmail.value.trim() === '' || myEmail.value == null) {
        myError.append("Merci d'indiquer votre adresse e-mail.", document.createElement("p"));
    } else if (regexEmail.test(myEmail.value) == false) {
        myError.append("Adresse e-mail non valide.", document.createElement("p"));
    }

    if (mySubject.value.trim() === '' || mySubject.value == null) {
        myError.append("Merci de sélectionner le sujet de votre message.", document.createElement("p"));
    }

    if (!contactMention.checked) {
        myError.append("Merci de cocher la case pour accepter l’utilisation des données personnelles.", document.createElement("p"));
    }

    if (myError.innerHTML !== "") {
        myError.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest"
        });
    } else {
        const res = document.getElementById('sending');

        emailjs.sendForm('rdi_manager', 'template_ibqn10o', this)
            .then(function () {
                res.innerHTML = `<p class="text-green">Votre message est envoyé !</p>`;
                res.scrollIntoView({
                    behavior: "smooth",
                    block: "end",
                    inline: "nearest"
                });
                const form = document.getElementById('myForm');
                form.reset();

                setTimeout(function () {
                    res.innerHTML = "";
                }, 5000)
            });
    }
})