var servis = require("../Model/servicemodel");

exports.addservice = async (req, res) => {

    var gym_number = req.params.id
    req.body.gym_number=gym_number
    var data = await servis.create(req.body)
    res.status(200).json({
        status: "service inserted",
        data
    })
}

exports.updateservice = async (req, res) => {

    var id = req.params.id
    var data = await servis.findByIdAndUpdate(id,req.body)
    res.status(200).json({
        status: "service update",
        data
    })
}

exports.updateservice = async (req, res) => {

    var id = req.params.id
    var data = await servis.findByIdAndDelete()
    res.status(200).json({
        status: "service Delete",
        data
    })
}

exports.findservice = async (req, res) => {

    var id = req.params.id
    var data = await servis.find().populate("gym_number")
    res.status(200).json({
        status: "find service",
        data
    })
}
