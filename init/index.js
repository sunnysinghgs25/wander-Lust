const mongoose = require("mongoose");
const Listing = require("../models/listing.js")
const initData = require("../init/data.js");
main().then((res)=>{
    console.log(`data base connected`);
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/tourtom');
}
const initDB = async()=>{
    await Listing.deleteMany({});
    console.log("1");
   const res =  await Listing.insertMany(initData.data);
    console.log(res);
    console.log("data was initialized");
}
initDB();


