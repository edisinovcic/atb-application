let HDWalletProvider = require('truffle-hdwallet-provider');
let data = require('./../../data/data');

module.exports = {

    networks: {
        ganache: {
            host: "127.0.0.1",
            port: 7545,
            network_id: "*"
        },

        lisinski: {
            host: "127.0.0.1",
            port: 8545,
            network_id: 385,
            gas: 800000
        },
        lisinski_2: {
            provider: new HDWalletProvider(data.mnemonic, data.rpc_endpoint),
            network_id: 385,
            gasPrice: 0
        }

    },

    mocha: {},

    compilers: {
        solc: {}
    }
};
