  var mysql=require("mysql");
  var express=require("express");
  var bodyParser=require("body-parser");
  var cors=require('cors');

  var app=express();
  app.use(cors());
  app.use(bodyParser.urlencoded({
      extended:true
  }))

  app.get("/getstudents",function(req,res){

  var con=mysql.createConnection({
      user:"root",
      password:"",
      database:"studentsrecord",
      host:"localhost"
  })
  con.connect(function(err,result){
      if(err){
          console.log("db con error");
      }
          var q="select * from students";
    
  con.query(q,function(err,result){
      if(!err)
      {
          res.send(result);
      }
    })

  })
})
app.post("/addproducts",function(req,res){
    var id=req.body.id;
    var name=req.body.name;
    var address=req.body.address;
    var phone=req.body.phone;

  var con=mysql.createConnection({
      'host':'localhost',
      'user':'root',
      'password':'',
      'database':'studentsrecord'
  })  
  con.connect(function(err,result){
    if(err)
    {
        console.log("db con error");
    }
  })
})
app.listen(8080);
console.log("server is listening");