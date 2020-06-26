var express = require('express');
var router = express.Router();
const getGeoCode = require('../utils/getGeoCode');

/* GET home page. */
router.get('/', function(req, res, next) {
  const {city} = req.query
  console.log(city);
  if(!city){
    return  res.render('index', { title: 'Wholesome Weather' });
  } 
  const data= getGeoCode(city);
  console.log(data);
  return  res.render('index', { title: 'Wholesome Weather' });
});

module.exports = router;
