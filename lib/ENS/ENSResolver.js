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

var resolverABI = [{ "constant": true, "inputs": [{ "name": "interfaceID", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "node", "type": "bytes32" }, { "name": "contentTypes", "type": "uint256" }], "name": "ABI", "outputs": [{ "name": "contentType", "type": "uint256" }, { "name": "data", "type": "bytes" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "node", "type": "bytes32" }, { "name": "x", "type": "bytes32" }, { "name": "y", "type": "bytes32" }], "name": "setPubkey", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "node", "type": "bytes32" }], "name": "content", "outputs": [{ "name": "ret", "type": "bytes32" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "node", "type": "bytes32" }], "name": "addr", "outputs": [{ "name": "ret", "type": "address" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "node", "type": "bytes32" }, { "name": "contentType", "type": "uint256" }, { "name": "data", "type": "bytes" }], "name": "setABI", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "node", "type": "bytes32" }], "name": "name", "outputs": [{ "name": "ret", "type": "string" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "node", "type": "bytes32" }, { "name": "name", "type": "string" }], "name": "setName", "outputs": [], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "node", "type": "bytes32" }, { "name": "hash", "type": "bytes32" }], "name": "setContent", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "node", "type": "bytes32" }], "name": "pubkey", "outputs": [{ "name": "x", "type": "bytes32" }, { "name": "y", "type": "bytes32" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "node", "type": "bytes32" }, { "name": "addr", "type": "address" }], "name": "setAddr", "outputs": [], "payable": false, "type": "function" }, { "inputs": [{ "name": "ensAddr", "type": "address" }], "payable": false, "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "node", "type": "bytes32" }, { "indexed": false, "name": "a", "type": "address" }], "name": "AddrChanged", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "node", "type": "bytes32" }, { "indexed": false, "name": "hash", "type": "bytes32" }], "name": "ContentChanged", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "node", "type": "bytes32" }, { "indexed": false, "name": "name", "type": "string" }], "name": "NameChanged", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "node", "type": "bytes32" }, { "indexed": true, "name": "contentType", "type": "uint256" }], "name": "ABIChanged", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "node", "type": "bytes32" }, { "indexed": false, "name": "x", "type": "bytes32" }, { "indexed": false, "name": "y", "type": "bytes32" }], "name": "PubkeyChanged", "type": "event" }];

var ENSResolver = function () {
  function ENSResolver(config) {
    _classCallCheck(this, ENSResolver);

    if (!(config && config.provider && config.provider !== '')) {
      this.provider = 'https://mainnet.infura.io';
    }

    this.web3 = new _web2.default(this.provider);

    this.address = '0x1da022710dF5002339274AaDEe8D58218e9D6AB5';
    this.resolver = new this.web3.eth.Contract(resolverABI, this.address);
  }

  _createClass(ENSResolver, [{
    key: "getAddress",
    value: async function getAddress(name) {
      try {
        var address = await this.resolver.methods.addr(_ethEnsNamehash2.default.hash(name)).call();

        return address;
      } catch (err) {
        console.log(err);
      }
    }
  }, {
    key: "setAddress",
    value: async function setAddress(name, address) {
      try {
        var byteData = "0x" + abi.methodID("setAddr", ["bytes32", "address"]).toString("hex") + abi.rawEncode(["bytes32", "address"], [_ethEnsNamehash2.default.hash(name), address]).toString("hex");
        return byteData;
      } catch (err) {
        console.log(err);
      }
    }
  }, {
    key: "getText",
    value: async function getText(name, key) {
      try {
        var text = await this.resolver.methods.text(_ethEnsNamehash2.default.hash(name), key).call();

        return text;
      } catch (err) {
        console.log(err);
      }
    }
  }, {
    key: "setText",
    value: async function setText(name, key, value) {
      try {
        var byteData = "0x" + abi.methodID("setText", ["bytes32", "string", "string"]).toString("hex") + abi.rawEncode(["bytes32", "string", "string"], [_ethEnsNamehash2.default.hash(name), key, value]).toString("hex");
        return byteData;
      } catch (err) {
        console.log(err);
      }
    }
  }, {
    key: "getContent",
    value: async function getContent(name) {
      try {
        var contentHash = await this.resolver.methods.content(_ethEnsNamehash2.default.hash(name)).call();

        return contentHash;
      } catch (err) {
        console.log(err);
      }
    }
  }, {
    key: "setContent",
    value: async function setContent(name, content) {
      try {
        var byteData = "0x" + abi.methodID("setContent", ["bytes32", "bytes32"]).toString("hex") + abi.rawEncode(["bytes32", "bytes32"], [_ethEnsNamehash2.default.hash(name), content]).toString("hex");
        return byteData;
      } catch (err) {
        console.log(err);
      }
    }
  }, {
    key: "getSupportsInterface",
    value: async function getSupportsInterface(id) {
      try {
        var supportsInterface = await this.resolver.methods.supportsInterface(id).call();

        return supportsInterface;
      } catch (err) {
        console.log(err);
      }
    }
  }]);

  return ENSResolver;
}();

exports.default = ENSResolver;