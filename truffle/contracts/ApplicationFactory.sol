pragma solidity >=0.4.21 <0.6.0;

contract ApplicationFactory {
    
    address manager;
    address[] public applications;
    bool acceptingApplication = true;

    constructor() public {
        manager = msg.sender;
    }

    modifier restricted {
        require(msg.sender == manager);
        _;
    }

    modifier applicationsOpen {
        require(acceptingApplication == true);
        _;
    }

    function createApplication(string _username, string _teamName) acceptingApplication public {
        address newApplication = new Application(_username, _teamName, msg.sender);
        applications.push(newApplication);
    }

    function getApplications() public view {
        return applications;
    }

    function finalize() public restricted {
        acceptingApplication = false;
    }

}

contract Application {

    address manager;
    string username;
    string teamName;

    modifier restricted {
        require(manager == msg.sender);
        _;
    }

    constructor(address _creator, string _username, string _teamName) public {
        manager = _creator;
        username = _username;
        teamName = _teamName;
    }

    function updateApplication(string memory _username, string memory _teamName) public restricted  {
        username = _username;
        teamName = _teamName;
    }


}