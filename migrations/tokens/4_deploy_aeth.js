const MyToken = artifacts.require("MyToken");

module.exports = function (deployer) {
  let symbol = "aETH";
  let name = "aETH";
  let decimal = 18;
  let totalSupply = "10000000000000000000000000000";
  let owner = "0xce15aa76a07e109deb359da8a731df0d640066c2";
  deployer.deploy(MyToken, symbol, name, decimal, totalSupply, owner);
};
