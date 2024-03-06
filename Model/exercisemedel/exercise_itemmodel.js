var mongoose = require('mongoose');

var exercise_item_schema = new mongoose.Schema({

    exercise_group_id : {type: mongoose.Schema.Types.ObjectId,ref:'exercise_group'},
    gym_number : {type: mongoose.Schema.Types.ObjectId,ref:'gym_detail'},
    reps : [{type : String}],
    cal_burn : {type : Number},
    time: { type: Date, default: Date.now },
    exercise_number : {type : Number}
})

module.exports = mongoose. model('exercise_item',exercise_item_schema);