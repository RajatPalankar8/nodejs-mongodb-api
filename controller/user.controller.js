const userModel = require('../model/user.model');

exports.register = async(req,res)=>{
    try{
        const username = req.body.username;
        const password = req.body.password;
        const user = req.query.username;
        console.log("username: ",username,"password:  ",password);

        var createUser = await userModel.create({username,password});
        createUser.save();
        console.log("User Created Successfully");
        res.json({success:true,message:"User Created Successfully"});

    }catch(e){
        throw e;
    }
   

}

exports.login = async(req,res)=>{
    
}