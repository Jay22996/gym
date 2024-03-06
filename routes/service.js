var express = require('express');
const { addservice, updateservice, findservice } = require('../Controller/servicecontroller');
var router = express.Router();

router.post('/addservice/:id',addservice)
router.get('/updateservice/:id',updateservice)
router.get('/findservice',findservice)



module.exports = router;