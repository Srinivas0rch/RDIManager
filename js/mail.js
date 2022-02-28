function sendMail(params) {
    var tempParams = {
        from_email: document.getElementsById("user_email").value,
        subject: document.getElementsById("user_subject").value,
        message: document.getElementsById("message").value,
    };

    emailjs.send('SMTP server', 'template_ibqn10o', tempParams)
    .then(function(res){
        console.log("success", res.status);
    })
}