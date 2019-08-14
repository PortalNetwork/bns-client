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

var registryABI = [{
  "constant": true,
  "inputs": [{
    "name": "node",
    "type": "bytes32"
  }],
  "name": "resolver",
  "outputs": [{
    "name": "",
    "type": "address"
  }],
  "payable": false,
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "node",
    "type": "bytes32"
  }],
  "name": "owner",
  "outputs": [{
    "name": "",
    "type": "address"
  }],
  "payable": false,
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "node",
    "type": "bytes32"
  }, {
    "name": "label",
    "type": "bytes32"
  }, {
    "name": "owner",
    "type": "address"
  }],
  "name": "setSubnodeOwner",
  "outputs": [],
  "payable": false,
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "node",
    "type": "bytes32"
  }, {
    "name": "ttl",
    "type": "uint64"
  }],
  "name": "setTTL",
  "outputs": [],
  "payable": false,
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "node",
    "type": "bytes32"
  }],
  "name": "ttl",
  "outputs": [{
    "name": "",
    "type": "uint64"
  }],
  "payable": false,
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "node",
    "type": "bytes32"
  }, {
    "name": "resolver",
    "type": "address"
  }],
  "name": "setResolver",
  "outputs": [],
  "payable": false,
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "node",
    "type": "bytes32"
  }, {
    "name": "owner",
    "type": "address"
  }],
  "name": "setOwner",
  "outputs": [],
  "payable": false,
  "type": "function"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "name": "node",
    "type": "bytes32"
  }, {
    "indexed": false,
    "name": "owner",
    "type": "address"
  }],
  "name": "Transfer",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "name": "node",
    "type": "bytes32"
  }, {
    "indexed": true,
    "name": "label",
    "type": "bytes32"
  }, {
    "indexed": false,
    "name": "owner",
    "type": "address"
  }],
  "name": "NewOwner",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "name": "node",
    "type": "bytes32"
  }, {
    "indexed": false,
    "name": "resolver",
    "type": "address"
  }],
  "name": "NewResolver",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "name": "node",
    "type": "bytes32"
  }, {
    "indexed": false,
    "name": "ttl",
    "type": "uint64"
  }],
  "name": "NewTTL",
  "type": "event"
}];

var ENSRegistry = function () {
  function ENSRegistry(config) {
    _classCallCheck(this, ENSRegistry);

    if (!(config && config.provider && config.provider !== '')) {
      this.provider = 'https://mainnet.infura.io';
    }

    this.web3 = new _web2.default(this.provider);

    this.address = '0x314159265dD8dbb310642f98f50C066173C1259b';
    this.registry = new this.web3.eth.Contract(registryABI, this.address);
  }

  _createClass(ENSRegistry, [{
    key: "getOwner",
    value: async function getOwner(name) {
      try {
        var owner = await this.registry.methods.owner(_ethEnsNamehash2.default.hash(name)).call();

        return owner;
      } catch (err) {
        console.log(err);
      }
    }
  }, {
    key: "getResolver",
    value: async function getResolver(name) {
      try {
        var resolver = await this.registry.methods.resolver(_ethEnsNamehash2.default.hash(name)).call();

        return resolver;
      } catch (err) {
        console.log(err);
      }
    }
  }, {
    key: "setResolver",
    value: async function setResolver(name, address) {
      try {
        var byteData = "0x" + abi.methodID("setResolver", ["bytes32", "address"]).toString("hex") + abi.rawEncode(["bytes32", "address"], [_ethEnsNamehash2.default.hash(name), address]).toString("hex");
        return byteData;
      } catch (err) {
        console.log(err);
      }
    }
  }, {
    key: "getTtl",
    value: async function getTtl(name) {
      try {
        var ttl = await this.registry.methods.ttl(_ethEnsNamehash2.default.hash(name)).call();

        return ttl;
      } catch (err) {
        console.log(err);
      }
    }
  }, {
    key: "setTtl",
    value: async function setTtl(name, ttl) {
      try {
        var byteData = "0x" + abi.methodID("setTTL", ["bytes32", "uint64"]).toString("hex") + abi.rawEncode(["bytes32", "uint64"], [_ethEnsNamehash2.default.hash(name), ttl]).toString("hex");
        return byteData;
      } catch (err) {
        console.log(err);
      }
    }
  }]);

  return ENSRegistry;
}();

exports.default = ENSRegistry;