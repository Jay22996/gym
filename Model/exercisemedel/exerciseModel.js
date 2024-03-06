var mongoose = require('mongoose');

var exercise_schema = new mongoose.Schema({
    exercise_name : {type : String},
    exercise_Video : {type : String},
    calo_burned : {type : Number}
})

module.exports = mongoose. model('all_exercise',exercise_schema);