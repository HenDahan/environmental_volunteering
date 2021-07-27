const express = require('express');
const router = express.Router();

const User = require( '../../db/users.schema');
const validateRegisterInput = require( '../../validation/register');
const validateLoginInput = require( '../../validation/login');
const passport = require('passport');


//@route POST api/users/register
//@ desc Register user
//

router.route("/register").post( (req, res) => {
    console.log("hello");
    console.log(req.body);
  
    // const {
    //     errors,
    //     isValid
    // } = validateRegisterInput(req.body);
    // if (!isValid) {
    //     return res.status(400).json(errors);
    // }
    // User.findOne({
        // username: req.body.email
    // }).then(user => {
    //     if (user) {
    //         res.status(400).json({
    //             email: "Email already in use."
    //         });
    //     } else {
            const newUser = new User({
                fName :req.body.first_name,
                lName : req.body.last_name,
                username : req.body.email,
                password : req.body.password
            });
            console.log("this is 1 : " + newUser);

            User.register(newUser, req.body.password, (err, newUser) => {
                console.log("this is : " + newUser);
                return res.status(200).send();
                // if (err) {
                //     console.log(err);
                //     res.redirect("/register");
                // } else {
                //     console.log("else");
                //     passport.authenticate("local")(req, res, () => {
                //         res.redirect("/");
                //     });
                // }

            })

        // }
    // })
    // newUser.save();
});

//@route POST api/users/login
//@ desc Login user
//
router.post("/login", (req, res) => {
    console.log("LOGIN");
    // let {
    //     errors,
    //     isValid
    // } = validateLoginInput(req.body);
    // if (!isValid) {
    //     res.status(400).json(errors)
    // }
  
      const  username = req.body.email;
    const password = req.body.password;
    console.log(req.body.email);
    console.log(req.body.password);

    User.findOne({username:username,password:password},(err,user)=>{
        if(err){
            console.log(err);
            return res.status(500).send();
        }
        if(!user){
            return res.status(404).send();
    
        }
        return res.status(200).send();
    })

});
module.exports = router;