const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateRgisterInput(data) {
    let errors = {};

    // Convert empty fields to an empty string so we can use validator functions
    data.name = !isEmpty(data.name) ? data.name : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.password2 = !isEmpty(data.password2) ? data.password2 : "";

    //Name validation
    if (Validator.isEmpty(data.name)) {
        errors.name = "Name must not be empty";
    }
    //Email validation
    if (Validator.isEmpty(data.email)) {
        errors.email = "Email must not be empty";
    }

    //Password validation
    if (Validator.isEmpty(data.password)) {
        errors.password = "Password must not be empty";
    }
    if (Validator.isEmpty(data.password2)) {}
    errors.password2 = "Confirm password must not be empty";

    if (!Validator.equals(data.password, data.password2)) {
        errpr.password2 = "Password must match";
    }

    if (!Validator.isLength(data.password, {
            min: 6,
            max: 30
        })) {
        errors.password = "Password must be at least 6 characters";
    }
    return {
        errors,
        isValid: isEmpty(errors)
    };
};