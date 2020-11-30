const mongoose=require("mongoose");
const shortId=require("shortid");

const urlSchema=new mongoose.Schema({
    full:{
        type:String,
        required:true
    },
    short:{
        type:String,
        required:true,
        default: shortId.generate
    }
})

const urlShortner=new mongoose.model("urlShortner",urlSchema);

module.exports=urlShortner;