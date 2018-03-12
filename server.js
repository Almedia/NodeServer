var express=require("express")
var cors=require("cors")
var bodyParser=require("body-parser")
var mongodB=require("mongoose")
var jwt=require("jwt-simple")
var Post=require("./models/Post")
var User=require("./models/User")
var auth=require("./auth")


//bu file dosyasında  middleware yapılanmasını kurguluyoruz;

var app=express()

app.use(cors());
app.use(bodyParser.json())

mongodB.connect("mongodb://Admin:admin12345@ds111299.mlab.com:11299/socialdb",(err)=>{
    if(!err){
        console.log("connected to mongo");
    }
})

app.post("/post",(req,res)=>{
    var postData=req.body;

    var post=new Post(postData);

    post.save((error,response)=>{
        if(error){
            console.error(error);
            return res.status(500).send({message:'Post save exception'});
        }
        if(response){
            return res.status(200).send({message:'Success'});
        }

    });

});
app.use("/auth",auth);
app.listen(3000);