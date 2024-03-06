var express = require('express');
var router = express.Router();
var multer = require('multer');
const { addexercise, updateexercise, findexercise } = require('../Controller/exercise/Allexercisecontroller');
const { exercise_group, exercise_groupfind, exercise_groupdelete, exercise_groupupdate } = require('../Controller/exercise/exercise_groupcontroller');
const { exercise_item, exercise_itemfind, exercise_itemdelete } = require('../Controller/exercise/exercise_itemcontroller');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/Video')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
var upload = multer({ storage: storage })

router.post('/addexercise',upload.single('exercise_Video'),addexercise)
router.post('/updateexercise/:id',upload.single('exercise_Video'),updateexercise)
router.get('/findexercise',findexercise)
router.post('/exegroupadd/:gym_num/:item_id',exercise_group)
router.get("/exgroupfind",exercise_groupfind)
router.get('/exgroupdelete/:id',exercise_groupdelete)
router.get('/exgroupupdate/:id',exercise_groupupdate)
router.post('/exeitemadd/:gid/:gnid',exercise_item)
router.get("/exeitemfind",exercise_itemfind)
router.get("/exeitemdelete",exercise_itemdelete)





module.exports = router;