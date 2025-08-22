const { Sendverificationcode } = require("../middleware/Email");
const {UserModel} = require("../models/UserModel");
const bcrypt = require("bcrypt");


const register = async (req, res) => {
  try {
    let { email, name, password } = req.body;
    if (!email || !name || !password) {
      return res
        .status(400).json({ status: false, message: "All fildes are required" });
    }

    const Existsuser = await UserModel.findOne({ email });
    if (Existsuser) {
      return res
        .status(400) .json({ status: false, message: "USer Already Exists Please login" });
    }
    let hashpassword = await bcrypt.hashSync(password, 10);
    const VerificationCode = Math.floor(100000 + Math.random() * 900000).toString()
    const user = await  new UserModel({
      email,
      name,
      password: hashpassword,
      VerificationCode
    });
    await user.save();
    Sendverificationcode(user.email,VerificationCode)
    return res.status(200).json({Success:true,message:"User register successfuly",user})
  } catch (error) {
    console.log(error)
    return res.status(500).json({Success:false,message:"Internal server error",error})
  }
};

const VerifyEmail = async(req,res)=>{
  try {
    const {code} = req.body;
    const user = await UserModel.findOne({
      VerificationCode:code
    })
    if(!user){
      return res.status(400).json({success:false,message:"Invalid od Expire code"})
    }
    user.isVerifyed=true;
    user.VerificationCode=undefined;
    await user.save();
    return res.status(200).json({Success:true,message:"Email Verified successfuly",user})

  } catch (error) {
    console.log(error)
    return res.status(500).json({Success:false,message:"Internal server error",error})
  
  }
}




module.exports =  {register,VerifyEmail} ;
