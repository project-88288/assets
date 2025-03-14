# Assets

This repository contains contract addresses for many different use-cases.

## Layout

```
assets
│
└───cw20
│   │   contracts.js # Generic smart contracts on Terra.
│   │   pairs.js # Terraswap pairs used mostly by Terra Station.
│   │   tokens.js # Individual cw20 tokens.
│
└───cw721
│   │   contracts.js # NFTs collections for display in Station.
│   │   marketplace.js # List of open NFT marketplaces on Terra.
│
└───ibc
    │   tokens.js # Tokens bridged to Terra through IBC.
```
# url
```
./
|_./chains.json # https://dev.opzlabs.com/assets/chains.json
|_./contracts.json # https://dev.opzlabs.com/assets/contracts.json
|_./extensions.json # https://dev.opzlabs.com/assets/extensions.json
|_./interchain-extensions.json # https://dev.opzlabs.com/assets/interchain-extensions.json
|_./validators.json # https://dev.opzlabs.com/assets/validators.json

./station/
|
|___/station/extension/1.21.2.zip # https://dev.opzlabs.com/assets/station/extension/1.21.2.zip
|___/station/chains.json # https://dev.opzlabs.com/assets/station/chains.json
|___/station/coins.json # https://dev.opzlabs.com/assets/station/coins.json
|___/station/coingecko.json # https://dev.opzlabs.com/assets/station/coingecko.json
|___/station/maintenance.json # https://dev.opzlabs.com/assets/station/maintenance.json
|___/station/proposals.json # https://dev.opzlabs.com/assets/station/proposals.json
|___/station/tfm.json # https://dev.opzlabs.com/assets/station/tfm.json
|___/station/version.json # https://dev.opzlabs.com/assets/station/version.json
|___/station/mobile/version.json # https://dev.opzlabs.com/assets/station/mobile/version.json

```

There are other lists that are used less often so I've left them out of this walkthrough.

## Process for adding a new contract or chain

1. Fork this repository so you can make changes.
1. Make the desired changes in your own fork, then create a pull request for the changes.
1. Make sure to include a trailing comma on the item you are adding. This helps prevent merge conflicts in the future.
1. Please add your contract to the end of the list for the correct network (mainnet or testnet). The build process will sort the list alphabetically by either protocol name, or name depending on the list.

## Adding a new chain to Station

Follow the general process outlined above. Example commit [here](https://github.com/terra-money/assets/commit/afb85eadf2dee0bfc562adae4777270e71962808).

1. Add your chain to `station/chains.js`. Follow the exact format of the chains and add it to the appropriate network (`mainnet` or `testnet`).
2. Add your chain name and chain ID to the `chains` object in `station/coins.js`. 
3. Add your base asset to the exported object following the same format as other added tokens. 
4. (Optional) Add two IBC token entries. One for `Luna` on your chain and one for your native asset on Terra.

