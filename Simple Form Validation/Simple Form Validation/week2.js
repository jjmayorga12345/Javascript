document.getElementById('subBtn').addEventListener('click', function() {
    validateForm();
});
// get values from
function validateForm() {
    var firstName = document.getElementById('first-name').value;
    var lastName = document.getElementById('last-name').value;
    var emailbox = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var confirmemail = document.getElementById('confirmemail').value;
    
    var valid = true;

    // resters
    document.getElementById('fn-error').innerHTML = '';
    document.getElementById('first-name').style.border = '1px solid black';
    document.getElementById('ln-error').innerHTML = '';
    document.getElementById('last-name').style.border = '1px solid black';
    document.getElementById('email-error').innerHTML = '';
    document.getElementById('email').style.border = '1px solid black';
    document.getElementById('phone-error').innerHTML = '';
    document.getElementById('phone').style.border = '1px solid black';
    document.getElementById('confirmemail-error').innerHTML = '';
    document.getElementById('confirmemail').style.border = '1px solid black';

    // vars for regex vali's
    let specChar = /[^a-zA-Z\-]/;
    let emailvalid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let phonevalid = /^(\d{3}-?)?\d{3}-?\d{4}$/;
    let blankvalid = /^\s*$/;




    // first name vali
    if (blankvalid.test(firstName)) {
        document.getElementById('fn-error').innerHTML = '* Please input a first name';
        document.getElementById('fn-error').style.color = 'red';
        document.getElementById('first-name').style.border = '1px solid red';
        valid = false;
    } else if (specChar.test(firstName)) {
        document.getElementById('fn-error').innerHTML = '* Your first name must not include special characters.';
        document.getElementById('fn-error').style.color = 'red';
        valid = false;
    } else if (specChar.test(firstName)) {
        document.getElementById('first-name').style.border = '1px solid green';
    }

    // last name vali
    if (blankvalid.test(lastName)) {
        document.getElementById('ln-error').innerHTML = '* Please input a last name.';
        document.getElementById('ln-error').style.color = 'red';
        document.getElementById('last-name').style.border = '1px solid red';
        valid = false;
    } else if (specChar.test(lastName)) {
        document.getElementById('ln-error').innerHTML = '* Your last name must not include special characters.';
        document.getElementById('ln-error').style.color = 'red';
        valid = false;
    } else if (specChar.test(lastName)) {
        document.getElementById('last-name').style.border = '1px solid green';
    }

    // email vali
    if (blankvalid.test(emailbox)){
        document.getElementById('email-error').innerHTML = '* Please input an email.';
        document.getElementById('email-error').style.color = 'red';
        document.getElementById('email').style.border = '1px solid red';
        valid = false;
    } else if (!emailvalid.test(emailbox)) {
        document.getElementById('email-error').innerHTML = '* Please input a valid email.';
        document.getElementById('email-error').style.color = 'red';
        document.getElementById('email').style.border = '1px solid red';
        valid = false;
    } else if (confirmemail !== emailbox) {
        document.getElementById('confirmemail-error').innerHTML = '* Emails do not match.';
        document.getElementById('confirmemail-error').style.color = 'red';
        
        document.getElementById('confirmemail').style.border = '1px solid red';
    } else if (emailvalid.test(emailbox)) {
        document.getElementById('email').style.border = '1px solid green';
    }


    // phone numba
    if (blankvalid.test(phone)){
        document.getElementById('phone-error').innerHTML = '* Please input a phone number.';
        document.getElementById('phone-error').style.color = 'red';
        document.getElementById('phonelabel').style.color = 'red';
        document.getElementById('phone').style.border = '1px solid red';
        valid = false;
    } else if (!phonevalid.test(phone)) {
        document.getElementById('phone-error').innerHTML = '* Please input a valid phone number.';
        document.getElementById('phone-error').style.color = 'red';
        document.getElementById('phonelabel').style.color = 'red';
        document.getElementById('phone').style.border = '1px solid red';
        valid = false;
    } else if (phonevalid.test(phone)) {
        document.getElementById('phone').style.border = '1px solid green';
    }

    if (!valid) {
        document.getElementById('subBtn').style.color='red';
        document.getElementById('subBtn').style.border='1px solid red';
    }


    if (valid) {

        document.getElementById('form').style.display = 'none';


        var filledform = {
            fname: firstName,
            lname: lastName,
            email: emailbox,
            phone: phone
        };


        document.getElementById('info').innerHTML = `
            First Name: ${filledform.fname}<br>
            Last Name: ${filledform.lname}<br>
            Email: ${filledform.email}<br>
            Phone Number: ${filledform.phone}<br>
        `;

        document.getElementById('confirmation').style.display = 'block';
    }
}
