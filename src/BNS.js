import ENSRegistry from './ENS/ENSRegistry';
import ENSResolver from './ENS/ENSResolver';
import ETHRegistrarController from './ENS/ETHRegistrarController';

class BNS {
  constructor(config) {
    this.ENSRegistry = new ENSRegistry(config);
    this.ENSResolver = new ENSResolver(config);
    this.ETHRegistrarController = new ETHRegistrarController(config);
  }
}

export default BNS;