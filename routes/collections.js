const express = require('express');
const router = express.Router();

const collectionsController = require('../controllers/collection/collections');

router.post('/', collectionsController.collection);

module.exports = router;
