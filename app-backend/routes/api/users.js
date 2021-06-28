const express = require('express');
const router = express.Router();

const User = require( '../../db/users.schema');
const validateRegisterInput = require( '../../validation/register');
const validateLoginInput = require( '../../validation/login');
const passport = require('passport');


//@route POST api/users/register
//@ desc Register user
//

router.post("/register", (req, res) => {
    const {
        errors,
        isValid
    } = validateRegisterInput(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }
    User.findOne({
        username: req.body.email
    }).then(user => {
        if (user) {
            res.status(400).json({
                email: "Email already in use."
            });
        } else {
            const newUser = new User({
                fName: req.body.fname,
                lName: req.body.lname,
                username: req.body.email
            });
            User.register(newUaer, req.body.password, (err, newUser) => {
                if (err) {
                    console.log(err);
                    res.redirect("/register");
                } else {
                    passport.authenticate("local")(req, res, () => {
                        res.redirect("/");
                    });
                }

            })

        }
    })
});

//@route POST api/users/login
//@ desc Login user
//
router.post("/login", (req, res) => {
    let {
        errors,
        isValid
    } = validateLoginInput(req.body);
    if (!isValid) {
        res.status(400).json(errors)
    }
    const user = new User({
        username: req.body.email,
        password: req.body.password
    });
    user.login(user, (err) => {
        if (err) {
            res.status(400).json(err);
        }
        passport.isAuthenticated("local")(req, res, () => {
            res.redirect("/");
        })


    });

});
module.exports = router;