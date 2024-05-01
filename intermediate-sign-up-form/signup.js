const EMAIL_REGEX = /[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+$/;
const PHONE_REGEX = /[0-9]{3}[\-\.\s]?[0-9]{3}[\-\.\s]?[0-9]{4}/;
const PASS_REGEX  = /[0-9a-zA-Z\.\_\!\?]/;

let isFormComplete = false;

let validateEmailAddress = (emailAddress) => {
    let isEmailValid = (emailAddress.match(EMAIL_REGEX) != null);

    return isEmailValid;
};

let validatePhoneNumber = (phoneNumber) => {
    let isPhoneValid = (phoneNumber.match(PHONE_REGEX) != null);

    return isPhoneValid;
};

let validatePasswords = (passwords) => {
    if (passwords[0] === passwords[1]) {
        let passwordValid = (passwords[0].match(PASS_REGEX) != null);

        return passwordValid;
    }

    return false;
};

let validateSignupForm = () => {
    let firstNameField = document.getElementById("firstName");
    let lastNameField  = document.getElementById("lastName");
    let emailField     = document.getElementById("email");
    let phoneNumField  = document.getElementById("phone");
    let firstPwdField  = document.getElementById("passwordFirst");
    let secondPwdField = document.getElementById("passwordConfirm");

    let formValues = {
        firstName: firstNameField.value,
        lastName: lastNameField.value,
        email: emailField.value,
        phoneNumber: phoneNumField.value,
        password: [firstPwdField.value, secondPwdField.value]
    };

    if (formValues.firstName && formValues.lastName) {
        if (validateEmailAddress(formValues.email)) {
            if (validatePhoneNumber(formValues.phoneNumber)) {
                if (validatePasswords(formValues.password)) {
                    isFormComplete = true;
                    document.getElementById("createAccountBtn").disabled = !isFormComplete;

                    return;
                }
            }
        }
    }

    isFormComplete = false;
    document.getElementById("createAccountBtn").disabled = !isFormComplete;
};