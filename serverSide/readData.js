var mongoClient=require("mongodb");

var serverUrl="mongodb://127.0.0.1:27017";
mongoClient.connect(serverUrl,function(err,clientobj)
{
    if(!err)
    {
        var database=clientobj.db("angular8");
        database.collection("tblProducts").find({}).toArray(function(err,document)
        {
            if(!err)
            {
                console.log(document);
            }
                    
                    else{
                        console.log(err);
                    }
            
        })
    }
    else{
        console.log(err);
    }
    
})