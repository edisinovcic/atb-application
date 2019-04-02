import web3 from './web3';

let hackathon_data = require('../../blockchain/hackathonapplications/build/contracts/HackathonApplications.json');
let hackathon_address = "0xf1c94665d2c4d98704F89C3719CF66FFE2c76DD7";

let application_data = require('../../blockchain/application/build/contracts/Application');
let wallet = '0x06D608c9f761e7503e8Fb8906cb1bA387c754104';

let HackathonApplications = new web3.eth.Contract(hackathon_data.abi, hackathon_address);
let Application = new web3.eth.Contract(application_data.abi);

/*
let application_list = [];
export default HackathonApplications.methods.getApplications().call({from: wallet}, (error, application) => {
    application.forEach(function (element) {
        Application.options.address = element;
        Application.methods.getApplicationData().call({from: wallet}, (error, result) => {
            console.log(result);
            application_list.append(result);
        })
    });
    return application_list;
});
*/

const myFunc = async () => {
    let application_list = [];
    await HackathonApplications.methods.getApplications().call({from: wallet}, (error, application) => {
        application.forEach(function (element) {
            Application.options.address = element;
            Application.methods.getApplicationData().call({from: wallet}, (error, result) => {
                console.log(result);
                application_list.append(result);
            })
        });
    });
}

export default myFunc;