"use strict"
const BNS = require("../../../lib/BNS").default;
const bns = new BNS();

async function registry() {
  try {
    console.log(await bns.WNSRegistry.getOwner('portalnetwork.wan'));
    console.log(await bns.WNSRegistry.getResolver('portalnetwork.wan'));
    console.log(await bns.WNSRegistry.getTtl('portalnetwork.wan'));
  } catch (err) {
    console.error(`Error in WNS Registry: `, err)
    throw err
  }
}

registry()