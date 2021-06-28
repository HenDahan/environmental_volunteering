const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateLoginInput(data) {
    let errors = {};

    // Convert empty fields to an empty string so we can use validator functions
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";

    // Email checks

    if (!Vlidator.isEmpty(data.email)) {
        errors.email = "email must not be empty";
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }

    //Password checks

    if (!Validator.isEmpty(data.password)) {
        errors.password = "password filed is requierd";
    }
    return {
        errors,
        isValid: isEmpty(errors)
    };
};