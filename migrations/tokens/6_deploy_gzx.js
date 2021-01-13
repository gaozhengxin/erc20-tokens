const MyToken = artifacts.require("MyToken");

module.exports = function (deployer) {
  let symbol = "GZX";
  let name = "GaoZhengXin Special Token";
  let decimal = 18;
  let totalSupply = "50000000000000000000000000";
  let owner = "0xce15aa76a07e109deb359da8a731df0d640066c2";
  deployer.deploy(MyToken, symbol, name, decimal, totalSupply, owner);
};
