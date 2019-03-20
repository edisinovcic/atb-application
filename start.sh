#!bin/bash

#account={$1}
#echo $account
account=0x06d608c9f761e7503e8fb8906cb1ba387c754104

geth account import privatekey


#geth --networkid 385 --bootnodes "enode://403dde31d89016f37a7554f3cb391c92805410c774df9119da02a6be762c58a74216cf6e3b91c027e75cee64447ae26d7d085f5a616aa209da8e0c321ea626d9@188.166.43.22:23453,enode://05fbb6b5f8f90daf12d88bc0c51b38caae6dec3b3c40a1321b6d79ec3eccff749fe86e48d340ecdcb2300ad96280894f1d6793193f8b60c26c3975947f04970a@31.147.205.39:23453"

geth init lisinski.genesis --datadir chaindata
#Just unlock the account and let is sync
geth --unlock $account --networkid 385 --syncmode fast --cache 1024 --rpc

cd truffle
truffle console --network lisinski

#let instance = await HackathonApplications.at("0xdefc1199f70b19a15618d3950fc3b1b184a0e65a")
#console.log(instance.abi)
#console.log(instance.address)

let accounts = await web3.eth.getAccounts()
accounts

let balance = await web3.eth.getBalance(accounts[0])

#0x85914A79FcB5261194ab6c88937D44Db824Ba5D6

