'use strict';

var contract = require('truffle-contract');

async function main() {

    var data = require('./../../blockchain/hackathonapplications/build/contracts/HackathonApplications.json');
    var hackathon_address = require('../../data/hackathonApplicationsAddress.json');
    var application_address = '0x008e348B108531bc238045C8fEBa5c1F22Ef0EBF'; //Add your address here
    var wallet = '0x06D608c9f761e7503e8Fb8906cb1bA387c754104'; //My wallet address

    var Web3 = require('web3');
    var provider = new Web3.providers.HttpProvider("http://localhost:8545");

    var HackathonApplications = contract({
        abi: data.abi,
        address: hackathon_address.address
    });

    HackathonApplications.setProvider(provider);

    var hackathon_contract = await HackathonApplications.at(hackathon_address.address);
    var application_contract = Application.at(application_address);

    /*
    let deployed;
    HackathonApplications.deployed().then(function(instance) {
        deployed = instance;
        return instance.register(applicationAddress, { from: myWalletAddress });
    }).then(function(result){
        console.log(result);
    });
    */
}

main();