let hackathon_data = require('./../../blockchain/hackathonapplications/build/contracts/HackathonApplications.json');
let application_data = require('./build/contracts/Application');
let wallet = require('../../data/data');
let Web3 = require('web3');
let provider = new Web3.providers.HttpProvider("http://localhost:8545");
const web3 = new Web3(provider);
let HackathonApplications = new web3.eth.Contract(hackathon_data.abi, wallet.hackathon_applications_contract_address);
let Application = new web3.eth.Contract(application_data.abi); //This is without address

if (process.argv.length !== 4){
    exit(1);
}

let teamName = process.argv[2]; //Team name
let teamSize = parseInt(process.argv[3]); //Team size

//First add application to HackathonApplications contract
HackathonApplications.methods.register(wallet.application_contract_address).send({from: wallet.wallet_address}, (error, result) => {
    console.log(result);
});
//Then add actual team data to application
Application.options.address = wallet.application_contract_address;
Application.methods.register(teamName, teamSize).send({from: wallet.wallet_address}, (error, result) => {
    console.log(result);
}).then(Application.methods.getApplicationData().call({from: wallet.wallet_address}, (error, result) => {
    console.log(result);
}));



