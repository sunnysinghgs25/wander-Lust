const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const session  = require("express-session");
const flash  = require("connect-flash");
const path = require("path");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
//...................................................................................
// app.use(cookieParser("chapricode"));
// app.get("/new",(req,res)=>{
//     res.cookie("name","loverboyRaju",{signed:true});
//     res.cookie("type","chapri",{signed:true});
//     res.send("root");
// })
// app.get("/verify",(req,res)=>{
//     console.log(req.signedCookies)
//     res.send('verifyes')
// })
// app.get("/",(req,res)=>{
//     console.log(req.cookies);
//     res.send("main root mf....")
// })

//..express sessions ..........................................................................................

app.use(session({
    secret:"mysecretstring",
    resave:false,
    saveUninitialized:true
}));
app.use(flash());

app.get("/register",(req,res)=>{
    let{name = "random"} = req.query;
    req.session.name = name;
    req.session.greet = req.query
    req.flash("succes","first flash");
    console.log(req.session)
    res.redirect("/hello");
})
app.get("/hello",(req,res)=>{
    res.locals.msg=req.flash("succes")
    res.render("listings/random.ejs",{name:req.session.name})
})

// app.get("/test",(req,res)=>{
//     console.log(req.session)
//     if(req.session.c) req.session.c++;
//     else req.session.c = 1;


//     if(req.session.c==5){
//         res.send("to much request")
//     }
//     else
//     res.send(`${req.session.c} is the test`)
// })

app.listen(3000,()=>{
    console.log("running the shit");
})