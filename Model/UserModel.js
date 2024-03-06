var mongoose = require('mongoose');

var User_schema = new mongoose.Schema({
    name : {type : String},
    email : {type : String},
    password : {type : String},
    profile_photo :{type : String},
    bio : {type : String},
    link: {type : String},
    mobile_number:{type : String},
    role : {type : String},
    dob : {type : Date},
    end_date : {type : Date},
    gym_number : {type: mongoose.Schema.Types.ObjectId,
    ref:'gym_detail'}
})

module.exports = mongoose. model('User_register',User_schema);