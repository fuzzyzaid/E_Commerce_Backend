const userModel = require("../models/userModel.js");

const signupController = async (req, res) => {
  try {
    const isUser = await userModel.findOne({ email: req.body.email });
    if(isUser){
      console.log(isUser)
        res.json("User Already Exists");
    }
    else{
        const userdata = {
            fullName: req.body.fullName,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            password: req.body.password,
          };
          console.log(userdata)
          await userModel.create(userdata);
          res.json("User created successfully");
      }
  } catch (error) {
    console.error(error);
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = signupController;
