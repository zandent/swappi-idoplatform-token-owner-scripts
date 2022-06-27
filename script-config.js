const specs = {
  tokenOwnerKey: "0xDEADBEAFDEADBEEFDEADBEEFDEADBEEFDEADBEEFDEADBEEFDEADBEEFDEADBEEF",
  newTokenAddr: "0x1234123412341234123412341234123412341234",
  amt: '1000000000000000000',
  ratioForLP: '20',

  nodeUrl: 'http://evmtestnet.confluxrpc.com',
  // nodeUrl: 'http://evm.confluxrpc.com',
  idoplatformAddr: "0xbd990180bf0a276c981bd698fd1418d81ff28c61",
};

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
};

module.exports = {
  specs,
  delay,
};
