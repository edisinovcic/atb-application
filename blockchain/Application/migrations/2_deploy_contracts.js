let Application = artifacts.require("Application.sol");

module.exports = function(deployer) {
    deployer.deploy(Application, arg1, arg2);
};