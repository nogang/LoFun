var express = require('express');
var router = express.Router();

var Web3 = require('web3');
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('https://rinkeby.infura.io/gGHwulfhVK8ouWn8aZMz'));	//'http://192.168.1.5:8545'

// DB에서 펀딩 addr로 찾아서 정보 표시 필요
var name = "Simple Smart Lotto";
var content = "This will pick a winner every 100 participant. Winner can take 99% reward. You can participate by sending 0.01 ETH to the address.";
//var unit = 0.01;
//var period = ""     

var contractAddress = '0x6FF25B3186371Ade81311260d237396CE7900aeD';
var abi = '[ { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "winners", "outputs": [ { "name": "", "type": "address", "value": "0x85f37d9cd74e39a0aa220e0104410c5f4c611d1a" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "recvEther", "outputs": [ { "name": "", "type": "uint256", "value": "100000000000000000" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "prizes", "outputs": [ { "name": "", "type": "uint256", "value": "1120000000000000000" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "prize", "outputs": [ { "name": "", "type": "uint256", "value": "600000000000000000" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [ { "name": "", "type": "address", "value": "0x15697964ce7216fc8845001be0f9077e5eb2a267" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "sender", "outputs": [ { "name": "", "type": "address", "value": "0x85f37d9cd74e39a0aa220e0104410c5f4c611d1a" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "totalEther", "outputs": [ { "name": "", "type": "uint256", "value": "2660000000000000000" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getRecvEther", "outputs": [ { "name": "", "type": "uint256[]", "value": [ "100000000000000000", "1000000000000000000", "100000000000000000", "100000000000000000", "100000000000000000", "100000000000000000", "100000000000000000", "100000000000000000", "110000000000000000", "100000000000000000", "100000000000000000", "110000000000000000", "120000000000000000", "120000000000000000", "300000000000000000" ] } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getPrizes", "outputs": [ { "name": "", "type": "uint256[]", "value": [ "1120000000000000000", "408000000000000000", "600000000000000000" ] } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getLastSender", "outputs": [ { "name": "", "type": "address[]", "value": [ "0x85f37d9cd74e39a0aa220e0104410c5f4c611d1a", "0x15697964ce7216fc8845001be0f9077e5eb2a267", "0x72ce752aa8cebd73743d48f04be7fe8427d42ce3", "0x72ce752aa8cebd73743d48f04be7fe8427d42ce3", "0x72ce752aa8cebd73743d48f04be7fe8427d42ce3", "0x6f357f0353e12b933e6caa46dd8cfd5b3713bb62", "0x85f37d9cd74e39a0aa220e0104410c5f4c611d1a", "0x72ce752aa8cebd73743d48f04be7fe8427d42ce3", "0x15697964ce7216fc8845001be0f9077e5eb2a267", "0x6f357f0353e12b933e6caa46dd8cfd5b3713bb62", "0x85f37d9cd74e39a0aa220e0104410c5f4c611d1a", "0x6f357f0353e12b933e6caa46dd8cfd5b3713bb62", "0x72ce752aa8cebd73743d48f04be7fe8427d42ce3", "0x15697964ce7216fc8845001be0f9077e5eb2a267", "0x6f357f0353e12b933e6caa46dd8cfd5b3713bb62" ] } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getBlockTimeStamp", "outputs": [ { "name": "", "type": "uint256[]", "value": [ "1519490061", "1519490061", "1519490331", "1519490421", "1519490496", "1519490571", "1519490841", "1519491111", "1519491171", "1519491261", "1519491696", "1519491741", "1519491786", "1519491831", "1519491951" ] } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "n", "outputs": [ { "name": "", "type": "uint256", "value": "15" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "N", "outputs": [ { "name": "", "type": "uint256", "value": "5" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getWinners", "outputs": [ { "name": "", "type": "address[]", "value": [ "0x85f37d9cd74e39a0aa220e0104410c5f4c611d1a", "0x6f357f0353e12b933e6caa46dd8cfd5b3713bb62", "0x15697964ce7216fc8845001be0f9077e5eb2a267" ] } ], "payable": false, "stateMutability": "view", "type": "function" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "turn", "type": "uint256" }, { "indexed": false, "name": "winner", "type": "address" }, { "indexed": false, "name": "prize", "type": "uint256" }, { "indexed": false, "name": "fee", "type": "uint256" } ], "name": "Result", "type": "event" }, { "constant": false, "inputs": [], "name": "close", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "payable": true, "stateMutability": "payable", "type": "fallback" } ]';

var participateList;

updateContract();

function updateContract() {
	var contract = web3.eth.contract(JSON.parse(abi)).at(contractAddress);
	var ParticipantList = contract.getLastSender(function(error, result) {	
	if (!error) {
		console.log(result.length);
	/*
	  console.log(result.length);
	  var cnt = 0;
	  for (var i = result.length - 1; i > result.length - 6; i--) {
	    var id = "Participant" + cnt;           
	    var text = result[i];            
	    document.getElementById(id).innerText = text;
	    cnt++;                
	*/
	 	participateList = result;
	}      
    else
    {
    	participateList = "error"
    	console.log(error);
    }
  });
}

/* GET home page. */
router.get('/:addr', function(req, res, next) {
	console.log(req.params.addr);
	res.render('participateFund',	{ 	address: req.params.addr,
										name: name,
										content: content,
										participateList: participateList
								  	});
});

module.exports = router;

