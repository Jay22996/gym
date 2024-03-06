var express = require('express');
const { register, login, logout, otp, updateuser, finduser } = require('../Controller/userController');
var router = express.Router();
var multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
var upload = multer({ storage: storage })

/* GET users listing. */
router.post('/register',upload.single('profile_photo'),register)
router.get('/otp',upload.single('profile_photo'),otp)
router.get('/login',login)
router.get('/logout',logout)
router.get('/updateuser/:id',upload.single('profile_photo'),updateuser)
router.get('/finduser',finduser)



module.exports = router;
