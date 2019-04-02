//let hackathon_address = require('../../data/hackathonApplicationsAddress.json');
let hackathon_data = require('./../../blockchain/hackathonapplications/build/contracts/HackathonApplications.json');
let hackathon_address = "0xf1c94665d2c4d98704F89C3719CF66FFE2c76DD7";

let application_data = require('./build/contracts/Application');
let application_address = '0x008e348B108531bc238045C8fEBa5c1F22Ef0EBF'; //Add your address here

let wallet = '0x06D608c9f761e7503e8Fb8906cb1bA387c754104';    //My wallet address

let Web3 = require('web3');
let provider = new Web3.providers.HttpProvider("http://localhost:8545");
const web3 = new Web3(provider);


let HackathonApplications = new web3.eth.Contract(hackathon_data.abi, hackathon_address);
let Application = new web3.eth.Contract(application_data.abi); //This is without address

let teamName = "test"; //Team name
let teamSize = 3; //Team size

//First add application to HackathonApplications contract
HackathonApplications.methods.register(application_address).send({from: wallet}, (error, result) => {
    console.log(result);
});
//Then add actual team data to application
Application.options.address = application_address;
Application.methods.register(teamName, teamSize).send({from: wallet}, (error, result) => {
    console.log(result);
}).then(Application.methods.getApplicationData().call({from: wallet}), (error, result) => {
    console.log(result);
});



