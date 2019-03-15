pragma solidity >=0.4.21 <0.6.0;

contract ApplicationList {
    address[] applications;
    address manager;
    bool acceptingApplication = true;

    constructor() public {
        manager = msg.sender;
    }

    modifier restricted {
        require(msg.sender == manager, "Only manager can access");
        _;
    }

    modifier applicationsOpen {
        require(acceptingApplication == true, "Applications are no longer open! Sorry :(");
        _;
    }

    function getApplications() public view returns (address[] memory) {
        return applications;
    }

    function register(address newApplication) public applicationsOpen {
        require(isContract(newApplication));
        applications.push(newApplication);
    }
    
    function isContract(address _addr) private returns (bool isContract){
        uint32 size;
        assembly {
            size := extcodesize(_addr)
        }
        return (size > 0);
    }
        
    function finalize() public restricted {
        acceptingApplication = false;
    }

}

contract Application {

    address manager;
    string teamName;
    uint32 teamSize;

    modifier restricted {
        require(manager == msg.sender, "Only manager can update!");
        _;
    }

    constructor(string memory _teamName, uint32 _teamSize) public {
        manager = msg.sender;
        teamName = _teamName;
        teamSize = _teamSize;
    }

    function updateApplication(string memory _teamName, uint32 _teamSize) public restricted  {
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