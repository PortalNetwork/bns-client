'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ENSRegistry = require('./ENS/ENSRegistry');

var _ENSRegistry2 = _interopRequireDefault(_ENSRegistry);

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
};

exports.default = BNS;