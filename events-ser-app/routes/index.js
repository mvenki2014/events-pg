var express = require('express');
var router = express.Router();
var {POOL, Client} = require('pg');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/users', function(req, res, next) {
  res.send({type: "POST", data:"user data object"});
});
module.exports = router;
