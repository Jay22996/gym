var mongoose = require('mongoose');

var exercise_group_schema = new mongoose.Schema({
    group_name : {type : String},
    gym_num : {type: mongoose.Schema.Types.ObjectId,ref:'gym_detail'},
    exercise_list : [{
        exercise_item_id : {type: mongoose.Schema.Types.ObjectId,ref:'exercise_item'},
        perform:{type : String,default:"pending"}
    }]
})

module.exports = mongoose.model('exercise_group',exercise_group_schema);