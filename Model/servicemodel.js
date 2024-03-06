var mongoose = require('mongoose');

var servic_schema = new mongoose.Schema({
    gym_number : {type: mongoose.Schema.Types.ObjectId,ref:'gym_detail'},
    services : [{type : String}]
})

module.exports = mongoose. model('servic_detail',servic_schema);