'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ENSRegistry = require('./ENS/ENSRegistry');

var _ENSRegistry2 = _interopRequireDefault(_ENSRegistry);

var _ENSResolver = require('./ENS/ENSResolver');

var _ENSResolver2 = _interopRequireDefault(_ENSResolver);

var _ETHRegistrarController = require('./ENS/ETHRegistrarController');

var _ETHRegistrarController2 = _interopRequireDefault(_ETHRegistrarController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BNS = function BNS(config) {
  _classCallCheck(this, BNS);

  if (config && config.provider && config.provider !== '') {
    this.provider = config.provider;
  } else {
    this.provider = 'https://mainnet.infura.io';
  }

  this.ENSRegistry = new _ENSRegistry2.default();
  this.ENSResolver = new _ENSResolver2.default();
  this.ETHRegistrarController = new _ETHRegistrarController2.default();
};

exports.default = BNS;