let hackathon_data = require('../../blockchain/hackathonapplications/build/contracts/HackathonApplications.json');
let hackathon_address = "0xf1c94665d2c4d98704F89C3719CF66FFE2c76DD7";

let application_data = require('../../blockchain/application/build/contracts/Application');
let wallet = '0x06D608c9f761e7503e8Fb8906cb1bA387c754104';

let Web3 = require('web3');
let provider = new Web3.providers.HttpProvider("http://localhost:8545");
const web3 = new Web3(provider);

let HackathonApplications = new web3.eth.Contract(hackathon_data.abi, hackathon_address);
let Application = new web3.eth.Contract(application_data.abi);

let application_list = [];
HackathonApplications.methods.getApplications().call({from: wallet}, (error, application) => {
    application.forEach(function (element) {
        Application.options.address = element;
        Application.methods.getApplicationData().call({from: wallet}, (error, result) => {
            console.log(result);
            application_list.append(result);
        })
    });
});

export default application_list;