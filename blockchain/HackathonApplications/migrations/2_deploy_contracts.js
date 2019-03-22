let HackathonApplications = artifacts.require("HackathonApplications.sol");

module.exports = function(deployer) {
    deployer.deploy(HackathonApplications);
};