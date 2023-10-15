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

#### base

- sepolia にデプロイ(Sender コントラクトのデプロイ)

  ```bash
  yarn base:deploy:sepolia
  ```

  Sender コントラクトをデプロイした記録  
  0x7C7Bd8BC7cEBeb774FC2E94CA8e7f9c0a752e682

- mumbai にデプロイ(Receiver コントラクトのデプロイ)

  ```bash
  yarn base:deploy:mumbai
  ```

  Receiver コントラクトをデプロイした記録  
  0xad9A067f7Ee8812F94a28FC6b5891593D631E4cc

- 実際にクロスチェーンでメッセージを送信した記録

  ```bash
  yarn base:sendMessage
  ```

  [0x8c56914499eee119481262ecac3c26896941022c6d4b6ef9f484cdb6fe962092](https://ccip.chain.link/msg/0x8c56914499eee119481262ecac3c26896941022c6d4b6ef9f484cdb6fe962092)

- クロスチェーンで送信した結果を読みとった時のコマンド

  ```bash
  yarn base:readMessage
  ```

  ```bash
  message ID: 0x8c56914499eee119481262ecac3c26896941022c6d4b6ef9f484cdb6fe962092
  result: Hello World!
  ```

#### クロスチェーン NFT

- NFT コントラクトの発行(mumbai)

  ```bash
  yarn cross-chain-nft:deploy_nft:mumbai
  ```

  実行結果

  ```bash
  deployed to 0x1ad7fce32EdB9A1b4bd7E250Fd90e03cD74cDe06
  ✨  Done in 12.26s.
  ```

- NFT コントラクトの owner 権限を DestinationMinter コントラクトに移譲するためのコマンド(mumbai 側)

  ```bash
  yarn cross-chain-nft:transfer_ownership:mumbai
  ```

- Receiver 側のコントラクトのデプロイ(mumbai)

  ```bash
  yarn cross-chain-nft:deploy:mumbai
  ```

  実行結果

  ```bash
  deployed to 0x822e253e3c239350799810E388DC45F371754CE1
  ✨  Done in 9.38s.
  ```

- Sender 側のコントラクトのデプロイ(sepolia)

  ```bash
  yarn cross-chain-nft:deploy:sepolia
  ```

  実行結果

  ```bash
  deployed to 0x207026A0c9E2715A6deC09b79bdEb0822bF735C6
  ✨  Done in 10.06s.
  ```

- sender 側のコントラクトのデプロイ(fuji)

  ```bash
  yarn cross-chain-nft:deploy:fuji
  ```

  実行結果

  ```bash
  Compiled 33 Solidity files successfully
  deployed to 0xc70dC86cd3B55f745A2e5C11F38B50D939986f1d
  ✨  Done in 10.02s.
  ```

- NFT を sepolia 側から発行するためのスクリプト実行

  ```bash
  yarn cross-chain-nft:mint_nft:sepolia
  ```

  実行結果

  ```bash
  result: 0x281812090f537b7e10e083633dcc330c12df597cfa9a42301f8bb7dedcb37167
  ✨  Done in 15.27s.
  ```

  CCIP エクスプローラー上での記録  
  [0x281812090f537b7e10e083633dcc330c12df597cfa9a42301f8bb7dedcb37167](https://ccip.chain.link/msg/0x91cdfe9fc3136c3000ee39033e5164bdd07a9cbc358a625508856aa77c3466df)

- NFT を fuji 側から発行するためのスクリプト実行

  ```bash
  yarn cross-chain-nft:mint_nft:fuji
  ```

  実行結果

  ```bash
  result: 0x748fb07a3808226d98e5f951d9ae04d89ee9ccf1e709d90bfb10dd93607a268e
  ✨  Done in 9.65s.
  ```

  CCIP エクスプローラー上での記録  
  [0x748fb07a3808226d98e5f951d9ae04d89ee9ccf1e709d90bfb10dd93607a268e](https://ccip.chain.link/msg/0x748fb07a3808226d98e5f951d9ae04d89ee9ccf1e709d90bfb10dd93607a268e)

- NFT の残高情報を取得するスクリプトを実行

  ```bash
  yarn cross-chain-nft:balanceOf_nft:mumbai
  ```

  実行結果

  ```bash
  balanceOf: 0
  ✨  Done in 3.27s.
  ```

### 参考文献

1. [CCIP Getting started](https://docs.chain.link/ccip/getting-started)
2. [Hackathon resources](https://docs.chain.link/resources/hackathon-resources)
3. [【完全保存版】Chainlink の CCIP で異なるチェーンにメッセージを送ろう！](https://note.com/standenglish/n/nebdf18ec4e57)
4. [sender のコントラクトの remix](https://remix.ethereum.org/#url=https://docs.chain.link/samples/CCIP/Sender.sol&lang=en&optimize=false&runs=200&evmVersion=null&version=soljson-v0.8.18+commit.87f61d96.js)
5. [CCIP のサポートブロックチェーンと制約](https://docs.chain.link/ccip/supported-networks)
6. [CCIP Examples](https://docs.chain.link/ccip/examples)
7. [CCIP Explorer](https://ccip.chain.link/)
8. [Cross chain NFT Sample](https://github.com/smartcontractkit/ccip-cross-chain-nft)
