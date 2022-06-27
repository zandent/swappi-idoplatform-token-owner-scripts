const Web3 = require('web3');
const { BigNumber } = require("@ethersproject/bignumber");
const config = require('./script-config.js');
const specs = config.specs;
const w3 = new Web3(specs.nodeUrl);

let idoplatformContract = require(`./abi_files/idoplatform.json`);
idoplatformContract.instance = new w3.eth.Contract(idoplatformContract.abi);
idoplatformContract.instance.options.address = specs.idoplatformAddr;
let newTokenContract = require(`./abi_files/IERC20.json`);
newTokenContract.instance = new w3.eth.Contract(newTokenContract.abi);
newTokenContract.instance.options.address = specs.newTokenAddr;

let amt = specs.amt;
let ratioForLP = specs.ratioForLP;
let amtIncludingLP = (BigNumber.from(amt).mul(100+ratioForLP).div(100)).toHexString();// amt * (1+ratioForLP%)
async function ethTransact(data, to = undefined, nonce, value = 0) {
  let gasPrice = BigNumber.from(await w3.eth.getGasPrice());
  gasPrice = gasPrice.mul(110).div(100).toString();
  let txParams = {
    from: tokenOwner,
    to: to,
    nonce: w3.utils.toHex(nonce),
    value: w3.utils.toHex(value),
    gasPrice: gasPrice,
    data: data,
  };
  txParams.gas = BigNumber.from(await w3.eth.estimateGas(txParams))
    .mul(101).div(100).toString();
  //if (txParams.gas.isLessThan(500000)) txParams.gas = new BigNumber(500000);
  let encodedTransaction = await w3.eth.accounts.signTransaction(
    txParams,
    specs.tokenOwnerKey,
  );
  let rawTransaction = encodedTransaction.rawTransaction;
  let receipt = await w3.eth.sendSignedTransaction(rawTransaction);
  if (!receipt.status) throw new Error(`transaction failed`);
  return receipt;
}
async function run() {
  tokenOwner = w3.eth.accounts.privateKeyToAccount(specs.tokenOwnerKey).address;
  let nonce = await w3.eth.getTransactionCount(tokenOwner);
  data = newTokenContract.instance.methods
    .approve(idoplatformContract.instance.options.address, amtIncludingLP)
    .encodeABI();
  await ethTransact(data, newTokenContract.instance.options.address, nonce);
}

run();