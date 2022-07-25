const specs = {
  tokenOwnerKey: "",
  newTokenAddr: "",
  newTokenIDOID: '1',
  amt: '1000000000000000000',
  ratioForLP: '20',

  //nodeUrl: 'http://evmtestnet.confluxrpc.com',
  nodeUrl: 'http://evm.confluxrpc.com',
  idoplatformAddr: "0x335d47152586f16c1b6eb6cd3bcffb8b07abf08e",
};

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
};

module.exports = {
  specs,
  delay,
};
