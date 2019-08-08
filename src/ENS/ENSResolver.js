import Web3 from "web3";
import namehash from "eth-ens-namehash";

const resolverABI = [];

class ENSResolver {
  constructor(config) {
    this.web3 = new Web3('https://mainnet.infura.io');
    this.address = '';
    this.resolver = new this.web3.eth.Contract(resolverABI, this.address);
  }


}

export default ENSResolver;
