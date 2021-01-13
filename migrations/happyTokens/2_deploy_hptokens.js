const MyToken = artifacts.require("HappyToken");

module.exports = function (deployer) {
  let symbol = "HPANY";
  let name = "Happy ANY";
  let decimal = 18;
  let totalSupply = "10000000000000000000000000000";
  let owner = "0xb990699Dd7ef140432313c7437B2846eDE88EE9E";
  deployer.deploy(MyToken, symbol, name, decimal, totalSupply, owner);
};

module.exports = function (deployer) {
  let symbol = "HPUSD";
  let name = "Happy USD";
  let decimal = 18;
  let totalSupply = "10000000000000000000000000000";
  let owner = "0xb990699Dd7ef140432313c7437B2846eDE88EE9E";
  deployer.deploy(MyToken, symbol, name, decimal, totalSupply, owner);
};

module.exports = function (deployer) {
  let symbol = "HPDAI";
  let name = "Happy USD";
  let decimal = 18;
  let totalSupply = "10000000000000000000000000000";
  let owner = "0xb990699Dd7ef140432313c7437B2846eDE88EE9E";
  deployer.deploy(MyToken, symbol, name, decimal, totalSupply, owner);
};

module.exports = function (deployer) {
  let symbol = "HPCNY";
  let name = "Happy CNY";
  let decimal = 18;
  let totalSupply = "10000000000000000000000000000";
  let owner = "0xb990699Dd7ef140432313c7437B2846eDE88EE9E";
  deployer.deploy(MyToken, symbol, name, decimal, totalSupply, owner);
};

module.exports = function (deployer) {
  let symbol = "HPETH";
  let name = "Happy ETH";
  let decimal = 18;
  let totalSupply = "10000000000000000000000000000";
  let owner = "0xb990699Dd7ef140432313c7437B2846eDE88EE9E";
  deployer.deploy(MyToken, symbol, name, decimal, totalSupply, owner);
};

module.exports = function (deployer) {
  let symbol = "HPBTC";
  let name = "Happy BTC";
  let decimal = 18;
  let totalSupply = "10000000000000000000000000000";
  let owner = "0xb990699Dd7ef140432313c7437B2846eDE88EE9E";
  deployer.deploy(MyToken, symbol, name, decimal, totalSupply, owner);
};
