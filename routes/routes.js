'use strict'

var express = require('express');

var controller = require('../controllers/send')


var api = express.Router();

api.post('/send', controller.send);

module.exports = api;


