# Blockchain Name Service Client

`bns-client` is a javascript library to interact with all the BNS methods. It can help for creating client and server apps to connect with BNS.

## Get Start
Use this commands in the console:

```
npm install bns-client
```

or use `<script></script>` to import

```html
<script src="BNS.js"></script>
```

## Usage

```javascript
let BNS = require('bns/lib/BNS').default;
let bns = new BNS(); 
```

or 

```html
<script>
  var BNS = require('BNS');

  var bns = new BNS.default({
    restURL: `https://mainnet.infura.io`,
  });
  bns.ENSRegistry.getOwner('facebook.eth').then(function(owner) {
    document.getElementById("owner").innerHTML = owner;
  });
</script>
````

## Example for all methods

Please check [examples](./examples) for more information.

## Contributing
See [CONTRIBUTING.md](./CONTRIBUTING.md) for how to help out.

## Licence
See [LICENSE](./LICENSE) for details.
