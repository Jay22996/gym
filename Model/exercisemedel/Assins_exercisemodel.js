var mongoose = require('mongoose');

var assing_exercise_schema = new mongoose.Schema({

    group_id:{type: mongoose.Schema.Types.ObjectId,ref:'exercise_group'},
    user_id:{type: mongoose.Schema.Types.ObjectId,ref:'User_register'},
    date:{ type: Date, default: Date.now },
    exe_group_list:{type: mongoose.Schema.Types.ObjectId,ref:'exercise_group.exercise_list.'}

})

module.exports = mongoose. model('assing_exercise',assing_exercise_schema);