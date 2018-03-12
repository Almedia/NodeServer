//import mantiginda calısıyor
var mongoose=require("mongoose");

var userSchema=new mongoose.Schema({
    email:String,
    password:String,
    name:String,
    description:String
});

module.exports=mongoose.model('User',userSchema);
