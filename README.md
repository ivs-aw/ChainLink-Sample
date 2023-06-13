# ChainLink-Sample
ChainLink調査用のリポジトリです。

## Automate your Functions のチュートリアル
[https://docs.chain.link/chainlink-functions/tutorials/automate-functions/](https://docs.chain.link/chainlink-functions/tutorials/automate-functions/)

## チュートリアルの日本語訳文

このチュートリアルでは、Chainlink Automationを使用してChainlink Functionsを自動化する方法を説明します。自動化は、毎日天気データを取得したり、ブロックごとに資産価格を取得するなど、同じ機能を定期的に起動させたい場合に不可欠です。

この例のステップに従う前に、APIマルチコールチュートリアルをお読みください。このチュートリアルでは、同じ例を使用しますが、重要な相違点があります：

FunctionsConsumer.solの代わりにAutomatedFunctionsConsumer.solをデプロイすることになります。AutomatedFunctionsConsumer.sol は、Chainlink Automation と互換性のある Chainlink Functions Consumer の契約です。デプロイして契約をセットアップすると、Chainlink Automationはタイムスケジュールに従って機能をトリガーします。

```
注意事項

Chainlink FunctionsはまだBETA版です。  
テスト目的にのみ割り当てられ、機密データや実際の価値を保護しないクレデンシャルをご利用ください。  
リクエストにおけるシークレットの使用は実験的な機能であり、期待通りに動作しない可能性があり、変更される可能性があります。  
この機能の使用はお客様の責任において行われ、予期せぬエラーや、新しいバージョンのリリースに伴いシークレットが明らかになる可能性、またはその他の問題が発生する可能性があります。
```

環境をテストし、すべてが正しく設定されていることを確認するために、リクエストをシミュレートしてください。npx hardhat functions-simulateコマンドを実行します。シミュレーションはローカルのHardhatネットワーク（開発用に設計されたローカルのEthereumネットワークノード）上で実行され、デフォルトのFunctions-request-config.jsファイルに定義されているリクエストを実行します。スターターキットにはトランザクションをシミュレートする機能が含まれているため、DONに送信する前にコードを素早くテストすることができます。

Chainlink Functionsのサブスクリプションを作成し、あなたの契約を承認された消費者契約として追加します。契約書のアドレスを-contractフラグで含めると、1回のトランザクションでこれを行うことができます。この例では、ムンバイのテストネットでは1LINKで十分すぎるほどです。f faucets.chain.linkからいつでもより多くのLINKを取得し、後でそれをサブスクリプションに追加することができます。詳しくは、サブスクリプション管理ページをご覧ください。

## 動かし方

```bash
cd functions-hardhat-starter-kit
```

```bash
npm i 
```

```bash
npx hardhat compile
```

```bash
npx hardhat functions-simulate
```

- `FunctionsConsumer`コントラクトのデプロイ

```bash
npx hardhat functions-deploy-client --network polygonMumbai --verify false
```

デプロイ結果

```bash
__Compiling Contracts__
Nothing to compile

Waiting 2 blocks for transaction 0x9d5811dff75efca7ddee2f61c3e0d443f5fb8c5b76c0b7f01ec934f541300a8a to be confirmed...

FunctionsConsumer contract deployed to 0xa9Bf293B85E46079665019BE17a67B8D925572f7 on polygonMumbai
```

- Configure your on-chain resources

```bash
npx hardhat functions-sub-create --network polygonMumbai --amount 5 --contract 0xa9Bf293B85E46079665019BE17a67B8D925572f7
```

## 参考文献
[スターターキット](https://github.com/smartcontractkit/functions-hardhat-starter-kit)
[Chainlink Functionsメモ](https://zenn.dev/pokena/scraps/a3aaff73a7c21d)
[]()