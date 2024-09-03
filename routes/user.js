const express = require("express");
const router = express.Router();
const User = require("../models/user.js")
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");

router.get("/signup", (req,res)=>{
    res.render("users/users.ejs");
})
router.post("/signup",wrapAsync(async(req,res)=>{
    try {
    let{username,email,password}=  req.body;
    let newUser  =new User({email,username});
    let registerUser = await User.register(newUser,password);
    console.log(registerUser);
    req.flash("registered","New User Added!!!")
    res.redirect("/listing");
    } catch (error) {
        req.flash("alreadyExist",error.message);
        res.redirect("/signup")
    }
}))

router.get("/login", (req,res)=>{
    res.render("users/login.ejs");
})
router.post("/login",passport.authenticate("local",{ 
    failureRedirect: '/login',
    failureFlash:true 
}),async(req,res)=>{
    req.flash("Success","you are logged in!!")
    res.redirect("/listing")
})

module.exports = router;