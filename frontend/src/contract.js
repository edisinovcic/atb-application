import web3 from './web3';

const address = '0x396C999Ac290dEe958E260Df87EaFDBaFef0783d';

const account = '0x06D608c9f761e7503e8Fb8906cb1bA387c754104';

const abi = [ { inputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor',
    signature: 'constructor',
    constant: undefined },
  { constant: true,
    inputs: [],
    name: 'getApplications',
    outputs: [ [Object] ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x43900e78' },
  { constant: false,
    inputs: [ [Object] ],
    name: 'register',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0x4420e486' },
  { constant: false,
    inputs: [],
    name: 'finalize',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0x4bb278f3' },
  { constant: false,
    inputs: [],
    name: 'destroy',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0x83197ef0' } ]

export default new web3.eth.Contract(abi, address, {
    from: account
});