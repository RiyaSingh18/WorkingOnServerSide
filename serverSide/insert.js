const MongoClient=require('mongodb').MongoClient;
var serverUrl="mongodb://127.0.0.1:27017";
MongoClient.connect(serverUrl,function(err,server){
    if(!err)
    {
        var database=server.db("angular8");
        var data={
            productId:3,
            name:"NikeCasuals",
            price:15000,
            IsInStock:false,
            photo:"assets/shoes5.jpeg"
        }
        database.collection("tblProducts").insert(data,function(err,result)
        {
            if(!err)
            {
                console.log("Record Inserted")
            }
            else{
                console.log(err);
            }
        })
        
    }else{
        console.log(err);
    }
})