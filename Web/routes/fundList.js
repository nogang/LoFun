var express = require('express');
var router = express.Router();

var fundlist = new Array(3);

fundlist[0] ="0x6FF25B3186371Ade81311260d237396CE7900aeD";
fundlist[1] ="0x0b67726c89ff7819e38315074280ccb8dab3b23a";
fundlist[2] ="0x1231231232232222222222222232222222222222";

console.log(fundlist);
/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('fundList', { fundList: fundlist	
							});
});

module.exports = router;

