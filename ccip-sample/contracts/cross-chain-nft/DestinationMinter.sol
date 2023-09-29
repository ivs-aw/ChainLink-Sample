// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import {CCIPReceiver} from "@chainlink/contracts-ccip/src/v0.8/ccip/applications/CCIPReceiver.sol";
import {Client} from "@chainlink/contracts-ccip/src/v0.8/ccip/libraries/Client.sol";
import {MyNFT} from "./MyNFT.sol";

/**
 * DestinationMinterコントラクト
 */
contract DestinationMinter is CCIPReceiver {
    MyNFT nft;

    event MintCallSuccessfull();

    /**
     * コンストラクター
     */
    constructor(
      address router, 
      address nftAddress
    ) CCIPReceiver(router) {
        nft = MyNFT(nftAddress);
    }

    /**
     * 受信側のコントラクトのメソッド
     */
    function _ccipReceive(
        Client.Any2EVMMessage memory message
    ) internal override {
        // dataに格納されているエンコード済みの処理内容を実行する。
        (bool success, ) = address(nft).call(message.data);
        require(success);
        emit MintCallSuccessfull();
    }
}