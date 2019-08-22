# BNS Example

## Get Start

```
node {path}/index.js
```

## Function examples

- [ENS Registry](ENS/Registry/index.js)
- [ENS Resolver](ENS/Resolver/index.js)
- [ETH Registrar Controller](ENS/ETHRegistrarController/index.js)

- [ECNS Registry](ECNS/Registry/index.js)
- [ECNS Resolver](ECNS/Resolver/index.js)

- [WNS Registry](WNS/Registry/index.js)
- [WNNS Resolver](WNS/Resolver/index.js)


## ENS Registry 

### getResolver
Get resolver address by ENS.

#### Example

```javascript
const config = {
  provider: 'https://mainnet.infura.io' // Endpoint provider url
};
const BNS = require("../../../lib/BNS").default;
const bns = new BNS(config);

(async () => {
  try {
    const resolver = await bns.ENSResolver.getResolver('facebook.eth');
    console.log(resolver);  // 0x5807A8B404C71cf22Eb0BaC2e5F2a6c202eBE0a1
  } catch (error) {
    console.error(error);
  }
})()
```
