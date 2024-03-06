var express = require('express');
const { addgym, ratinggym, updategym, detelegym, findretting } = require('../Controller/gymcontroller');
var router = express.Router();

router.post('/addgym',addgym)
router.post('/ratinggym/:id',ratinggym)
router.post('/updategym/:id',updategym)
router.post('/detelegym/:id',detelegym)
router.get('/findretting/:id',findretting)

module.exports = router;
