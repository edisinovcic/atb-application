pragma solidity >=0.4.21 <0.6.0;

contract Application {

    address manager;
    string teamName;
    uint32 teamSize;

    modifier restricted {
        require(manager == msg.sender, "Only manager can update!");
        _;
    }

    constructor() public {
        manager = msg.sender;
        
    }

    function register(string memory _teamName, uint32 _teamSize) public restricted {
        teamName = _teamName;
        teamSize = _teamSize;
    }
    
    function getApplication() public view returns (Application) {
        return this;
    }
    
    function getApplicationData() public view returns (string memory, uint32, address) {
        return (teamName, teamSize, manager);
    }
}