"use strict"
const BNS = require("../../../lib/BNS").default;
const bns = new BNS();

async function ethRegistrarController() {
  try {
    console.log(await bns.ETHRegistrarController.getMinRegistrationDuration());
    console.log(await bns.ETHRegistrarController.getMinCommitmentAge());
    console.log(await bns.ETHRegistrarController.getMaxCommitmentAge());
  } catch (err) {
    console.error(`Error in ETH Registrar Controller: `, err)
    throw err
  }
}

ethRegistrarController()