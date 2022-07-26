const specs = {
  tokenOwnerKey: "",
  newTokenAddr: "",
  newTokenIDOID: '1',
  amt: '1000000000000000000000',
  ratioForLP: '10',

  //nodeUrl: 'http://evmtestnet.confluxrpc.com',
  nodeUrl: 'http://evm.confluxrpc.com',
  idoplatformAddr: "0x3A550fBF9b7c3bA3D1FF4B3a2DdB74dF5333b9AD",
};

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
};

module.exports = {
  specs,
  delay,
};
