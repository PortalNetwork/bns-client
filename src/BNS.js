import ENSRegistry from './ENS/ENSRegistry';
import ENSResolver from './ENS/ENSResolver';
import ETHRegistrarController from './ENS/ETHRegistrarController';
import ECNSRegistry from './ECNS/ECNSRegistry';
import ECNSResolver from './ECNS/ECNSResolver';
import WNSRegistry from './WNS/WNSRegistry';
import WNSResolver from './WNS/WNSResolver';

class BNS {
  constructor(config) {
    this.ENSRegistry = new ENSRegistry(config);
    this.ENSResolver = new ENSResolver(config);
    this.ETHRegistrarController = new ETHRegistrarController(config);

    this.ECNSRegistry = new ECNSRegistry(config);
    this.ECNSResolver = new ECNSResolver(config);

    this.WNSRegistry = new WNSRegistry(config);
    this.WNSResolver = new WNSResolver(config);
  }
}

export default BNS;

