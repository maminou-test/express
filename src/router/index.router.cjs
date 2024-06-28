const express = require('express');
const router = express.Router();


router.use('/cycle', require('./cycle.router.cjs'))

module.exports = router;