var express = require('express');
var router = express.Router();
var fs = require('fs');
var solc = require('solc');
var Web3 = require('web3');
var web3 = new Web3();
//var Pudding = require('ether-pudding');
web3.setProvider(new web3.providers.HttpProvider('https://rinkeby.infura.io/gGHwulfhVK8ouWn8aZMz'));	//'http://192.168.1.5:8545'

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('raiseFundTest', { title: 'raiseFundTest',
										lodingPage : '<div id="load" style="display:none; position:absolute; top:0px; left:0px; z-index:1;">',
										inputPage : '<div id="fundingInfo" style="display:block; position:absolute; top:0px; left:0px; z-index:1;">',
										byteCode: '0',
										abiDefinition: '0',
										tryPublishFund: 0
						});
});
//visibility:hidden <-> visible


router.post('/', function(req, res) {

	var input = fs.readFileSync('../../LoFun/Solidity/FundBasic.sol',{encoding: 'utf8'}).toString();//.replace(/\n/g,' ');
	var output = solc.compile(input, 1);

	for (var contractName in output.contracts) {
			var abiDefinition = JSON.parse(output.contracts[contractName].interface);
			console.log(contractName + ': ' + abiDefinition);

			var byteCode = output.contracts[contractName].bytecode;
			console.log(contractName + '; ' + byteCode);

			res.render('raiseFundTest', { title: 'raiseFundTest',
												lodingPage : '<div id="load" style="display:block">',
												inputPage : '<div id="fundingInfo" style="display:none">',
												byteCode: byteCode,
												abiDefinition: abiDefinition,
												tryPublishFund: 1
		  });
	}
});

module.exports = router;
