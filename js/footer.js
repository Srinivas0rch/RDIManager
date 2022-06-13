import SibApiV3Sdk from './src/ApiClient';

let newsForm = document.getElementById('newsForm');

newsForm.addEventListener('submit', function (e) {
    e.preventDefault();

    for (let el of newsForm.getElementsByClassName('msg')) el.style.display = 'none';
     
    let newsEmail = document.getElementById('newsEmail');

    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    let myError = document.getElementById('error');
    myError.innerHTML = "";

    if (newsEmail.value.trim() === '' || newsEmail.value == null || regexEmail.test(newsEmail.value) == false) {
        newsForm.getElementsByClassName('errorMsg')[0].style.display = "block";
    } else {
        // var SibApiV3Sdk = import('./../node_modules/sib-api-v3-sdk/src/index');

        console.log(SibApiV3Sdk);

        let defaultClient = SibApiV3Sdk.ApiClient.instance;
        
        let apiKey = defaultClient.authentications['api-key'];
        apiKey.apiKey = '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';
        
        let apiInstance = new SibApiV3Sdk.ContactsApi();
        
        let createContact = new SibApiV3Sdk.CreateContact();
        
        createContact.email = newsEmail.value;
        createContact.attributes = [{'TAGS' : '#From_rdimanager_com'}];
        console.log(createContact)
        // apiInstance.createContact(createContact).then(function(data) {
        //   console.log('API called successfully. Returned data: ' + JSON.stringify(data));
        // }, function(error) {
        //   console.error(error);
        // });
    }
})