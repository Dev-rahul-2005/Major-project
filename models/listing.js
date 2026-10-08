const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title:{
        type:String,
        requireed:true,
    }, 
    description: String,
   image: {
        filename: { type: String, default: "listingimage" },
        url: {
            type: String,
            default: "https://plus.unsplash.com/premium_photo-1683917068755-c2890e4824e1?q=80&w=2070&auto=format&fit=crop",
            set: (v) => v === "" ? "https://plus.unsplash.com/premium_photo-1683917068755-c2890e4824e1?q=80&w=2070&auto=format&fit=crop" : v,
        }
    },
    price:Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing",listingSchema);
module.exports = Listing;