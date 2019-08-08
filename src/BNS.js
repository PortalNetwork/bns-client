import ENSRegistry from './ENS/ENSRegistry';

class BNS {
  constructor(config) {
    if(config && config.provider && config.provider !== '') {
      this.provider = config.provider;
    } else {
      this.provider = 'https://mainnet.infura.io';
    }

    this.ENSRegistry = new ENSRegistry();
  }
}

export default BNS;