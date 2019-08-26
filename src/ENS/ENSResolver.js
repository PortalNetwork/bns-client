import Web3 from "web3";
import namehash from "eth-ens-namehash";
import ENSRegistry from './ENSRegistry';

const resolverABI = [{"constant":true,"inputs":[{"name":"interfaceID","type":"bytes4"}],"name":"supportsInterface","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"node","type":"bytes32"},{"name":"contentTypes","type":"uint256"}],"name":"ABI","outputs":[{"name":"contentType","type":"uint256"},{"name":"data","type":"bytes"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"node","type":"bytes32"},{"name":"x","type":"bytes32"},{"name":"y","type":"bytes32"}],"name":"setPubkey","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"node","type":"bytes32"}],"name":"content","outputs":[{"name":"ret","type":"bytes32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"node","type":"bytes32"}],"name":"addr","outputs":[{"name":"ret","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"node","type":"bytes32"},{"name":"contentType","type":"uint256"},{"name":"data","type":"bytes"}],"name":"setABI","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"node","type":"bytes32"}],"name":"name","outputs":[{"name":"ret","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"node","type":"bytes32"},{"name":"name","type":"string"}],"name":"setName","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"node","type":"bytes32"},{"name":"hash","type":"bytes32"}],"name":"setContent","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"node","type":"bytes32"}],"name":"pubkey","outputs":[{"name":"x","type":"bytes32"},{"name":"y","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"node","type":"bytes32"},{"name":"addr","type":"address"}],"name":"setAddr","outputs":[],"payable":false,"type":"function"},{"inputs":[{"name":"ensAddr","type":"address"}],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"node","type":"bytes32"},{"indexed":false,"name":"a","type":"address"}],"name":"AddrChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"node","type":"bytes32"},{"indexed":false,"name":"hash","type":"bytes32"}],"name":"ContentChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"node","type":"bytes32"},{"indexed":false,"name":"name","type":"string"}],"name":"NameChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"node","type":"bytes32"},{"indexed":true,"name":"contentType","type":"uint256"}],"name":"ABIChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"node","type":"bytes32"},{"indexed":false,"name":"x","type":"bytes32"},{"indexed":false,"name":"y","type":"bytes32"}],"name":"PubkeyChanged","type":"event"}];

class ENSResolver {
  constructor(config) {
    if(!(config && config.provider && config.provider !== '')) {
      this.provider = 'https://mainnet.infura.io';
    } else {
      this.provider = config.provider;
    }

    this.web3 = new Web3(this.provider);
    this.registry = new ENSRegistry(config);
  }

  async getAddress(name) {
    try {
      const resolverAddr = await this.registry.getResolver(name);
      const resolver = new this.web3.eth.Contract(resolverABI, resolverAddr);
      const address = await resolver.methods.addr(namehash.hash(name)).call();

      return address;
    } catch (err) {
      console.log(err);
    }
  }

  async setAddress(name, address) {
    try {
      let byteData = "0x" +
        abi.methodID("setAddr", ["bytes32", "address"]).toString("hex") +
        abi.rawEncode(["bytes32", "address"], [namehash.hash(name), address]).toString("hex");
      return byteData;
    } catch (err) {
      console.log(err);
    }
  }

  async getText(name, key) {
    try {
      const resolverAddr = await this.registry.getResolver(name);
      const resolver = new this.web3.eth.Contract(resolverABI, resolverAddr);
      const text = await resolver.methods.text(namehash.hash(name), key).call();

      return text;
    } catch (err) {
      console.log(err);
    }
  }

  async setText(name, key, value) {
    try {
      let byteData = "0x" +
        abi.methodID("setText", ["bytes32", "string", "string"]).toString("hex") +
        abi.rawEncode(["bytes32", "string", "string"], [namehash.hash(name), key, value]).toString("hex");
      return byteData;
    } catch (err) {
      console.log(err);
    }
  }

  async getContent(name) {
    try {
      const resolverAddr = await this.registry.getResolver(name);
      const resolver = new this.web3.eth.Contract(resolverABI, resolverAddr);
      const contentHash = await resolver.methods.content(namehash.hash(name)).call();

      return contentHash;
    } catch (err) {
      console.log(err);
    }
  }

  async setContent(name, content) {
    try {
      let byteData = "0x" +
        abi.methodID("setContent", ["bytes32", "bytes32"]).toString("hex") +
        abi.rawEncode(["bytes32", "bytes32"], [namehash.hash(name), content]).toString("hex");
      return byteData;
    } catch (err) {
      console.log(err);
    }
  }

  async getSupportsInterface(id) {
    try {
      const resolverAddr = await this.registry.getResolver(name);
      const resolver = new this.web3.eth.Contract(resolverABI, resolverAddr);
      const supportsInterface = await resolver.methods.supportsInterface(id).call();

      return supportsInterface;
    } catch (err) {
      console.log(err);
    }
  }
}

export default ENSResolver;
