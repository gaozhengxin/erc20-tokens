const MyToken = artifacts.require("MyToken");

module.exports = function (deployer) {
  let symbol = "sUSD";
  let name = "sUSD";
  let decimal = 18;
  let totalSupply = "10000000000000000000000000000";
  let owner = "0xb990699Dd7ef140432313c7437B2846eDE88EE9E";
  deployer.deploy(MyToken, symbol, name, decimal, totalSupply, owner);
};
