const express = require('express');
const { mongoose } = require('mongoose');
const router = express.Router();
require("./../models/Usuario");

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('users/index');
});

module.exports = router;