"use strict"
const BNS = require("../../../lib/BNS").default;
const bns = new BNS();

async function contract() {
  try {
    console.log(await bns.ENSRegistry.getOwner('facebook.eth'));
  } catch (err) {
    console.error(`Error in ENS Registry: `, err)
    throw err
  }
}

contract()