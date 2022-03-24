const ERC7211 = artifacts.require("./ERC7211");
const DutchAuction = artifacts.require("./DutchAuction");
contract("ERC7211",accounts =>{

    it('should deploy first contract and mint, then deplooy second contract,getprince and buy',async function(){
        const Contract = await ERC7211.deployed();
        const result = await Contract.mint(accounts[0],777);
        const Contract2 = await DutchAuction.deployed(1000000,1,ERC7211.address,777);
        const approve = await Contract.approve(Contract2.address,777);
        const getprice = await Contract2.getPrice();
        const balance = await web3.eth.getBalance(accounts[0])
        const buy = await Contract2.buy(1000000,balance);
       
        
        
      
    })
});
