pragma solidity ^0.4.8;


contract FundBasic {
    address public owner;
    address public provider;
    address public beneficiary;
    address public candidateBeneficiary;
    address public candidateOwner;
 
    DeadLine public deadLine;
    uint256 public fundingGoal;
    uint256 public fundingCurrent;
    mapping(address => Status) public memberStatus;
    address[] public memberList;
    uint8 isClose;
    
    modifier onlyOwner() {if (msg.sender!= owner) revert(); _;}
    modifier onlyProvider() {if (msg.sender!= provider) revert(); _;}
    modifier onlyBeneficiary() {if (msg.sender!= beneficiary) revert(); _;}
    modifier onlyCandidateOwner() {if (msg.sender!= candidateOwner) revert(); _;}
    
    struct Status {
        uint256 donation;
        uint8 grade;
    }
    
    struct DeadLine{
        uint year;
        uint month;
        uint day;    
    }
    function FundBasic(uint16 _year, uint8 _month, uint8 _day, uint256 _fundingGoal, address _provider) {
        // it exist timecheck ploblem so we have to check date at server, 
        provider = msg.sender; //address(0xca35b7d915458ef540ade6068dfe2f44e8fa733c);
        //if (msg.sender!= owner) revert();
        isClose = 0;
        
        owner = msg.sender;
        beneficiary = msg.sender;
        
        deadLine = DeadLine({
            year : _year,
            month : _month,
            day : _day
        });
        fundingGoal = _fundingGoal;
        fundingCurrent = 0;
    }

    function () payable {
        if (msg.value == 0) revert();
        if (memberStatus[msg.sender].donation == 0) memberList.push(msg.sender);
                
        memberStatus[msg.sender].donation += msg.value;
        fundingCurrent += msg.value;
        
        updateGrade(msg.sender);
    }
    
    function update(uint16 _year, uint8 _month, uint8 _day) {
        if (checkDeadLine( _year,  _month,  _day) == 1){
            closeFund();
        }
    }
    
    function checkDeadLine(uint16 _year, uint8 _month, uint8 _day) returns(uint8){
        if (deadLine.year > _year) return 1;
        if (deadLine.year == _year){
            if (deadLine.year > _month) return 1;
            if (deadLine.month == _month) {
                if (deadLine.day >= _day) return 1;
            }
        }
        return 0;
    }
    
    function updateGrade(address member) {
        
    }
    
    function setOwner(address _owner) onlyOwner{
        candidateOwner = _owner;
        
    }
    
    function confirmOwner() onlyCandidateOwner {
        owner = candidateOwner;
    }
    
    function setBeneficiary(address _beneficiary) onlyOwner{
        candidateBeneficiary = _beneficiary;
    }
    
    function confirmBeneficiary() onlyProvider {
        beneficiary = candidateBeneficiary;
    }
    
    function withrow() onlyBeneficiary{
        if (isClose== 1) {
            beneficiary.transfer(this.balance);
        }
    }
    
    function closeFund(){
        isClose = 1;
    }
}