let HDWalletProvider = require('truffle-hdwallet-provider');

let rpc_endpoint = "https://rpc-bitfalls1.lisinski.online";
let mnemonic = ""; //"meadow enjoy trend turkey siege saddle group kind flip cruel core wage";

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
            provider: new HDWalletProvider(mnemonic, rpc_endpoint),
            network_id: 385,
            gasPrice: 0
        }

    },

    mocha: {},

    compilers: {
        solc: {}
    }
};
