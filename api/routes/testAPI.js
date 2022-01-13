var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/testAPI', function(req, res, next) {
  res.send('test data');
});


module.exports = router;