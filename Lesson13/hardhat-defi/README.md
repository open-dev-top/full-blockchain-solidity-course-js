```shell
rm -rf ~/.nvm/

# installs NVM (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
# config environment path
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
# download and install Node.js
nvm install 16
nvm install 18
# verifies the right Node.js version is in the environment
node -v # should print `v16.20.2`
# verifies the right NPM version is in the environment
npm -v # should print `8.19.4`
# enable yarn
corepack enable
yarn -v # should print `1.22.22`

# initialize project
yarn add --dev hardhat@2.9.3
yarn hardhat

# install dependencies
yarn add --dev @nomiclabs/hardhat-ethers@npm:hardhat-deploy-ethers ethers @nomiclabs/hardhat-etherscan @nomiclabs/hardhat-waffle chai ethereum-waffle hardhat hardhat-contract-sizer hardhat-deploy hardhat-gas-reporter prettier prettier-plugin-solidity solhint solidity-coverage dotenv
# install dependencies (Typescript version)
yarn add --dev @nomiclabs/hardhat-ethers@npm:hardhat-deploy-ethers ethers @nomiclabs/hardhat-etherscan @nomiclabs/hardhat-waffle chai ethereum-waffle hardhat hardhat-contract-sizer hardhat-deploy hardhat-gas-reporter prettier prettier-plugin-solidity solhint solidity-coverage dotenv @typechain/ethers-v5 @typechain/hardhat @types/chai @types/node ts-node typechain typescript

# or copy example package.json
# and then use yarn install
yarn hardhat compile

yarn hardhat run scripts/aaveBorrow.js --network hardhat
```
