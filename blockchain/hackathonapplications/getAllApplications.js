let hackathon_data = require('../../blockchain/hackathonapplications/build/contracts/HackathonApplications.json');
let application_data = require('../../blockchain/application/build/contracts/Application');
let wallet = require('../../data/admin.json');

let Web3 = require('web3');
let provider = new Web3.providers.HttpProvider("http://localhost:8545");
const web3 = new Web3(provider);

let HackathonApplications = new web3.eth.Contract(hackathon_data.abi, wallet.hackathon_applications_contract_address);
let Application = new web3.eth.Contract(application_data.abi);

let application_list = [];
HackathonApplications.methods.getApplications().call({from: wallet.address}, (error, application) => {
    application.forEach(function (element) {
        Application.options.address = element;
        Application.methods.getApplicationData().call({from: wallet.address}, (error, result) => {
            console.log(result);
            application_list.push(result);
        })
    });
});

