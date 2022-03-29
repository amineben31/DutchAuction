const ERC7211 = artifacts.require("./ERC7211");
const DutchAuction = artifacts.require("./DutchAuction");
contract("ERC7211",accounts =>{
    

    it('should deploy first contract and mint, deploy second contract, approve the second contract,getprince and buy',async function(){
        const Contract = await ERC7211.deployed();
        await Contract.mint(accounts[0],77);
        const Contract2 = await DutchAuction.deployed(1000000,1,ERC7211.address,77);
        await Contract.approve(Contract2.address,77);
        var getprice = await Contract2.getPrice();
        var balance = await web3.eth.getBalance(accounts[0]);
        var refund = balance-getprice.words[0];
        const buy = await Contract2.buy(getprice.words[0],accounts[0],balance);
        Contract2.sendTransaction({from:accounts[0],value:getprice.words[0]});
      
    })
})
