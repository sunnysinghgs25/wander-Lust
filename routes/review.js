const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync.js");
const error = require("../utils/Error.js");
const {listingSchema,reviewSchema} = require("../schema.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js")
const ejs = require("ejs");

const validateReview = (req,res,next)=>{
    const result = reviewSchema.validate(req.body);
    if(result.error) {
        let errMsg = result.error.details.map((el)=>el.message).join(",");
        throw new error(400,errMsg);
        
    }
    else next();
}
router.post("/",validateReview,wrapAsync(async(req,res)=>{
    let listing = await Listing.findById(req.params.id)
    console.log(req.body.review);
    console.log(req.body);
    let newReview = new Review(
        req.body.review
    )
    listing.review.push(newReview);
     await newReview.save();
     await listing.save();
     req.flash("added","Review Added");
     console.log("saveed");
     res.redirect(`/listing/${listing._id}`)

}))
router.delete("/:reviewId",wrapAsync(async(req,res,next)=>{
    let {id,reviewId} = req.params;
    let listing  = await Listing.findByIdAndUpdate(id,{$pull:{review:reviewId}});
    await Review.findByIdAndDelete(reviewId);
    req.flash("Rdeleted","Review deleted");
    res.redirect(`/listing/${id}`)

})) 
module.exports = router;