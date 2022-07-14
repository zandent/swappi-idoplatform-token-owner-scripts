const specs = {
  tokenOwnerKey: "0x03e8ab6a6405baa5ebd9cc185f2a1b65623c6ee3e734716ba01021f08f0ba4b2",
  newTokenAddr: "0x8948D8A8A044d37bD58d04b623CF24Dd51F13B4e",
  newTokenIDOID: '1',
  amt: '1000000000000000000',
  ratioForLP: '20',

  nodeUrl: 'http://evmtestnet.confluxrpc.com',
  // nodeUrl: 'http://evm.confluxrpc.com',
  idoplatformAddr: "0x4274C1A1781d36888993948859ba335d8f3d6694",
};

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
};

module.exports = {
  specs,
  delay,
};
