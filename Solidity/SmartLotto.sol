pragma solidity ^0.4.13;

contract SmartLotto{
    address public owner = msg.sender;
    uint public N = 5;
    uint public n;
    address[] public sender;
    uint[] public recvEther;
    uint public totalEther;
    uint[] blockTimeStamp;
    uint256[] blockNumber;
    address[] public winners;
    uint public prize;
    uint[] public prizes;
    
    function ()public payable{
        uint eth;
        eth = msg.value;
        if(eth < 0.001 ether) revert();
        sender.push(msg.sender);
        recvEther.push(msg.value);
        blockTimeStamp.push(block.timestamp);
        //blockHash.push(block.blockhash(block.number));
        
        totalEther += eth;
        n++;
        if((n % N) == 0){
            uint seed = block.timestamp;    //uint(blockHash[blockHash.length - 1]);
            uint winner = (seed % N) + n - N;
            
            winners.push(sender[winner]);
            prize = this.balance/10*8;
            prizes.push(prize);
            sender[winner].transfer(prize);
            owner.transfer(this.balance);
            //selfdestruct(owner);
        }
    }
    
    function getLastSender() public constant returns(address[]){
        return sender;
    }
    
    function getRecvEther() public constant returns(uint[]){
        return recvEther;
    }
    
    function getBlockTimeStamp() public constant returns(uint[]){
        return blockTimeStamp;
    }
    
    function getBalance() public constant returns(uint){
        return this.balance;
    }
    
    function close() public{
        if (owner != msg.sender) revert();
        selfdestruct(owner);
    }
}