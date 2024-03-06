var gym = require("../Model/gymmodel");
var Storage = require("node-persist");
Storage.init()

exports.addgym = async (req, res) => {

    var data = await gym.create(req.body)
    res.status(200).json({
        status: "gym inserted",
        data
    })
}

exports.ratinggym = async (req, res) => {
    try {
        const user_id = await Storage.getItem('user_id');
        var _id = req.params.id;

        const data = await gym.findByIdAndUpdate(_id,
            {
                $push: {
                    rating: {
                        user_id: user_id,
                        rating_range: req.body.rating_range
                    }
                }
            }
        );

        const data1 = await gym.aggregate([
            {
                $unwind: "$rating"
            },
            {
                $group: {
                    _id: "$rating.user_id",
                    averageRating: {
                        $avg: "$rating.rating_range"
                    }
                }
            }
        ]);

        const data2 = await gym.findByIdAndUpdate(_id,{"averageRating":data1[0].averageRating})

        res.status(200).json({
            status: "rating updated",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: "error",
            message: "Internal server error"
        });
    }
};


exports.updategym = async (req, res) => {

    var _id = req.params.id;

    var data = await gym.findByIdAndUpdate(_id,req.body)
    res.status(200).json({
        status: "gym updated",
        data
    })
}

exports.detelegym = async (req, res) => {

    var _id = req.params.id;

    var data = await gym.findByIdAndDelete(_id)
    res.status(200).json({
        status: "gym Delete",
        data
    })
}

exports.findretting = async (req, res) => {

    var id= req.params.id
    var data = await gym.findById(id,{rating:1}).populate("rating.user_id")
    res.status(200).json({
        status: "rating find",
        data
    })
}




