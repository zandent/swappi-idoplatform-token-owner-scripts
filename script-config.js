const specs = {
  tokenOwnerKey: "",
  newTokenAddr: "0xbA70Fc92E65d7bE07799c646c2BA4e9647bCba01",
  newTokenIDOID: '1',
  amt: '50000000000000000000000000',
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
