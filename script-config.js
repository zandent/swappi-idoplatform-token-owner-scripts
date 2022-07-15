const specs = {
  tokenOwnerKey: "",
  newTokenAddr: "",
  newTokenIDOID: '1',
  amt: '1000000000000000000',
  ratioForLP: '20',

  nodeUrl: 'http://evmtestnet.confluxrpc.com',
  // nodeUrl: 'http://evm.confluxrpc.com',
  idoplatformAddr: "0xEDE132C78dD6C88Bbc017ba2EC7a0A390a957065",
};

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
};

module.exports = {
  specs,
  delay,
};
