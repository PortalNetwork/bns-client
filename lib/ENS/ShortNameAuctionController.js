"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _web = require("web3");

var _web2 = _interopRequireDefault(_web);

var _ethEnsNamehash = require("eth-ens-namehash");

var _ethEnsNamehash2 = _interopRequireDefault(_ethEnsNamehash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var shortNameAuctionControllerABI = [{ "constant": false, "inputs": [{ "name": "name", "type": "string" }, { "name": "owner", "type": "address" }], "name": "register", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "base", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "opensea", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "renounceOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "isOwner", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "name", "type": "string" }], "name": "valid", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "name", "type": "string" }], "name": "available", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_opensea", "type": "address" }], "name": "setOpensea", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "proxies", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "REGISTRATION_PERIOD", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "name": "_base", "type": "address" }, { "name": "_proxies", "type": "address" }, { "name": "_opensea", "type": "address" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "name", "type": "string" }, { "indexed": false, "name": "owner", "type": "address" }], "name": "NameRegistered", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "previousOwner", "type": "address" }, { "indexed": true, "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }];

var ShortNameAuctionController = function () {
  function ShortNameAuctionController(config) {
    _classCallCheck(this, ShortNameAuctionController);

    if (!(config && config.provider && config.provider !== '')) {
      this.provider = 'https://mainnet.infura.io';
    } else {
      this.provider = config.provider;
    }

    this.web3 = new _web2.default(this.provider);
    this.address = config.shortNameAuctionControllerAddress;
    this.shortNameAuctionController = new this.web3.eth.Contract(shortNameAuctionControllerABI, this.address);
  }

  _createClass(ShortNameAuctionController, [{
    key: "getRegistrationPeriod",
    value: async function getRegistrationPeriod() {
      try {
        var registrationPeriod = await this.shortNameAuctionController.methods.REGISTRATION_PERIOD().call();

        return registrationPeriod;
      } catch (err) {
        console.log(err);
      }
    }
  }, {
    key: "getProxies",
    value: async function getProxies() {
      try {
        var proxies = await this.shortNameAuctionController.methods.proxies().call();

        return proxies;
      } catch (err) {
        console.log(err);
      }
    }
  }, {
    key: "isValid",
    value: async function isValid(name) {
      try {
        var isValid = await this.shortNameAuctionController.methods.valid(name).call();

        return isValid;
      } catch (err) {
        console.log(err);
      }
    }
  }, {
    key: "isAvaiable",
    value: async function isAvaiable(name) {
      try {
        var isAvaiable = await this.shortNameAuctionController.methods.avaiable(name).call();

        return isAvaiable;
      } catch (err) {
        console.log(err);
      }
    }
  }]);

  return ShortNameAuctionController;
}();

exports.default = ShortNameAuctionController;