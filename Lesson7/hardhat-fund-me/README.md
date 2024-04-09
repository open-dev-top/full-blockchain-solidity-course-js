## Env Install

```shell
# create project folder
mkdir hardhat-fund-me
cd hardhat-fund-me

# install hardhat develop tool
yarn add --dev hardhat

# intialize a javascript project
yarn hardhat

# install a linting solidity code tool
yarn add solhint
yarn solhint --version
yarn solhint --init

# install a code formatter
yarn add --dev prettier prettier-plugin-solidity

# others install
yarn add @chainlink/contracts
```

## Contract Test
```shell
yarn solhint contracts/*.sol

yarn hardhat compile
```
