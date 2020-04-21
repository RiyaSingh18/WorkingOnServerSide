var mongoClient=require("mongodb").MongoClient;
var express=require("express");
var app=express();
var url="http://mongodb:127.0.0.1:27017";

app.get("/getProducts",function(req,res){
mongoClient.connect(url,function(err,server){
    if(!err){
    var database=server.db("angular8");
    database.collection("tblProducts").find({}).toArray(function(err,documents){
if(!err){
    res.send(documents);
}
    })
    }
    else{
        console.log(err)
    }
})
})
app.listen(8080)
{
    console.log("server listening on:http:127.0.0.1:27017");
}