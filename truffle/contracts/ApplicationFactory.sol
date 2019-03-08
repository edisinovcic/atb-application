pragma solidity >=0.4.21 <0.6.0;

contract ApplicationFactory {
    Application[] applications;
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

    function addExistingApplication(Application newApplication) public {
        applications.push(newApplication);
    }

   
//    function createApplication(string memory _username, string memory _teamName) public applicationsOpen {
//        Application newApplication = new Application(_username, _teamName, msg.sender);
//        applications.push(newApplication);
//    }

    function getApplications() public view returns (Application[] memory) {
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
        require(manager == msg.sender, "Only manager can update!");
        _;
    }

    constructor(string memory _username, string memory _teamName) public {
        manager = msg.sender;
        username = _username;
        teamName = _teamName;
    }

    function updateApplication(string memory _username, string memory _teamName) public restricted  {
        username = _username;
        teamName = _teamName;
    }
    
    function getApplication() public view returns (Application) {
        return this;
    }
    
    function getApplicationData() public view returns (string memory, string memory, address) {
        return (username, teamName, manager);
    }
}