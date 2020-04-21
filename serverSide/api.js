//importing library
var mongoClient=require("mongodb").MongoClient;
var express=require("express");
var bodyParser=require("body-parser");
var cors=require("cors");

//configure app
var app=express();
app.use(cors());

//configuring body Parser

app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(bodyParser.json());
//configuring url
var url="mongodb://127.0.0.1:27017";
app.get("/getproducts",function(req,res)
{
mongoClient.connect(url,function(err,server)
{
    if(!err)
    {
var database=server.db("angular8");
database.collection("tblProducts").find({}).toArray(function(err,documents){
    if(!err)
    {
        res.send(documents);
    }
})
    }
})
})
app.post("/addProducts",function(req,res){
    mongoClient.connect(url,function(err,server){
        if(!err)
        {
            var database=server.db("angular8")
            var data={
                productId:req.body.productId,
                name:req.body.name,
                price:req.body.price,
                IsInStock:req.body.IsInStock,
                photo:req.body.photo
            };
            database.collection("tblProducts").insert(data,function(err,result){
                if(!err)
                console.log("Record Inserted");
                else{
                    console.log(err);
                }
            })

        }
    })
})
app.post('/deleteproducts',function(req,res){
    mongoClient.connect(url,function(err,server){
        if(!err){
            var database=server.db("angular8");
            var data={
     productId:req.body.productId

            }

database.collection("tblProducts").deleteOne(data,function(err,result){
    if(!err)
    console.log("deleted successfully")
    else{
        console.log(err);
    }
})
        }
})
});
app.listen(8080)
console.log("server started listening");