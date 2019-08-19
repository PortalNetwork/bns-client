import Web3 from "web3";
import namehash from "eth-ens-namehash";

const registryABI = [
  {
    "constant": true,
    "inputs": [
      {
        "name": "node",
        "type": "bytes32"
      }
    ],
    "name": "resolver",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "node",
        "type": "bytes32"
      }
    ],
    "name": "owner",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "node",
        "type": "bytes32"
      },
      {
        "name": "label",
        "type": "bytes32"
      },
      {
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "setSubnodeOwner",
    "outputs": [],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "node",
        "type": "bytes32"
      },
      {
        "name": "ttl",
        "type": "uint64"
      }
    ],
    "name": "setTTL",
    "outputs": [],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "node",
        "type": "bytes32"
      }
    ],
    "name": "ttl",
    "outputs": [
      {
        "name": "",
        "type": "uint64"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "node",
        "type": "bytes32"
      },
      {
        "name": "resolver",
        "type": "address"
      }
    ],
    "name": "setResolver",
    "outputs": [],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "node",
        "type": "bytes32"
      },
      {
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "setOwner",
    "outputs": [],
    "payable": false,
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "node",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "node",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "name": "label",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "NewOwner",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "node",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "name": "resolver",
        "type": "address"
      }
    ],
    "name": "NewResolver",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "node",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "name": "ttl",
        "type": "uint64"
      }
    ],
    "name": "NewTTL",
    "type": "event"
  }
]

class WNSRegistry {
  constructor(config) {
    if(!(config && config.provider && config.provider !== '')) {
      this.provider = 'http://139.59.44.13:9000/node/5c9a341860626f3d2aad1dc0';
    }

    this.web3 = new Web3(this.provider);

    this.address = '0xee8d418fd33e69782015ea4313dfd8eb7b1b91ce';
    this.registry = new this.web3.eth.Contract(registryABI, this.address);
  }

  async getOwner(name) {
    try {
      const owner = await this.registry.methods.owner(namehash.hash(name)).call();

      console.log('###', owner);
      return owner;
    } catch (err) {
      console.log(err);
    }
  }

  async getResolver(name) {
    try {
      const resolver = await this.registry.methods.resolver(namehash.hash(name)).call();

      return resolver;
    } catch (err) {
      console.log(err);
    }
  }

  async setResolver(name, address) {
    try {
      let byteData = "0x" +
        abi.methodID("setResolver", ["bytes32", "address"]).toString("hex") +
        abi.rawEncode(["bytes32", "address"], [namehash.hash(name), address]).toString("hex");
      return byteData;
    } catch (err) {
      console.log(err);
    }
  }

  async getTtl(name) {
    try {
      const ttl = await this.registry.methods.ttl(namehash.hash(name)).call();

      return ttl;
    } catch (err) {
      console.log(err);
    }
  }

  async setTtl(name, ttl) {
    try {
      let byteData = "0x" +
        abi.methodID("setTTL", ["bytes32", "uint64"]).toString("hex") +
        abi.rawEncode(["bytes32", "uint64"], [namehash.hash(name), ttl]).toString("hex");
      return byteData;
    } catch (err) {
      console.log(err);
    }
  }
}

export default WNSRegistry;
