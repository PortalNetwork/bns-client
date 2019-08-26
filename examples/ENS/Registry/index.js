"use strict"
const BNS = require("../../../lib/BNS").default;
const bns = new BNS({
  network: 3
});

async function registry() {
  try {
    console.log(await bns.ENSRegistry.getOwner('facebook.eth'));
    console.log(await bns.ENSRegistry.getResolver('facebook.eth'));
    console.log(await bns.ENSRegistry.getTtl('facebook.eth'));
  } catch (err) {
    console.error(`Error in ENS Registry: `, err)
    throw err
  }
}

registry()