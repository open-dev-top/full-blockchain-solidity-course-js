# The most imortant lesson in this course!

If you learn this, you have the skills to learn all the rest of these smart contract concepts, and you are going to be able to do great things in this space.

## Install Env

```shell
# installs NVM (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
# config path
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
# download and install Node.js
nvm install 18
# verifies the right Node.js version is in the environment
node -v # should print `v18.20.2`
# verifies the right NPM version is in the environment
npm -v # should print `10.5.0`
# enable yarn
corepack enable
yarn -v # should print `1.22.22`
```

## Install Tool

```shell
yarn add --dev hardhat@2.9.3

yarn hardhat
#> Create an empty hardhat.config.js

yarn add --dev @nomiclabs/hardhat-ethers@npm:hardhat-deploy-ethers ethers @nomiclabs/hardhat-etherscan @nomiclabs/hardhat-waffle chai ethereum-waffle hardhat hardhat-contract-sizer hardhat-deploy hardhat-gas-reporter prettier prettier-plugin-solidity solhint solidity-coverage dotenv
# or
yarn install #> recommend

yarn add --dev @chainlink/contracts

yarn global add hardhat-shorthand
hardhat-completion install
```

## Test

```shell
yarn hardhat compile

hh compile


```
