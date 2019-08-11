"use strict"
const BNS = require("../../../lib/BNS").default;
const bns = new BNS();

async function registry() {
  try {
    console.log(await bns.ENSResolver.getContent('portalnetwork.eth'));
    console.log(await bns.ENSResolver.getAddress('portalnetwork.eth'));
  } catch (err) {
    console.error(`Error in ENS Registry: `, err)
    throw err
  }
}

registry()