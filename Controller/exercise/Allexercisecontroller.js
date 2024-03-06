var exercise = require("../../Model/exercisemedel/exerciseModel");

exports.addexercise = async (req, res) => {

    req.body.exercise_Video = req.file.originalname
    var data = await exercise.create(req.body)
    res.status(200).json({
        status: "exercise inserted",
        data
    })
}

exports.updateexercise = async (req, res) => {

    var id=req.params.id
    req.body.exercise_Video = req.file.originalname
    var data = await exercise.findByIdAndUpdate(id,req.body)
    res.status(200).json({
        status: "exercise updated",
        data
    })
}

exports.findexercise = async (req, res) => {

    var data = await exercise.find()
    res.status(200).json({
        status: "exercise find",
        data
    })
}

exports.updateexercise = async (req, res) => {

    var id=req.params.id
    var data = await exercise.findByIdAndDelete(id)
    res.status(200).json({
        status: "exercise delete",
        data
    })
}

