var User=require("./models/User")

var express=require("express")

var router=express.Router();

router.get('/', function (req, res) {
    res.send('Wiki home page');
  })

router.post("/",(req,res)=>{
    var postData=req.body;

    var user=new User(postData);

    user.save((error,response)=>{
        if(error){
            console.error(error);
            return res.status(500).send({message:'Post save exception'});
        }
        if(response){
            return res.status(200).send(user);
        }
    });

});

module.exports=router;