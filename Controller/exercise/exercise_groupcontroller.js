var exercise = require("../../Model/exercisemedel/exercise_groupmodel");

exports.exercise_group = async (req, res) => {
    try {
        var gym_num = req.params.gym_num;
        var exercise_item_id1 = req.params.item_id;
        req.body.gym_num = gym_num;

        const existingExerciseGroup = await exercise.findOne({ gym_num });

        if (existingExerciseGroup) {
    
            existingExerciseGroup.exercise_list.push({ exercise_item_id: exercise_item_id1 });
            await existingExerciseGroup.save();

            return res.status(200).json({
                status: "exegroup updated",
                data: existingExerciseGroup
            });
        } else {
            const newExerciseGroup = new exercise({
                gym_num,
                exercise_list: [{ exercise_item_id: exercise_item_id1 }],
            });

            const savedExerciseGroup = await newExerciseGroup.save();

            return res.status(201).json({
                status: "exegroup inserted",
                data: savedExerciseGroup
            });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: "error",
            error: error.message
        });
    }
};

exports.exercise_groupfind = async (req, res) => {

    var data = await exercise.find().populate("gym_num").populate("exercise_list.exercise_item_id")
    res.status(200).json({
        status: "group find",
        data
    })
}

exports.exercise_groupdelete = async (req, res) => {

    var id = req.params.id
    var data = await exercise.findByIdAndDelete(id)
    res.status(200).json({
        status: "group find",
        data
    })
}

exports.exercise_groupupdate = async (req, res) => {
    var id = req.params.id
    var data = await exercise.findByIdAndDelete(id,req.body)
    res.status(200).json({
        status: "group find",
        data
    })
}





