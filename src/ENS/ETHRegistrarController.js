import Web3 from "web3";
import namehash from "eth-ens-namehash";

const ethRegistrarControllerABI = [{"constant":true,"inputs":[{"name":"interfaceID","type":"bytes4"}],"name":"supportsInterface","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_prices","type":"address"}],"name":"setPriceOracle","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_minCommitmentAge","type":"uint256"},{"name":"_maxCommitmentAge","type":"uint256"}],"name":"setCommitmentAges","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"commitments","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"name","type":"string"},{"name":"duration","type":"uint256"}],"name":"rentPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"},{"name":"owner","type":"address"},{"name":"duration","type":"uint256"},{"name":"secret","type":"bytes32"}],"name":"register","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"MIN_REGISTRATION_DURATION","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"minCommitmentAge","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"name","type":"string"}],"name":"valid","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"},{"name":"duration","type":"uint256"}],"name":"renew","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"name","type":"string"}],"name":"available","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"maxCommitmentAge","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"commitment","type":"bytes32"}],"name":"commit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"name","type":"string"},{"name":"owner","type":"address"},{"name":"secret","type":"bytes32"}],"name":"makeCommitment","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"pure","type":"function"},{"inputs":[{"name":"_base","type":"address"},{"name":"_prices","type":"address"},{"name":"_minCommitmentAge","type":"uint256"},{"name":"_maxCommitmentAge","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"name","type":"string"},{"indexed":true,"name":"label","type":"bytes32"},{"indexed":true,"name":"owner","type":"address"},{"indexed":false,"name":"cost","type":"uint256"},{"indexed":false,"name":"expires","type":"uint256"}],"name":"NameRegistered","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"name","type":"string"},{"indexed":true,"name":"label","type":"bytes32"},{"indexed":false,"name":"cost","type":"uint256"},{"indexed":false,"name":"expires","type":"uint256"}],"name":"NameRenewed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"oracle","type":"address"}],"name":"NewPriceOracle","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"}]

class ETHRegistrarController {
  constructor(config) {
    if(!(config && config.provider && config.provider !== '')) {
      this.provider = 'https://mainnet.infura.io';
    }

    this.web3 = new Web3(this.provider);
    this.address = '0xF0AD5cAd05e10572EfcEB849f6Ff0c68f9700455';
    this.ethRegistrarController = new this.web3.eth.Contract(ethRegistrarControllerABI, this.address);
  }

  async getSupportsInterface(id) {
    try {
      const supportsInterface = await this.ethRegistrarController.methods.supportsInterface(id).call();

      return supportsInterface;
    } catch (err) {
      console.log(err);
    }
  }

  async getCommitments(commitment) {
    try {
      const commit = await this.ethRegistrarController.methods.commitments(commitment).call();

      return commit;
    } catch (err) {
      console.log(err);
    }
  }

  async setCommit(commitment) {
    try {
      let byteData = "0x" +
        abi.methodID("commit", ["bytes32"]).toString("hex") +
        abi.rawEncode(["bytes32"], [commitment]).toString("hex");
      return byteData;
    } catch (err) {
      console.log(err);
    }
  }

  async getMinRegistrationDuration() {
    try {
      const minRegistrationDuration = await this.ethRegistrarController.methods.MIN_REGISTRATION_DURATION().call();

      return minRegistrationDuration;
    } catch (err) {
      console.log(err);
    }
  }

  async getMinCommitmentAge() {
    try {
      const minCommitmentAge = await this.ethRegistrarController.methods.minCommitmentAge().call();

      return minCommitmentAge;
    } catch (err) {
      console.log(err);
    }
  }

  async getMaxCommitmentAge() {
    try {
      const maxCommitmentAge = await this.ethRegistrarController.methods.maxCommitmentAge().call();

      return maxCommitmentAge;
    } catch (err) {
      console.log(err);
    }
  }

  async getOwner() {
    try {
      const owner = await this.ethRegistrarController.methods.owner().call();

      return owner;
    } catch (err) {
      console.log(err);
    }
  }

  async isOwner() {
    try {
      const isOwner = await this.ethRegistrarController.methods.isOwner().call();

      return isOwner;
    } catch (err) {
      console.log(err);
    }
  }

  async getRentPrice(name, duration) {
    try {
      const rentPrice = await this.ethRegistrarController.methods.rentPrice(name, duration).call();

      return rentPrice;
    } catch (err) {
      console.log(err);
    }
  }

  async isValid(name) {
    try {
      const isValid = await this.ethRegistrarController.methods.value(name).call();

      return isValid;
    } catch (err) {
      console.log(err);
    }
  }

  async isAvailable(name) {
    try {
      const isAvailable = await this.ethRegistrarController.methods.available(name).call();

      return isAvailable;
    } catch (err) {
      console.log(err);
    }
  }

  async getMakeCommitment(name, owner, secret) {
    try {
      const makeCommitment = await this.ethRegistrarController.methods.makeCommitment(name, owner, this.web3.utils.sha3(secret)).call();

      return makeCommitment;
    } catch (err) {
      console.log(err);
    }
  }

  async setRenew(name, duration) {
    try {
      let byteData = "0x" +
        abi.methodID("renew", ["string", "uint"]).toString("hex") +
        abi.rawEncode(["string", "uint"], [name, duration]).toString("hex");
      return byteData;
    } catch (err) {
      console.log(err);
    }
  }

  async setRegister(name, owner, duration, secret) {
    try {
      let byteData = "0x" +
        abi.methodID("register", ["string", "address", "uint", "bytes32"]).toString("hex") +
        abi.rawEncode(["string", "address", "uint", "bytes32"], [name, owner, duration, this.web3.utils.sha3(secret)]).toString("hex");
      return byteData;
    } catch (err) {
      console.log(err);
    }
  }
}

export default ETHRegistrarController;
