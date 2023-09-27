# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.ts
```

### 動かし方

- インストール

  ```bash
  yarn
  ```

- sepoliaにデプロイ(Senderコントラクトのデプロイ)

  ```bash
  yarn deploy:sepolia
  ```

  Senderコントラクトをデプロイした記録  
  0x7C7Bd8BC7cEBeb774FC2E94CA8e7f9c0a752e682

- mumbaiにデプロイ(Receiverコントラクトのデプロイ)

  ```bash
  yarn deploy:mumbai
  ```

  Receiverコントラクトをデプロイした記録    
  0xad9A067f7Ee8812F94a28FC6b5891593D631E4cc

- 実際にクロスチェーンでメッセージを送信した記録

  [0x8c56914499eee119481262ecac3c26896941022c6d4b6ef9f484cdb6fe962092](https://ccip.chain.link/msg/0x8c56914499eee119481262ecac3c26896941022c6d4b6ef9f484cdb6fe962092)

### 参考文献
1. [CCIP Getting started](https://docs.chain.link/ccip/getting-started)
2. [Hackathon resources](https://docs.chain.link/resources/hackathon-resources)
3. [【完全保存版】ChainlinkのCCIPで異なるチェーンにメッセージを送ろう！](https://note.com/standenglish/n/nebdf18ec4e57)
4. [senderのコントラクトのremix](https://remix.ethereum.org/#url=https://docs.chain.link/samples/CCIP/Sender.sol&lang=en&optimize=false&runs=200&evmVersion=null&version=soljson-v0.8.18+commit.87f61d96.js)
5. [CCIPのサポートブロックチェーンと制約](https://docs.chain.link/ccip/supported-networks)
6. [CCIP Examples](https://docs.chain.link/ccip/examples)
7. [CCIP Explorer](https://ccip.chain.link/)
8. [Cross chain NFT Sample](https://github.com/smartcontractkit/ccip-cross-chain-nft)