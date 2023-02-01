const Web3 = require('web3');
const specs = {
  tokenOwnerKey: "0x",
  newTokenAddr: "0xFE197E7968807B311D476915DB585831B43A7E3b",
  newTokenIDOID: '1',
  amt: Web3.utils.toWei('3000'),
  ratioForLP: '0',

  //nodeUrl: 'http://evmtestnet.confluxrpc.com',
  nodeUrl: 'http://evm.confluxrpc.com',
  idoplatformAddr: "0x76d0Ea17B1A727F718832dc1Ba52574B0c8269aF",
};

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
};

module.exports = {
  specs,
  delay,
};
