const express = require('express');
const router = express.Router();

router.use('/fs', require('./file_sistem'));
router.use('/collection', require('./collections'));


module.exports = router;