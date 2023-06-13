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


## 参考文献
[スターターキット](https://github.com/smartcontractkit/functions-hardhat-starter-kit)
