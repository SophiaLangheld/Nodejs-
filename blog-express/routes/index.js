var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {     // änglich wie: method === 'GET' && req.path === '/api/blog/list'
  res.render('index', { title: 'Express' });
});

module.exports = router;
