pragma solidity >=0.4.21 <0.6.0;

contract HackathonApplications {
    address[] applications;
    address payable manager;
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
    
    function isContract(address _addr) private view returns (bool validContract){
        uint32 size;
        assembly {
            size := extcodesize(_addr)
        }
        return (size > 0);
    }
        
    function finalize() public restricted {
        acceptingApplication = false;
    }

    function destroy() public restricted {
        selfdestruct(manager); 
    }

}