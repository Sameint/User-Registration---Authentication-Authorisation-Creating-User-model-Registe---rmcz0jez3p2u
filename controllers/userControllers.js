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
    const { name, email, password } = req.body;

    try {
      // Check if user with same email already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(404).json({ error: "User validation failed: email: Email already exists" });
      }
  
      // Create new user with provided data
      const newUser = new User({
        name,
        email,
        password
      });
  
      // Save the user to the database
      const savedUser = await newUser.save();
  
      // Return the ObjectId of the newly created user
      return res.status(200).json({ userId: savedUser._id });
    } catch (error) {
      // Return the error message if there's any error during registration
      return res.status(404).json({ error: error.message });
    }
}

module.exports = { registerUser };