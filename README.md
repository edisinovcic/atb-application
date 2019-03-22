# ATB Applications contract

Smart contract for application to ATB hackathon

How to get started.
1) Install node (recommended via nvm -> https://github.com/creationix/nvm )
2) Install npm
3) Install geth (https://geth.ethereum.org/downloads/)
4) Install truffle (https://truffleframework.com/docs/truffle/getting-started/installation)


<code>geth init lisinski.genesis --datadir chaindata</code>
<code>geth --networkid 385 --datadir chaindata/</code>
Wait for up to 10 minutes to start!!!
After syncing is completed press ctrl + c (wait it to finish, do not press ctrl + c twice!)

geth account list --datadir chaindata/

If you want to import existing account:

geth account import privatekey --datadir chaindata/ (if private key of the account is stored in privatekey file)

geth --unlock $account --networkid 385 --syncmode fast --cache 1024 --rpc --datadir chaindata/ (change $account with your account!!)

After writing code run (in truffle folder):
truffle migrate --network lisinski (--reset)

Write down deployed contract address, you will need to add it to Hackathon Applications

truffle console attach --network lisinski



