const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/urlShortner",{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("mongoose connected sucessfully...");
}).catch((e)=>{
    console.log(e);
})