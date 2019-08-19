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

var _ECNSRegistry = require('./ECNS/ECNSRegistry');

var _ECNSRegistry2 = _interopRequireDefault(_ECNSRegistry);

var _ECNSResolver = require('./ECNS/ECNSResolver');

var _ECNSResolver2 = _interopRequireDefault(_ECNSResolver);

var _WNSRegistry = require('./WNS/WNSRegistry');

var _WNSRegistry2 = _interopRequireDefault(_WNSRegistry);

var _WNSResolver = require('./WNS/WNSResolver');

var _WNSResolver2 = _interopRequireDefault(_WNSResolver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BNS = function BNS(config) {
  _classCallCheck(this, BNS);

  this.ENSRegistry = new _ENSRegistry2.default(config);
  this.ENSResolver = new _ENSResolver2.default(config);
  this.ETHRegistrarController = new _ETHRegistrarController2.default(config);

  this.ECNSRegistry = new _ECNSRegistry2.default(config);
  this.ECNSResolver = new _ECNSResolver2.default(config);

  this.WNSRegistry = new _WNSRegistry2.default(config);
  this.WNSResolver = new _WNSResolver2.default(config);
};

exports.default = BNS;