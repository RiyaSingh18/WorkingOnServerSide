var fs=require("fs");
//Read by asynchronous approach
fs.readFile("help.txt",function(err,data)
{
    if(!err)
    {
        console.log(data.toString());
    }
    else{
        console.log(err);
    }
})
console.log("read complete");