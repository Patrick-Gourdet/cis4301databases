var express = require('express');
var router = express.Router();

var userCtrl = require('../controllers/users.controller.js');

router
.route('/profiles')
.get(userCtrl.usersGetAll);

router
.route('/profiles/:USER_NAME')
.get(userCtrl.usersGetOne);

module.exports = router;