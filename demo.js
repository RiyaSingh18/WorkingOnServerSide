var fs=require("fs");
//read with synchronous approach
var data=fs.readFileSync("help.txt");
console.log(data.toString());
console.log("read completed");