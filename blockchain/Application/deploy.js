import contract from 'truffle-contract';
import fs from 'fs';

var contents = fs.readFile('build/contracts/Application.json', (err, data) => {
    if (err) throw new Error(`Unable to read smart contract abi: ${err}`);
    return JSON.parse(data);
});

const Application = contract({abi: contents});
Application.setProvider(web3Provider);

const address = Application.new(param1, param2).then((instance) => {
    return instance.address;
});

console.log(address);