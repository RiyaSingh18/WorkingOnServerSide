var mongoClient=require("mongodb");
var serverUrl="mongodb://127.0.0.1:27017";
mongoClient.connect(serverUrl,function(err,clientObj)
{
    if(!err)
    {
        console.log("connected successfully");
    }
    else{
        console.log(err);
    }
})