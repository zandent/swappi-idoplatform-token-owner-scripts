# swappi-idoplatform-token-owner-scripts
## Steps
1. Auto Download dependent packages:
```bash
$ yarn
```
2. Replace the entry `tokenOwnerKey` in [script-config.js](script-config.js) with your private key
3. Replace the entry `amt` in [script-config.js](script-config.js) with the amount of token to trade in upcoming IDO, which should be the same as the one in your agreement with Swappi IDO Platform admin.
4. Replace the entry `ratioForLP` in [script-config.js](script-config.js) with the ratio of tokens for creating liquidity pool. E.g. if ratio is 20\%, `ratioForLP` should be `20`.
5. Run the scripts to send two transactions. First transaction is to let your new token approve IDO Platform Contract to trade your tokens. Once the transaction is confirmed, the second transaction is to let IDO Platform Contract receive the token and start IDO.
```bash
$ node ERC20Approve.js
$ node addIDOToken.js
```