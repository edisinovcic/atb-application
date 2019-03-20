import web3 from './web3';
import data from './../blockchain/build/contracts/HackathonApplications.json';

const contractAddress = '0x10a3ab65Cc0Dc2d0A6a6e31D3Bf3036017B78d2c';
const account = '0x06D608c9f761e7503e8Fb8906cb1bA387c754104';


export default new web3.eth.Contract(data.abi, contractAddress);