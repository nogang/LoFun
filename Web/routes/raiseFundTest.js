var express = require('express');
var router = express.Router();
var fs = require('fs');
var solc = require('solc');
var Web3 = require('web3');
var web3 = new Web3();
//var Pudding = require('ether-pudding');
web3.setProvider(new web3.providers.HttpProvider('https://rinkeby.infura.io/gGHwulfhVK8ouWn8aZMz'));	//'http://192.168.1.5:8545'

//var code = fs.readFileSync('simplestorage.sol').toString();
//var contract =  web3.eth.compile.solidity(code);
function teste (){
	alert("ccc");

}
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('raiseFundTest', { title: 'raiseFundTest'
						});
});


router.post('/', function(req, res) {
	console.log("a");
	var input = fs.readFileSync('../../LoFun/Solidity/FundBasic.sol',{encoding: 'utf8'}).toString();//.replace(/\n/g,' ');
	console.log("b");
	//var compiled = solc.compile(source, 1);
	console.log(input);
	//console.log(compiled);
	console.log("d");
	//console.log(compiled);

	//var input = 'contract x { function g() {} }';
	// Setting 1 as second paramateractivates the optimiser
	var output = solc.compile(input, 1);
	for (var contractName in output.contracts) {
	    // code and ABI that are needed by web3
	    console.log(contractName + ': ' + output.contracts[contractName].bytecode);
	    console.log(contractName + '; ' + JSON.parse(output.contracts[contractName].interface));
	}

	//if(!compiled.contracts["FundBasic"]) {
//    console.log('Contract must have same name as file!');
//}
	//console.log(req.body.fundingname);
	//res.send("ddd");


});

module.exports = router;
