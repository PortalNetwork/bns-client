"use strict"
const BNS = require("../../../lib/BNS").default;
const bns = new BNS();

async function registry() {
  try {
    console.log(await bns.ECNSResolver.getContent('portalnetwork.etc'));
    console.log(await bns.ECNSResolver.getAddress('portalnetwork.etc'));
  } catch (err) {
    console.error(`Error in ECNS Registry: `, err)
    throw err
  }
}

registry()