var exeitem = require("../../Model/exercisemedel/exercise_itemmodel");

exports.exercise_item = async (req, res) => {

    var group_id = req.params.gid
    var gym_number = req.params.gnid
    req.body.exercise_group_id = group_id
    req.body.gym_number = gym_number

    var data = await exeitem.create(req.body)
    res.status(200).json({
        status: "add item",
        data
    })
}

exports.exercise_itemfind = async (req, res) => {

    var data = await exeitem.find().populate("exercise_group_id").populate("gym_number")
    res.status(200).json({
        status: "add item",
        data
    })
}

exports.exercise_itemdelete = async (req, res) => {

    var id = req.params.id
    var data = await exeitem.findByIdAndDelete(id)
    res.status(200).json({
        status: "add item",
        data
    })
}





