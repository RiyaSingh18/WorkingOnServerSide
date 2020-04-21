var express=require("express");
var app=express();

app.get("/",function(req,res)
{
    res.send("site Index page")
})
app.get("/getproducts",function(req,res){
    res.send("Requesting Products data");
})
app.listen(8080);
console.log("server started:http://127.0.0.1:8080");