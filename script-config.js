const specs = {
  tokenOwnerKey: "0x",
  newTokenAddr: "0xa4B59aA3De2af57959C23E2c9c89a2fCB408Ce6A",
  newTokenIDOID: '1',
  amt: '2000000000000000000000000',
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
