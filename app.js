const express=require("express");
const app=express();
require("./db/connection");
const urlShortner=require("./models/shortUrl");
const port=process.env.PORT || 3000;


app.set("view engine","ejs");
app.use(express.urlencoded({extended:false}));


app.get("/", async(req,res)=>{
    const shortUrls=await urlShortner.find();
    res.render("index",{shortUrls:shortUrls});
})

app.post("/shortUrls", async(req,res)=>{
   await urlShortner.create({full:req.body.fullurl});
   res.redirect("/");
})

app.get("/:url",async(req,res)=>{
    const link=await urlShortner.findOne({short:req.params.url});
    if(link==null){
        return res.status(404).send("Can Not Found This Url");
    }
    res.redirect(link.full);
})
app.listen(port,(req,res)=>{
    console.log("connected successfully....");
})