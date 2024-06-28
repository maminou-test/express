const express = require('express');
const router = express.Router();
const {Cycle} = require('../models/index')

router.get('/', async (request,response) =>{
    const query =  Cycle.findAll()
    response.status(200).json({
        "data": query
    });
})


module.exports = router;