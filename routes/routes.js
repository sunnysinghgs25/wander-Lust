const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const error = require("../utils/Error.js");
const {listingSchema,reviewSchema} = require("../schema.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js")
const ejs = require("ejs");

const validateListing  = (req,res,next)=>{
    
    const result = listingSchema.validate(req.body);
    if(result.error) {
        let errMsg = result.error.details.map((el)=>el.message).join(",");
        throw new error(400,errMsg);
        
    }
    else next();
}


router.get("/",wrapAsync(async(req,res,next)=>{
    const allLisiting  = await Listing.find({});
    res.render("listings/index.ejs",{allLisiting});
    
}));
/* new route*/
router.get("/new",(req,res,next)=>{
    res.render("listings/new.ejs");
})
// get specific;
router.get("/:id",wrapAsync(async(req,res,next)=>{
    let {id} = req.params;
    const listings = await Listing.findById(id).populate("review");
    if(!listings){
        req.flash("error","No such listing exist");
        res.redirect('/listing');
    }
    res.render("listings/show.ejs",{listings});
}))
// post route here we add new listing data 

router.post("/",validateListing,wrapAsync(async(req,res,next)=>{

        const newListing =  new Listing(req.body.listing);
        await newListing.save();
        req.flash("Success","new Listing Created")
        console.log("1");
        res.redirect("/listing");
}));
//edit
router.get("/:id/edit",wrapAsync(async(req,res,next)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash("error","No such listing exist");
        res.redirect('/listing');
    }
    res.render("listings/edit.ejs",{listing});
}))
router.put("/:id",wrapAsync(async(req,res,next)=>{
    let{id} = req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    req.flash("updated","listing updated");
    res.redirect(`/listing/${id}`)
}))
//edit ends here
router.delete("/:id",wrapAsync(async(req,res,next)=>{
    let {id} = req.params;
    const del  = await Listing.findByIdAndDelete(id);
    req.flash("Deleted","Listing Deleted")
    console.log(del);
    res.redirect("/listing");
}))

module.exports = router;