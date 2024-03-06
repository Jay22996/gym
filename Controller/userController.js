var userModel = require("../Model/UserModel");
var Storage = require("node-persist");
const bcrypt = require("bcrypt");
var nodemailer = require('nodemailer');
const otpGenerator = require('otp-generator')
Storage.init()
var email = ""
var otp = ""
exports.register = async (req, res) => {

  var find = await userModel.find({ email: req.body.email });
  
  if (find.length == 1) {
    res.status(409).json({
      status: "user already is registered",
      data:find
    });
  } else {

     otp=otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false })
     email=req.body.email

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'studentcreative79@gmail.com',
          pass: 'mgvywuvapoijukrb'
        }
      });
      
      var mailOptions = {
        from: 'studentcreative79@gmail.com',
        to: `${email}`,
        subject: 'One Time Otp',
        text: `${otp}`
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
  }
};

exports.otp = async (req, res) => {
  var otp1 = req.body.otp
  
  console.log(otp1)
  if(otp===otp1){

    req.body.password = await bcrypt.hash(req.body.password,10);
    req.body.profile_photo = req.file.originalname
    req.body.email = email
    var data = await userModel.create(req.body);
    res.status(200).json({
      status: "user registered",
      data,
    });
  }else{
    res.status(200).json({
      status: "OTP Not Match"
    });
  }
  
}
exports.login = async (req, res) => {
  var find = await userModel.find({ email: req.body.email});
  var email = await Storage.getItem('email')
  console.log(email)
  if(email==req.body.email){
    res.status(200).json({
      status: "user is already logged in"
    });
  }else{
    if (find.length == 1) {
      const isPasswordMatch = await bcrypt.compare(req.body.password,find[0].password);
      if (isPasswordMatch) {
          var email = await Storage.setItem('email',find[0].email)
          var user_id = await Storage.setItem('user_id',find[0]._id)
          console.log(user_id)

          res.status(200).json({
            status: "user is logged in",
          });
      } else {
        res.status(200).json({
          status: "password does not match",
        });
      }
    } else {
      res.status(200).json({
        status: "please register",
      });
    }
  }
};

exports.logout = async (req, res) => {
  var id = await Storage.removeItem('email');
  console.log(id)
  res.status(200).json({
    status: "you are logout",
  });
};

exports.updateuser = async (req, res) => {

    var _id = req.params.id;

    var data = await userModel.findByIdAndUpdate(_id,req.body)
    res.status(200).json({
        status: "update user",
        data
    })
};

exports.finduser = async (req, res) => {

  var data = await userModel.find().populate("gym_number")
  res.status(200).json({
      status: "update user",
      data
  })
};




