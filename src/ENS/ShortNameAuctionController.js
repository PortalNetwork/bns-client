import Web3 from "web3";
import namehash from "eth-ens-namehash";

const shortNameAuctionControllerABI = [{"constant":false,"inputs":[{"name":"name","type":"string"},{"name":"owner","type":"address"}],"name":"register","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"base","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"opensea","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"name","type":"string"}],"name":"valid","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"name","type":"string"}],"name":"available","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_opensea","type":"address"}],"name":"setOpensea","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"proxies","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"REGISTRATION_PERIOD","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_base","type":"address"},{"name":"_proxies","type":"address"},{"name":"_opensea","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"name","type":"string"},{"indexed":false,"name":"owner","type":"address"}],"name":"NameRegistered","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"}];

class ShortNameAuctionController {
  constructor(config) {
    if(!(config && config.provider && config.provider !== '')) {
      this.provider = 'https://mainnet.infura.io';
    } else {
      this.provider = config.provider;
    }

    this.web3 = new Web3(this.provider);
    this.address = config.shortNameAuctionControllerAddress;
    this.shortNameAuctionController = new this.web3.eth.Contract(shortNameAuctionControllerABI, this.address);
  }

  async getRegistrationPeriod() {
    try {
      const registrationPeriod = await this.shortNameAuctionController.methods.REGISTRATION_PERIOD().call();

      return registrationPeriod;
    } catch (err) {
      console.log(err);
    }
  }

  async getProxies() {
    try {
      const proxies = await this.shortNameAuctionController.methods.proxies().call();

      return proxies;
    } catch (err) {
      console.log(err);
    }
  }

  async isValid(name) {
    try {
      const isValid = await this.shortNameAuctionController.methods.valid(name).call();

      return isValid;
    } catch (err) {
      console.log(err);
    }
  }

  async isAvaiable(name) {
    try {
      const isAvaiable = await this.shortNameAuctionController.methods.avaiable(name).call();

      return isAvaiable;
    } catch (err) {
      console.log(err);
    }
  }
}

export default ShortNameAuctionController;
