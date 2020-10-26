Forked from https://github.com/bitfwdcommunity/Issue-your-own-ERC20-token

<p align="center">
  <img src="https://user-images.githubusercontent.com/16810128/36881745-df9c599a-1e23-11e8-9ea3-58d4730bd537.jpeg">
</p>

Tutorial: [How to issue your own token on Ethereum in less than 20 minutes](https://medium.com/bitfwd/how-to-issue-your-own-token-on-ethereum-in-less-than-20-minutes-ac1f8f022793)

This tutorial will take you through the steps of issuing your first ERC20 token on the Ethereum network using a single smart contract and MyEtherWallet.

This repo contains the sample solidity file: 
```
contracts/Migrations.sol
contracts/MyToken.sol
```

Feel free to leave any issues and we will get back to you and help you out :) 

## 安装 truffle
```
$ npm install -g truffle
```

## 发布 ERC20 代币
1. 编辑 truffle-config.js, 选择 geth/efsn RPC 地址/端口, chain ID

2. 编译合约
```
$ truffle compile
```

3. 配置参数, 编辑 migrations/2_deploy_dai.js, migrations/2_deploy_susd.js 等文件, 选择 Symbol, Name, Decimal, Owner 等参数

4. 部署合约
```
$ truffle deploy
```

5. 重新部署
```
$ truffle deploy --reset
```
