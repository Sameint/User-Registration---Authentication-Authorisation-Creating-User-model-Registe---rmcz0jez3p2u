const users   =require("../models/user.js");

/*
Post request json file structure


    obj =  {
        "name":name,
        "email":email,
        "password": password
    }

 */

//You need to complete the route of user register
//you need to register the user and return the id assign to the user.
//you will get error if user mail allready exist in that case you need to return 404 status with err message that you get.
//to look the user schema look ../models/user.js

const registerUser =async (req, res) => {
    let {name,email,password} = req.body
    obj =  {
        "name":name,
        "email":email,
        "password": password
    }
    try{
        let user = await new users(obj).save();
        res.send(user._id)
    }catch(e){
        res.status(404).send(e.message)
    }

}

module.exports = { registerUser };