const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");
const path = require("path");
const app = express();
const methodOverride =require("method-override");
const error = require("./utils/Error.js");
const listingRouter = require("./routes/routes.js")
const reviewRouter = require("./routes/review.js")
const session  = require("express-session");
const flash  = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
const userRouter = require("./routes/user.js");









main().then((res)=>{
    console.log(`data base connected`);
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/tourtom');
}
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use( methodOverride("_method"))
app.get("/",(req,res)=>{
    res.send("hii this is root")
})

app.use(session({
    secret:"mysecretstring",
    resave:false,
    saveUninitialized:true,
    cookie:{
        expires:Date.now()+7*24*60*60*1000,
        maxAge:7*24*60*60*1000,
    }
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use((req,res,next)=>{
    res.locals.success = req.flash("Success"); 
    res.locals.updated = req.flash("updated");
    res.locals.deleted = req.flash("Deleted");
    res.locals.added = req.flash("added"); 
    res.locals.rd = req.flash("Rdeleted");
    res.locals.error  = req.flash("error");
    res.locals.register = req.flash("registered")
    res.locals.sameUser = req.flash("alreadyExist");
    console.log("2");
    next();
})

app.get("/user",async(req,res)=>{
    let fakeUser = new User({
        email:"lalaland@gmail.com",
        username:"lalaboy"
    })

    let registerUser =  await User.register(fakeUser,"password");
    res.send(registerUser);
    console.log(registerUser);
})
app.use("/listing",listingRouter)
app.use("/listing/:id/review",reviewRouter)
app.use("/",userRouter);
// app.get("/listingSample",async(req,res)=>{
//     const sampleListing = new Listing({
//         title:"la pulga",
//         description:"for love birds",
//         price:1200,
//         location:"Barcelona",
//         country:"Spain",
//     })
//      await sampleListing.save();
//      res.send("200");
// })
app.all("*",(req,res,next)=>{
    next(new error(404,"page not found!"));
})
app.use((err,req,res,next)=>{
    
    let{status=500 ,message = "page not found"} = err;
    res.status(status).render("listings/error.ejs",{err});
    console.log(err);
})

app.listen(3000,()=>{
    console.log(`post is runnig at ${3000}\n`)
})