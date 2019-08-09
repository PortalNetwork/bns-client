import ENSRegistry from './ENS/ENSRegistry';
import ENSResolver from './ENS/ENSResolver';
import ETHRegistrarController from './ETHRegistrarController';

class BNS {
  constructor(config) {
    if(config && config.provider && config.provider !== '') {
      this.provider = config.provider;
    } else {
      this.provider = 'https://mainnet.infura.io';
    }

    this.ENSRegistry = new ENSRegistry();
    this.ENSResolver = new ENSResolver();
    this.ETHRegistrarController = new ETHRegistrarController();
  }
}

export default BNS;