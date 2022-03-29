

module.exports = function (deployer) {
  deployer.deploy(ERC7211);
};
const ERC7211 = artifacts.require("ERC7211");

const DutchAuction = artifacts.require("DutchAuction");


module.exports = async function (deployer) {

 await deployer.deploy(ERC7211);

 await deployer.deploy(DutchAuction,1000000,1,ERC7211.address,77);

};

