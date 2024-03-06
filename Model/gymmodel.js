var mongoose = require('mongoose');

var gym_schema = new mongoose.Schema({
    gym_name : {type : String},
    gym_number : {type : Number},
    time : {type : String},
    address:{type : String},
    averageRating:{type : Number},
    rating : [{
        user_id:{type: mongoose.Schema.Types.ObjectId,
        ref:'User_register'},
        rating_range:{type:Number}
    }]

})

module.exports = mongoose. model('gym_detail',gym_schema);