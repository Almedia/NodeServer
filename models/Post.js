//import mantiginda calısıyor
var mongoose=require("mongoose");
///foreign key yapısı kuruyoruz 
var postSchema=new mongoose.Schema({
    message:String,
    author:{ type: mongoose.Schema.Types.ObjectId,ref:'User'}
});

module.exports=mongoose.model('Post',postSchema);
