var express = require('express');
var router = express.router();

var userCtrl = require('../controllers/user.controller.js');

router
.route('/profiles')
.get(userCtrl.usersGetAll);

module.exports = router;