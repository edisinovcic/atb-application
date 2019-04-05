# ATB Applications contract

Smart contract for application to ATB hackathon

How to get started.
1) Install node (recommended via nvm -> https://github.com/creationix/nvm )
2) Install npm
3) Install geth (https://geth.ethereum.org/downloads/)
4) Install truffle (https://truffleframework.com/docs/truffle/getting-started/installation)
5) Install ganache (https://truffleframework.com/ganache)
6) Install metamask plugin in browser (https://metamask.io/)
7) Install mycrypto (https://download.mycrypto.com/)

<code>geth init lisinski.genesis</code>

<code>geth account import privatekey</code>

To view if account is properly imported: <code>geth account list</code>

<code>geth --syncmode="fast" --cache=1024 --networkid 385 --bootnodes "enode://403dde31d89016f37a7554f3cb391c92805410c774df9119da02a6be762c58a74216cf6e3b91c027e75cee64447ae26d7d085f5a616aa209da8e0c321ea626d9@188.166.43.22:23453,enode://05fbb6b5f8f90daf12d88bc0c51b38caae6dec3b3c40a1321b6d79ec3eccff749fe86e48d340ecdcb2300ad96280894f1d6793193f8b60c26c3975947f04970a@31.147.205.39:23453" --rpc --unlock 0x06d608c9f761e7503e8fb8906cb1ba387c754104</code>

Wait for up to 10 minutes to start!!!

After the sync is completed you can deploy smart contract to network.

<code>truffle compile</code>
<code>truffle migrate --network lisinski (--reset)</code>

<code>truffle console attach --network lisinski</code> //if you want to test something


Interesting starter: https://github.com/NodeFactoryIo/solidity-node-docker-starter

Good library to use: https://docs.openzeppelin.org/docs/get-started.html


Links for Lisinski testnet:
<code>https://pipa.lisinski.online/</code>
<code>https://forum.lisinski.online/</code>

Twitter username: ATB57948960
Twitter password: necenikada